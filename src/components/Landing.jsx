import React from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useState, useEffect } from "react";
import Logo from "../assets/Container.png";
import HeroImg from "../assets/dsd.png";
import img from "../assets/image.png";
import img2 from "../assets/image2.png";

const Landing = () => {
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
    <div className="flex flex-col w-full items-center scroll-smooth h-full px-36 py-2 touch-auto gap-24">
      {/* NAVBAR */}
      <div className="flex justify-between items-center h-20 w-full max-w-[1300px] mx-auto px-16 py-9 bg-white">
        <img src={Logo} alt="logo" className="h-[50px] cursor-pointer" />

        <ul className="flex justify-between items-center">
          <li className="p-6 cursor-pointer font-semibold text-m text-[#6E06F2]">
            Home
          </li>
          <li className="p-6 cursor-pointer font-regular text-m text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white">
            Projects
          </li>
          <li className="p-6 cursor-pointer font-regular text-m text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white">
            About
          </li>
        </ul>
        <div className="gap-3 justify-between items-center flex px-12">
          {/* <button className="bg-black dark:bg-white text-white dark:text-black w-[200px] rounded-md font-medium my-6 mx-1 py-3">
            Contact Us
          </button> */}
          <button onClick={handleSwitch} className="">
            {theme === "light" ? (
              <MdLightMode size={30} color="#000000" />
            ) : (
              <MdDarkMode size={30} color="#000000" />
            )}
          </button>
        </div>
      </div>
      {/* HERO */}
      <div className="flex justify-between items-center mx-12 w-[1300px] h-120vh gap-[57px] px-16 py-50">
        <div className="w-[587px] flex-col col-auto">
          <p className=" px-2 py-2 text-2xl text-[#4E525A]">Hey, I'm Luca 👋</p>
          <p className=" pt-2 text-8xl font-black">
            <span className="text-[#6E06F2]">Front</span>end{" "}
          </p>
          <p className="text-8xl font-black pb-2">Developer</p>
          <p className="text-2xl py-2 px-2 text-[#4E525A]">
            I'm a frontend developer based in Italy, I'll help you build
            beautiful websites your users will love.
          </p>
          <div className="gap-1 items-start flex px-1">
            <button className="bg-[#6E06F2] dark:bg-[#6E06F2] text-white dark:text-black w-[200px] rounded-md font-medium my-6 mx-1 py-3">
              Get in touch
            </button>
            <button className="bg-white dark:bg-black text-black dark:text-black w-[200px] rounded-md border border-solid border-[#4E525A] font-medium my-6 mx-1 py-3">
              Browse Projects
            </button>
          </div>
        </div>
        <img src={HeroImg} alt="i" className="h-[425px]" />
      </div>
      {/* SECTIONS */}
      <div className="flex justify-between items-center mx-12 w-[1300px] h-120vh gap-[57px] px-16 py-50">
        <div className="w-[1300px] flex-col col-auto">
          <p className=" pt-2 text-6xl font-black">
            Projects<span className="text-[#6E06F2]">.</span>{" "}
          </p>

          <div className="gap-3 items-start flex px-1 py-10">
            <div className="flex-col col-auto">
              <img
                src={img}
                alt=""
                className="rounded-lg h-[312px] w-[520px]"
              />
              <p className="font-bold text-3xl py-3">Taskflow</p>
              <p className="">
                Task management system with drag-and-drop, real-time
                collaboration, and responsive layout.
              </p>
            </div>
            <div className="flex-col col-auto">
              <img
                src={img2}
                alt="i"
                className="h-[312px] rounded-lg w-[772px]"
              />
              <p className="font-bold text-3xl py-3">Taskflow</p>
              <p className="">
                Task management system with drag-and-drop, real-time
                collaboration, and responsive layout.
              </p>
            </div>
          </div>
          <div className="gap-3 items-start flex px-1 py-10">
            <div className="flex-col col-auto">
              <img
                src={img}
                alt=""
                className="rounded-lg h-[312px] w-[520px]"
              />
              <p className="font-bold text-3xl py-3">Taskflow</p>
              <p className="w-[504px]">
                Task management system with drag-and-drop, real-time
                collaboration, and responsive layout.
              </p>
            </div>
            <div className="flex-col col-auto">
              <img
                src={img2}
                alt="i"
                className="h-[312px] rounded-lg w-[772px]"
              />
              <p className="font-bold text-3xl py-3">Taskflow</p>
              <p className="">
                Task management system with drag-and-drop, real-time
                collaboration, and responsive layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
