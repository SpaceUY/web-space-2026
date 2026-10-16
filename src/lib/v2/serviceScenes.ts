/**
 * Service scenes for brand v2, in the same language as the dot sphere hero:
 * figures built from small lilac dots on the SpaceDev gradient, turning in
 * 3D, where some dots now and then light up and join with thin lines.
 * Canvas 2D, no library. Each service has its own figure:
 * - chain:   three cubes of dots on a line; one block lights up at a time
 *            and a pulse travels along the links between them;
 * - devices: a browser window and a phone in dots, with bright packets
 *            flying from the phone to the browser;
 * - team:    small spheres of dots (people) joined in a network; a path
 *            across the network lights up now and then;
 * - radar:   a disc of dot rings seen at an angle with a sweep that makes
 *            the dots it passes glow and signals ping;
 * - shield:  a shield in dots scanned top to bottom; once scanned, its
 *            check mark lights up as a short constellation.
 */

export type ServiceSceneId = "chain" | "devices" | "team" | "radar" | "shield";

type Vec = [number, number, number];
interface Dot {
  p: Vec;
  /** Free tag each scene uses to decide which dots light up. */
  tag: number;
}

const TAU = Math.PI * 2;
const DOT = "228, 219, 255";

function line(a: Vec, b: Vec, spacing: number, tag: number, out: Dot[]): void {
  const length = Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
  const steps = Math.max(1, Math.round(length / spacing));
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    out.push({ p: [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t], tag });
  }
}

function rect(cx: number, cy: number, z: number, w: number, h: number, spacing: number, tag: number, out: Dot[]): void {
  const x0 = cx - w / 2;
  const x1 = cx + w / 2;
  const y0 = cy - h / 2;
  const y1 = cy + h / 2;
  line([x0, y0, z], [x1, y0, z], spacing, tag, out);
  line([x1, y0, z], [x1, y1, z], spacing, tag, out);
  line([x1, y1, z], [x0, y1, z], spacing, tag, out);
  line([x0, y1, z], [x0, y0, z], spacing, tag, out);
}

function sphere(center: Vec, radius: number, count: number, tag: number, out: Dot[]): void {
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i += 1) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const a = golden * i;
    out.push({ p: [center[0] + Math.cos(a) * r * radius, center[1] + y * radius, center[2] + Math.sin(a) * r * radius], tag });
  }
}

/* ── Figures (unit space, roughly -2.4..2.4 wide) ─────────────────────── */

const CUBES = [-1.65, 0, 1.65];

function buildChain(): Dot[] {
  const out: Dot[] = [];
  const h = 0.5;
  const corners: Vec[] = [
    [-h, -h, -h], [h, -h, -h], [h, h, -h], [-h, h, -h],
    [-h, -h, h], [h, -h, h], [h, h, h], [-h, h, h],
  ];
  const edges = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
  CUBES.forEach((offset, cube) => {
    edges.forEach(([a, b]) => {
      const A = corners[a];
      const B = corners[b];
      line([A[0] + offset, A[1], A[2]], [B[0] + offset, B[1], B[2]], 0.1, cube, out);
    });
  });
  line([CUBES[0] + h, 0, 0], [CUBES[1] - h, 0, 0], 0.09, 10, out);
  line([CUBES[1] + h, 0, 0], [CUBES[2] - h, 0, 0], 0.09, 11, out);
  return out;
}

function buildDevices(): Dot[] {
  const out: Dot[] = [];
  rect(-0.45, 0.1, 0, 2.8, 1.8, 0.08, 0, out);
  line([-1.85, 0.72, 0], [0.95, 0.72, 0], 0.08, 0, out);
  [-1.7, -1.58, -1.46].forEach((x) => out.push({ p: [x, 0.86, 0], tag: 0 }));
  line([-1.6, 0.4, 0], [0.4, 0.4, 0], 0.08, 0, out);
  line([-1.6, 0.15, 0], [-0.2, 0.15, 0], 0.08, 0, out);
  rect(-1.0, -0.45, 0, 1.1, 0.65, 0.08, 0, out);
  rect(0.2, -0.45, 0, 0.9, 0.65, 0.08, 0, out);
  rect(1.45, -0.25, 0.7, 0.78, 1.45, 0.07, 1, out);
  line([1.25, 0.32, 0.7], [1.65, 0.32, 0.7], 0.07, 1, out);
  line([1.25, -0.05, 0.7], [1.65, -0.05, 0.7], 0.07, 1, out);
  line([1.25, -0.3, 0.7], [1.55, -0.3, 0.7], 0.07, 1, out);
  return out;
}

const NODES: Vec[] = [[0, 0, 0]];
for (let i = 0; i < 6; i += 1) {
  const a = (i / 6) * TAU + 0.4;
  NODES.push([Math.cos(a) * 1.6, Math.sin(a * 2) * 0.35, Math.sin(a) * 1.6]);
}
const LINKS: Array<[number, number]> = [];
for (let i = 1; i < NODES.length; i += 1) {
  LINKS.push([0, i]);
  LINKS.push([i, i === NODES.length - 1 ? 1 : i + 1]);
}

function buildTeam(): Dot[] {
  const out: Dot[] = [];
  NODES.forEach((node, i) => sphere(node, i === 0 ? 0.34 : 0.25, i === 0 ? 70 : 46, 100 + i, out));
  LINKS.forEach(([a, b], i) => line(NODES[a], NODES[b], 0.13, 200 + i, out));
  return out;
}

function buildRadar(): Dot[] {
  const out: Dot[] = [];
  for (let r = 0.3; r <= 2.31; r += 0.2) {
    const count = Math.round((TAU * r) / 0.085);
    for (let k = 0; k < count; k += 1) {
      const a = (k / count) * TAU;
      out.push({ p: [Math.cos(a) * r, 0, Math.sin(a) * r], tag: Math.round(a * 1000) });
    }
  }
  return out;
}

const SHIELD_CHECK: Vec[] = [[-0.5, -0.05, 0.16], [-0.1, -0.45, 0.16], [0.6, 0.45, 0.16]];

function buildShield(): Dot[] {
  const out: Dot[] = [];
  const bez = (a: number[], b: number[], c: number[], t: number) => [
    (1 - t) ** 2 * a[0] + 2 * (1 - t) * t * b[0] + t * t * c[0],
    (1 - t) ** 2 * a[1] + 2 * (1 - t) * t * b[1] + t * t * c[1],
  ];
  const outline: number[][] = [];
  for (let i = 0; i <= 30; i += 1) outline.push(bez([-1.15, 1.25], [0, 1.55], [1.15, 1.25], i / 30));
  for (let i = 1; i <= 30; i += 1) outline.push(bez([1.15, 1.25], [1.15, -0.45], [0, -1.6], i / 30));
  for (let i = 1; i <= 30; i += 1) outline.push(bez([0, -1.6], [-1.15, -0.45], [-1.15, 1.25], i / 30));
  [-0.14, 0.14].forEach((z) => {
    for (let i = 0; i < outline.length - 1; i += 1) {
      line([outline[i][0], outline[i][1], z], [outline[i + 1][0], outline[i + 1][1], z], 0.07, 0, out);
    }
  });
  const inside = (x: number, y: number) => {
    let hit = false;
    for (let i = 0, j = outline.length - 1; i < outline.length; j = i, i += 1) {
      const [xi, yi] = outline[i];
      const [xj, yj] = outline[j];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
    }
    return hit;
  };
  for (let x = -1.1; x <= 1.1; x += 0.16) {
    for (let y = -1.5; y <= 1.4; y += 0.16) {
      if (inside(x, y)) out.push({ p: [x, y, 0], tag: 1 });
    }
  }
  line(SHIELD_CHECK[0], SHIELD_CHECK[1], 0.06, 2, out);
  line(SHIELD_CHECK[1], SHIELD_CHECK[2], 0.06, 2, out);
  return out;
}

const BUILDERS: Record<ServiceSceneId, () => Dot[]> = {
  chain: buildChain,
  devices: buildDevices,
  team: buildTeam,
  radar: buildRadar,
  shield: buildShield,
};

/* ── Per-scene behaviour ──────────────────────────────────────────────── */

interface Pose {
  ry: number;
  rx: number;
  zoom: number;
}

interface Behaviour {
  pose: (t: number) => Pose;
  /** Extra brightness for a dot at time t (0 = resting, 1 = fully lit). */
  glow: (dot: Dot, t: number) => number;
  /** Optional constellation lines between lit points (unit space). */
  links?: (t: number) => { points: Vec[]; strength: number } | null;
  telemetry: (t: number) => string;
}

const pulse = (x: number) => Math.max(0, Math.sin(x * Math.PI));

const BEHAVIOURS: Record<ServiceSceneId, Behaviour> = {
  chain: {
    pose: (t) => ({ ry: 0.55 + Math.sin(t * 0.35) * 0.45, rx: -0.35, zoom: 1 }),
    glow: (dot, t) => {
      const active = Math.floor(t / 1.8) % 3;
      if (dot.tag === active) return pulse((t / 1.8) % 1) * 0.9;
      if (dot.tag === 10 || dot.tag === 11) {
        const along = (dot.p[0] - (dot.tag === 10 ? CUBES[0] : CUBES[1])) / 1.65;
        const head = (t * 0.9) % 1;
        return Math.max(0, 1 - Math.abs(along - head) * 6);
      }
      return 0;
    },
    telemetry: (t) => `BLOCK ${Math.floor(t / 1.8) % 3 + 1} / 3  CONFIRMED`,
  },
  devices: {
    pose: (t) => ({ ry: -0.25 + Math.sin(t * 0.4) * 0.3, rx: -0.12, zoom: 1 }),
    glow: (dot, t) => (dot.tag === 1 ? 0.25 + 0.25 * Math.sin(t * 2) : 0.08),
    links: (t) => {
      const phase = (t * 0.55) % 1;
      const from: Vec = [1.45, -0.25, 0.7];
      const to: Vec = [-0.45, 0.1, 0];
      const lift = Math.sin(phase * Math.PI) * 0.7;
      const head: Vec = [from[0] + (to[0] - from[0]) * phase, from[1] + (to[1] - from[1]) * phase + lift, from[2] + (to[2] - from[2]) * phase];
      const tailPhase = Math.max(0, phase - 0.12);
      const tailLift = Math.sin(tailPhase * Math.PI) * 0.7;
      const tail: Vec = [from[0] + (to[0] - from[0]) * tailPhase, from[1] + (to[1] - from[1]) * tailPhase + tailLift, from[2] + (to[2] - from[2]) * tailPhase];
      return { points: [tail, head], strength: pulse(phase) };
    },
    telemetry: () => "WEB + MOBILE  /  IN SYNC",
  },
  team: {
    pose: (t) => ({ ry: t * 0.22, rx: -0.42, zoom: 1 }),
    glow: (dot, t) => {
      const cycle = Math.floor(t / 2.6);
      const local = (t / 2.6) % 1;
      const path = [0, 1 + (cycle % 6), 1 + ((cycle + 1) % 6)];
      if (dot.tag >= 100 && dot.tag < 200 && path.includes(dot.tag - 100)) return pulse(local) * 0.85;
      return 0;
    },
    links: (t) => {
      const cycle = Math.floor(t / 2.6);
      const local = (t / 2.6) % 1;
      const a = 1 + (cycle % 6);
      const b = 1 + ((cycle + 1) % 6);
      return { points: [NODES[a], NODES[0], NODES[b]], strength: pulse(local) };
    },
    telemetry: () => "CREW 7  /  CONNECTED",
  },
  radar: {
    pose: (t) => ({ ry: t * 0.08, rx: -1.0, zoom: 1.05 }),
    glow: (dot, t) => {
      const angle = Math.atan2(dot.p[2], dot.p[0]);
      const sweep = (t * 1.1) % TAU;
      const behind = (((sweep - angle) % TAU) + TAU) % TAU;
      return behind < 0.9 ? (1 - behind / 0.9) * 0.9 : 0;
    },
    telemetry: (t) => `SCAN ${String(Math.floor((((t * 1.1) % TAU) / TAU) * 360)).padStart(3, "0")}°`,
  },
  shield: {
    pose: (t) => ({ ry: Math.sin(t * 0.45) * 0.45, rx: -0.08, zoom: 1 }),
    glow: (dot, t) => {
      const cycle = (t % 4.2) / 4.2;
      const band = 1.5 - cycle * 1.35 * 3.2;
      if (dot.tag === 2) return cycle > 0.72 ? pulse((cycle - 0.72) / 0.28) : 0;
      return Math.max(0, 1 - Math.abs(dot.p[1] - band) / 0.18) * 0.85;
    },
    links: (t) => {
      const cycle = (t % 4.2) / 4.2;
      if (cycle < 0.72) return null;
      return { points: SHIELD_CHECK, strength: pulse((cycle - 0.72) / 0.28) };
    },
    telemetry: (t) => ((t % 4.2) / 4.2 > 0.72 ? "AUDIT  /  VERIFIED" : "AUDIT  /  SCANNING"),
  },
};

export class ServiceScene {
  private g: CanvasRenderingContext2D;
  private dots: Dot[];
  private behaviour: Behaviour;
  private width = 0;
  private height = 0;
  private running = false;
  private raf = 0;

  constructor(private canvas: HTMLCanvasElement, private id: ServiceSceneId, private reduced = false) {
    this.g = canvas.getContext("2d")!;
    this.dots = BUILDERS[id]();
    this.behaviour = BEHAVIOURS[id];
    this.resize();
    window.addEventListener("resize", this.resize);
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
    this.height = this.canvas.clientHeight;
    this.canvas.width = Math.round(this.width * ratio);
    this.canvas.height = Math.round(this.height * ratio);
    this.g.setTransform(ratio, 0, 0, ratio, 0, 0);
    this.paint(performance.now());
  };

  private paint(now: number): void {
    const { g, width, height } = this;
    if (!width || !height) return;
    const t = this.reduced ? 2.2 : now / 1000;
    const pose = this.behaviour.pose(t);
    const unit = Math.min(width / 6.2, height / 4.4) * pose.zoom;
    const cosY = Math.cos(pose.ry);
    const sinY = Math.sin(pose.ry);
    const cosX = Math.cos(pose.rx);
    const sinX = Math.sin(pose.rx);
    const camera = 7;
    const project = ([x, y, z]: Vec) => {
      const x1 = x * cosY + z * sinY;
      const z1 = -x * sinY + z * cosY;
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;
      const scale = camera / (camera - z2);
      return { x: width / 2 + x1 * unit * scale, y: height / 2 - y2 * unit * scale, depth: z2, scale };
    };

    g.clearRect(0, 0, width, height);
    const lit: Array<{ x: number; y: number; glow: number }> = [];
    this.dots.forEach((dot, index) => {
      const point = project(dot.p);
      const glow = this.behaviour.glow(dot, t);
      const depth = Math.max(0, Math.min(1, (point.depth + 2.4) / 4.8));
      const alpha = Math.min(1, (0.3 + 0.5 * depth) + glow * 0.7);
      const size = (1.35 + glow * 1.1) * point.scale;
      g.fillStyle = `rgba(${DOT}, ${alpha.toFixed(3)})`;
      g.fillRect(point.x - size / 2, point.y - size / 2, size, size);
      if (glow > 0.55 && lit.length < 60 && index % 3 === 0) lit.push({ x: point.x, y: point.y, glow });
    });

    lit.forEach(({ x, y, glow }) => {
      const halo = g.createRadialGradient(x, y, 0, x, y, 9);
      halo.addColorStop(0, `rgba(255, 255, 255, ${(0.5 * glow).toFixed(3)})`);
      halo.addColorStop(1, "rgba(200, 181, 255, 0)");
      g.fillStyle = halo;
      g.fillRect(x - 9, y - 9, 18, 18);
    });

    const links = this.behaviour.links?.(t);
    if (links && links.strength > 0.02) {
      const points = links.points.map(project);
      g.save();
      g.strokeStyle = `rgba(255, 255, 255, ${(0.7 * links.strength).toFixed(3)})`;
      g.lineWidth = 1.2;
      g.shadowColor = "rgba(200, 181, 255, 0.9)";
      g.shadowBlur = 10;
      g.beginPath();
      points.forEach((point, i) => (i === 0 ? g.moveTo(point.x, point.y) : g.lineTo(point.x, point.y)));
      g.stroke();
      g.restore();
      points.forEach((point) => {
        const halo = g.createRadialGradient(point.x, point.y, 0, point.x, point.y, 12);
        halo.addColorStop(0, `rgba(255, 255, 255, ${(0.85 * links.strength).toFixed(3)})`);
        halo.addColorStop(1, "rgba(200, 181, 255, 0)");
        g.fillStyle = halo;
        g.fillRect(point.x - 12, point.y - 12, 24, 24);
      });
    }

    g.fillStyle = "rgba(255, 255, 255, 0.55)";
    g.font = '600 11px "Open Sans", Arial, sans-serif';
    g.letterSpacing = "1.5px";
    g.fillText(this.behaviour.telemetry(t), 20, height - 18);
  }
}
