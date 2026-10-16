/**
 * Orbital scenes for the brand v2 services (canvas 2D, no library). Each
 * service is one orbital configuration around a core: its orbits draw
 * themselves in when it becomes active, satellites keep moving, and a line
 * of telemetry names what the scene shows. Switching service cross-fades
 * the old scene out while the new one draws in.
 */

export type OrbitId = "chain" | "devices" | "team" | "radar" | "shield";

const INK = {
  orbit: "rgba(91, 55, 198, 0.3)",
  link: "rgba(91, 55, 198, 0.75)",
  node: "#5b37c6",
  soft: "#8e6eec",
  core: "#3b1b99",
  text: "#787472",
};

interface Frame {
  g: CanvasRenderingContext2D;
  t: number;
  r: number;
  draw: number;
}

const TAU = Math.PI * 2;
const easeOut = (x: number) => 1 - (1 - x) ** 3;

function point(rx: number, ry: number, tilt: number, angle: number): [number, number] {
  const x = Math.cos(angle) * rx;
  const y = Math.sin(angle) * ry;
  return [x * Math.cos(tilt) - y * Math.sin(tilt), x * Math.sin(tilt) + y * Math.cos(tilt)];
}

function orbit(f: Frame, rx: number, ry: number, tilt: number, dashed = false): void {
  const { g, draw } = f;
  g.save();
  g.rotate(tilt);
  g.strokeStyle = INK.orbit;
  g.lineWidth = 1;
  g.setLineDash(dashed ? [4, 6] : []);
  g.beginPath();
  g.ellipse(0, 0, rx, ry, 0, -Math.PI / 2, -Math.PI / 2 + TAU * easeOut(draw));
  g.stroke();
  g.restore();
}

function core(f: Frame, size = 0.09): void {
  const { g, r, t } = f;
  g.fillStyle = INK.core;
  g.beginPath();
  g.arc(0, 0, r * size, 0, TAU);
  g.fill();
  g.strokeStyle = INK.orbit;
  g.beginPath();
  g.arc(0, 0, r * size * (1.6 + 0.15 * Math.sin(t * 2)), 0, TAU);
  g.stroke();
}

function dot(g: CanvasRenderingContext2D, [x, y]: [number, number], radius: number, color = INK.node): void {
  g.fillStyle = color;
  g.beginPath();
  g.arc(x, y, radius, 0, TAU);
  g.fill();
}

function square(g: CanvasRenderingContext2D, [x, y]: [number, number], w: number, h = w, color = INK.node): void {
  g.fillStyle = color;
  g.fillRect(x - w / 2, y - h / 2, w, h);
}

/** Blockchain: blocks travelling one orbit, each linked to the next. */
function chain(f: Frame): void {
  const { g, r, t, draw } = f;
  core(f);
  orbit(f, r * 1.0, r * 0.42, -0.12, true);
  orbit(f, r * 0.72, r * 0.3, -0.12);
  const count = 6;
  const nodes = Array.from({ length: count }, (_, i) => point(r * 0.72, r * 0.3, -0.12, t * 0.35 + (i / count) * TAU));
  g.globalAlpha *= easeOut(draw);
  g.strokeStyle = INK.link;
  g.lineWidth = 1.4;
  g.beginPath();
  nodes.forEach((node, i) => {
    const next = nodes[(i + 1) % count];
    g.moveTo(node[0], node[1]);
    g.lineTo(next[0], next[1]);
  });
  g.stroke();
  nodes.forEach((node) => square(g, node, 10));
}

/** Web and mobile: a screen and a phone on two orbits, kept in sync. */
function devices(f: Frame): void {
  const { g, r, t, draw } = f;
  core(f);
  orbit(f, r * 0.55, r * 0.24, 0.3);
  orbit(f, r * 1.0, r * 0.4, -0.2);
  const screen = point(r * 0.55, r * 0.24, 0.3, t * 0.6);
  const phone = point(r * 1.0, r * 0.4, -0.2, t * 0.6 + Math.PI * 0.85);
  g.globalAlpha *= easeOut(draw);
  g.strokeStyle = INK.link;
  g.setLineDash([3, 5]);
  g.lineDashOffset = -t * 20;
  g.beginPath();
  g.moveTo(screen[0], screen[1]);
  g.lineTo(phone[0], phone[1]);
  g.stroke();
  g.setLineDash([]);
  square(g, screen, 18, 12);
  g.fillStyle = "#ffffff";
  g.fillRect(screen[0] - 7, screen[1] - 4, 14, 2);
  square(g, phone, 8, 15, INK.soft);
}

/** Staff augmentation: a crew in formation, plus one joining from outside. */
function team(f: Frame): void {
  const { g, r, t, draw } = f;
  core(f);
  orbit(f, r * 0.8, r * 0.33, -0.08);
  orbit(f, r * 1.05, r * 0.46, 0.22, true);
  const base = t * 0.4;
  const crew = Array.from({ length: 5 }, (_, i) => point(r * 0.8, r * 0.33, -0.08, base + i * 0.24));
  const joining = point(r * 1.05, r * 0.46, 0.22, base + 0.5 + Math.sin(t * 0.5) * 0.4);
  g.globalAlpha *= easeOut(draw);
  g.strokeStyle = INK.orbit;
  g.beginPath();
  crew.forEach(([x, y]) => {
    g.moveTo(0, 0);
    g.lineTo(x, y);
  });
  g.stroke();
  g.strokeStyle = INK.link;
  g.setLineDash([3, 4]);
  g.beginPath();
  g.moveTo(joining[0], joining[1]);
  g.lineTo(crew[2][0], crew[2][1]);
  g.stroke();
  g.setLineDash([]);
  crew.forEach((member) => dot(g, member, 5.5));
  dot(g, joining, 5.5, INK.soft);
}

/** Product discovery: a scan sweeping the rings, probes lighting up as it passes. */
function radar(f: Frame): void {
  const { g, r, t, draw } = f;
  core(f, 0.06);
  [0.4, 0.7, 1.0].forEach((k) => orbit(f, r * k, r * k * 0.42, 0));
  const sweep = (t * 0.9) % TAU;
  g.save();
  g.globalAlpha *= easeOut(draw);
  g.scale(1, 0.42);
  const wedge = g.createRadialGradient(0, 0, 0, 0, 0, r);
  wedge.addColorStop(0, "rgba(142, 110, 236, 0.28)");
  wedge.addColorStop(1, "rgba(142, 110, 236, 0)");
  g.fillStyle = wedge;
  g.beginPath();
  g.moveTo(0, 0);
  g.arc(0, 0, r, sweep - 0.7, sweep);
  g.closePath();
  g.fill();
  g.strokeStyle = INK.link;
  g.beginPath();
  g.moveTo(0, 0);
  g.lineTo(Math.cos(sweep) * r, Math.sin(sweep) * r);
  g.stroke();
  g.restore();
  g.globalAlpha *= easeOut(draw);
  [[0.7, 0.5], [0.4, 2.2], [1.0, 3.6], [0.7, 4.9]].forEach(([k, angle]) => {
    const behind = (sweep - angle + TAU) % TAU;
    const glow = Math.max(0, 1 - behind / 2.2);
    const [x, y] = point(r * k, r * k * 0.42, 0, angle);
    dot(g, [x, y], 3 + glow * 3, glow > 0.05 ? INK.node : INK.orbit);
  });
}

/** BlockAudit: a scanner orbits a protective ring and verifies it segment by segment. */
function shield(f: Frame): void {
  const { g, r, t, draw } = f;
  core(f);
  orbit(f, r * 1.05, r * 0.46, -0.1, true);
  const segments = 14;
  const cycle = (t * 0.3) % 1.35;
  const verified = Math.min(segments, Math.floor((cycle / 1.15) * segments));
  const rx = r * 0.7;
  const ry = r * 0.3;
  g.save();
  g.rotate(-0.1);
  g.lineWidth = 4;
  for (let i = 0; i < segments; i += 1) {
    if (i / segments > easeOut(draw)) break;
    const start = -Math.PI / 2 + (i / segments) * TAU + 0.05;
    const end = start + TAU / segments - 0.1;
    g.strokeStyle = i < verified ? INK.node : INK.orbit;
    g.beginPath();
    g.ellipse(0, 0, rx, ry, 0, start, end);
    g.stroke();
  }
  g.restore();
  g.globalAlpha *= easeOut(draw);
  const scanner = point(rx, ry, -0.1, -Math.PI / 2 + (Math.min(1, cycle / 1.15)) * TAU);
  square(g, scanner, 9, 9, INK.soft);
  g.strokeStyle = INK.link;
  g.beginPath();
  g.arc(scanner[0], scanner[1], 9 + 3 * Math.sin(t * 6), 0, TAU);
  g.stroke();
}

const SCENES: Record<OrbitId, { draw: (f: Frame) => void; telemetry: (t: number) => string }> = {
  chain: { draw: chain, telemetry: () => "BLOCKS 6  /  CHAIN LINKED" },
  devices: { draw: devices, telemetry: (t) => `WEB + MOBILE  /  SYNC ${String(Math.floor(t * 10) % 100).padStart(2, "0")} MS` },
  team: { draw: team, telemetry: () => "CREW 5 + 1  /  FORMATION" },
  radar: { draw: radar, telemetry: (t) => `SCAN ${String(Math.floor(((t * 0.9) % TAU) / TAU * 360)).padStart(3, "0")}°  /  4 SIGNALS` },
  shield: { draw: shield, telemetry: () => "AUDIT  /  RING VERIFIED" },
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
    const fade = Math.min(1, since / 0.6);
    g.clearRect(0, 0, size, size);
    const r = size * 0.4;
    const scene = (index: number, alpha: number, draw: number, scale: number) => {
      const id = this.ids[index];
      if (!id || alpha <= 0) return;
      g.save();
      g.globalAlpha = alpha;
      g.translate(size / 2, size / 2);
      g.scale(scale, scale);
      SCENES[id].draw({ g, t, r, draw });
      g.restore();
    };
    if (this.previous >= 0 && fade < 1) scene(this.previous, 1 - fade, 1, 1 + fade * 0.05);
    scene(this.current, fade, Math.min(1, since / 1.3), 0.95 + 0.05 * easeOut(fade));

    const id = this.ids[this.current];
    if (id) {
      g.save();
      g.globalAlpha = fade;
      g.fillStyle = INK.text;
      g.font = '600 11px "Open Sans", Arial, sans-serif';
      g.letterSpacing = "1.5px";
      g.fillText(SCENES[id].telemetry(t), 4, size - 8);
      g.restore();
    }
  }
}
