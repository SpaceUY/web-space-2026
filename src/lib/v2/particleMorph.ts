/**
 * Particle field that assembles into a shape and re-forms into another on
 * demand (brand v2 services). Three.js renders a single Points object with a
 * small shader for soft round dots; positions are interpolated on the CPU,
 * each particle with its own delay and an outward "burst" mid-flight, so a
 * change of shape reads as the cloud coming apart and rebuilding.
 */
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from "three";
import { buildScatter, buildShape, type ShapeId } from "./particleShapes";

const PALETTE = ["#c8b5ff", "#8e6eec", "#e4dbff", "#ffffff", "#ac93f2"];

const vertexShader = /* glsl */ `
  attribute float aSize;
  attribute vec3 aColor;
  uniform float uPixelRatio;
  uniform float uTime;
  varying vec3 vColor;
  varying float vTwinkle;
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = aSize * uPixelRatio * (8.0 / -mvPosition.z);
    vColor = aColor;
    vTwinkle = 0.75 + 0.25 * sin(uTime * 1.6 + position.x * 7.0 + position.y * 5.0);
  }
`;

const fragmentShader = /* glsl */ `
  varying vec3 vColor;
  varying float vTwinkle;
  void main() {
    float distanceToCentre = length(gl_PointCoord - vec2(0.5));
    float alpha = smoothstep(0.5, 0.0, distanceToCentre);
    gl_FragColor = vec4(vColor, alpha * 0.85 * vTwinkle);
  }
`;

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

export interface ParticleMorphOptions {
  shapes: ShapeId[];
  count?: number;
  reducedMotion?: boolean;
}

export class ParticleMorph {
  private renderer: WebGLRenderer;
  private scene = new Scene();
  private camera = new PerspectiveCamera(40, 1, 0.1, 100);
  private points: Points;
  private material: ShaderMaterial;
  private positions: Float32Array;
  private from: Float32Array;
  private targets: Float32Array[];
  private delays: Float32Array;
  private bursts: Float32Array;
  private count: number;
  private reduced: boolean;
  private current = -1;
  private morphStart = 0;
  private readonly duration = 1600;
  private pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  private running = false;
  private frame = 0;

  constructor(private canvas: HTMLCanvasElement, options: ParticleMorphOptions) {
    this.count = options.count ?? 3600;
    this.reduced = options.reducedMotion ?? false;
    this.renderer = new WebGLRenderer({ canvas, alpha: true, antialias: false, powerPreference: "low-power" });
    this.renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    this.camera.position.set(0, 0, 9);

    this.targets = options.shapes.map((shape) => buildShape(shape, this.count));
    this.positions = buildScatter(this.count);
    this.from = this.positions.slice();
    this.delays = new Float32Array(this.count);
    this.bursts = new Float32Array(this.count * 3);
    const sizes = new Float32Array(this.count);
    const colors = new Float32Array(this.count * 3);
    const color = new Color();
    for (let i = 0; i < this.count; i += 1) {
      this.delays[i] = Math.random() * 0.35;
      sizes[i] = 2.2 + Math.random() * 3.2;
      color.set(PALETTE[Math.floor(Math.random() * PALETTE.length)]);
      colors.set([color.r, color.g, color.b], i * 3);
      const angle = Math.random() * Math.PI * 2;
      const lift = Math.random() * 2 - 1;
      this.bursts.set([Math.cos(angle) * 1.4, Math.sin(angle) * 1.4, lift * 1.2], i * 3);
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new BufferAttribute(this.positions, 3));
    geometry.setAttribute("aSize", new BufferAttribute(sizes, 1));
    geometry.setAttribute("aColor", new BufferAttribute(colors, 3));
    this.material = new ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: { uPixelRatio: { value: this.renderer.getPixelRatio() }, uTime: { value: 0 } },
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
    });
    this.points = new Points(geometry, this.material);
    this.scene.add(this.points);

    this.resize();
    window.addEventListener("resize", this.resize);
    canvas.addEventListener("pointermove", this.onPointer);
    canvas.addEventListener("pointerleave", this.onPointerLeave);
  }

  /** Assemble into the shape at `index` (from wherever the particles are now). */
  show(index: number): void {
    if (index === this.current || !this.targets[index]) return;
    this.current = index;
    if (this.reduced) {
      this.positions.set(this.targets[index]);
      this.from.set(this.targets[index]);
      this.markDirty();
      this.render(performance.now());
      return;
    }
    this.from.set(this.positions);
    this.morphStart = performance.now();
  }

  start(): void {
    if (this.running) return;
    this.running = true;
    const loop = (now: number) => {
      if (!this.running) return;
      this.update(now);
      this.render(now);
      this.frame = requestAnimationFrame(loop);
    };
    this.frame = requestAnimationFrame(loop);
  }

  stop(): void {
    this.running = false;
    cancelAnimationFrame(this.frame);
  }

  dispose(): void {
    this.stop();
    window.removeEventListener("resize", this.resize);
    this.canvas.removeEventListener("pointermove", this.onPointer);
    this.canvas.removeEventListener("pointerleave", this.onPointerLeave);
    this.points.geometry.dispose();
    this.material.dispose();
    this.renderer.dispose();
  }

  private update(now: number): void {
    const target = this.targets[this.current];
    if (target) {
      const elapsed = (now - this.morphStart) / this.duration;
      if (elapsed < 1.4) {
        for (let i = 0; i < this.count; i += 1) {
          const local = Math.min(1, Math.max(0, (elapsed - this.delays[i]) / (1 - 0.35)));
          const eased = easeInOutCubic(local);
          const burst = Math.sin(local * Math.PI) * 0.9;
          for (let axis = 0; axis < 3; axis += 1) {
            const k = i * 3 + axis;
            this.positions[k] = this.from[k] + (target[k] - this.from[k]) * eased + this.bursts[k] * burst;
          }
        }
        this.markDirty();
      }
    }
    this.pointer.x += (this.pointer.tx - this.pointer.x) * 0.05;
    this.pointer.y += (this.pointer.ty - this.pointer.y) * 0.05;
    const drift = this.reduced ? 0 : Math.sin(now * 0.00025) * 0.35;
    this.points.rotation.y = drift + this.pointer.x * 0.45;
    this.points.rotation.x = -this.pointer.y * 0.25;
    this.material.uniforms.uTime.value = now / 1000;
  }

  private render(_now: number): void {
    this.renderer.render(this.scene, this.camera);
  }

  private markDirty(): void {
    (this.points.geometry.getAttribute("position") as BufferAttribute).needsUpdate = true;
  }

  private resize = (): void => {
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    if (!width || !height) return;
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.render(performance.now());
  };

  private onPointer = (event: PointerEvent): void => {
    const rect = this.canvas.getBoundingClientRect();
    this.pointer.tx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    this.pointer.ty = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  };

  private onPointerLeave = (): void => {
    this.pointer.tx = 0;
    this.pointer.ty = 0;
  };
}
