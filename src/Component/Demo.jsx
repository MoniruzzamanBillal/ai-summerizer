import React, { useEffect, useState } from "react";

import { copy, linkIcon, loader, tick } from "../assets";

import { useLazyGetSummaryQuery } from "../Service/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [allArticles, setAllArticles] = useState([]);

  const [getSummary, { isLoading, isError }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("article")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    console.log("submit button clicked ");

    const { data } = await getSummary({ articleUrl: article.url });

    console.log(data);
    console.log("submit button clicked ");

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      const updatedArticle = [newArticle, ...allArticles];

      setAllArticles(updatedArticle);

      setArticle(newArticle);

      localStorage.setItem("article", JSON.stringify(updatedArticle));
    }

    console.log(article);
  };

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
                  type="url"
                  id="email-address-icon"
                  className="bg-gray-100 text-gray-900 focus:outline-none block w-[100%] m-auto pl-10 md:pl-12 py-1 text-xs sm:text-sm md:text-base"
                  placeholder="Paste the article link"
                  value={article.url}
                  onChange={(e) =>
                    setArticle({ ...article, url: e.target.value })
                  }
                />
              </div>

              <div
                className="inputButton bg-gray-800 w-[25%] sm:w-[20%] md:w-[15%] py-[.6rem] sm:py-3 md:py-[.7rem] text-center rounded-r-md text-white text-sm md:text-base cursor-pointer "
                onClick={() => handleSubmit()}
              >
                <h1>submit</h1>
              </div>
            </div>
            {/*  */}
          </div>

          {/* history link starts  */}
          <div className="historyContainer  mt-6 ">
            <div className="historyWrapper  ">
              {/* history card starts  */}

              {allArticles.map((ele, ind) => (
                <div
                  className="historyCard bg-gray-50 p-2 mb-2 rounded-md shadow flex justify-between items-center self-center cursor-pointer "
                  key={ind}
                  onClick={() => setArticle(ele)}
                >
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
                    <h1> {ele.url} </h1>
                  </div>

                  {/*  */}
                </div>
              ))}

              {/* history card ends  */}

              {/*  */}
            </div>
          </div>

          {/* history link ends  */}
        </div>
        {/* form section ends  */}

        {/* article section starts  */}
        <div className="articleContainer mt-12">
          {isLoading ? (
            <div className="loaderContainer text-center flex justify-center items-center self-center  ">
              <img src={loader} alt="" className="w-20 h-20 object-contain" />
            </div>
          ) : isError ? (
            <div>
              <p className="bg-red-100 font-bold text-black text-center">
                Something went wrong
              </p>
              <br />
              <span>{isError?.data?.isError}</span>
            </div>
          ) : (
            article.summary && (
              <div className="articleWrapper w-[99%] sm:w-[90%] md:w-[88%] lg:w-[86%] m-auto">
                <div className="summeryTopHeading mb-2 sm:mb-4 md:mb-5">
                  <h1 className="text-2xl sm:text-3xl font-semibold">
                    Article <span className="text-blue-500">Summary</span>
                  </h1>
                </div>
                <div className="summeryText bg-gray-100 h-[18rem] sm:h-[20rem] md:h-full overflow-auto px-2 sm:px-4 py-2 md:px-5 md:py-3 shadow-md text-start rounded">
                  <p>{article.summary}</p>
                </div>
              </div>
            )
          )}
        </div>

        {/* article section ends */}
      </div>
    </div>
  );
};

export default Demo;
