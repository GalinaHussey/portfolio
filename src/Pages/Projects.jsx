import Works from "../Components/ProjectCards";
import SectionTitle from "../Components/SectionTitle";

function Projects() {
  return (
    <div className="flex justify-center w-full" id="projects">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full ">
          <SectionTitle title="PROJECTS" subtitle="What I have done so far" />
        </div>
        <Works />
      </div>
    </div>
  );
}

export default Projects;
