"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "@dotlottie/react-player/dist/index.css";
import Profile from "./components/Profile";
import About from "./components/About";
import MySkills from "./components/MySkills";
import { RiFlutterFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import Image from "next/image";

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
      <div className="h-full w-[70vw] bg-[#212428] rounded-lg mb-10 flex flex-col justify-start items-center p-10">
        <div className="flex items-center gap-x-3 ml-2">
          <div className="h-[17px] w-[34px] bg-gradient-to-r from-[#FA6006] to-[#FFB58A] rounded-full"></div>
          <h4 className="text-2xl font-bold">My Projects</h4>
        </div>

        <div className="grid grid-cols-3 gap-x-20 gap-y-28 mt-24">
          <div className="h-[271px] w-[320px] rounded-2xl bg-[#F6EDFF]">
            <div className="relative top-[-74px] left-[15px] h-[241px] w-[290px] rounded-2xl bg-[#946dbb]">
              <Image
                src={"/images/podiumpe.png"}
                alt=""
                height={201}
                width={290}
                className="rounded-xl border border-gray-200"
              ></Image>
            </div>
            <div className="relative bottom-5 px-6">
              <div className="text-slate-800 text-[13px]">
                India's first racing fantasy game.
              </div>
              <div className="text-[#FA6006] font-semibold flex items-center text-[16px]">
                Podiumpe mobile app
              </div>
            </div>
          </div>
          <div className="h-[271px] w-[320px] rounded-2xl bg-[#F6EDFF]">
            <div className="relative top-[-74px] left-[15px] h-[241px] w-[290px] rounded-2xl bg-[#946dbb]">
              <Image
                src={"/images/pregamate.png"}
                alt=""
                height={201}
                width={290}
                className="rounded-xl border border-gray-200"
              ></Image>
            </div>
            <div className="relative bottom-5 px-6">
              <div className="text-slate-800 text-[13px]">
                Pregnancy care app for indian women.
              </div>
              <div className="text-[#FA6006] font-semibold flex items-center text-[16px]">
                Pregamate mobile app
              </div>
            </div>
          </div>
          <div className="h-[271px] w-[320px] rounded-2xl bg-[#F6EDFF]">
            <div className="relative top-[-74px] left-[15px] h-[241px] w-[290px] rounded-2xl bg-[#946dbb]">
              <Image
                src={"/images/gamaru.png"}
                alt=""
                height={201}
                width={290}
                className="rounded-xl border border-gray-200"
              ></Image>
            </div>
            <div className="relative bottom-5 px-6">
              <div className="text-slate-800 text-[13px]">
                An app for creating Esports contests.
              </div>
              <div className="text-[#FA6006] font-semibold flex items-center text-[16px]">
                Gamaru mobile app
              </div>
            </div>
          </div>
          <div className="h-[271px] w-[320px] rounded-2xl bg-[#F6EDFF]">
            <div className="relative top-[-74px] left-[15px] h-[241px] w-[290px] rounded-2xl bg-[#946dbb]">
              <Image
                src={"/images/glossy.png"}
                alt=""
                height={201}
                width={290}
                className="rounded-xl border border-gray-200"
              ></Image>
            </div>
            <div className="relative bottom-5 px-6">
              <div className="text-slate-800 text-[13px]">
                A flutter package for glassmorphic effect.
              </div>
              <div className="text-[#FA6006] font-semibold flex items-center text-[16px]">
                Flutter package Glossy
              </div>
            </div>
          </div>
          <div className="h-[271px] w-[320px] rounded-2xl bg-[#F6EDFF]">
            <div className="relative top-[-74px] left-[15px] h-[241px] w-[290px] rounded-2xl bg-[#946dbb]">
              <Image
                src={"/images/hackaut.png"}
                alt=""
                height={201}
                width={290}
                className="rounded-xl border border-gray-200"
              ></Image>
            </div>
            <div className="relative bottom-5 px-6">
              <div className="text-slate-800 text-[13px]">
                Official website for coding club MAKAUT.
              </div>
              <div className="text-[#FA6006] font-semibold flex items-center text-[16px]">
                Hackaut official website
              </div>
            </div>
          </div>
          <div className="h-[271px] w-[320px] rounded-2xl bg-[#F6EDFF]">
            <div className="relative top-[-74px] left-[15px] h-[241px] w-[290px] rounded-2xl bg-[#946dbb]">
              <Image
                src={"/images/transacton.png"}
                alt=""
                height={201}
                width={290}
                className="rounded-xl border border-gray-200"
              ></Image>
            </div>
            <div className="relative bottom-5 px-6">
              <div className="text-slate-800 text-[13px]">
                Official website for coding club MAKAUT.
              </div>
              <div className="text-[#FA6006] font-semibold flex items-center text-[16px]">
                Hackaut official website
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
