export type ButtonVariant = "default" | "secondary" | "ghost" | "destructive" | "outline";
export type ButtonSize = "default" | "sm" | "lg" | "icon";

export function buttonClassName(variant: ButtonVariant, size: ButtonSize) {
  const base = "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-cyan-500 text-slate-950 hover:bg-cyan-400",
    secondary: "bg-slate-800 text-white hover:bg-slate-700",
    ghost: "text-slate-200 hover:bg-slate-800",
    destructive: "bg-red-500 text-white hover:bg-red-400",
    outline: "border border-slate-700 bg-transparent text-white hover:bg-slate-800",
  };
  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-8 px-3 text-xs",
    lg: "h-12 px-5 text-base",
    icon: "h-10 w-10",
  };
  return `${base} ${variants[variant]} ${sizes[size]}`;
}
