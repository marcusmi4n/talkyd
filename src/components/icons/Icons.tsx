"use client";

import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

// Industry Icons
export function ManufacturingIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="28" width="12" height="16" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="18" y="20" width="12" height="24" rx="1" stroke="currentColor" strokeWidth="2" />
      <rect x="32" y="12" width="12" height="32" rx="1" stroke="currentColor" strokeWidth="2" />
      <path d="M10 28V22L17 18V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 20V14L31 10V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function LaboratoryIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M18 4V16L8 36C6.5 39 8.5 44 12 44H36C39.5 44 41.5 39 40 36L30 16V4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 4H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 32H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="18" cy="36" r="2" fill="currentColor" />
      <circle cx="26" cy="38" r="1.5" fill="currentColor" />
      <circle cx="30" cy="35" r="2" fill="currentColor" />
    </svg>
  );
}

export function PharmaceuticalsIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="14" y="8" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="2" />
      <path d="M14 24H34" stroke="currentColor" strokeWidth="2" />
      <path d="M24 14V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 17H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function AgricultureIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 44V24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 24C24 16 18 10 10 10C10 18 16 24 24 24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M24 18C24 12 30 6 38 6C38 12 32 18 24 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M16 44H32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function EducationIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 18L24 8L44 18L24 28L4 18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M36 22V34C36 36 30 40 24 40C18 40 12 36 12 34V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M44 18V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Service Icons
export function ChemicalSupplyIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 8H36V16L30 24V40H18V24L12 16V8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M12 8H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 32H30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="22" cy="36" r="1.5" fill="currentColor" />
      <circle cx="27" cy="34" r="1" fill="currentColor" />
    </svg>
  );
}

export function ReagentsIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <line x1="24" y1="8" x2="24" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="44" x2="24" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="8" y1="24" x2="4" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="44" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DistributionIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="14" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M28 18H38L44 26V34H28V18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="38" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="36" cy="38" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M16 34H28" stroke="currentColor" strokeWidth="2" />
      <path d="M40 34H44" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

// Value Icons
export function QualityIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 4L28 16H40L30 24L34 36L24 28L14 36L18 24L8 16H20L24 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="44" r="2" fill="currentColor" />
    </svg>
  );
}

export function SafetyIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 4L40 10V22C40 32 32 40 24 44C16 40 8 32 8 22V10L24 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M18 24L22 28L30 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogisticsIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" />
      <path
        d="M24 8V24L34 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
    </svg>
  );
}

export function AfricaIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 4C20 6 18 8 18 10C18 12 20 14 22 14C24 14 26 16 24 18C22 20 18 20 16 22C14 24 14 28 16 30C18 32 16 34 14 36C12 38 14 42 18 44C22 44 26 42 28 40C30 38 34 36 36 32C38 28 38 24 36 20C34 16 30 12 28 10C26 8 26 6 24 4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="26" r="2" fill="currentColor" />
    </svg>
  );
}

export function ComplianceIcon({ className = "", size = 48 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="8" y="6" width="32" height="40" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M14 16H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 24H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 32H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="34" cy="38" r="8" fill="white" stroke="currentColor" strokeWidth="2" />
      <path
        d="M30 38L33 41L38 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Contact Icons
export function EmailIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M2 6L12 13L22 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PhoneIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M22 16.92V19.92C22 20.4704 21.5304 20.94 20.98 20.98C12.45 21.77 4.23 13.55 3.02 3.02C2.98 2.46957 3.44957 2 4 2H7C7.55 2 8 2.45 8 3V7C8 7.55 7.55 8 7 8H5C6 13 11 18 16 19V17C16 16.45 16.45 16 17 16H21C21.55 16 22 16.45 22 17V16.92Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LocationIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// Navigation Icons
export function MenuIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5 12H19M19 12L12 5M19 12L12 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
