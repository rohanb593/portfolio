import * as React from "react";

export function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className = "", ...rest } = props;
  return (
    <div
      className={`rounded-xl border border-slate-200/70 bg-white/90 p-5 shadow-sm ${className}`}
      {...rest}
    />
  );
}

export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className = "", ...rest } = props;
  return (
    <div className={`mb-3 flex flex-col gap-1 ${className}`} {...rest} />
  );
}

export function CardTitle(props: React.HTMLAttributes<HTMLHeadingElement>) {
  const { className = "", ...rest } = props;
  return (
    <h2
      className={`text-sm font-semibold tracking-tight text-slate-900 ${className}`}
      {...rest}
    />
  );
}

export function CardDescription(
  props: React.HTMLAttributes<HTMLParagraphElement>
) {
  const { className = "", ...rest } = props;
  return (
    <p
      className={`text-xs text-slate-500 leading-relaxed ${className}`}
      {...rest}
    />
  );
}

export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  const { className = "", ...rest } = props;
  return <div className={`mt-1 ${className}`} {...rest} />;
}


