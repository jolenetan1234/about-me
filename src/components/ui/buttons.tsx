import { MotionConfig, motion } from "framer-motion";
import React, { useState } from "react";

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
      className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-primary-color"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-primary-color transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-primary-color transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-primary-color transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-primary-color transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

const HamburgerButton = ({ isOpen, onClick, className }: {
  isOpen: boolean,
  onClick: () => void,
  className?: string,
}) => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <button 
      className={`group rounded-lg flex items-center justify-center ${className}`}
      onClick={onClick}
      // onClick={() => setIsOpen(!isOpen)}
    >
      <div className="grid justify-items-center gap-1.5">
        <span className={`h-0.5 w-5 rounded-full bg-white transition-transform ${isOpen ? "rotate-45 translate-y-2.5" : ""}`}></span>
        <span className={`h-0.5 w-5 rounded-full bg-white transition-transform ${isOpen ? "scale-x-0" : ""}`}></span>
        <span className={`h-0.5 w-5 rounded-full bg-white transition-transform ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
      </div>
    </button>
    // <button className="group h-20 w-20 rounded-lg border-2 border-white">
    //   <div className="grid justify-items-center gap-1.5">
    //     <span className="h-1 w-8 rounded-full bg-white transition 
    //     group-hover:rotate-45 group-hover:translate-y-2.5
    //     group-active:rotate-0 group-active:translate-y-0
    //     "/>
    //     <span className="h-1 w-8 rounded-full bg-white transition
    //     group-hover:scale-x-0
    //     group-active:scale-x-100
    //     " />
    //     <span className="h-1 w-8 rounded-full bg-white transition
    //     group-hover:-rotate-45 group-hover:-translate-y-2.5
    //     group-active:rotate-0 group-active:translate-y-0
    //     " />
    //   </div>
    // </button>
  )

// const VARIANTS = {
//   top: {
//     open: {
//       rotate: ["0deg", "0deg", "45deg"],
//       top: ["35%", "50%", "50%"],
//     },
//     closed: {
//       rotate: ["45deg", "0deg", "0deg"],
//       top: ["50%", "50%", "35%"],
//     },
//   },
//   middle: {
//     open: {
//       rotate: ["0deg", "0deg", "-45deg"],
//     },
//     closed: {
//       rotate: ["-45deg", "0deg", "0deg"],
//     },
//   },
//   bottom: {
//     open: {
//       rotate: ["0deg", "0deg", "45deg"],
//       bottom: ["35%", "50%", "50%"],
//       left: "50%",
//     },
//     closed: {
//       rotate: ["45deg", "0deg", "0deg"],
//       bottom: ["50%", "50%", "35%"],
//       left: "calc(50% + 10px)",
//     },
//   },
// };
//   const [active, setActive] = useState(false);

//   return (
//     <MotionConfig
//       transition={{
//         duration: 0.5,
//         ease: "easeInOut",
//       }}
//     >
//       <motion.button
//         initial={false}
//         animate={active ? "open" : "closed"}
//         onClick={() => setActive((pv) => !pv)}
//         className="relative h-10 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
//       >
//         <motion.span
//           variants={VARIANTS.top}
//           className="absolute h-1 w-10 bg-white"
//           style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
//         />
//         <motion.span
//           variants={VARIANTS.middle}
//           className="absolute h-1 w-10 bg-white"
//           style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
//         />
//         <motion.span
//           variants={VARIANTS.bottom}
//           className="absolute h-1 w-5 bg-white"
//           style={{
//             x: "-50%",
//             y: "50%",
//             bottom: "35%",
//             left: "calc(50% + 10px)",
//           }}
//         />
//       </motion.button>
//     </MotionConfig>
//   );
};

export {
    DrawOutlineButton,
    HamburgerButton, 
}

export default Example;