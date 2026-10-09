"use client";

import React from "react";
import Image from "next/image";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  placeholderIcon?: "molecular" | "lab" | "warehouse" | "safety" | "manufacturing" | "research" | "africa";
}

/**
 * Image component with beautiful placeholder fallback
 * When src is not provided or image fails to load, shows a styled placeholder
 */
export default function ImagePlaceholder({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  fill = false,
  placeholderIcon = "molecular",
}: ImagePlaceholderProps) {
  const [hasError, setHasError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const showPlaceholder = !src || hasError;

  // Placeholder icons for different contexts
  const icons: Record<string, React.ReactNode> = {
    molecular: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-[#009961]/30">
        <circle cx="32" cy="16" r="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="40" r="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="48" cy="40" r="6" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="48" r="4" stroke="currentColor" strokeWidth="2" />
        <line x1="32" y1="22" x2="32" y2="44" stroke="currentColor" strokeWidth="2" />
        <line x1="27" y1="19" x2="20" y2="35" stroke="currentColor" strokeWidth="2" />
        <line x1="37" y1="19" x2="44" y2="35" stroke="currentColor" strokeWidth="2" />
        <line x1="22" y1="40" x2="42" y2="40" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    lab: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-[#009961]/30">
        <path d="M24 8V24L12 48C10 52 13 56 18 56H46C51 56 54 52 52 48L40 24V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="22" y1="8" x2="42" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="18" y1="40" x2="46" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="26" cy="48" r="3" fill="currentColor" />
        <circle cx="36" cy="46" r="2" fill="currentColor" />
      </svg>
    ),
    warehouse: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-[#009961]/30">
        <rect x="8" y="24" width="48" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 24L32 8L56 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="16" y="36" width="12" height="20" stroke="currentColor" strokeWidth="2" />
        <rect x="36" y="36" width="12" height="12" stroke="currentColor" strokeWidth="2" />
        <line x1="36" y1="42" x2="48" y2="42" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    safety: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-[#009961]/30">
        <path d="M32 6L54 14V30C54 44 44 54 32 58C20 54 10 44 10 30V14L32 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M24 32L30 38L40 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    manufacturing: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-[#009961]/30">
        <rect x="8" y="36" width="16" height="20" stroke="currentColor" strokeWidth="2" />
        <rect x="24" y="24" width="16" height="32" stroke="currentColor" strokeWidth="2" />
        <rect x="40" y="16" width="16" height="40" stroke="currentColor" strokeWidth="2" />
        <path d="M16 36V28L23 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 24V16L39 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    research: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-[#009961]/30">
        <circle cx="28" cy="28" r="16" stroke="currentColor" strokeWidth="2" />
        <line x1="40" y1="40" x2="54" y2="54" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <circle cx="28" cy="28" r="6" stroke="currentColor" strokeWidth="2" />
        <line x1="28" y1="16" x2="28" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="28" y1="34" x2="28" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    africa: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-[#009961]/30">
        <path d="M32 6C26 10 24 14 24 18C24 22 28 26 30 26C32 26 36 30 32 34C28 38 22 38 18 42C14 46 14 52 18 56C22 60 26 58 32 58C38 58 42 54 44 50C46 46 52 42 54 36C56 30 56 22 54 16C50 10 44 10 40 14C36 18 38 10 32 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="32" cy="36" r="3" fill="currentColor" />
      </svg>
    ),
  };

  if (showPlaceholder) {
    return (
      <div
        className={`relative flex items-center justify-center bg-gradient-to-br from-[#F5F7F9] to-[#E2E8F0] ${className}`}
        style={{ width: fill ? "100%" : width, height: fill ? "100%" : height }}
        role="img"
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-3">
          {icons[placeholderIcon]}
          <span className="text-xs text-[#B0B7BC] font-medium">Image Coming Soon</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width: fill ? "100%" : width, height: fill ? "100%" : height }}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#F5F7F9] animate-pulse">
          {icons[placeholderIcon]}
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        className={`object-cover ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
