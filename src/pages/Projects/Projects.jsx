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
    <div>
      <h1>Projects</h1>
      {projects && (
        <div className="Projects">
          {projects.map((project, idx) => {
            return (
              <div key={idx} className="card">
                <img src={project.image} alt={project.name} />
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="btns-container">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Visit app</button>
                  </a>
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>View repo</button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Projects;
