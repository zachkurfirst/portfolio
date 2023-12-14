import { useState, useEffect } from "react";
import "./Projects.css";

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
    <>
      <h1 className="text-4xl font-bold text-center mb-8">Projects</h1>
      {projects && (
        <div className="flex justify-center flex-wrap gap-5">
          {projects.map((project, idx) => {
            return (
              <div key={idx} className="flex flex-col max-w-md pb-8">
                <img src={project.image} alt={project.name} className="rounded-t-lg"/>
                <div className="border-l border-r border-b rounded-b-lg p-4 shadow-xl">
                <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                <p className="mb-4">{project.description}</p>
                <div className="mb-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-12 mr-4">Visit app</button>
                  </a>
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-12">View repo</button>
                  </a>
                </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Projects;
