import { useState, useEffect } from "react";

// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";

const Projects = (props) => {
  // Projects is an array, create state and set useState to empty array
  const [projects, setProjects] = useState([]);

  const getProjectsData = async () => {
    try {
      const response = await fetch("./projects.json");
      const data = await response.json();
      console.log("data:", data);
      setProjects(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // console.log("use effect");
    getProjectsData();
  }, []);

  return (
    <section id="projects" className="mx-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 text-center mt-24 mb-8">
      <FontAwesomeIcon icon={faDiagramProject} className="mr-2"/>Projects
      </h1>
      {projects && (
        <div id="projects-container" className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            return (
              <div id="project" key={idx} className="">
                <img
                  src={project.image}
                  alt={project.name}
                  className="aspect-16/9 rounded-t-lg"
                />
                <div id="project-contents" className="flex flex-col justify-between border-l border-r border-b rounded-b-lg p-6 shadow-xl md:h-56 lg:h-52">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {project.name}
                  </h2>
                  <p className="text-slate-900 dark:text-slate-100 mb-4">
                    {project.description}
                  </p>
                  <div id="button-container" className="mb-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mr-4"
                    >
                      Visit app
                    </a>
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      View repo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Projects;
