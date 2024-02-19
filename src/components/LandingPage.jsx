import { motion } from "framer-motion";
import React from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
function LandingPage() {
  motion;
  return (
    <div
      data-scroll
      data-scroll-speed="-.7"
      className=" w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((items, index) => {
          return (
            <div key={index} className=" masker ">
              <div className=" w-fit flex items-center overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.22, 1, 0.36, 1] }}
                    className="mr-4 w-[8vw] h-[5vw] bg-red-500 relative"
                  ></motion.div>
                )}
                <h1 className=" uppercase text-[5vw] leading-none tracking-tighter font-semibold font-welcom">
                  {items}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" border-t-2 mt-20  border-x-zinc-800"></div>
      <div className=" flex justify-between items-center mx-20 mt-8  font-['Neue Montreal']">
        <div>
          <p>For Public and Private Companies</p>
        </div>
        <div>
          <p>From the first pitch to IPO</p>
        </div>
        <div className=" start flex items-center gap-5">
          <div className=" px-5 py-2  border-2 border-zinc-600 font-light text-lg  rounded-full uppercase">
            Start the project
          </div>
          <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-zinc-600">
            <span className=" rotate-[45deg]">
              <IoIosArrowRoundUp size={32} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
