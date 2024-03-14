import { DotLottiePlayer } from "@dotlottie/react-player";
import { MdCloudDownload } from "react-icons/md";

export default function Home() {
  return (
    <div className="h-[80vh] w-[70vw] bg-[#212428] rounded-lg mb-10 flex justify-center items-center p-10">
      <div className="h-[60vh]">
        <DotLottiePlayer
          src="/animations/developer.lottie"
          autoplay
          loop
        ></DotLottiePlayer>
      </div>

      <div className="h-[60vh] flex flex-col justify-center ml-20">
        <div className="flex items-center gap-x-3 ml-2">
          <div className="h-[17px] w-[34px] bg-gradient-to-r from-[#FA6006] to-[#FFB58A] rounded-full"></div>
          <h4 className="text-2xl font-bold">HELLO, MY NAME IS</h4>
        </div>
        <div className="flex gap-x-3">
          <h1 className="text-[90px] font-extrabold bg-gradient-to-r from-[#FA6006] to-white bg-clip-text text-transparent">
            JOY
          </h1>
          <h1 className="text-[90px] font-extrabold">SARKAR</h1>
        </div>
        <div className="flex items-center gap-x-3 ml-2">
          <div className="h-[17px] w-[54px] bg-gradient-to-r from-[#FA6006] to-[#FFB58A] rounded-full"></div>
          <h4 className="text-2xl font-bold">I AM A SOFTWARE DEVELOPER</h4>
        </div>
        <div className="text-lg mt-8 w-[32vw] ml-1">
          From Kolkata, West Bengal. I have rich exprience in Mobile app
          development, also I am good at Fullstack web development. I love to
          talk with about our unique.
        </div>

        <div className="flex mt-16 gap-6">
          <div className="h-[40px] w-[154px] bg-gradient-to-r cursor-pointer from-[#FA6006] to-[#FFB58A] rounded-full flex justify-center items-center text-black font-medium text-[15px]">
            <MdCloudDownload className="h-30 mr-2"></MdCloudDownload> Download
            CV
          </div>
          <div className="h-[40px] w-[124px] bg-black rounded-full flex justify-center items-center text-white font-medium text-[15px]">
            Hire Me
          </div>
        </div>
      </div>
    </div>
  );
}
