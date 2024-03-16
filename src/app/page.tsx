"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "@dotlottie/react-player/dist/index.css";
import Profile from "./components/Profile";
import About from "./components/About";

export default function Home() {
  return (
    <div className="w-full bg-[#080716] flex flex-col justify-center items-center">
      <nav className="h-20 w-[70vw] flex justify-end items-center gap-6">
        <FaLinkedin className="text-white cursor-pointer hover:text-[#FA6006]"></FaLinkedin>
        <FaGithub className="text-white cursor-pointer hover:text-[#FA6006]"></FaGithub>
        <FaSquareXTwitter className="text-white cursor-pointer hover:text-[#FA6006]"></FaSquareXTwitter>
        <p
          className={`bg-gradient-to-r cursor-pointer from-[#FA6006] to-white bg-clip-text text-transparent font-semibold`}
        >
          Hire Me
        </p>
      </nav>
      <Profile></Profile>
      <About></About>

      <div className="w-[70vw] flex justify-between mb-32">
        <div className="h-[336px] w-[30.5vw] bg-[#212428] rounded-lg p-10"></div>
        <div className="h-[336px] w-[37.5vw] bg-[#212428] rounded-lg p-10">
          <div className="flex items-center gap-x-3 ml-2">
            <div className="h-[17px] w-[34px] bg-gradient-to-r from-[#23C7AC] to-[#a3f1ee] rounded-full"></div>
            <h4 className="text-2xl font-bold">About My Skills</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
