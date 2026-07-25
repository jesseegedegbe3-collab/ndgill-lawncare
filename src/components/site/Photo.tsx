import { cn } from "@/lib/utils";

export interface PhotoProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  ratio?: "16/9" | "21/9" | "4/3" | "3/2" | "1/1" | "9/16";
  overlay?: "none" | "soft" | "strong" | "bottom";
  priority?: boolean;
}

/**
 * Reusable <Photo> component for hero + section imagery.
 * Wraps an <img> in a fixed aspect ratio container so layout never shifts.
 * Pulls open licensed photography from Unsplash hotlinks via srcset.
 */
export function Photo({
  src,
  alt,
  className,
  imgClassName,
  ratio = "16/9",
  overlay = "none",
  priority = false,
}: PhotoProps) {
  // Build a 1x + 2x srcset for retina displays.
  const baseWidth = "1600";
  const url1x = `${src}?auto=format&fit=crop&w=${baseWidth}&q=70`;
  const url2x = `${src}?auto=format&fit=crop&w=2400&q=70`;
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted",
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      <img
        src={url1x}
        srcSet={`${url1x} 1x, ${url2x} 2x`}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className={cn(
          "absolute inset-0 h-full w-full object-cover",
          imgClassName,
        )}
      />
      {overlay !== "none" && (
        <div
          aria-hidden
          className={cn(
            "absolute inset-0",
            overlay === "soft" && "bg-gradient-to-b from-black/30 via-black/15 to-black/40",
            overlay === "strong" && "bg-gradient-to-t from-black/80 via-black/40 to-black/30",
            overlay === "bottom" && "bg-gradient-to-t from-black/60 via-black/0 to-transparent",
          )}
        />
      )}
    </div>
  );
}
