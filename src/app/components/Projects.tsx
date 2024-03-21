import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="h-full w-[70vw] bg-[#212428] rounded-lg mb-10 flex flex-col justify-start items-center p-10">
      <div className="flex items-center gap-x-3 ml-2">
        <div className="h-[17px] w-[34px] bg-gradient-to-r from-[#FA6006] to-[#FFB58A] rounded-full"></div>
        <h4 className="text-2xl font-bold">My Projects</h4>
      </div>

      <div className="grid grid-cols-3 gap-x-20 gap-y-28 mt-24">
        <ProjectCard
          desc={`India's first racing fantasy game.`}
          img="/images/podiumpe.png"
          projectName="Podiumpe mobile app"
          inPlayStore={false}
          link="aajdhjkasdh"
          playStoreLink="afjdakjdkalsd"
          source="safjkkfsljsdklfj"
        ></ProjectCard>

        <ProjectCard
          desc="Pregnancy care app for indian women."
          img="/images/pregamate.png"
          projectName="Pregamate mobile app"
          inPlayStore={true}
          link=""
          playStoreLink=""
          source=""
        ></ProjectCard>

        <ProjectCard
          desc="An app for creating Esports contests."
          img="/images/gamaru.png"
          projectName="Gamaru mobile app"
          inPlayStore={false}
          link=""
          playStoreLink=""
          source=""
        ></ProjectCard>
        <ProjectCard
          desc="Flutter package for glassmorphism effect."
          img="/images/glossy.png"
          projectName="Flutter package glossy"
          inPlayStore={false}
          link=""
          playStoreLink=""
          source=""
        ></ProjectCard>

        <ProjectCard
          desc="Official website for coding club MAKAUT."
          img="/images/hackaut.png"
          projectName="Hackaut official website"
          inPlayStore={false}
          link=""
          playStoreLink=""
          source=""
        ></ProjectCard>
        <ProjectCard
          desc="Official website for coding club MAKAUT."
          img="/images/transacton.png"
          projectName="Hackaut official website"
          inPlayStore={false}
          link=""
          playStoreLink=""
          source=""
        ></ProjectCard>
      </div>
    </div>
  );
}
