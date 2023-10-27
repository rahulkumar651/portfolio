import React from "react";
import htmlImage from "../assets/html2.png";
import cssImage from "../assets/css.png";
import jsImage from "../assets/js.png";
import reactImage from "../assets/React.png";
import nodejsImage from "../assets/nodejs.png";
import mongoDbImage from "../assets/mongoDb.png";
import githubImage from "../assets/GitHub.png";
import postManImage from "../assets/postMan.png";
import netlify from "../assets/netlify.png";
import tailwindImage from "../assets/tailwind.png";
import expressjsImage from "../assets/expressjs.png";
import reduxImage from "../assets/redux.png";

const Experience = () => {
  const Experiences = [
    {
      id: 1,
      src: htmlImage,
      tittle: "Html",
      style: " shadow-orange-500",
    },
    {
      id: 2,
      src: cssImage,
      tittle: "Css",
      style: " shadow-blue-500",
    },
    {
      id: 3,
      src: jsImage,
      tittle: "Java Script",
      style: " shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      tittle: "React Js",
      style: " shadow-blue-500",
    },
    {
      id: 5,
      src: nodejsImage,
      tittle: "Node Js",
      style: " shadow-green-500",
    },
    {
      id: 6,
      src: expressjsImage,
      tittle: "Express Js",
      style: " shadow-yellow-500",
    },
    {
      id: 7,
      src: mongoDbImage,
      tittle: "Mongo DB",
      style: " shadow-green-500",
    },
    {
        id: 8,
        src: reduxImage,
        tittle: "Redux",
        style: " shadow-blue-500",
    },
    {
      id: 9,
      src: postManImage,
      tittle: "Post Man",
      style: " shadow-orange-500",
    },
    {
      id: 10,
      src: tailwindImage,
      tittle: "tailWind css",
      style: " shadow-blue-500",
    },
    {
      id: 11,
      src: netlify,
      tittle: "Netlify",
      style: " shadow-gray-500",
    },
   {
    id: 12,
    src: githubImage,
    tittle: "Git Hub",
    style: " shadow-gray-500",
   }
]
  return (
    <>
      <div
        name="experience"
        className=" bg-gradient-to-b from-gray-800 via-black to-gray-800 w-full text-white md:h-screen"
      >
        <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
              Experience
            </p>
            <p className="py-6">Hands on experience on new technologies</p>
          </div>
          <div className="grid   gap-8 px-12 sm:px-0 md:grid-cols-4  grid-cols-2">
            {Experiences.map(({ id, src, tittle, style }) => (
              <div key={id} className={`shadow-md rounded-lg ${style}  px-3`}>
                <img
                  src={src }
                  alt="img"
                  className=" rounded-md duration-200 hover:scale-105 mb-2  w-20 mx-auto"
                />
                <p className="mt-4 pb-2 my-2 flex justify-center">{tittle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
