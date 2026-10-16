/**
 * Orbital scenes for the brand v2 services (canvas 2D, no library). Each
 * service has one object at its centre that says what it is (a chain of
 * blocks, a browser and a phone, a crew, a radar, a shield) set inside a
 * tilted orbital system. Things in orbit leave a short trail and shrink and
 * fade on the far side, which gives the flat drawing its depth. A new scene
 * draws itself in quickly while the previous one fades out.
 */

export type OrbitId = "chain" | "devices" | "team" | "radar" | "shield";

const C = {
  orbit: "rgba(91, 55, 198, 0.22)",
  line: "rgba(91, 55, 198, 0.55)",
  strong: "#5b37c6",
  deep: "#3b1b99",
  accent: "#8e6eec",
  lilac: "#c8b5ff",
  pale: "#e4dbff",
  text: "#787472",
};

const TAU = Math.PI * 2;
const easeOut = (x: number) => 1 - (1 - Math.min(1, Math.max(0, x))) ** 3;

interface Frame {
  g: CanvasRenderingContext2D;
  t: number;
  r: number;
  /** 0..1 while the scene draws itself in. */
  draw: number;
}

type Point = [number, number];

/** Point on a tilted ellipse, plus depth (-1 far side, 1 near side). */
function onOrbit(rx: number, ry: number, angle: number): { p: Point; depth: number } {
  return { p: [Math.cos(angle) * rx, Math.sin(angle) * ry], depth: Math.sin(angle) };
}

function ring(f: Frame, rx: number, ry: number, dashed = false, delay = 0): void {
  const { g } = f;
  const progress = easeOut((f.draw - delay) / (1 - delay || 1));
  if (progress <= 0) return;
  g.save();
  g.strokeStyle = C.orbit;
  g.lineWidth = 1;
  g.setLineDash(dashed ? [2, 5] : []);
  g.beginPath();
  g.ellipse(0, 0, rx, ry, 0, Math.PI / 2, Math.PI / 2 + TAU * progress);
  g.stroke();
  g.restore();
}

/** Fading trail behind something in orbit. */
function trail(g: CanvasRenderingContext2D, at: (t: number) => Point, t: number, color: string, size = 2): void {
  for (let i = 8; i >= 1; i -= 1) {
    const [x, y] = at(t - i * 0.045);
    g.globalAlpha = (1 - i / 9) * 0.35;
    g.fillStyle = color;
    g.beginPath();
    g.arc(x, y, size * (1 - i / 12), 0, TAU);
    g.fill();
  }
  g.globalAlpha = 1;
}

/** Small isometric cube; `s` is its edge, shaded by face. */
function cube(g: CanvasRenderingContext2D, [x, y]: Point, s: number, alpha: number): void {
  const h = s * 0.5;
  g.globalAlpha = alpha;
  g.fillStyle = C.pale;
  g.beginPath();
  g.moveTo(x, y - s);
  g.lineTo(x + s * 0.87, y - h);
  g.lineTo(x, y);
  g.lineTo(x - s * 0.87, y - h);
  g.closePath();
  g.fill();
  g.fillStyle = C.accent;
  g.beginPath();
  g.moveTo(x - s * 0.87, y - h);
  g.lineTo(x, y);
  g.lineTo(x, y + s);
  g.lineTo(x - s * 0.87, y + h);
  g.closePath();
  g.fill();
  g.fillStyle = C.strong;
  g.beginPath();
  g.moveTo(x + s * 0.87, y - h);
  g.lineTo(x, y);
  g.lineTo(x, y + s);
  g.lineTo(x + s * 0.87, y + h);
  g.closePath();
  g.fill();
  g.globalAlpha = 1;
}

/* ── Blockchain: blocks riding an orbit, each linked to the next ───────── */
function chain(f: Frame): void {
  const { g, r, t, draw } = f;
  const rx = r * 0.95;
  const ry = r * 0.38;
  ring(f, rx, ry);
  ring(f, r * 1.12, r * 0.47, true, 0.2);
  const count = 8;
  const spin = t * 0.28;
  const blocks = Array.from({ length: count }, (_, i) => onOrbit(rx, ry, spin + (i / count) * TAU));
  const shown = Math.ceil(count * easeOut(draw));
  g.strokeStyle = C.line;
  g.lineWidth = 1.2;
  g.beginPath();
  for (let i = 0; i < shown; i += 1) {
    const a = blocks[i].p;
    const b = blocks[(i + 1) % count].p;
    g.moveTo(a[0], a[1]);
    g.lineTo(b[0], b[1]);
  }
  g.stroke();
  blocks
    .slice(0, shown)
    .map((block, i) => ({ ...block, i }))
    .sort((a, b) => a.depth - b.depth)
    .forEach(({ p, depth }) => cube(g, p, r * (0.075 + 0.03 * depth), 0.55 + 0.45 * (depth + 1) / 2));
}

/* ── Web and mobile: a browser at the centre, a phone orbiting it ──────── */
function devices(f: Frame): void {
  const { g, r, t, draw } = f;
  const rx = r * 1.05;
  const ry = r * 0.42;
  ring(f, rx, ry, true);
  const phoneAt = (time: number): Point => onOrbit(rx, ry, time * 0.5 + 1).p;
  const phone = onOrbit(rx, ry, t * 0.5 + 1);
  const drawPhone = () => {
    trail(g, phoneAt, t, C.accent, 2.4);
    const scale = 0.8 + 0.25 * (phone.depth + 1) / 2;
    const w = r * 0.16 * scale;
    const h = r * 0.3 * scale;
    const [x, y] = phone.p;
    g.fillStyle = C.strong;
    g.fillRect(x - w / 2, y - h / 2, w, h);
    g.fillStyle = C.pale;
    g.fillRect(x - w / 2 + 2, y - h / 2 + 4, w - 4, h - 10);
  };
  if (phone.depth < 0) drawPhone();

  const w = r * 1.0;
  const h = r * 0.66;
  const reveal = easeOut(draw);
  g.save();
  g.fillStyle = "#ffffff";
  g.strokeStyle = C.strong;
  g.lineWidth = 1.4;
  g.globalAlpha = reveal;
  g.fillRect(-w / 2, -h / 2, w, h);
  g.strokeRect(-w / 2, -h / 2, w, h);
  g.fillStyle = C.strong;
  g.fillRect(-w / 2, -h / 2, w, h * 0.12);
  [0, 1, 2].forEach((i) => {
    g.fillStyle = C.pale;
    g.beginPath();
    g.arc(-w / 2 + 10 + i * 9, -h / 2 + h * 0.06, 2.2, 0, TAU);
    g.fill();
  });
  const rows: Array<[number, number, number, string]> = [
    [0.18, 0.62, 0.1, C.pale],
    [0.34, 0.4, 0.05, C.lilac],
    [0.46, 0.55, 0.05, C.lilac],
    [0.62, 0.26, 0.2, C.pale],
  ];
  rows.forEach(([top, width, height, color], i) => {
    const grow = easeOut(draw * 1.6 - i * 0.15);
    g.fillStyle = color;
    g.fillRect(-w / 2 + w * 0.08, -h / 2 + h * top, w * width * grow, h * height);
  });
  g.fillStyle = C.accent;
  g.fillRect(w * 0.08, -h / 2 + h * 0.62, w * 0.34 * easeOut(draw * 1.6 - 0.6), h * 0.2);
  g.restore();

  if (phone.depth >= 0) drawPhone();
  g.strokeStyle = C.line;
  g.setLineDash([2, 4]);
  g.lineDashOffset = -t * 16;
  g.beginPath();
  g.moveTo(phone.p[0], phone.p[1]);
  g.lineTo(phone.p[0] * 0.45, phone.p[1] * 0.45);
  g.stroke();
  g.setLineDash([]);
}

/* ── Staff augmentation: a crew in formation, one more joining ─────────── */
function person(g: CanvasRenderingContext2D, [x, y]: Point, s: number, color: string, alpha = 1): void {
  g.globalAlpha = alpha;
  g.fillStyle = color;
  g.beginPath();
  g.arc(x, y - s * 0.55, s * 0.32, 0, TAU);
  g.fill();
  g.beginPath();
  g.ellipse(x, y + s * 0.35, s * 0.55, s * 0.42, 0, Math.PI, TAU);
  g.fill();
  g.globalAlpha = 1;
}

function team(f: Frame): void {
  const { g, r, t, draw } = f;
  const rx = r * 0.82;
  const ry = r * 0.34;
  ring(f, rx, ry);
  ring(f, r * 1.12, r * 0.48, true, 0.2);
  const spin = t * 0.22;
  const crew = Array.from({ length: 6 }, (_, i) => onOrbit(rx, ry, spin + (i / 6) * TAU));
  const shown = Math.ceil(crew.length * easeOut(draw));
  g.strokeStyle = C.orbit;
  g.lineWidth = 1;
  g.beginPath();
  crew.slice(0, shown).forEach(({ p }) => {
    g.moveTo(0, 0);
    g.lineTo(p[0], p[1]);
  });
  g.stroke();
  person(g, [0, 4], r * 0.16, C.deep);
  const joinPhase = (t * 0.25) % 1;
  const joinAt = (time: number): Point => {
    const phase = (time * 0.25) % 1;
    const radius = 1.12 - 0.3 * easeOut(phase * 1.4);
    return onOrbit(r * radius, r * radius * 0.43, spin + 0.55 + phase * 1.2).p;
  };
  trail(g, joinAt, t, C.accent, 2.2);
  crew
    .slice(0, shown)
    .sort((a, b) => a.depth - b.depth)
    .forEach(({ p, depth }) => person(g, p, r * (0.1 + 0.03 * depth), C.strong, 0.55 + 0.45 * (depth + 1) / 2));
  person(g, joinAt(t), r * 0.1, C.accent, joinPhase < 0.85 ? 1 : (1 - joinPhase) / 0.15);
}

/* ── Product discovery: a radar sweeping its rings, signals pinging ────── */
function radar(f: Frame): void {
  const { g, r, t, draw } = f;
  const squash = 0.46;
  [0.36, 0.68, 1.0].forEach((k, i) => ring(f, r * k, r * k * squash, i === 2, i * 0.12));
  const sweep = (t * 0.85) % TAU;
  const reveal = easeOut(draw);
  g.save();
  g.globalAlpha = reveal;
  g.scale(1, squash);
  const wedge = g.createRadialGradient(0, 0, 0, 0, 0, r);
  wedge.addColorStop(0, "rgba(142, 110, 236, 0.32)");
  wedge.addColorStop(1, "rgba(142, 110, 236, 0)");
  g.fillStyle = wedge;
  g.beginPath();
  g.moveTo(0, 0);
  g.arc(0, 0, r, sweep - 0.9, sweep);
  g.closePath();
  g.fill();
  g.strokeStyle = C.strong;
  g.lineWidth = 1.4;
  g.beginPath();
  g.moveTo(0, 0);
  g.lineTo(Math.cos(sweep) * r, Math.sin(sweep) * r);
  g.stroke();
  g.restore();
  g.fillStyle = C.deep;
  g.beginPath();
  g.arc(0, 0, 4, 0, TAU);
  g.fill();
  const signals: Array<[number, number]> = [[0.68, 0.6], [0.36, 2.3], [1.0, 3.7], [0.68, 5.0], [1.0, 1.3]];
  signals.forEach(([k, angle]) => {
    const since = ((sweep - angle) % TAU + TAU) % TAU;
    const glow = Math.max(0, 1 - since / 2.4);
    const x = Math.cos(angle) * r * k;
    const y = Math.sin(angle) * r * k * squash;
    g.globalAlpha = reveal;
    g.fillStyle = glow > 0.02 ? C.strong : C.lilac;
    g.beginPath();
    g.arc(x, y, 3 + glow * 2, 0, TAU);
    g.fill();
    if (glow > 0.02) {
      g.strokeStyle = C.accent;
      g.globalAlpha = reveal * glow;
      g.beginPath();
      g.ellipse(x, y, 6 + (1 - glow) * 18, (6 + (1 - glow) * 18) * squash, 0, 0, TAU);
      g.stroke();
    }
  });
  g.globalAlpha = 1;
}

/* ── BlockAudit: a shield, a scanner circling it, a check once it passes ─ */
function shield(f: Frame): void {
  const { g, r, t, draw } = f;
  const rx = r * 0.95;
  const ry = r * 0.4;
  const cycle = (t * 0.3) % 1;
  const scanAt = (time: number): Point => onOrbit(rx, ry, ((time * 0.3) % 1) * TAU - Math.PI / 2).p;
  const scanner = onOrbit(rx, ry, cycle * TAU - Math.PI / 2);
  ring(f, rx, ry);
  ring(f, r * 1.12, r * 0.47, true, 0.2);
  const drawScanner = () => {
    trail(g, scanAt, t, C.accent, 2.6);
    g.fillStyle = C.strong;
    g.fillRect(scanner.p[0] - 4, scanner.p[1] - 4, 8, 8);
  };
  if (scanner.depth < 0) drawScanner();

  const s = r * 0.42;
  const path = new Path2D();
  path.moveTo(0, -s);
  path.quadraticCurveTo(s * 0.55, -s * 0.78, s * 0.85, -s * 0.82);
  path.quadraticCurveTo(s * 0.88, s * 0.35, 0, s);
  path.quadraticCurveTo(-s * 0.88, s * 0.35, -s * 0.85, -s * 0.82);
  path.quadraticCurveTo(-s * 0.55, -s * 0.78, 0, -s);
  const reveal = easeOut(draw);
  g.save();
  g.globalAlpha = reveal;
  g.fillStyle = C.pale;
  g.fill(path);
  g.strokeStyle = C.strong;
  g.lineWidth = 1.6;
  g.stroke(path);
  const verified = cycle > 0.55 ? easeOut((cycle - 0.55) / 0.2) : 0;
  if (verified > 0) {
    g.strokeStyle = C.deep;
    g.lineWidth = 3;
    g.lineCap = "round";
    g.lineJoin = "round";
    g.beginPath();
    const points: Point[] = [[-s * 0.32, 0], [-s * 0.06, s * 0.26], [s * 0.36, -s * 0.24]];
    g.moveTo(points[0][0], points[0][1]);
    const firstLeg = Math.min(1, verified * 2);
    g.lineTo(points[0][0] + (points[1][0] - points[0][0]) * firstLeg, points[0][1] + (points[1][1] - points[0][1]) * firstLeg);
    if (verified > 0.5) {
      const secondLeg = (verified - 0.5) * 2;
      g.lineTo(points[1][0] + (points[2][0] - points[1][0]) * secondLeg, points[1][1] + (points[2][1] - points[1][1]) * secondLeg);
    }
    g.stroke();
  }
  g.restore();

  if (scanner.depth >= 0) drawScanner();
}

const SCENES: Record<OrbitId, { draw: (f: Frame) => void; telemetry: (t: number) => string }> = {
  chain: { draw: chain, telemetry: () => "BLOCKS 8  /  CHAIN LINKED" },
  devices: { draw: devices, telemetry: () => "WEB + MOBILE  /  IN SYNC" },
  team: { draw: team, telemetry: () => "CREW 6 + 1  /  JOINING" },
  radar: { draw: radar, telemetry: (t) => `SCAN ${String(Math.floor((((t * 0.85) % TAU) / TAU) * 360)).padStart(3, "0")}°  /  5 SIGNALS` },
  shield: { draw: shield, telemetry: (t) => (((t * 0.3) % 1) > 0.55 ? "AUDIT  /  VERIFIED" : "AUDIT  /  SCANNING") },
};

export class OrbitScene {
  private g: CanvasRenderingContext2D;
  private current = -1;
  private previous = -1;
  private switchedAt = 0;
  private running = false;
  private raf = 0;
  private size = 0;

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
    this.size = this.canvas.clientWidth;
    this.canvas.width = Math.round(this.size * ratio);
    this.canvas.height = Math.round(this.size * ratio);
    this.g.setTransform(ratio, 0, 0, ratio, 0, 0);
    this.paint(performance.now());
  };

  private paint(now: number): void {
    const { g, size } = this;
    if (!size) return;
    const t = this.reduced ? 4 : now / 1000;
    const since = this.reduced ? 10 : (now - this.switchedAt) / 1000;
    const fade = Math.min(1, since / 0.35);
    g.clearRect(0, 0, size, size);
    const r = size * 0.38;
    const scene = (index: number, alpha: number, draw: number, scale: number) => {
      const id = this.ids[index];
      if (!id || alpha <= 0) return;
      g.save();
      g.globalAlpha = alpha;
      g.translate(size / 2, size / 2 - size * 0.02);
      g.scale(scale, scale);
      SCENES[id].draw({ g, t, r, draw });
      g.restore();
    };
    if (this.previous >= 0 && fade < 1) scene(this.previous, 1 - fade, 1, 1 + fade * 0.04);
    scene(this.current, fade, Math.min(1, since / 0.8), 0.96 + 0.04 * easeOut(fade));

    const id = this.ids[this.current];
    if (id) {
      g.save();
      g.globalAlpha = fade;
      g.fillStyle = C.text;
      g.font = '600 11px "Open Sans", Arial, sans-serif';
      g.letterSpacing = "1.5px";
      g.fillText(SCENES[id].telemetry(t), 4, size - 8);
      g.restore();
    }
  }
}
