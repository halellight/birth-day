import React from "react";
import {
  MdLightMode,
  MdMenu,
  MdArrowDownward,
  MdDarkMode,
} from "react-icons/md";
import { useState, useEffect } from "react";
import Logo from "../assets/oyin.png";
import videoBg from "../assets/main.mp4";
import butto from "../assets/button.png";
import { motion } from "framer-motion";
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
    <div className="w-full h-[1900px] items-center scroll-smooth flex flex-col py-2 col-auto bg-black dark:bg-white">
      {/* NAV */}
      <div className="bg-[#000000] dark:bg-white flex justify-between items-center h-40 w-full max-w-[1288px] mx-auto">
        <button onClick={handleSwitch} className="">
          {theme === "light" ? (
            <MdLightMode size={30} color="#ffffff" />
          ) : (
            <MdDarkMode size={30} color="#000000" />
          )}
        </button>
        <img src={Logo} alt="logo" className="h-[50px] cursor-pointer" />
        <MdMenu size={30} color="#ffffff" className="dark:#000000" />
      </div>
      <div className="w-full h-full justify-center items-center flex ">
        <div className="absolute top-40 left-0 w-full h-[740px] bg-[#000000cc]"></div>
        <video src={videoBg} autoPlay loop />
        <div className="absolute w-[522px] h-full flex flex-col top-0 justify-center items-center text-red-50 font-medium">
          <h1 className="p-4 text-center text-lg md:text-xl lg:text-2xl">
            HI, OYIN THIS IS A LITTLE SITE THAT WE CREATED JUST FOR YOU TO LET
            YOU KNOW HOW MUCH OF AN INCREDIBLE PERSON YOU ARE ON THIS SPECIAL
            DAY ONE CLICK AT A TIME.
          </h1>
          <motion.img
            src={butto}
            alt=""
            className="h-10 w-40 cursor-pointer mt-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </div>
      {/* <div className=" w-full h-[10px] border-b">
        <div className=" text-white gap-1 flex px-1 absolute items-center">
          <MdArrowDownward size={20} color="#ffffff" /> Scroll Down
        </div>
      </div> */}
      {/* SEC */}
      {/* <div className="h-100vh"> */}
      <div className=" text-white dark:text-black gap-1 flex px-1 py-3 font-light items-center absolute top-[900px] min-w-full justify-center bg-black">
        <MdArrowDownward size={20} color="#ffffff" /> SCROLL DOWN
      </div>
      <motion.div
        initial={{ opacity: -1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 20 }}
        className="h-[800px] w-[1288px] bg-black scroll-smooth dark:bg-white flex flex-col gap-24` py-28` justify-center"
      >
        <div className="w-full text-[#FF69B4] text-[51px] flex items-start font-bold text-m md:text-3xl lg:text-6xl mb-8 pt-24">
          Who is she . . .
        </div>
        <div className="w-[full] text-[#ffffff] dark:text-black font-bold  flex justify-end text-right">
          <p className="w-[689px] font-light text-[32px] pb-28 ">
            SHE IS THE MOST {""}
            <span className="text-[#FF69B4] font-bold">INCREDIBLE</span> PERSON
            I HAVE EVER MET, AND I FALL MORE IN LOVE WITH HER EVERY DAY. HER
            RESILIENCE AND COURAGE ARE SO AMAIZING. SHE FACES EVERY CHALLENGE
            WITH GRACE AND STRENGTH,{""}{" "}
            <span className="text-[#FF69B4] font-bold">INSPIRING</span>{" "}
            EVERYONE. HER KINDNESS BRIGHTENS EVEN THE DARKEST DAYS. HER SUPPORT
            IS MY GREATEST BLESSING. SHE IS NOT ONLY MY PARTNER BUT MY HERO, AND
            EVERY MOMENT WITH HER IS A GIFT I CHERISH DEEPLY.
          </p>
        </div>
      </motion.div>
      {/* <div className="w-full h-[800px] py-24` px-24 bg-[#FF69B4] flex flex-col gap-24` py-24` items-center">
        <div className="w-[1288px] flex flex-col gap-24` py-24` justify-center">
          <div className="w-full text-[#000000] text-[51px] flex items-start font-bold pt-24">
            Wait . . .
          </div>
          <div className="w-full text-[#000000] text-[51px] flex items-start font-bold">
            There is more!! . . .
          </div>
          <div className="w-[1288px]">
            <div className="w-full flex justify-center items-center py-12 bg-gray-100">
              <div className="grid grid-cols-2 gap-10">
                <div className="bg-white p-8 shadow-md rounded">Box 1</div>
                <div className="bg-white p-8 shadow-md rounded">Box 2</div>
                <div className="bg-white p-8 shadow-md rounded">Box 3</div>
                <div className="bg-white p-8 shadow-md rounded">Box 4</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* </div> */}
    </div>
  );
};

export default Oyin;
