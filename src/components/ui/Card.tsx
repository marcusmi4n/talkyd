"use client";

import React from "react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  href?: string;
}

export default function Card({
  children,
  className = "",
  hover = false,
  href,
}: CardProps) {
  const baseStyles = "bg-card-bg rounded-xl border border-border-color p-6 md:p-8";
  const hoverStyles = hover ? "card-hover glow-hover" : "";

  const combinedStyles = cn(baseStyles, hoverStyles, className);

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return <div className={combinedStyles}>{children}</div>;
}

// Icon Card for services/features
interface IconCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  href?: string;
}

export function IconCard({
  icon,
  title,
  description,
  className = "",
  href,
}: IconCardProps) {
  const content = (
    <>
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </>
  );

  const cardStyles = "bg-card-bg rounded-xl border border-border-color p-6 md:p-8 card-hover glow-hover";

  if (href) {
    return (
      <Link href={href} className={cardStyles}>
        {content}
      </Link>
    );
  }

  return (
    <div className={cardStyles}>
      {content}
    </div>
  );
}

// Industry Card
interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function IndustryCard({
  icon,
  title,
  description,
  className = "",
}: IndustryCardProps) {
  return (
    <div
      className={cn(
        "group bg-card-bg rounded-xl border border-border-color p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
        className
      )}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-base font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

// Value Card for core values
interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  className?: string;
}

export function ValueCard({
  icon,
  title,
  description,
  index,
  className = "",
}: ValueCardProps) {
  return (
    <div
      className={cn(
        "relative bg-card-bg rounded-xl border border-border-color p-6",
        className
      )}
    >
      <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-white text-sm font-semibold flex items-center justify-center">
        {index}
      </div>
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h4 className="text-base font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

// Product Category Card
interface ProductCategoryCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  className?: string;
  id?: string;
}

export function ProductCategoryCard({
  icon,
  title,
  items,
  className = "",
  id,
}: ProductCategoryCardProps) {
  return (
    <div
      id={id}
      className={cn(
        "bg-card-bg rounded-xl border border-border-color overflow-hidden",
        className
      )}
    >
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b border-border-color">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center text-white">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span className="text-gray-300 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
