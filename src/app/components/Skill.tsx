import { IoTriangleSharp } from "react-icons/io5";
import Image from "next/image";
type skillProps = {
  skillName: string;
  img: string;
  height: number;
  width: number;
};
export default function Skill({ skillName, img, height, width }: skillProps) {
  return (
    <div className="flex flex-col items-center justify-end group h-28 ">
      <div className="group-hover:block hidden bg-gradient-to-r from-[#FA6006] to-[#FFB58A] text-[10px] py-[2px] px-3 rounded-lg font-bold text-black">
        {skillName}
      </div>
      <IoTriangleSharp
        size={12}
        color="#f18f56"
        className="relative top-[3px] hidden group-hover:block"
      ></IoTriangleSharp>
      <div className="h-20 w-20 rounded-full bg-white group-hover:bg-gradient-to-r from-[#FA6006] to-[#FFB58A] flex justify-center items-center">
        <Image
          src={img}
          alt="image"
          width={width}
          height={height}
          className={`${skillName === "FLUTTER" ? "mr-1" : "mr-0"}`}
        ></Image>
      </div>
    </div>
  );
}
