"use client";
import { FaIcons, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "@dotlottie/react-player/dist/index.css";
import Profile from "./components/Profile";
import About from "./components/About";
import MySkills from "./components/MySkills";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import Projects from "./components/Projects";

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
      <MySkills></MySkills>
      <Projects></Projects>
    </div>
  );
}
