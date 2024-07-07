import React from "react";
import { MdLightMode, MdMenu, MdArrowDownward } from "react-icons/md";
import { useState, useEffect } from "react";
import Logo from "../assets/oyin.png";
import videoBg from "../assets/videoe.mp4";
import butto from "../assets/button.png";
const Oyin = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      localStorage.setItem("theme", theme);
    }
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const handleSwitch = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <div className="w-full h-full items-center scroll-smooth flex flex-col py-2 col-auto bg-black">
      {/* NAV */}
      <div className="bg-[#000000] flex justify-between items-center h-40 w-full max-w-[1288px] mx-auto">
        <MdLightMode size={30} color="#ffffff" />
        <img src={Logo} alt="logo" className="h-[50px] cursor-pointer" />
        <MdMenu size={30} color="#ffffff" />
      </div>
      <div className="w-full h-full justify-center items-center flex ">
        <div className="absolute top-40 left-0 w-full h-[740px] bg-[#000000cc]"></div>
        <video src={videoBg} autoPlay loop />
        <div className="absolute w-[522px] h-full flex flex-col top-0 justify-center items-center text-red-50 font-medium">
          <h1 className="p-4 text-center">
            HI, OYIN THIS IS A LITTLE SITE THAT WE CREATED JUST FOR YOU TO LET
            YOU KNOW HOW MUCH OF AN AMAIZING PERSON YOU ARE ON THIS SPECIAL DAY
            ONE CLICK AT A TIME.
          </h1>
          <img src={butto} alt="" className="h-10 w-40 cursor-pointer" />
        </div>
      </div>
      {/* <div className=" w-full h-[10px] border-b">
        <div className=" text-white gap-1 flex px-1 absolute items-center">
          <MdArrowDownward size={20} color="#ffffff" /> Scroll Down
        </div>
      </div> */}
      {/* SEC */}
      {/* <div className="h-100vh"> */}
      <div className=" text-white gap-1 flex px-1 py-3 font-light items-center absolute top-[900px] min-w-full justify-center bg-black">
        <MdArrowDownward size={20} color="#ffffff" /> SCROLL DOWN
      </div>
      <div className="h-[780px] w-[1288px] bg-black flex flex-col gap-24` py-24` justify-center">
        <div className="w-full text-[#FF69B4] text-[51px] flex items-start font-light">
          Who is she . . .
        </div>
        <div className="w-[full] text-[#ffffff] font-bold  flex justify-end text-right">
          <p className="w-[689px] font-light text-[32px]">
            SHE IS THE MOST {""}
            <span className="text-[#FF69B4]">INCREDIBLE</span> HUMAN THAT I HAVE
            EVER MET, HER UNWAVERING RESILIENCE AND COURAGE IS ONE THAT IS ONLY
            SPOKEN OF IN TALES OF OLD, SHE
          </p>
        </div>
      </div>
      <div className="w-full h-[800px] py-24` px-24 bg-[#FF69B4]">
        <div className="w-[1288px] flex flex-col gap-24` py-24` justify-center">
          <div className="w-full text-[#000000] text-[51px] flex items-start font-light">
            Wait . . .
          </div>
          <div className="w-full text-[#000000] text-[51px] flex items-start font-light">
            There is more!! . . .
          </div>
          <div className="w-">
            <div></div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Oyin;
