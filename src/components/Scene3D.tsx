import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

/**
 * A 3D-feel, theme-matched animated background.
 * - Floating isometric "material" boxes (SAP MM), pills (pharma), molecules,
 *   and a wireframe node-network
 * - Mouse-driven parallax tilt + gentle auto-rotation
 * - Pure CSS 3D transforms — keeps bundle tiny, fully responsive, zero deps added.
 */
export default function Scene3D({ dark = false }: { dark?: boolean }) {
  const [hasPointer, setHasPointer] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoothed pointer inputs for parallax
  const springX = useSpring(mouseX, { stiffness: 70, damping: 20, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 70, damping: 20, mass: 0.8 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const translateZ1 = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const translateZ2 = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setHasPointer(mq.matches);
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };
    if (mq.matches) window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  // Deterministic positions so they don't jump between renders
  const nodes = useMemo(
    () =>
      Array.from({ length: 22 }).map((_, i) => {
        const seed = (i * 9301 + 49297) % 233280;
        const r = seed / 233280;
        return {
          id: i,
          x: ((r * 100) % 100),
          y: (((r * 1000) % 100)),
          z: Math.round((r * 120) - 30),
          size: 2 + r * 5,
          delay: r * 6,
          duration: 10 + r * 14,
        };
      }),
    []
  );

  // Connections between nearby nodes (stylised network)
  const edges = useMemo(() => {
    const pairs: Array<[number, number]> = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 22) pairs.push([i, j]);
      }
    }
    return pairs;
  }, [nodes]);

  // Floating 3D isometric boxes (SAP materials / packages)
  const boxes = useMemo(
    () => [
      { x: "8%", y: "14%", scale: 0.85, dur: 18, delay: 0, hue: "gold" },
      { x: "82%", y: "70%", scale: 1, dur: 22, delay: 3, hue: "teal" },
      { x: "70%", y: "12%", scale: 0.7, dur: 20, delay: 5, hue: "gold" },
      { x: "15%", y: "72%", scale: 0.9, dur: 24, delay: 2, hue: "teal" },
    ],
    []
  );

  // Floating pharma capsules
  const pills = useMemo(
    () => [
      { x: "90%", y: "30%", rot: 28, dur: 16, delay: 1 },
      { x: "5%", y: "46%", rot: -18, dur: 20, delay: 4 },
      { x: "46%", y: "82%", rot: 45, dur: 22, delay: 2 },
    ],
    []
  );

  // Hex molecule nodes (large)
  const molecules = useMemo(
    () => [
      { x: "20%", y: "30%", size: 52, dur: 30, delay: 0 },
      { x: "78%", y: "52%", size: 44, dur: 34, delay: 6 },
    ],
    []
  );

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ perspective: "1400px", perspectiveOrigin: "50% 40%" }}
    >
      {/* Background gradient wash */}
      {dark ? (
        <>
          <div className="absolute inset-0 bg-charcoal" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(176,138,62,0.16),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(47,110,92,0.10),transparent_55%)]" />
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(201,166,99,0.35) 0.7px, transparent 0.7px)",
              backgroundSize: "32px 32px",
            }}
          />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-paper via-cream to-paper" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(176,138,62,0.10),transparent_55%),radial-gradient(ellipse_at_80%_80%,rgba(47,110,92,0.08),transparent_55%)]" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(rgba(176,138,62,0.22) 0.7px, transparent 0.7px)",
              backgroundSize: "28px 28px",
            }}
          />
        </>
      )}

      {/* The 3D stage */}
      <motion.div
        className="absolute inset-0"
        style={{
          transformStyle: "preserve-3d",
          rotateX: hasPointer ? rotateX : 2,
          rotateY: hasPointer ? rotateY : -4,
          rotateZ: 0,
        }}
        animate={!hasPointer ? { rotateY: [-6, 6, -6] } : undefined}
        transition={
          !hasPointer
            ? { duration: 28, repeat: Infinity, ease: "easeInOut" }
            : undefined
        }
      >
        {/* ── Node network (dots + lines) ────────────────── */}
        <motion.div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d", translateZ: translateZ1 }}
        >
          {/* Edges */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {edges.map(([a, b], i) => (
              <line
                key={i}
                x1={nodes[a].x}
                y1={nodes[a].y}
                x2={nodes[b].x}
                y2={nodes[b].y}
                stroke="rgba(176,138,62,0.22)"
                strokeWidth="0.12"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>
          {/* Nodes */}
          {nodes.map((n) => (
            <motion.span
              key={n.id}
              className="absolute rounded-full bg-gold/70"
              style={{
                left: `${n.x}%`,
                top: `${n.y}%`,
                width: n.size,
                height: n.size,
                transform: `translate(-50%, -50%) translateZ(${n.z}px)`,
                boxShadow: "0 0 10px rgba(176,138,62,0.55)",
              }}
              animate={{
                y: [0, -8, 0, 6, 0],
                opacity: [0.4, 1, 0.5, 0.9, 0.4],
              }}
              transition={{
                duration: n.duration,
                delay: n.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* ── 3D Isometric boxes (SAP "material boxes") ─── */}
        <motion.div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d", translateZ: translateZ2 }}
        >
          {boxes.map((b, i) => (
            <IsoBox
              key={i}
              x={b.x}
              y={b.y}
              scale={b.scale}
              dur={b.dur}
              delay={b.delay}
              hue={b.hue as "gold" | "teal"}
            />
          ))}

          {/* Pharma capsules */}
          {pills.map((p, i) => (
            <Pill
              key={i}
              x={p.x}
              y={p.y}
              rot={p.rot}
              dur={p.dur}
              delay={p.delay}
            />
          ))}

          {/* Hex molecules */}
          {molecules.map((m, i) => (
            <Molecule
              key={i}
              x={m.x}
              y={m.y}
              size={m.size}
              dur={m.dur}
              delay={m.delay}
            />
          ))}
        </motion.div>

        {/* ── Orbit rings ──────────────────────────────── */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/20"
          style={{ transformStyle: "preserve-3d", rotateX: 72, rotateY: -14 }}
        >
          <motion.span
            className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-teal shadow-[0_0_14px_rgba(47,110,92,0.7)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50% 35vmin" }}
          />
        </motion.div>
        <motion.div
          className="absolute left-1/2 top-1/2 h-[55vmin] w-[55vmin] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal/25"
          style={{ transformStyle: "preserve-3d", rotateX: 68, rotateY: 20 }}
        >
          <motion.span
            className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_14px_rgba(176,138,62,0.7)]"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "50% 27.5vmin" }}
          />
        </motion.div>
      </motion.div>

      {/* Fade edges so scene blends into page */}
      {dark ? (
        <>
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-charcoal via-charcoal/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-paper via-paper/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-cream via-cream/70 to-transparent" />
        </>
      )}
    </div>
  );
}

/* ─────────────────── 3D primitives in CSS 3D ──────────────────── */

function IsoBox({
  x,
  y,
  scale,
  dur,
  delay,
  hue,
}: {
  x: string;
  y: string;
  scale: number;
  dur: number;
  delay: number;
  hue: "gold" | "teal";
}) {
  const s = 42 * scale;
  const face =
    hue === "gold"
      ? { top: "#d9b875", left: "#b08a3e", right: "#8a6a2e", edge: "#e7d2a1" }
      : { top: "#4d8a77", left: "#2f6e5c", right: "#224e41", edge: "#7db39f" };

  return (
    <motion.div
      className="absolute"
      style={{
        left: x,
        top: y,
        width: s,
        height: s,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: [0, -26, -50],
        rotateZ: [0, 4, -3, 0],
      }}
      transition={{
        duration: dur,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.55, 0.95, 1],
      }}
    >
      {/* top */}
      <span
        className="absolute inset-0"
        style={{
          background: face.top,
          border: `1px solid ${face.edge}`,
          transform: `rotateX(90deg) translateZ(${s / 2}px)`,
        }}
      />
      {/* front */}
      <span
        className="absolute inset-0"
        style={{
          background: face.left,
          border: `1px solid ${face.edge}`,
          transform: `translateZ(${s / 2}px)`,
        }}
      />
      {/* right */}
      <span
        className="absolute inset-0"
        style={{
          background: face.right,
          border: `1px solid ${face.edge}`,
          width: s,
          transform: `rotateY(90deg) translateZ(${s / 2}px)`,
        }}
      />
    </motion.div>
  );
}

function Pill({
  x,
  y,
  rot,
  dur,
  delay,
}: {
  x: string;
  y: string;
  rot: number;
  dur: number;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: [0, -30, -60],
        rotate: [rot, rot + 25, rot - 10],
      }}
      transition={{
        duration: dur,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.5, 0.9, 1],
      }}
    >
      <div
        className="relative h-3 w-9 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, #2f6e5c 0%, #2f6e5c 50%, #fbf8f1 50%, #fbf8f1 100%)",
          boxShadow: "0 4px 14px rgba(47,110,92,0.25)",
          border: "1px solid rgba(47,110,92,0.35)",
        }}
      />
    </motion.div>
  );
}

function Molecule({
  x,
  y,
  size,
  dur,
  delay,
}: {
  x: string;
  y: string;
  size: number;
  dur: number;
  delay: number;
}) {
  const atoms = [
    { cx: 50, cy: 30, r: 8 },
    { cx: 32, cy: 52, r: 7 },
    { cx: 68, cy: 52, r: 7 },
    { cx: 20, cy: 70, r: 5 },
    { cx: 50, cy: 74, r: 6 },
    { cx: 80, cy: 70, r: 5 },
  ];
  const bonds: Array<[number, number]> = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 4],
    [2, 5],
  ];
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y, width: size, height: size }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.45, 0.55, 0],
        y: [0, -20, -40],
        rotate: [0, 10, -8, 0],
      }}
      transition={{
        duration: dur,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.45, 0.9, 1],
      }}
    >
      <svg viewBox="0 0 100 100" className="h-full w-full">
        {bonds.map(([a, b], i) => (
          <line
            key={i}
            x1={atoms[a].cx}
            y1={atoms[a].cy}
            x2={atoms[b].cx}
            y2={atoms[b].cy}
            stroke="#b08a3e"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.6"
          />
        ))}
        {atoms.map((a, i) => (
          <circle
            key={i}
            cx={a.cx}
            cy={a.cy}
            r={a.r}
            fill={i % 2 === 0 ? "#2f6e5c" : "#b08a3e"}
            opacity="0.85"
          />
        ))}
      </svg>
    </motion.div>
  );
}
