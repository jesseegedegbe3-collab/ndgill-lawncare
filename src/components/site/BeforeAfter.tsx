import { MoveHorizontal } from "lucide-react";
import { useCallback, useRef, useState, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

export function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  className,
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  className?: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const element = containerRef.current;
    if (!element) return;
    const bounds = element.getBoundingClientRect();
    const percentage = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(Math.min(98, Math.max(2, percentage)));
  }, []);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    event.currentTarget.setPointerCapture?.(event.pointerId);
    updateFromClientX(event.clientX);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) updateFromClientX(event.clientX);
  };

  const stopDragging = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative aspect-video w-full cursor-ew-resize select-none overflow-hidden rounded-lg bg-foreground", className)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onPointerLeave={stopDragging}
    >
      <img src={after} alt={afterAlt} draggable={false} className="absolute inset-0 h-full w-full object-cover" />
      <img src={before} alt={beforeAlt} draggable={false} className="absolute inset-0 h-full w-full object-cover" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }} />

      <span className="absolute left-4 top-4 rounded-sm bg-foreground/80 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-background backdrop-blur">Before</span>
      <span className="absolute right-4 top-4 rounded-sm bg-primary px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">After</span>

      <div className="absolute inset-y-0 w-0.5 bg-background shadow-[0_0_0_1px_rgba(0,0,0,0.15)]" style={{ left: `${position}%` }}>
        <button
          type="button"
          role="slider"
          aria-label="Drag to compare the before and after images"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") setPosition((value) => Math.max(2, value - 5));
            if (event.key === "ArrowRight") setPosition((value) => Math.min(98, value + 5));
          }}
          className="absolute left-1/2 top-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-background text-foreground shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <MoveHorizontal className="size-5" />
        </button>
      </div>
    </div>
  );
}
