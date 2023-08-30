import React from "react";

import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  return (
    <div className="demoContainer  mb-4 ">
      <div className="demoWrapper  w-[90%] sm:w-[86%] m-auto ">
        {/* form section starts  */}
        <div className="formSection w-[95%] sm:w-[84%] md:w-[76%] lg:w-[68%] m-auto ">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none  rounded-l-md ">
              <div className="imgContainer  ">
                <img
                  src={linkIcon}
                  alt=""
                  className="  w-[80%] md:w-full h-full "
                />
              </div>
            </div>

            {/*  */}
            <div className="inputContainer bg-gray-100 flex justify-between self-center items-center  rounded-md shadow-md ">
              <div className="inputWrapper  w-[75%] sm:w-[80%] md:w-[85%]  ">
                <input
                  type="text"
                  id="email-address-icon"
                  className="bg-gray-100 text-gray-900 focus:outline-none block w-[100%] m-auto pl-10 md:pl-12 py-1 text-xs sm:text-sm md:text-base"
                  placeholder="Paste the article link"
                />
              </div>

              <div className="inputButton bg-gray-800 w-[25%] sm:w-[20%] md:w-[15%] py-[.6rem] sm:py-3 md:py-[.7rem] text-center rounded-r-md text-white text-sm md:text-base ">
                <button>submit</button>
              </div>
            </div>
            {/*  */}
          </div>

          {/* history link starts  */}
          <div className="historyContainer  mt-8 ">
            <div className="historyWrapper  ">
              {/* history card starts  */}
              <div className="historyCard bg-gray-50 p-2 mb-2 rounded-md shadow flex justify-between items-center self-center  ">
                {/*  */}
                <div className="cardLeft  w-[14%] sm:w-[9%] md:w-[7%] lg:w-[5%]  ">
                  <div className="cardLeftIMG w-[1.7rem] sm:w-[2rem] p-1 m-auto rounded-full bg-gray-200 ">
                    <img
                      src={copy}
                      alt=""
                      className=" w-[95%] h-full cursor-pointer "
                    />
                  </div>
                </div>
                {/*  */}

                {/*  */}
                <div className="cardRight  w-[85%] sm:w-[90%] md:w-[92%] lg:w-[94%] pl-1 text-blue-700 font-semibold ">
                  <h1>link of previous link </h1>
                </div>

                {/*  */}
              </div>
              {/* history card ends  */}

              {/*  */}
            </div>
          </div>

          {/* history link ends  */}
        </div>
        {/* form section ends  */}

        {/* article section starts  */}
        <div className="articleContainer  mt-12 ">
          <div className="articleWrapper   w-[99%] sm:w-[90%] md:w-[88%] lg:w-[86%] m-auto ">
            {/* summery top section starts  */}
            <div className="summeryTopHeading  mb-2 sm:mb-4 md:mb-5 ">
              <h1 className=" text-2xl sm:text-3xl font-semibold ">
                Article <span className=" text-blue-500 ">Summery</span>{" "}
              </h1>
            </div>
            {/* summery top section ends  */}

            {/*  */}

            {/* summery text section starts  */}

            <div className="summeryText bg-gray-100 h-[18rem] sm:h-[20rem] md:h-full overflow-auto px-2 sm:px-4 py-2 md:px-5 md:py-3 shadow-md text-start rounded ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                quod consequuntur sed provident delectus ea? Asperiores, optio?
                Voluptatem distinctio inventore ea impedit libero earum dolorum
                quae ullam mollitia, quis debitis ipsam labore nostrum molestiae
                odio, nihil adipisci sed tempora. Voluptatem distinctio
                inventore ea impedit libero earum dolorum quae ullam mollitia,
                quis debitis ipsam labore nostrum molestiae odio, nihil adipisci
                sed tempora. Voluptatem distinctio inventore ea impedit libero
                earum dolorum quae ullam mollitia, quis debitis ipsam labore
                nostrum molestiae odio, nihil adipisci sed tempora. Voluptatem
                distinctio inventore ea impedit libero earum dolorum quae ullam
                mollitia, quis debitis ipsam labore nostrum molestiae odio,
                nihil adipisci sed tempora. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Modi, quod consequuntur sed
                provident delectus ea? Asperiores, optio? Voluptatem distinctio
                inventore ea impedit libero earum dolorum quae ullam mollitia,
                quis debitis ipsam labore nostrum molestiae odio, nihil adipisci
                sed tempora. Voluptatem distinctio inventore ea impedit libero
                earum dolorum quae ullam mollitia, quis debitis ipsam labore
                nostrum molestiae odio, nihil adipisci sed tempora. Voluptatem
                distinctio inventore ea impedit libero earum dolorum quae ullam
                mollitia, quis debitis ipsam labore nostrum molestiae odio,
                nihil adipisci sed tempora. Voluptatem distinctio inventore ea
                impedit libero earum dolorum quae ullam mollitia, quis debitis
                ipsam labore nostrum molestiae odio, nihil adipisci sed tempora.
              </p>
            </div>

            {/* summery text section ends  */}
          </div>
        </div>

        {/* article section ends */}
      </div>
    </div>
  );
};

export default Demo;
