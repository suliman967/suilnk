import { ImagePlus } from "lucide-react";
import clsx from "clsx";
import "./PlaceholderImage.css";

/**
 * A clearly-marked empty slot for an asset that hasn't been added yet
 * (personal photo, a future case study, etc.). Intentionally styled to
 * match the rest of the system rather than looking "broken" — but the
 * label always says exactly what belongs here so it's obvious to replace.
 */
export default function PlaceholderImage({ label = "Add image", ratio = "4 / 5", className }) {
  return (
    <div className={clsx("placeholder-image", className)} style={{ aspectRatio: ratio }}>
      <ImagePlus size={22} strokeWidth={1.4} aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
