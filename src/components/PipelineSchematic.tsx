import { motion, useReducedMotion } from "framer-motion";

const ink = (alpha = 1) => `hsl(var(--foreground) / ${alpha})`;
const card = (alpha = 1) => `hsl(var(--card) / ${alpha})`;
const PINE = "hsl(var(--primary))";
const SIGNAL = "hsl(var(--accent))";

type NodeProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string;
  variant?: "default" | "dashed" | "emphasis" | "filled";
  delay?: number;
};

const Node = ({ x, y, w, h, title, sub, variant = "default", delay = 0 }: NodeProps) => {
  const reduce = useReducedMotion();
  const cx = x + w / 2;
  const titleY = sub ? y + h / 2 - 4 : y + h / 2 + 3.5;

  const stroke =
    variant === "emphasis" ? PINE : variant === "filled" ? PINE : ink(0.3);

  return (
    <motion.g
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, delay }}
    >
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={4}
        fill={variant === "filled" ? PINE : card()}
        stroke={stroke}
        strokeWidth={variant === "emphasis" ? 1.5 : 1}
        strokeDasharray={variant === "dashed" ? "4 3" : undefined}
      />
      <text
        x={cx}
        y={titleY}
        textAnchor="middle"
        className="font-mono"
        fontSize={11}
        fontWeight={600}
        letterSpacing="0.08em"
        fill={variant === "filled" ? card() : variant === "emphasis" ? PINE : ink(0.85)}
      >
        {title}
      </text>
      {sub && (
        <text
          x={cx}
          y={y + h / 2 + 12}
          textAnchor="middle"
          className="font-mono"
          fontSize={9}
          fill={variant === "filled" ? card(0.8) : ink(0.55)}
        >
          {sub}
        </text>
      )}
    </motion.g>
  );
};

type EdgeProps = {
  d: string;
  dashed?: boolean;
  bi?: boolean;
  delay?: number;
};

const Edge = ({ d, dashed, bi, delay = 0 }: EdgeProps) => {
  const reduce = useReducedMotion();
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={ink(0.45)}
      strokeWidth={1.2}
      strokeDasharray={dashed ? "3 3" : undefined}
      markerEnd="url(#arrow)"
      markerStart={bi ? "url(#arrow-rev)" : undefined}
      initial={reduce ? false : { pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, delay, ease: "easeInOut" }}
    />
  );
};

const Label = ({ x, y, text, anchor = "middle" }: { x: number; y: number; text: string; anchor?: string }) => (
  <text
    x={x}
    y={y}
    textAnchor={anchor as "middle"}
    className="font-mono"
    fontSize={9}
    letterSpacing="0.06em"
    fill={ink(0.5)}
  >
    {text}
  </text>
);

/**
 * FIG. 01 — an annotated schematic of the agentic workflows Yash ships:
 * router → retrieval + planning → agent loop with tools, state, guardrails.
 */
const PipelineSchematic = () => {
  const reduce = useReducedMotion();

  return (
    <div className="panel relative overflow-hidden">
      {/* stronger graph-paper grid inside the drawing area */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--grid) / 0.07) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--grid) / 0.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <svg
        viewBox="0 0 560 452"
        role="img"
        aria-label="Schematic of an agentic AI workflow: a user query is routed through retrieval and planning into an agent loop with tools, persisted state, and guardrails, producing a grounded response."
        className="relative block h-auto w-full"
      >
        <defs>
          <marker id="arrow" viewBox="0 0 8 8" refX={7} refY={4} markerWidth={7} markerHeight={7} orient="auto">
            <path d="M0,0.8 L7.2,4 L0,7.2 Z" fill={ink(0.5)} />
          </marker>
          <marker id="arrow-rev" viewBox="0 0 8 8" refX={1} refY={4} markerWidth={7} markerHeight={7} orient="auto">
            <path d="M7.2,0.8 L0,4 L7.2,7.2 Z" fill={ink(0.5)} />
          </marker>
        </defs>

        {/* edges */}
        <Edge d="M140,56 H224" delay={0.35} />
        <Edge d="M332,56 H416" dashed bi delay={0.5} />
        <Edge d="M254,76 V113 H88 V146" delay={0.65} />
        <Edge d="M306,76 V146" delay={0.65} />
        <Edge d="M280,190 V248" delay={0.8} />
        <Edge d="M88,194 V248" bi delay={0.8} />
        <Edge d="M140,170 H176 V276 H208" delay={0.95} />
        <Edge d="M348,270 H384 V194 H416" bi delay={1.1} />
        <Edge d="M280,324 V376" delay={1.25} />
        <Edge d="M348,404 H416" delay={1.4} />

        {/* edge annotations */}
        <Label x={374} y={48} text="checkpoints" />
        <Label x={162} y={106} text="route" />
        <Label x={290} y={222} text="plan" anchor="start" />
        <Label x={97} y={224} text="top-k" anchor="start" />
        <Label x={184} y={238} text="context" anchor="start" />
        <Label x={392} y={254} text="tool calls" />
        <Label x={290} y={354} text="draft" anchor="start" />
        <Label x={382} y={396} text="verified" />

        {/* nodes */}
        <Node x={36} y={36} w={104} h={40} title="USER QUERY" delay={0.05} />
        <Node x={228} y={36} w={104} h={40} title="ROUTER" delay={0.15} />
        <Node x={420} y={36} w={104} h={56} title="STATE / MEMORY" sub="persisted" variant="dashed" delay={0.25} />
        <Node x={36} y={150} w={104} h={40} title="RETRIEVER" delay={0.35} />
        <Node x={228} y={150} w={104} h={40} title="PLANNER" delay={0.45} />

        {/* tools node with rows */}
        <motion.g
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: 0.55 }}
        >
          <rect x={420} y={150} width={104} height={88} rx={4} fill={card()} stroke={ink(0.3)} strokeWidth={1} />
          <text
            x={472}
            y={168}
            textAnchor="middle"
            className="font-mono"
            fontSize={11}
            fontWeight={600}
            letterSpacing="0.08em"
            fill={ink(0.85)}
          >
            TOOLS
          </text>
          <g className="font-mono" fill={ink(0.6)} fontSize={9}>
            <line x1={432} y1={177} x2={512} y2={177} stroke={ink(0.18)} strokeWidth={1} />
            <text x={472} y={193} textAnchor="middle">web.search</text>
            <text x={472} y={208} textAnchor="middle">db.query</text>
            <text x={472} y={223} textAnchor="middle">code.run</text>
          </g>
        </motion.g>

        {/* vector store with cylinder detail */}
        <Node x={36} y={252} w={104} h={48} title="VECTOR STORE" delay={0.65} />
        <line x1={44} y1={262} x2={132} y2={262} stroke={ink(0.2)} strokeWidth={1} />

        <Node
          x={212}
          y={252}
          w={136}
          h={72}
          title="AGENT LOOP"
          sub="plan · act · reflect"
          variant="emphasis"
          delay={0.75}
        />
        <Node x={212} y={380} w={136} h={48} title="GUARDRAILS" delay={0.85} />
        <Node x={420} y={380} w={104} h={48} title="RESPONSE" variant="filled" delay={0.95} />

        {/* traveling pulses — skipped for reduced motion */}
        {!reduce && (
          <>
            <circle r={3} fill={SIGNAL}>
              <animateMotion
                dur="7s"
                begin="1.8s"
                repeatCount="indefinite"
                path="M60,56 H280 V400 H468"
              />
            </circle>
            <circle r={2.4} fill={PINE}>
              <animateMotion dur="2.6s" begin="2.4s" repeatCount="indefinite" path="M88,194 V248" />
            </circle>
          </>
        )}
      </svg>

      {/* drawing title block */}
      <div className="relative flex items-center justify-between gap-3 border-t border-border px-4 py-2.5">
        <span className="fig-label whitespace-nowrap">FIG. 01 — Agentic workflow</span>
        <span className="fig-label hidden whitespace-nowrap lg:inline">LangGraph trace</span>
        <span className="fig-label hidden whitespace-nowrap sm:inline">REV 2026.07</span>
      </div>
    </div>
  );
};

export default PipelineSchematic;
