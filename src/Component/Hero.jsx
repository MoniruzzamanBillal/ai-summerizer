import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <div>
      {/* navigation starts  */}

      <nav>
        <div className="navContainer  ">
          <div className="navWrapper  w-[90%] m-auto pt-2 flex justify-between items-center self-center mb-12 ">
            {/* left side of nav starts  */}
            <div className="navLeftContainer ">
              {/*  */}
              <div className="navLeftImg w-[7rem] sm:w-[8rem] ">
                <img
                  src={logo}
                  alt=""
                  className=" w-full h-full cursor-pointer "
                />
              </div>
              {/*  */}
            </div>
            {/* left side of nav ends  */}

            {/*  */}

            {/* right side of nav starts  */}

            <div className="navRightContainer ">
              <div className="navRightButton black_btn ">
                <button>Github</button>
              </div>
            </div>

            {/* right side of nav ends  */}
            {/*  */}
          </div>
        </div>
      </nav>

      {/* navbar ends  */}

      {/*  */}

      {/* hero container starts  */}
      <div className="heroContainer  mb-14 ">
        <div className="heroWrapper  w-[95%] sm:w-[90%] m-auto  ">
          {/*  */}
          <div className="heroHeadingTop  w-full sm:w-[86%] lg:w-[80%] m-auto text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-1 sm:mb-2 ">
            <h1>Summerize Articles with</h1>
          </div>
          {/*  */}

          {/*  */}
          <div className="heroBottomHeading orange_gradient  w-[80%] md:w-[70%] lg:w-[60%] m-auto text-2xl sm:text-3xl md:text-4xl text-center mb-1 sm:mb-2 md:mb-3 font-bold ">
            <h1>OpenAI GPT-4</h1>
          </div>
          {/*  */}

          {/*  */}
          <div className="heroParagraph  w-[90%] sm:w-[80%] md:w-[70%] lg:w-[56%] m-auto text-center text-sm sm:text-base md:text-lg ">
            <p>
              Simplify your reading with summize , an open-source article
              summerizer that transforms lengthy articles into clear and concise
              summaries
            </p>
          </div>
          {/*  */}
        </div>
      </div>
      {/* hero container ends  */}
    </div>
  );
};

export default Hero;
