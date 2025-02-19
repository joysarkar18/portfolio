import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="z-10 h-full w-[92vw] sm:w-[90vw]  lg:w-[1200px] 2xl:w-[1200px] bg-[#212428] rounded-lg mb-10 flex flex-col justify-start items-center p-8 sm:p-10">
      <div className="flex items-center gap-x-3 ml-2">
        <div className="h-[17px] w-[34px] bg-gradient-to-r from-[#FA6006] to-[#FFB58A] rounded-full"></div>
        <h4 className="text-2xl font-bold text-white">My Projects</h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16 2xl:gap-x-20 gap-y-28 mt-28">
        <ProjectCard
          desc="App for drivers to find duties."
          img="/images/CabsWale.png"
          projectName="CabsWale App (70k+ users)"
          inPlayStore={true}
          inAppStore={true} // Add this if available
          link="https://cabswale.in/"
          playStoreLink="https://play.google.com/store/apps/details?id=com.app.cabswalle&pli=1"
          appStoreLink="https://apps.apple.com/in/app/cabswale/id6464491782" // Add App Store link
          source=""
          inGithub={false}
        ></ProjectCard>
        <ProjectCard
          desc={`India's first racing fantasy game.`}
          img="/images/podiumpe.png"
          projectName="Podiumpe mobile app"
          inPlayStore={false}
          inAppStore={false} // Not available in App Store
          link="https://www.podiumpe.com/"
          playStoreLink=""
          source=""
          inGithub={false}
        ></ProjectCard>

<ProjectCard
          desc="Fresh produce straight from farmers."
          img="/images/organictap.png"
          projectName="Organic Tap (5k+ users)"
          inPlayStore={true}
          inAppStore={true} // Add this if available
          link="https://organictap.in/"
          playStoreLink="https://play.google.com/store/apps/details?id=com.bwi.app.organictap&hl=en_IN"
          appStoreLink="https://apps.apple.com/in/app/organic-tap/id1594808043" // Add App Store link
          source=""
          inGithub={false}
        ></ProjectCard>

        <ProjectCard
          desc="Pregnancy care app for Indian women."
          img="/images/pregamate.png"
          projectName="Pregamate mobile app"
          inPlayStore={true}
          inAppStore={true} // Add this if available
          link="https://pregamate.com/"
          playStoreLink="https://play.google.com/store/apps/details?id=com.pregamate.mobile_application"
          appStoreLink="https://apps.apple.com/in/app/pregamate-pregnancy-care-app/id6450717932" // Add App Store link
          source=""
          inGithub={false}
        ></ProjectCard>

        <ProjectCard
          desc="An app for creating Esports contests."
          img="/images/gamaru.png"
          projectName="Gamaru mobile app"
          inPlayStore={false}
          inAppStore={false} // Not available in App Store
          link="https://gamaru.online/"
          playStoreLink=""
          source="https://github.com/joysarkar18/gamaru-mobile-app"
          inGithub={true}
        ></ProjectCard>
        <ProjectCard
          desc="Flutter package for glassmorphism effect."
          img="/images/glossy.png"
          projectName="Package glossy (95+ likes)"
          inPlayStore={false}
          inAppStore={false} // Not applicable
          link="https://pub.dev/packages/glossy"
          playStoreLink=""
          source="https://github.com/joysarkar18/glossy"
          inGithub={true}
        ></ProjectCard>

        {/* <ProjectCard
          desc="Just a hobby app for tracking my expenses"
          img="/images/transacton.png"
          projectName="Expense Tracker App"
          inPlayStore={false}
          inAppStore={false} // Not applicable
          link="https://github.com/joysarkar18/Expense-Tracker-app"
          playStoreLink=""
          source="https://github.com/joysarkar18/Expense-Tracker-app"
          inGithub={true}
        ></ProjectCard> */}
      </div>
    </div>
  );
}