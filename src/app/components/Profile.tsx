import { DotLottiePlayer } from "@dotlottie/react-player";
import { MdCloudDownload } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
export default function Profile() {
  return (
    <div className="z-10 h-full w-[92vw] sm:w-[90vw] lg:w-[1200px] 2xl:w-[1200px] bg-[#212428] rounded-lg mb-10 flex justify-center items-center p-8 sm:p-10">
      <div className="h-[60vh] lg:block hidden">
  <img className="lg:mt-20 xl:mt-0 rounded-lg" src="/images/joy_bg.png" alt="" />
      </div>

      <div className="h-full flex flex-col justify-center lg:ml-20">
        <div className="ml-3 xs:ml-0 flex items-center gap-x-3 ml-2">
          <div className="h-[17px] w-[34px] bg-gradient-to-r from-[#FA6006] to-[#FFB58A] rounded-full"></div>
          <h4 className="text-2xl font-bold text-white">HELLO, MY NAME IS</h4>
        </div>
        <div className="flex gap-x-3">
          <h1 className="ml-3 xs:ml-0 text-[13vw] sm:text-[90px] font-extrabold bg-gradient-to-r from-[#FA6006] to-white bg-clip-text text-transparent">
            JOY
          </h1>
          <h1 className="text-[13vw] sm:text-[90px] font-extrabold text-white">
            SARKAR
          </h1>
        </div>
        <div className="mb-6 w-[92vw] sm:w-[500px] block lg:hidden">
        <img  src="/images/joy_bg.png" alt="" />
        </div>
        <div className="flex items-center gap-x-3 ml-2">
          <div className="h-[17px] w-[54px] bg-gradient-to-r from-[#FA6006] to-[#FFB58A] rounded-full"></div>
          <h4 className="text-[4vw] sm:text-2xl font-bold text-white">
            I AM A SOFTWARE DEVELOPER
          </h4>
        </div>
        <div className="text-lg mt-4 lg:mt-8 w-full sm:w-[560px] ml-1 px-2 text-white">
          From Kolkata, West Bengal. I have rich exprience in Mobile app
          development, also I am good at Fullstack web development. I love to
          talk with about our unique.
        </div>

        <div className="flex ml-2 mt-8 lg:mt-16 gap-6">
          <a
            href="https://drive.google.com/file/d/1fGy26da7rkoz6V7aYjKrDAZzSJgKU8Vu/view?usp=sharing"
            target="_blank"
          >
            <div className="h-[40px] w-[154px] bg-gradient-to-r cursor-pointer from-[#FA6006] to-[#FFB58A] rounded-full flex justify-center items-center text-black font-medium text-[15px]">
              <MdCloudDownload className="h-30 mr-2"></MdCloudDownload> Download
              CV
            </div>
          </a>
          <a href="https://github.com/joysarkar18" target="_blank">
            <div className="h-[40px] w-[124px] bg-black rounded-full gap-2 cursor-pointer flex justify-center items-center text-white font-medium text-[15px]">
              <FaGithub></FaGithub>
              GitHub
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
