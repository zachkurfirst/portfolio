// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

const Skills = (props) => {
  return (
    <section id="skills" className="flex flex-col items-center mx-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 text-center mt-24 mb-4">
        <FontAwesomeIcon icon={faToolbox} className="mr-2"/>Skills
        </h2>
      <div id="skills-container" className="border-2 rounded bg-sky-800 text-sky-100 p-10">
        <div id="languages-section">
          <h3 className="text-2xl font-semibold mb-4">Languages</h3>
          <div id="languages-list" className="flex flex-wrap gap-8 lg:gap-16">
            <div id="javascript" className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript icon"
                className="w-10"
              />
              <h4 className="mt-2">JavaScript</h4>
            </div>
            <div id="python" className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python icon"
                className="w-10"
              />
              <h4 className="mt-2">Python</h4>
            </div>
            <div id="css" className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS icon"
                className="w-10"
              />
              <h4 className="mt-2">CSS</h4>
            </div>
            <div id="html" className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML icon"
                className="w-10"
              />
              <h4 className="mt-2">HTML</h4>
            </div>
            <div id="sql" className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="SQL icon"
                className="w-10"
              />
              <h4 className="mt-2">SQL</h4>
            </div>
          </div>
        </div>
        <div id="libraries-frameworks-section" className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">
            Libraries & Frameworks
          </h3>
          <div id="libraries-frameworks-list" className="flex flex-wrap gap-8 lg:gap-16">
            <div id="react" className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React icon"
                className="w-10"
              />
              <h4 className="mt-2">React</h4>
            </div>
            <div id="django" className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt="Django icon"
                className="w-10"
              />
              <h4 className="mt-2">Django</h4>
            </div>
            <div id="express" className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express icon"
                className="w-10"
              />
              <h4 className="mt-2">Express</h4>
            </div>
            <div id="mongoose" className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg" alt="Mongoose icon"
                className="w-10"
              />
              <h4 className="mt-2">Mongoose</h4>
            </div>
            <div id="tailwind" className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS icon"
                className="w-10"
              />
              <h4 className="mt-2">Tailwind CSS</h4>
            </div>
          </div>
        </div>
        <div id="databases-other-section" className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">
            Databases & Other
          </h3>
          <div id="databases-other-list" className="flex flex-wrap gap-8 lg:gap-16">
            <div id="mongodb" className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB icon"
                className="w-10"
              />
              <h4 className="mt-2">MongoDB</h4>
            </div>
            <div id="postgresql" className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL icon"
                className="w-10"
              />
              <h4 className="mt-2">PostgreSQL</h4>
            </div>
            <div id="nodejs" className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js icon"
                className="w-10"
              />
              <h4 className="mt-2">Node.js</h4>
            </div>
            <div id="git" className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git icon"
                className="w-10"
              />
              <h4 className="mt-2">Git</h4>
            </div>
            <div id="github" className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub icon"
                className="w-10"
              />
              <h4 className="mt-2">GitHub</h4>
            </div>
            <div id="json" className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" alt="JSON icon"
                className="w-10"
              />
              <h4 className="mt-2">JSON</h4>
            </div>
            <div id="postman" className="flex flex-col items-center">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman icon"
                className="w-10"
              />
              <h4 className="mt-2">Postman</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
