import { RiFlutterFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import Image from "next/image";
import { FaIcons } from "react-icons/fa";
import { FaGithub, FaAppStore } from "react-icons/fa6";
import { BsBrowserEdge } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";

type projectsProp = {
  projectName: string;
  desc: string;
  img: string;
  inPlayStore: boolean;
  inAppStore?: boolean; // New prop for App Store availability
  link: string;
  source: string;
  playStoreLink: string;
  appStoreLink?: string; // New prop for App Store link
  inGithub: boolean;
};

export default function ProjectCard({
  projectName,
  desc,
  img,
  inPlayStore,
  inAppStore = false, // Default to false
  link,
  source,
  playStoreLink,
  appStoreLink = "", // Default to empty string
  inGithub,
}: projectsProp) {
  return (
    <div className="h-[255px] w-[300px] rounded-2xl bg-[#F6EDFF] group">
      <div className="relative top-[-74px] left-[18px] h-[265px] w-[265px] rounded-[20px] bg-[#946dbb] overflow-hidden">
        <Image
          src={img}
          alt=""
          height={191}
          width={265}
          className="rounded-[20px] border border-gray-200 transition duration-500  ease-in-out group-hover:filter group-hover:blur-md"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out gap-8">
          <a href={link} target="_blank">
            <BsBrowserEdge
              color="#FA6006"
              size={30}
              className="cursor-pointer"
            ></BsBrowserEdge>
          </a>
          {inGithub && (
            <a href={source} target="_blank">
              {" "}
              <FaGithub
                color="#FA6006"
                size={30}
                className="cursor-pointer"
              ></FaGithub>
            </a>
          )}
          {inPlayStore && (
            <a href={playStoreLink} target="_blank">
              <FaGooglePlay
                color="#FA6006"
                size={30}
                className="cursor-pointer"
              ></FaGooglePlay>
            </a>
          )}
          {inAppStore && ( // Conditionally render App Store icon
            <a href={appStoreLink} target="_blank">
              <FaAppStore
                color="#FA6006"
                size={30}
                className="cursor-pointer"
              ></FaAppStore>
            </a>
          )}
        </div>
      </div>
      <div className="relative bottom-[68px] px-6">
        <div className="text-slate-800 text-[12px]">{desc}</div>
        <div className="text-[#FA6006] font-semibold flex items-center text-[16px]">
          {projectName}
        </div>
      </div>
    </div>
  );
}