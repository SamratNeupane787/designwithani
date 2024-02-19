import React from "react";
import { motion } from "framer-motion";
function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className=" w-full py-10 rounded-tl-3xl rounded-tr-3xl  bg-[#004d43]"
    >
      <div className="text border-t-2 border-b-2  border-x-zinc-300 flex  overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{
            x: 0,
          }}
          animate={{
            x: "-100%",
          }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 5,
          }}
          className=" text-[7vw] leading-none font-welcom font-semibold  uppercase py-10 pr-3"
        >
          {" "}
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{
            x: 0,
          }}
          animate={{
            x: "-100%",
          }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 5,
          }}
          className="  text-[7vw] leading-none font-welcom font-semibold uppercase  py-10 pr-3"
        >
          {" "}
          We are ochi
        </motion.h1>
        <motion.h1
          initial={{
            x: 0,
          }}
          animate={{
            x: "-100%",
          }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 5,
          }}
          className="  text-[7vw] leading-none font-welcom font-semibold uppercase  py-10 pr-3"
        >
          {" "}
          We are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
