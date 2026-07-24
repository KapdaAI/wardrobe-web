import type { CSSProperties } from "react";

/** Background style for a garment cutout (contain, centered) on a dark backdrop. */
export function garment(src: string): CSSProperties {
  return {
    backgroundImage: `url(/assets/${src})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
}
