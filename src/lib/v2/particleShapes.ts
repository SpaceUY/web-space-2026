/**
 * Point clouds for the brand v2 services animation. Each shape returns
 * `count` xyz positions (a Float32Array of count * 3) roughly inside a
 * 4 x 4 x 2 box centred on the origin, built from plain geometry so they can
 * be tuned here without touching the renderer.
 */

export type ShapeId = "chain" | "devices" | "team" | "radar" | "shield";

type Vec3 = [number, number, number];
type Segment = [Vec3, Vec3];

const jitter = (amount: number) => (Math.random() - 0.5) * amount;

/** Spread `count` points along segments, proportionally to their length. */
function onSegments(segments: Segment[], count: number, spread = 0.02): Vec3[] {
  const lengths = segments.map(([a, b]) => Math.hypot(b[0] - a[0], b[1] - a[1], b[2] - a[2]));
  const total = lengths.reduce((sum, length) => sum + length, 0) || 1;
  const points: Vec3[] = [];
  segments.forEach(([a, b], index) => {
    const share = Math.max(1, Math.round((lengths[index] / total) * count));
    for (let i = 0; i < share; i += 1) {
      const t = Math.random();
      points.push([
        a[0] + (b[0] - a[0]) * t + jitter(spread),
        a[1] + (b[1] - a[1]) * t + jitter(spread),
        a[2] + (b[2] - a[2]) * t + jitter(spread),
      ]);
    }
  });
  return points;
}

function circle(cx: number, cy: number, radius: number, steps = 64): Segment[] {
  const segments: Segment[] = [];
  for (let i = 0; i < steps; i += 1) {
    const a = (i / steps) * Math.PI * 2;
    const b = ((i + 1) / steps) * Math.PI * 2;
    segments.push([
      [cx + Math.cos(a) * radius, cy + Math.sin(a) * radius, 0],
      [cx + Math.cos(b) * radius, cy + Math.sin(b) * radius, 0],
    ]);
  }
  return segments;
}

function rect(cx: number, cy: number, width: number, height: number, z = 0): Segment[] {
  const x0 = cx - width / 2;
  const x1 = cx + width / 2;
  const y0 = cy - height / 2;
  const y1 = cy + height / 2;
  return [
    [[x0, y0, z], [x1, y0, z]],
    [[x1, y0, z], [x1, y1, z]],
    [[x1, y1, z], [x0, y1, z]],
    [[x0, y1, z], [x0, y0, z]],
  ];
}

function rotate([x, y, z]: Vec3, rx: number, ry: number): Vec3 {
  const cosY = Math.cos(ry);
  const sinY = Math.sin(ry);
  const x1 = x * cosY + z * sinY;
  const z1 = -x * sinY + z * cosY;
  const cosX = Math.cos(rx);
  const sinX = Math.sin(rx);
  return [x1, y * cosX - z1 * sinX, y * sinX + z1 * cosX];
}

function onSphere(center: Vec3, radius: number, count: number): Vec3[] {
  return Array.from({ length: count }, () => {
    const u = Math.random() * 2 - 1;
    const theta = Math.random() * Math.PI * 2;
    const r = Math.sqrt(1 - u * u);
    return [center[0] + radius * r * Math.cos(theta), center[1] + radius * r * Math.sin(theta), center[2] + radius * u] as Vec3;
  });
}

/** Blockchain: three linked cubes, edges dense and faces sparse. */
function chain(count: number): Vec3[] {
  const cubes = [-1.75, 0, 1.75];
  const half = 0.5;
  const corners: Vec3[] = [
    [-half, -half, -half], [half, -half, -half], [half, half, -half], [-half, half, -half],
    [-half, -half, half], [half, -half, half], [half, half, half], [-half, half, half],
  ];
  const edges: Array<[number, number]> = [
    [0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7],
  ];
  const segments: Segment[] = [];
  cubes.forEach((offset, index) => {
    const tilt = 0.55 + index * 0.25;
    const place = (corner: Vec3): Vec3 => {
      const [x, y, z] = rotate(corner, 0.45, tilt);
      return [x + offset, y, z];
    };
    edges.forEach(([a, b]) => segments.push([place(corners[a]), place(corners[b])]));
  });
  segments.push([[-1.15, 0, 0], [-0.6, 0, 0]], [[0.6, 0, 0], [1.15, 0, 0]]);
  const edgePoints = onSegments(segments, Math.round(count * 0.78), 0.015);
  const facePoints: Vec3[] = [];
  while (edgePoints.length + facePoints.length < count) {
    const offset = cubes[Math.floor(Math.random() * cubes.length)];
    const local: Vec3 = [jitter(1), jitter(1), jitter(1)];
    const axis = Math.floor(Math.random() * 3);
    local[axis] = Math.sign(local[axis] || 1) * half;
    const [x, y, z] = rotate(local, 0.45, 0.55 + cubes.indexOf(offset) * 0.25);
    facePoints.push([x + offset, y, z]);
  }
  return [...edgePoints, ...facePoints];
}

/** Web and mobile: a browser window with a phone in front of it. */
function devices(count: number): Vec3[] {
  const segments: Segment[] = [
    ...rect(-0.45, 0.1, 2.9, 1.9),
    [[-1.9, 0.82, 0], [1.0, 0.82, 0]],
    ...circle(-1.72, 0.92, 0.04, 8), ...circle(-1.58, 0.92, 0.04, 8), ...circle(-1.44, 0.92, 0.04, 8),
    ...rect(-0.45, 0.42, 2.4, 0.42),
    ...rect(-1.08, -0.38, 1.1, 0.8),
    [[0.2, -0.08, 0], [0.85, -0.08, 0]], [[0.2, -0.32, 0], [0.75, -0.32, 0]], [[0.2, -0.56, 0], [0.85, -0.56, 0]],
    ...rect(1.35, -0.25, 0.95, 1.75, 0.45),
    [[1.2, 0.5, 0.45], [1.5, 0.5, 0.45]],
    [[1.22, -1.0, 0.45], [1.48, -1.0, 0.45]],
    ...rect(1.35, -0.05, 0.7, 0.55, 0.45),
  ];
  return onSegments(segments, count, 0.018);
}

/** Staff augmentation: a team as a network of people (nodes) and links. */
function team(count: number): Vec3[] {
  const nodes: Vec3[] = [[0, 0, 0]];
  for (let i = 0; i < 6; i += 1) {
    const angle = (i / 6) * Math.PI * 2 + 0.3;
    nodes.push([Math.cos(angle) * 1.55, Math.sin(angle) * 1.15, Math.sin(angle * 2) * 0.5]);
  }
  const links: Segment[] = [];
  for (let i = 1; i < nodes.length; i += 1) {
    links.push([nodes[0], nodes[i]]);
    links.push([nodes[i], nodes[i === nodes.length - 1 ? 1 : i + 1]]);
  }
  const nodePoints = nodes.flatMap((node, index) => onSphere(node, index === 0 ? 0.32 : 0.22, Math.round((count * 0.55) / nodes.length)));
  const linkPoints = onSegments(links, count - nodePoints.length, 0.012);
  return [...nodePoints, ...linkPoints];
}

/** Product discovery: a radar with rings, crosshair, a sweep and blips. */
function radar(count: number): Vec3[] {
  const segments: Segment[] = [
    ...circle(0, 0, 0.6), ...circle(0, 0, 1.15), ...circle(0, 0, 1.7, 96),
    [[-1.8, 0, 0], [1.8, 0, 0]], [[0, -1.8, 0], [0, 1.8, 0]],
  ];
  const linePoints = onSegments(segments, Math.round(count * 0.6), 0.012);
  const sweep: Vec3[] = [];
  const sweepCount = Math.round(count * 0.3);
  while (sweep.length < sweepCount) {
    const radius = Math.sqrt(Math.random()) * 1.7;
    const angle = 0.5 + Math.random() ** 1.8 * 0.85;
    sweep.push([Math.cos(angle) * radius, Math.sin(angle) * radius, jitter(0.02)]);
  }
  const blips = [[0.7, 0.9], [-0.9, 0.4], [0.3, -1.2], [-0.4, -0.7]].flatMap(([x, y]) =>
    onSphere([x, y, 0], 0.07, Math.round((count - linePoints.length - sweep.length) / 4))
  );
  return [...linePoints, ...sweep, ...blips].map((point) => rotate(point, -0.55, 0));
}

/** BlockAudit: a shield with a check mark, outline on two layers for depth. */
function shield(count: number): Vec3[] {
  const bezier = (p0: [number, number], p1: [number, number], p2: [number, number], t: number): [number, number] => [
    (1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * p1[0] + t ** 2 * p2[0],
    (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * p1[1] + t ** 2 * p2[1],
  ];
  const outline: Array<[number, number]> = [];
  const steps = 48;
  for (let i = 0; i <= steps; i += 1) outline.push(bezier([-1.3, 1.5], [0, 1.85], [1.3, 1.5], i / steps));
  for (let i = 1; i <= steps; i += 1) outline.push(bezier([1.3, 1.5], [1.3, -0.55], [0, -1.9], i / steps));
  for (let i = 1; i <= steps; i += 1) outline.push(bezier([0, -1.9], [-1.3, -0.55], [-1.3, 1.5], i / steps));

  const inside = (x: number, y: number) => {
    let hit = false;
    for (let i = 0, j = outline.length - 1; i < outline.length; j = i, i += 1) {
      const [xi, yi] = outline[i];
      const [xj, yj] = outline[j];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
    }
    return hit;
  };

  const segments: Segment[] = [];
  [-0.18, 0.18].forEach((z) => {
    for (let i = 0; i < outline.length - 1; i += 1) {
      segments.push([[outline[i][0], outline[i][1], z], [outline[i + 1][0], outline[i + 1][1], z]]);
    }
  });
  const check: Segment[] = [[[-0.62, 0.05, 0], [-0.12, -0.45, 0]], [[-0.12, -0.45, 0], [0.72, 0.62, 0]]];
  const outlinePoints = onSegments(segments, Math.round(count * 0.55), 0.015);
  const checkPoints = onSegments(check, Math.round(count * 0.2), 0.05);
  const fill: Vec3[] = [];
  while (outlinePoints.length + checkPoints.length + fill.length < count) {
    const x = jitter(2.6);
    const y = -1.9 + Math.random() * 3.75;
    if (inside(x, y)) fill.push([x, y, jitter(0.3)]);
  }
  return [...outlinePoints, ...checkPoints, ...fill];
}

const builders: Record<ShapeId, (count: number) => Vec3[]> = { chain, devices, team, radar, shield };

export function buildShape(id: ShapeId, count: number): Float32Array {
  const points = builders[id](count);
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const point = points[i % points.length];
    out[i * 3] = point[0];
    out[i * 3 + 1] = point[1];
    out[i * 3 + 2] = point[2];
  }
  return out;
}

/** Loose cloud the particles start from before the first shape assembles. */
export function buildScatter(count: number, radius = 3.6): Float32Array {
  const out = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const u = Math.random() * 2 - 1;
    const theta = Math.random() * Math.PI * 2;
    const r = radius * Math.cbrt(Math.random());
    const s = Math.sqrt(1 - u * u);
    out[i * 3] = r * s * Math.cos(theta);
    out[i * 3 + 1] = r * s * Math.sin(theta);
    out[i * 3 + 2] = r * u * 0.6;
  }
  return out;
}
