import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterProps {
  before: string;
  after: string;
  afterAlt?: string;
  className?: string;
}

function withParams(src: string) {
  const separator = src.includes("?") ? "&" : "?";
  return `${src}${separator}auto=format&fit=crop&w=2000&q=75`;
}

export function BeforeAfter({ before, after, afterAlt = "After", className }: BeforeAfterProps) {
  const [pos, setPos] = useState(50);
  const frameRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      draggingRef.current = true;
      e.currentTarget.setPointerCapture?.(e.pointerId);
      updateFromClientX(e.clientX);
    },
    [updateFromClientX],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!draggingRef.current) return;
      updateFromClientX(e.clientX);
    },
    [updateFromClientX],
  );

  const endDrag = useCallback(() => {
    draggingRef.current = false;
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((p) => Math.max(4, p - 4));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((p) => Math.min(96, p + 4));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPos(4);
    } else if (e.key === "End") {
      e.preventDefault();
      setPos(96);
    }
  }, []);

  return (
    <div
      ref={frameRef}
      role="slider"
      tabIndex={0}
      aria-label="Drag to compare the yard before and after ND Gill service"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(pos)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onKeyDown={handleKeyDown}
      className={cn(
        "group relative aspect-[16/10] cursor-ew-resize touch-pan-y overflow-hidden rounded-lg bg-muted select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:aspect-[16/9]",
        className,
      )}
    >
      {/* After — full frame */}
      <img
        src={withParams(after)}
        alt={afterAlt}
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />

      {/* Before — clipped overlay */}
      <div aria-hidden className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img
          src={withParams(before)}
          alt=""
          draggable={false}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-4 top-4 rounded-md bg-foreground/85 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-background backdrop-blur-sm sm:left-5 sm:top-5">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-md bg-background/85 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground backdrop-blur-sm sm:right-5 sm:top-5">
        After
      </span>

      {/* Divider + handle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 z-10"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute inset-y-0 -ml-px w-0.5 bg-background/90 shadow-sm" />
        <div className="absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lg transition-transform duration-150 group-active:scale-95 sm:size-12">
          <ChevronsLeftRight className="size-5" />
        </div>
      </div>
    </div>
  );
}
