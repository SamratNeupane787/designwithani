import React from "react";

function Cards() {
  return (
    <div className=" w-full h-[65vh] pb-20 px-10 flex gap-5">
      <div className=" w-full  h-full bg-[#004D43] rounded-lg flex items-center justify-center">
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt="data"
        />
      </div>
      <div className=" w-full h-full flex gap-5 ">
        <div className=" w-1/2 h-full bg-[#212121] rounded-lg flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="data2"
          />
        </div>
        <div className=" w-1/2 h-full bg-[#212121] rounded-lg flex justify-center items-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=" dsafs"
            className=" w-24 h-24"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
