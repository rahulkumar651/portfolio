import React from "react";
import NavB from "./components/NavB";
import Home from "./components/Home";
import About from "./components/About";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
    <NavB />
    
    <Home/>
    <SocialLinks/>
    <About/>
    <Portfolio/>
    <Experience/>
     
    </>
  );
};

export default App;
