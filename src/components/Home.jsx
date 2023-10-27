import React from "react";
import HeroImg from "../assets/portfolia.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-600 text-white"
      >
        <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className=" text-4xl sm:text-7xl font-bold text-white pb-10">I'm a Full Stack Developer</h2>
            <p>
              I am a passionate and detail-oriented Full Stack Web Developer
              with a solid foundation in modern web technologies. My skill set
              includes proficiency in HTML, CSS, Tailwind CSS, React.js,
              Node.js, MongoDB, and building RESTful APIs. With a strong desire
              to create intuitive and interactive web applications, I am
              committed to delivering high-quality solutions that meet the needs
              of users and businesses.
            </p>
            <div>
              <button className="group text-white w-fit px-6 py-3 my-10 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                portfolia
                <span className="group-hover:rotate-90  duration-300">
                  <AiOutlineArrowRight  size={25}/>
                </span>
              </button>
            </div>
          </div>
          <div>
            <img src={HeroImg} alt="my profile" className=" rounded-2xl mx-auto w-2/3 md:w-full  sm:w-60 pb-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
