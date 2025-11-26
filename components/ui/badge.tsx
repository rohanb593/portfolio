import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export function Badge({ variant = "default", className = "", ...rest }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium";
  const styles =
    variant === "outline"
      ? "border-slate-200 bg-white/80 text-slate-600"
      : "border-transparent bg-sky-100 text-sky-800";

  return <span className={`${base} ${styles} ${className}`} {...rest} />;
}


