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
    <div className="flex mb-10 flex-row justify-between w-[1400px]">
      <div className="w-[800px] bg-[#212428] rounded-lg p-10">
        <div className="flex items-center gap-x-3 ml-2">
          <div className="h-[17px] w-[34px] bg-gradient-to-r from-[#FA6006] to-[#FFB58A] rounded-full"></div>
          <h4 className="text-2xl font-bold">About Me</h4>
        </div>
        <div className="text-lg mt-7 ml-1">
          I craft high-performance mobile apps, breathing life into ideas with
          Flutter and Kotlin. My passion lies in optimizing code, designing
          intuitive interfaces, and delivering smooth user journeys. From
          concept to launch,I translate vision into reality, making mobile
          devices come alive. Currently started to explore the world of web
          development.
        </div>
        <div className="text-lg mt-4 ml-1 font-semibold text-[#23C7AC]">
          I have one year plus of exprience with Flutter development.
        </div>
      </div>
      <div className="h-full w-[560px] bg-[#212428] rounded-lg p-10">
        <div className="flex items-center gap-x-3 mb-4">
          <div className="h-[17px] w-[34px] bg-gradient-to-r from-[#FA6006] to-[#FFB58A] rounded-full"></div>
          <h4 className="text-2xl font-bold">My Details</h4>
        </div>
        <div className="flex gap-8">
          <div className="flex flex-col gap-3">
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

          <div className="flex flex-col gap-3">
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

            <div className="flex font-bold items-center gap-2 text-sm text-white">
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
