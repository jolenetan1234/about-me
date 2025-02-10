import React from "react";
import { CiLight } from "react-icons/ci";
import { IconType } from "react-icons/lib";

const Example = () => {
  return (
    <div className="grid min-h-[200px] place-content-center bg-slate-900 p-4">
      <DrawOutlineButton>Hover me</DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) => {
  return (
    <button
      {...rest}
      className="group relative px-4 py-2 hover:font-medium focus:font-medium text-slate-100 transition-colors duration-[400ms] hover:text-primary-color w-full"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-[var(--primary-color)] transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-[var(--primary-color)] transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-[var(--primary-color)] transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-[var(--primary-color)] transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

const HamburgerButton = ({
  isOpen,
  onClick,
  className,
}: {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      className={`group flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      <div className="grid justify-items-center gap-1.5">
        <span
          className={`h-0.5 w-5 rounded-full bg-white transition-transform ${
            isOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        ></span>
        <span
          className={`h-0.5 w-5 rounded-full bg-white transition-transform ${
            isOpen ? "scale-x-0" : ""
          }`}
        ></span>
        <span
          className={`h-0.5 w-5 rounded-full bg-white transition-transform ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </div>
    </button>
  );
};

// shadcn Button component.
// const buttonVariants = cva(
//   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
//   {
//     variants: {
//       variant: {
//         default:
//           "bg-primary text-primary-foreground shadow hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
//         outline:
//           "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
//         secondary:
//           "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-9 px-4 py-2",
//         sm: "h-8 rounded-md px-3 text-xs",
//         lg: "h-10 rounded-md px-8",
//         icon: "h-9 w-9",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// );

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean;
// }

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, ...props }, ref) => {
//     const Comp = asChild ? Slot : "button";
//     return (
//       <Comp
//         className={cn(buttonVariants({ variant, size, className }))}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );
// Button.displayName = "Button";

// const NeumorphismButton = ({ icon: Icon }: { icon?: React.ElementType }) => {
//   return (
//     <button
//       className={`
//         px-4 py-2 rounded-full
//         flex items-center gap-2
//         text-slate-500
//         shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]

//         transition-all

//         hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
//         hover:text-violet-500
//     `}
//     >
//       {Icon && <Icon />}
//     </button>
//   );
// };

const FloatingButton = ({ icon: Icon }: { icon?: React.ElementType }) => {
  return (
    <button
      className={`
        px-4 py-2 rounded-full
        flex items-center gap-2
        text-slate-500
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]

        transition-all

        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-violet-500
    `}
    >
      {Icon && <Icon />}
    </button>
  );
};

const ThemeToggleButton = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <FloatingButton icon={CiLight} />
    </div>
  );
};

export {
  DrawOutlineButton,
  HamburgerButton,
  // NeumorphismButton,
  ThemeToggleButton,
};
