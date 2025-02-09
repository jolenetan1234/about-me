import React from "react";

const Example = () => {
  return (
    <div className="grid min-h-[200px] place-content-center bg-slate-900 p-4">
      <DrawOutlineButton>Hover me</DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }: {
    children: React.ReactNode,
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

const HamburgerButton = ({ isOpen, onClick, className }: {
  isOpen: boolean,
  onClick: () => void,
  className?: string,
}) => {

  return (
    <button 
      className={`group flex items-center justify-center ${className}`}
      onClick={onClick}
    >
      <div className="grid justify-items-center gap-1.5">
        <span className={`h-0.5 w-5 rounded-full bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
        <span className={`h-0.5 w-5 rounded-full bg-white transition-transform ${isOpen ? "scale-x-0" : ""}`}></span>
        <span className={`h-0.5 w-5 rounded-full bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
      </div>
    </button>
  )
};

export {
    DrawOutlineButton,
    HamburgerButton, 
}

export default Example;