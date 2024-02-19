import React from "react";

function About() {
  return (
    <div className=" w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className=" font-['Neue Montreal'] text-[4vw] leading-[4.5vw] tracking-tight ">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className=" flex  gap-5 w-full border-t-[1px] pt-10  mt-20 border-[#5f7031]">
        <div className=" w-1/2 ">
          <h1 className="text-[3.5vw] font-['Neue Montreal'] pt-8">
            Our Approach
          </h1>
          <button className="flex gap-10 items-center uppercase px-10 py-5 bg-zinc-900  rounded-full text-white mt-6">
            Read More
            <div className=" w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className=" w-1/2 h-[70vh] rounded-3xl bg-[#b0c589]"></div>
      </div>
    </div>
  );
}

export default About;
