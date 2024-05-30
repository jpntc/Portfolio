import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: {
    width: "calc(100% - 0.75rem)",
  },
};
export const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? " text-slate-200" : "text-[#37656d]";
  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-bold md:text-2xl hover:text-slate-100 text-primary ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={"h-1 bg-text-light mt-2 mr-3"}
      ></motion.div>
    </button>
  );
};
