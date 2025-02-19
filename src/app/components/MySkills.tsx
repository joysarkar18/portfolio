import Spline from "@splinetool/react-spline";
import Skill from "./Skill";
import { Suspense } from "react";

export default function MySkills() {
  return (
    <div className="z-10 w-[92vw] sm:w-[90vw] lg:w-[1200px] 2xl:w-[1200px] flex sm:flex-row flex-col justify-between mb-10">
      <div className="lg:w-[410px] block sm:w-0 w-[92vw] h-[92vw] lg:h-auto sm:mb-0 mb-10 sm:hidden lg:block 2xl:w-[400px] bg-[#212428] rounded-lg py-6 px-6">
        <Spline scene="https://prod.spline.design/8fm28dvTSnvXtr7w/scene.splinecode" />
      </div>
      <div className="w-[92vw] sm:w-[90vw] lg:w-[720px] 2xl:w-[780px] bg-[#212428] rounded-lg p-8 sm:lg:p-8 2xl:p-10">
        <div className="flex items-center gap-x-3 mb-1">
          <div className="h-[17px] w-[34px] bg-gradient-to-r from-[#23C7AC] to-[#a3f1ee] rounded-full"></div>
          <h4 className="text-2xl font-bold text-white">About My Skills</h4>
        </div>
        <div className="flex flex-wrap lg:justify-start justify-center gap-x-5 sm:gap-x-8 gap-y-2">
          <Skill
            height={58}
            width={58}
            img="/images/flutter.png"
            skillName="FLUTTER"
          ></Skill>
          <Skill
            height={45}
            width={45}
            img="/images/android.png"
            skillName="ANDROID"
          ></Skill>
          <Skill
            height={46}
            width={46}
            img="/images/dart.png"
            skillName="DART"
          ></Skill>
          <Skill
            height={55}
            width={55}
            img="/images/kotlin.png"
            skillName="KOTLIN"
          ></Skill>
          <Skill
            height={70}
            width={70}
            img="/images/jaava.png"
            skillName="JAVA"
          ></Skill>
          <Skill
            height={40}
            width={40}
            img="/images/sql.png"
            skillName="SQL"
          ></Skill>
          <Skill
            height={70}
            width={70}
            img="/images/node.png"
            skillName="NODEJS"
          ></Skill>
          <Skill
            height={65}
            width={65}
            img="/images/js.png"
            skillName="JS"
          ></Skill>
          <Skill
            height={50}
            width={50}
            img="/images/react.png"
            skillName="REACT"
          ></Skill>
          <Skill
            height={58}
            width={58}
            img="/images/next.png"
            skillName="NEXTJS"
          ></Skill>
          <Skill
            height={45}
            width={45}
            img="/images/tailwind.png"
            skillName="TAILWIND"
          ></Skill>

          <Skill
            height={58}
            width={58}
            img="/images/redux.png"
            skillName="REDUX"
          ></Skill>

          <Skill
            height={40}
            width={40}
            img="/images/html.png"
            skillName="HTML"
          ></Skill>
          <Skill
            height={56}
            width={56}
            img="/images/typescript.png"
            skillName="TS"
          ></Skill>
          <Skill
            height={58}
            width={58}
            img="/images/go.png"
            skillName="GOLANG"
          ></Skill>
          <div className="sm:block hidden">
            <Skill
              height={58}
              width={58}
              img="/images/git.png"
              skillName="GITHUB"
            ></Skill>
          </div>
        </div>
      </div>
    </div>
  );
}
