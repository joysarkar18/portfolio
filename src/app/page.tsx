"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "@dotlottie/react-player/dist/index.css";
import Profile from "./components/Profile";
import About from "./components/About";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="w-full bg-[#080716] flex flex-col justify-center items-center">
      <nav className="h-20 w-[92vw] sm:w-[90vw] lg:w-[1200px] 2xl:w-[1400px] flex justify-end items-center gap-6">
        <a
          href="https://www.linkedin.com/in/joy-sarkar-667b47218/"
          target="_blank"
        >
          <FaLinkedin
            size={26}
            className="text-white cursor-pointer hover:text-[#FA6006]"
          ></FaLinkedin>
        </a>
        <a href="https://github.com/joysarkar18" target="_blank">
          <FaGithub
            size={26}
            className="text-white cursor-pointer hover:text-[#FA6006]"
          ></FaGithub>
        </a>
        <a href="https://twitter.com/byteberg" target="_blank">
          <FaSquareXTwitter
            size={26}
            className="text-white cursor-pointer hover:text-[#FA6006]"
          ></FaSquareXTwitter>
        </a>
        <a>
          <p
            className={`bg-gradient-to-r cursor-pointer from-[#FA6006] to-white bg-clip-text text-transparent font-semibold`}
          >
            Hire Me
          </p>
        </a>
      </nav>
      <Profile></Profile>
      <About></About>
      <MySkills></MySkills>
      <Projects></Projects>
      <div className="h-full w-[92vw] sm:w-[90vw] lg:w-[1200px] 2xl:w-[1400px] bg-[#212428] rounded-lg mb-20 flex flex-col justify-start items-center p-10">
        <div className="flex items-center gap-x-3 ml-2">
          <div className="h-[17px] w-[34px] bg-gradient-to-r from-[#FA6006] to-[#FFB58A] rounded-full"></div>
          <h4 className="text-2xl font-bold">Contact with Me</h4>
        </div>

        <ContactForm></ContactForm>
      </div>
    </div>
  );
}
