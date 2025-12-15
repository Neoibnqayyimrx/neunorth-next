// util/index.ts   ← Keep this as .ts (pure TypeScript, no JSX!)

import { FaRegStar, FaStar } from "react-icons/fa6";
import { IconType } from "react-icons";
import { ReactElement } from "react";

/**
 * Creates a perfect square/circle shape by locking width & height
 */
export const cssPerfectShape = (
  width: number,
  height: number = width
): React.CSSProperties => ({
  width,
  height,
  minWidth: width,
  minHeight: height,
  maxWidth: width,
  maxHeight: height,
});

/**
 * Converts a CSS custom property (like --primary) to rgba()
 * Safe for SSR (Next.js)
 */
export const convertHexToRgba = (
  cssProperty: `--${string}`,
  opacity = 1
): string => {
  if (typeof document === "undefined") {
    return `rgba(0, 0, 0, ${opacity})`;
  }

  try {
    const hex = getComputedStyle(document.documentElement)
      .getPropertyValue(cssProperty)
      .trim();

    if (!hex || !/^#[\da-fA-F]{6}$/.test(hex)) {
      return `rgba(0, 0, 0, ${opacity})`;
    }

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  } catch (err) {
    console.warn(`convertHexToRgba failed for ${cssProperty}:`, err);
    return `rgba(0, 0, 0, ${opacity})`;
  }
};

/**
 * Returns an array of 5 star icon components (IconType[])
 * No JSX here → safe in .ts files
 */
export const starDecoder = (rating: string | number): ReactElement[] => {
  // Convert to number if it's a string
  const numericRating = typeof rating === 'string' ? parseFloat(rating) : rating;
  const clamped = Math.max(0, Math.min(5, Math.round(numericRating)));
  
  return Array.from({ length: 5 }, (_, i) => 
    i < clamped 
      ? <FaStar key={i} className="star-icon" /> 
      : <FaRegStar key={i} className="star-icon" />
  );
};