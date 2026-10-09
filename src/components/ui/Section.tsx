"use client";

import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "dark" | "pattern";
  padding?: "sm" | "md" | "lg";
}

const backgroundStyles = {
  white: "bg-white",
  light: "bg-[#F5F7F9]",
  dark: "bg-[#2E2E2E] text-white",
  pattern: "bg-white molecule-pattern",
};

const paddingStyles = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-20",
  lg: "py-20 md:py-28",
};

export default function Section({
  children,
  className = "",
  id,
  background = "white",
  padding = "md",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`}
    >
      <div className="container">{children}</div>
    </section>
  );
}

// Section Header Component
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const alignStyles = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-12 ${alignStyles} ${className}`}>
      {subtitle && (
        <p className="text-sm font-semibold uppercase tracking-wider text-[#009961] mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2E2E2E] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-[#B0B7BC] text-lg leading-relaxed">{description}</p>
      )}
    </div>
  );
}
