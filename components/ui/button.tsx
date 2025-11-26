import * as React from "react";

type Variant = "default" | "outline" | "ghost";
type Size = "sm" | "md";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  default: "bg-[var(--accent)] text-white hover:bg-[var(--accent-muted)]",
  outline:
    "border border-slate-200 bg-white/80 text-slate-800 hover:border-sky-300 hover:text-sky-800",
  ghost: "bg-transparent text-slate-700 hover:bg-sky-50",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3",
  md: "h-9 px-4",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";


