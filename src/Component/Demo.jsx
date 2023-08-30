import React from "react";

import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  return (
    <div className="demoContainer bg-green-300 ">
      <div className="demoWrapper bg-blue-400 w-[95%] sm:w-[90%] m-auto ">
        {/* form section starts  */}
        <div className="formSection w-[60%] m-auto bg-lime-400  ">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img src={linkIcon} alt="" />
            </div>

            {/*  */}
            <div className="inputContainer bg-gray-100 flex justify-between self-center items-center py-0 rounded-md shadow-lg ">
              <div className="inputWrapper bg-amber-300 w-[75%] sm:w-[80%] md:w-[85%]  ">
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-100  text-gray-900 text-sm   focus:border-blue-500 focus:outline-none block w-[100%] pl-10 py-1  "
                  placeholder="Paste the article link"
                />
              </div>

              <div className="inputButton bg-gray-500 w-[25%] sm:w-[20%] md:w-[15%] py-[.38rem] sm:py-2 text-center rounded-r-md text-white text-xs sm:text-sm md:text-base ">
                <button>submit</button>
              </div>
            </div>
            {/*  */}
          </div>

          {/* history link starts  */}

          <div className="historyContainer bg-blue-500 mt-5 ">
            <div className="historyWrapper bg-red-300 ">
              <h1>history</h1>
              <h1>history</h1>
              <h1>history</h1>
            </div>
          </div>

          {/* history link ends  */}
        </div>
        {/* form section ends  */}
      </div>
    </div>
  );
};

export default Demo;
