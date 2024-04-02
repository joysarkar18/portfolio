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
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

export default function Home() {
  const handleOpenGmail = () => {
    const recipient = "joysarkar8171@gmail.com"; // Specify the recipient email address
    const subject = "Want to talk"; // Specify the subject
    const body = ""; // Specify the email body

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
  };
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
        <a href="https://www.codechef.com/users/joy_sarkar" target="_blank">
          <SiCodechef
            size={26}
            className="text-white cursor-pointer hover:text-[#FA6006]"
          ></SiCodechef>
        </a>
        <a href="https://codeforces.com/profile/joy_stan" target="_blank">
          <SiCodeforces
            size={26}
            className="text-white cursor-pointer hover:text-[#FA6006]"
          ></SiCodeforces>
        </a>

        <p
          onClick={handleOpenGmail}
          className={`bg-gradient-to-r cursor-pointer from-[#FA6006] to-white bg-clip-text text-transparent font-semibold`}
        >
          Hire Me
        </p>
      </nav>
      <Profile></Profile>
      <About></About>
      <MySkills></MySkills>
      <Projects></Projects>
      <div className="h-full w-[92vw] sm:w-[90vw] lg:w-[1200px] 2xl:w-[1400px] bg-[#212428] rounded-lg mb-20 flex flex-col justify-start items-center p-10">
        <div className="flex items-center gap-x-3 ml-2">
          <div className="h-[17px] w-[34px] bg-gradient-to-r from-[#FA6006] to-[#FFB58A] rounded-full"></div>
          <h4 className="text-2xl font-bold text-white">Contact with Me</h4>
        </div>

        <ContactForm></ContactForm>
      </div>
      <footer className="w-[100vw] lg:w-[99vw] shadow bg-[#212428]  overflow-hidden">
        <div className="w-screen p-4 flex md:items-center justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="" className="hover:underline">
              Joy Sakar™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
