import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="h-full w-[92vw] sm:w-[90vw]  lg:w-[1200px] 2xl:w-[1400px] bg-[#212428] rounded-lg mb-10 flex flex-col justify-start items-center p-8 sm:p-10">
      <div className="flex items-center gap-x-3 ml-2">
        <div className="h-[17px] w-[34px] bg-gradient-to-r from-[#FA6006] to-[#FFB58A] rounded-full"></div>
        <h4 className="text-2xl font-bold text-white">My Projects</h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16 2xl:gap-x-20 gap-y-28 mt-28">
        <ProjectCard
          desc={`India's first racing fantasy game.`}
          img="/images/podiumpe.png"
          projectName="Podiumpe mobile app"
          inPlayStore={false}
          link="https://www.podiumpe.com/"
          playStoreLink=""
          source=""
          inGithub={false}
        ></ProjectCard>

        <ProjectCard
          desc="Pregnancy care app for indian women."
          img="/images/pregamate.png"
          projectName="Pregamate mobile app"
          inPlayStore={true}
          link="https://pregamate.com/"
          playStoreLink="https://play.google.com/store/apps/details?id=com.pregamate.mobile_application"
          source=""
          inGithub={false}
        ></ProjectCard>

        <ProjectCard
          desc="An app for creating Esports contests."
          img="/images/gamaru.png"
          projectName="Gamaru mobile app"
          inPlayStore={false}
          link="https://gamaru.online/"
          playStoreLink=""
          source="https://github.com/joysarkar18/gamaru-mobile-app"
          inGithub={true}
        ></ProjectCard>
        <ProjectCard
          desc="Flutter package for glassmorphism effect."
          img="/images/glossy.png"
          projectName="Flutter package glossy"
          inPlayStore={false}
          link="https://pub.dev/packages/glossy"
          playStoreLink=""
          source="https://github.com/joysarkar18/glossy"
          inGithub={true}
        ></ProjectCard>

        <ProjectCard
          desc="Official website for coding club MAKAUT."
          img="/images/hackaut.png"
          projectName="Hackaut official website"
          inPlayStore={false}
          link="https://hackaut.netlify.app/"
          playStoreLink=""
          source="https://github.com/joysarkar18/Hackaut-web"
          inGithub={true}
        ></ProjectCard>
        <ProjectCard
          desc="Just a hobby app for tracking my expenses"
          img="/images/transacton.png"
          projectName="Expanse Tracker App"
          inPlayStore={false}
          link="https://github.com/joysarkar18/Expense-Tracker-app"
          playStoreLink=""
          source="https://github.com/joysarkar18/Expense-Tracker-app"
          inGithub={true}
        ></ProjectCard>
      </div>
    </div>
  );
}
