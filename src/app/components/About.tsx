import { IoPersonSharp } from "react-icons/io5";
import { SiFreelancer } from "react-icons/si";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { LiaSchoolSolid } from "react-icons/lia";
import { IoCheckmarkCircle } from "react-icons/io5";
export default function About() {
  return (
    <div className="z-10 flex mb-10 flex-col gap-y-10 lg:gap-y-0 lg:flex-row items-center lg:justify-between w-[90vw] lg:w-[1200px] 2xl:w-[1400px]">
      <div className="w-[92vw] sm:w-[90vw] lg:w-[650px] 2xl:w-[800px] bg-[#212428] rounded-lg p-6 sm:p-10">
        <div className="flex items-center gap-x-3 ml-2">
          <div className="h-[17px] w-[34px] bg-gradient-to-r from-[#FA6006] to-[#FFB58A] rounded-full"></div>
          <h4 className="text-2xl font-bold text-white">About Me</h4>
        </div>
        <div className="text-md mt-7 ml-1 text-white">
        Flutter |Android Developer, I’m the person who turns your app ideas into reality. I craft high-performance, smooth, and intuitive mobile apps that make your phone feel like magic. Whether it’s optimizing code for peak performance or designing interfaces that just work, I’m all about creating experiences that users love. Let’s build something awesome together—because who doesn’t want an app that feels like it was made by wizards?
        </div>
        <div className="text-lg mt-4 ml-1 font-semibold text-[#23C7AC]">
          I have two years+ of exprience with Android & Flutter development.
        </div>
      </div>
      <div className="h-full w-[92vw] sm:w-[90vw] lg:w-[510px] 2xl:w-[560px] bg-[#212428] rounded-lg p-6 sm:p-10">
        <div className="flex items-center gap-x-3 mb-8 2xl:mb-4">
          <div className="h-[17px] w-[34px] bg-gradient-to-r from-[#FA6006] to-[#FFB58A] rounded-full"></div>
          <h4 className="text-2xl font-bold text-white">My Details</h4>
        </div>
        <div className="flex gap-1 2xl:gap-8">
          <div className="flex flex-col w-[130px] gap-3">
            <div className="flex font-bold items-center gap-2 text-sm text-[#23C7AC]">
              <IoPersonSharp></IoPersonSharp>
              AGE :
            </div>
            <div className="flex font-bold items-center gap-2 text-sm text-[#23C7AC]">
              <SiFreelancer></SiFreelancer>
              FRELANCE :
            </div>
            <div className="flex font-bold items-center gap-2 text-sm text-[#23C7AC]">
              <FaPhoneFlip></FaPhoneFlip>
              PHONE :
            </div>
            <div className="flex font-bold items-center gap-2 text-sm text-[#23C7AC]">
              <MdEmail></MdEmail>
              E-Mail :
            </div>
            <div className="flex font-bold items-center gap-2 text-sm text-[#23C7AC]">
              <LiaSchoolSolid></LiaSchoolSolid>
              COLLEGE :
            </div>

            <div className="flex font-bold items-center gap-2 text-sm text-[#23C7AC]">
              <IoSchoolSharp></IoSchoolSharp>
              DEGREE :
            </div>
            <div className="flex font-bold items-center gap-2 text-sm text-[#23C7AC]">
              <FaLocationDot></FaLocationDot>
              LOCATION :
            </div>
          </div>

          <div className="flex ml-2 sm:ml-0 flex-col gap-3">
            <div className="flex font-bold items-center gap-2 text-sm text-white">
              21
            </div>
            <div className="flex font-bold items-center gap-2 text-sm text-white">
              <IoCheckmarkCircle color="#50C878"></IoCheckmarkCircle> Available
            </div>
            <div className="flex font-bold items-center gap-2 text-sm text-white">
              +91-9064983473
            </div>
            <div className="flex font-bold items-center gap-2 text-sm text-white">
              joysarkar8171@gmail.com
            </div>
            <div className="flex font-bold items-center gap-2 text-sm text-white">
              MAKAUT
            </div>
            <div className="flex sm:hidden font-bold items-center gap-2 text-sm text-white">
              B.Tech in CSE
            </div>
            <div className="sm:flex hidden  font-bold items-center gap-2 text-sm text-white">
              B.Tech in Computer Science & Engineering
            </div>
            <div className="flex font-bold items-center gap-2 text-sm text-white">
              Kolkata, West Bengal, India
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
