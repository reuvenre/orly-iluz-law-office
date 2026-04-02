import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A74A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b18] disabled:pointer-events-none disabled:opacity-45",
  {
    variants: {
      variant: {
        primary:
          "bg-[#123CFF] text-white hover:bg-[#0F34DE] active:scale-[0.98]",
        secondary:
          "bg-[#D6A74A] text-[#0A0E1A] font-semibold hover:bg-[#C99A3F] active:scale-[0.98]",
        outline:
          "border border-white/12 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/20",
        ghost: "text-white hover:bg-white/8",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-10 px-5",
        lg: "h-11 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
