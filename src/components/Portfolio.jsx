import React from "react";
import clooneImg from "../assets/netflix.png";
import foodImg from "../assets/food.png"
import mess from "../assets/messenger_logo_1200x630.jpg"


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: clooneImg,
      gitCode: "https://github.com/rahulkumar651/clone",
      liveCode: "https://netflixc-lone.netlify.app/",
    },
    {
      id: 2,
      src: foodImg,
      gitCode: "https://github.com/rahulkumar651/Food-plaza",
      liveCode: "https://rahulkumar651.github.io/Food-plaza/",
    },
    {
      id: 3,
      src: mess,
      gitCode: "https://github.com/rahulkumar651/chatApp",
      liveCode: "https://chatapp-rahulkumar651.onrender.com/",
    }
  
  ];

  return (
    <>
      <div
        name="portfolio"
        className=" bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
          <div className="grid sm:grid-cols-2  gap-8 px-12 sm:px-0 md:grid-cols-3">
            {portfolios.map(({ id, src, gitCode, liveCode }) => (
              <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt="clone Img"
                  className=" rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <a href={gitCode} target="_blank" rel="noopener noreferrer">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Code
                    </button>
                  </a>
                  <a href={liveCode} target="_blank" rel="noopener noreferrer">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
