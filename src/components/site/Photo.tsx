import { cn } from "@/lib/utils";

export interface PhotoProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  ratio?: "16/9" | "21/9" | "16/11" | "4/3" | "3/2" | "1/1" | "9/16";
  overlay?: "none" | "soft" | "strong" | "bottom";
  priority?: boolean;
}

export function Photo({ src, alt, className, imgClassName, ratio = "16/9", overlay = "none", priority = false }: PhotoProps) {
  const separator = src.includes("?") ? "&" : "?";
  const url1x = `${src}${separator}auto=format&fit=crop&w=1600&q=70`;
  const url2x = `${src}${separator}auto=format&fit=crop&w=2400&q=70`;
  return (
    <div className={cn("relative overflow-hidden bg-muted", className)} style={{ aspectRatio: ratio }}>
      <img src={url1x} srcSet={`${url1x} 1x, ${url2x} 2x`} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" fetchPriority={priority ? "high" : "auto"} className={cn("absolute inset-0 h-full w-full object-cover", imgClassName)} />
      {overlay !== "none" && <div aria-hidden className={cn("absolute inset-0", overlay === "soft" && "bg-gradient-to-b from-black/30 via-black/15 to-black/40", overlay === "strong" && "bg-gradient-to-r from-black/80 via-black/45 to-black/20", overlay === "bottom" && "bg-gradient-to-t from-black/60 via-transparent to-transparent")} />}
    </div>
  );
}
