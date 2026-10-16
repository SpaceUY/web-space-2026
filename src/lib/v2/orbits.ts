/**
 * Orbital scenes for the brand v2 services (canvas 2D, no library), in a
 * restrained line style: 1px orbits in violet, fainter on the far side and
 * stronger on the near side, small nodes, and one accent node per scene that
 * leaves a thin comet tail. Nothing is filled except the nodes. Each service
 * is told by composition alone:
 * - chain:   blocks on one orbit, linked edge to edge;
 * - devices: two orbits whose nodes move in step, joined by a live link;
 * - team:    a crew in formation and one more closing in from outside;
 * - radar:   rings, a sweep and signals that ping as it passes;
 * - shield:  a segmented ring a scanner verifies piece by piece.
 * Switching service cross-fades the old scene into the new one.
 */

export type OrbitId = "chain" | "devices" | "team" | "radar" | "shield";

const TAU = Math.PI * 2;
const SQUASH = 0.4;
const ink = (alpha: number) => `rgba(91, 55, 198, ${alpha})`;
const ACCENT = "#8e6eec";
const CORE = "#3b1b99";
const TEXT = "#787472";

type Point = [number, number, number];

interface Frame {
  g: CanvasRenderingContext2D;
  t: number;
  r: number;
}

const easeOut = (x: number) => 1 - (1 - Math.min(1, Math.max(0, x))) ** 3;

/** Orbit drawn in short segments, fainter behind and stronger in front. */
function orbit(g: CanvasRenderingContext2D, rx: number, ry: number): void {
  const steps = 96;
  g.lineWidth = 1;
  for (let i = 0; i < steps; i += 1) {
    const a0 = (i / steps) * TAU;
    const a1 = ((i + 1) / steps) * TAU;
    const depth = (Math.sin((a0 + a1) / 2) + 1) / 2;
    g.strokeStyle = ink(0.1 + 0.35 * depth);
    g.beginPath();
    g.moveTo(Math.cos(a0) * rx, Math.sin(a0) * ry);
    g.lineTo(Math.cos(a1) * rx, Math.sin(a1) * ry);
    g.stroke();
  }
}

/** Position on an orbit plus its depth (0 far side, 1 near side). */
function at(rx: number, ry: number, angle: number): Point {
  return [Math.cos(angle) * rx, Math.sin(angle) * ry, (Math.sin(angle) + 1) / 2];
}

/** Thin comet tail behind something travelling along an orbit. */
function tail(g: CanvasRenderingContext2D, rx: number, ry: number, angle: number, length: number): void {
  const steps = 24;
  for (let i = 0; i < steps; i += 1) {
    const b0 = angle - (length * i) / steps;
    const b1 = angle - (length * (i + 1)) / steps;
    g.strokeStyle = ink(0.55 * (1 - i / steps));
    g.lineWidth = 1.5 * (1 - i / steps) + 0.3;
    g.beginPath();
    g.moveTo(Math.cos(b0) * rx, Math.sin(b0) * ry);
    g.lineTo(Math.cos(b1) * rx, Math.sin(b1) * ry);
    g.stroke();
  }
}

function node(g: CanvasRenderingContext2D, [x, y, depth]: Point, radius: number, accent = false): void {
  g.fillStyle = accent ? ACCENT : ink(0.35 + 0.65 * depth);
  g.beginPath();
  g.arc(x, y, radius * (0.7 + 0.5 * depth), 0, TAU);
  g.fill();
  if (!accent) return;
  const halo = g.createRadialGradient(x, y, 0, x, y, 14);
  halo.addColorStop(0, "rgba(142, 110, 236, 0.35)");
  halo.addColorStop(1, "rgba(142, 110, 236, 0)");
  g.fillStyle = halo;
  g.beginPath();
  g.arc(x, y, 14, 0, TAU);
  g.fill();
}

function core(g: CanvasRenderingContext2D, t: number): void {
  g.fillStyle = CORE;
  g.beginPath();
  g.arc(0, 0, 3.5, 0, TAU);
  g.fill();
  g.strokeStyle = ink(0.18);
  g.lineWidth = 1;
  g.beginPath();
  g.arc(0, 0, 10 + 2 * Math.sin(t * 1.5), 0, TAU);
  g.stroke();
}

function chain({ g, t, r }: Frame): void {
  const rx = r;
  const ry = r * SQUASH;
  orbit(g, rx, ry);
  core(g, t);
  const count = 7;
  const spin = t * 0.25;
  const blocks = Array.from({ length: count }, (_, i) => at(rx, ry, spin + (i / count) * TAU));
  g.lineWidth = 1;
  blocks.forEach((a, i) => {
    const b = blocks[(i + 1) % count];
    g.strokeStyle = ink(0.15 + 0.35 * ((a[2] + b[2]) / 2));
    g.beginPath();
    g.moveTo(a[0], a[1]);
    g.lineTo(b[0], b[1]);
    g.stroke();
  });
  blocks.forEach(([x, y, depth]) => {
    const size = 4 + 3 * depth;
    g.fillStyle = ink(0.35 + 0.65 * depth);
    g.fillRect(x - size / 2, y - size / 2, size, size);
  });
}

function devices({ g, t, r }: Frame): void {
  const inner = r * 0.55;
  const outer = r * 1.05;
  orbit(g, inner, inner * SQUASH);
  orbit(g, outer, outer * SQUASH);
  core(g, t);
  const angle = t * 0.45;
  const a = at(inner, inner * SQUASH, angle);
  const b = at(outer, outer * SQUASH, angle);
  g.strokeStyle = ink(0.35);
  g.lineWidth = 1;
  g.setLineDash([2, 4]);
  g.lineDashOffset = -t * 14;
  g.beginPath();
  g.moveTo(a[0], a[1]);
  g.lineTo(b[0], b[1]);
  g.stroke();
  g.setLineDash([]);
  tail(g, inner, inner * SQUASH, angle, 0.9);
  tail(g, outer, outer * SQUASH, angle, 0.9);
  node(g, a, 3.5);
  node(g, b, 4, true);
}

function team({ g, t, r }: Frame): void {
  const crewOrbit = r * 0.8;
  const outer = r * 1.12;
  orbit(g, crewOrbit, crewOrbit * SQUASH);
  orbit(g, outer, outer * SQUASH);
  core(g, t);
  const angle = t * 0.3;
  for (let k = 0; k < 5; k += 1) node(g, at(crewOrbit, crewOrbit * SQUASH, angle + k * 0.22), 3.2);
  const phase = (t * 0.18) % 1;
  const radius = r * (1.12 - 0.32 * Math.min(1, phase * 1.3));
  const joining = angle + 1.35 + phase * 0.6;
  tail(g, radius, radius * SQUASH, joining, 0.7);
  node(g, at(radius, radius * SQUASH, joining), 4, true);
}

function radar({ g, t, r }: Frame): void {
  [0.38, 0.7, 1.02].forEach((k) => orbit(g, r * k, r * k * SQUASH));
  core(g, t);
  const sweep = (t * 0.8) % TAU;
  g.save();
  g.scale(1, SQUASH);
  const wedge = g.createRadialGradient(0, 0, 0, 0, 0, r * 1.02);
  wedge.addColorStop(0, "rgba(142, 110, 236, 0.22)");
  wedge.addColorStop(1, "rgba(142, 110, 236, 0)");
  g.fillStyle = wedge;
  g.beginPath();
  g.moveTo(0, 0);
  g.arc(0, 0, r * 1.02, sweep - 0.8, sweep);
  g.closePath();
  g.fill();
  g.strokeStyle = ink(0.6);
  g.lineWidth = 1;
  g.beginPath();
  g.moveTo(0, 0);
  g.lineTo(Math.cos(sweep) * r * 1.02, Math.sin(sweep) * r * 1.02);
  g.stroke();
  g.restore();
  const signals: Array<[number, number]> = [[0.7, 0.6], [0.38, 2.3], [1.02, 3.7], [0.7, 5.0]];
  signals.forEach(([k, angle]) => {
    const since = (((sweep - angle) % TAU) + TAU) % TAU;
    const glow = Math.max(0, 1 - since / 2.2);
    const x = Math.cos(angle) * r * k;
    const y = Math.sin(angle) * r * k * SQUASH;
    g.fillStyle = ink(0.25 + 0.75 * glow);
    g.beginPath();
    g.arc(x, y, 2.5 + glow * 1.5, 0, TAU);
    g.fill();
    if (glow > 0.02) {
      const ping = 4 + (1 - glow) * 16;
      g.strokeStyle = ink(0.5 * glow);
      g.beginPath();
      g.ellipse(x, y, ping, ping * SQUASH, 0, 0, TAU);
      g.stroke();
    }
  });
}

function shield({ g, t, r }: Frame): void {
  const rx = r;
  const ry = r * SQUASH;
  const segments = 28;
  const cycle = (t * 0.12) % 1.25;
  const done = Math.min(1, cycle);
  core(g, t);
  for (let i = 0; i < segments; i += 1) {
    const a0 = (i / segments) * TAU - Math.PI / 2 + 0.04;
    const a1 = a0 + TAU / segments - 0.08;
    const depth = (Math.sin((a0 + a1) / 2) + 1) / 2;
    const lit = i / segments < done;
    g.strokeStyle = lit ? ink(0.45 + 0.5 * depth) : ink(0.1 + 0.2 * depth);
    g.lineWidth = lit ? 2 : 1;
    g.beginPath();
    g.ellipse(0, 0, rx, ry, 0, a0, a1);
    g.stroke();
  }
  if (cycle < 1) {
    const angle = done * TAU - Math.PI / 2;
    tail(g, rx, ry, angle, 0.6);
    node(g, at(rx, ry, angle), 4, true);
  }
}

const SCENES: Record<OrbitId, { draw: (frame: Frame) => void; telemetry: (t: number) => string }> = {
  chain: { draw: chain, telemetry: () => "BLOCKS 7  /  LINKED" },
  devices: { draw: devices, telemetry: () => "WEB + MOBILE  /  IN SYNC" },
  team: { draw: team, telemetry: () => "CREW 5 + 1  /  JOINING" },
  radar: { draw: radar, telemetry: () => "SCAN  /  4 SIGNALS" },
  shield: { draw: shield, telemetry: (t) => ((t * 0.12) % 1.25 < 1 ? "AUDIT  /  SCANNING" : "AUDIT  /  VERIFIED") },
};

export class OrbitScene {
  private g: CanvasRenderingContext2D;
  private current = -1;
  private previous = -1;
  private switchedAt = 0;
  private running = false;
  private raf = 0;
  private width = 0;
  private height = 0;

  constructor(private canvas: HTMLCanvasElement, private ids: OrbitId[], private reduced = false) {
    this.g = canvas.getContext("2d")!;
    this.resize();
    window.addEventListener("resize", this.resize);
  }

  show(index: number): void {
    if (index === this.current) return;
    this.previous = this.current;
    this.current = index;
    this.switchedAt = performance.now();
    if (!this.running) this.paint(performance.now());
  }

  start(): void {
    if (this.running || this.reduced) {
      this.paint(performance.now());
      return;
    }
    this.running = true;
    const loop = (now: number) => {
      if (!this.running) return;
      this.paint(now);
      this.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  }

  stop(): void {
    this.running = false;
    cancelAnimationFrame(this.raf);
  }

  private resize = (): void => {
    const ratio = Math.min(2, window.devicePixelRatio || 1);
    this.width = this.canvas.clientWidth;
    this.height = this.canvas.clientHeight || this.width;
    this.canvas.width = Math.round(this.width * ratio);
    this.canvas.height = Math.round(this.height * ratio);
    this.g.setTransform(ratio, 0, 0, ratio, 0, 0);
    this.paint(performance.now());
  };

  private paint(now: number): void {
    const { g, width, height } = this;
    if (!width || !height) return;
    const t = this.reduced ? 4 : now / 1000;
    const since = this.reduced ? 10 : (now - this.switchedAt) / 1000;
    const fade = easeOut(since / 0.5);
    g.clearRect(0, 0, width, height);
    const r = Math.min(width * 0.36, height * 0.62);
    const scene = (index: number, alpha: number) => {
      const id = this.ids[index];
      if (!id || alpha <= 0) return;
      g.save();
      g.globalAlpha = alpha;
      g.translate(width / 2, height / 2);
      SCENES[id].draw({ g, t, r });
      g.restore();
    };
    if (this.previous >= 0 && fade < 1) scene(this.previous, 1 - fade);
    scene(this.current, fade);

    const id = this.ids[this.current];
    if (id) {
      g.save();
      g.globalAlpha = fade;
      g.fillStyle = TEXT;
      g.font = '600 11px "Open Sans", Arial, sans-serif';
      g.letterSpacing = "1.5px";
      g.fillText(SCENES[id].telemetry(t), 20, height - 18);
      g.restore();
    }
  }
}
