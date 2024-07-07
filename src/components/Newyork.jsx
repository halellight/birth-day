import React from "react";
import { MdLightMode, MdMenu, MdArrowDownward } from "react-icons/md";
import { useState, useEffect } from "react";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import Logo from "../assets/oyin.png";
import videoBg from "../assets/videoe.mp4";
import butto from "../assets/button.png";

const Newyork = () => {
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
    <div className={`w-full h-full flex flex-col py-2 bg-${theme}`}>
      {/* NAV */}
      <div className="bg-[#000000] flex justify-between items-center h-20 w-full max-w-[1288px] mx-auto">
        <MdLightMode
          size={30}
          color="#ffffff"
          onClick={handleSwitch}
          className="cursor-pointer"
        />
        <img src={Logo} alt="logo" className="h-[50px] cursor-pointer" />
        <MdMenu size={30} color="#ffffff" />
      </div>

      {/* Parallax Section */}
      <Parallax bgImage={videoBg} strength={500}>
        <div className="w-full h-[740px] flex items-center justify-center relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>
          <motion.div
            className="absolute w-full flex flex-col items-center text-white font-medium p-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-center text-lg md:text-xl lg:text-2xl p-4">
              HI, OYIN. THIS IS A LITTLE SITE WE CREATED JUST FOR YOU TO LET YOU
              KNOW HOW MUCH OF AN AMAZING PERSON YOU ARE ON THIS SPECIAL DAY,
              ONE CLICK AT A TIME.
            </h1>
            <motion.img
              src={butto}
              alt=""
              className="h-10 w-40 cursor-pointer mt-4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
          </motion.div>
        </div>
      </Parallax>

      {/* Scroll Down Indicator */}
      <div className="text-white flex gap-1 items-center py-3 font-light justify-center bg-black">
        <MdArrowDownward size={20} color="#ffffff" /> SCROLL DOWN
      </div>

      {/* Section 1 */}
      <div className="min-h-screen w-full bg-black flex flex-col justify-center items-center text-white py-28 px-4 md:px-16 lg:px-32">
        <div className="text-[#FF69B4] text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          Who is she . . .
        </div>
        <motion.div
          className="text-center font-light text-lg md:text-xl lg:text-2xl max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          SHE IS THE MOST{" "}
          <span className="text-[#FF69B4] font-bold">INCREDIBLE</span> PERSON I
          HAVE EVER MET, AND I FALL MORE IN LOVE WITH HER EVERY DAY. HER
          RESILIENCE AND COURAGE ARE LEGENDARY. SHE FACES EVERY CHALLENGE WITH
          GRACE AND STRENGTH, INSPIRING EVERYONE. HER KINDNESS BRIGHTENS EVEN
          THE DARKEST DAYS. HER SUPPORT IS MY GREATEST BLESSING. SHE IS NOT ONLY
          MY PARTNER BUT MY HERO, AND EVERY MOMENT WITH HER IS A GIFT I CHERISH
          DEEPLY.
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="min-h-screen w-full bg-[#FF69B4] flex flex-col justify-center items-center py-28 px-4 md:px-16 lg:px-32">
        <div className="text-black text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          Wait . . .
        </div>
        <div className="text-black text-2xl md:text-3xl lg:text-4xl font-bold">
          There is more!! . . .
        </div>
      </div>

      {/* Grid Section */}
      <div className="w-full flex justify-center items-center py-12 bg-gray-100">
        <div className="grid grid-cols-2 gap-10">
          <motion.div
            className="bg-white p-8 shadow-md rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Box 1
          </motion.div>
          <motion.div
            className="bg-white p-8 shadow-md rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Box 2
          </motion.div>
          <motion.div
            className="bg-white p-8 shadow-md rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Box 3
          </motion.div>
          <motion.div
            className="bg-white p-8 shadow-md rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Box 4
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Newyork;
