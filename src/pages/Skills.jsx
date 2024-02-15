const Skills = (props) => {
  return (
    <section id="skills" className="mx-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 text-center mt-24 mb-8">
        Skills
      </h2>
      <div id="languages">
        <h3 className="text-2xl font-semibold mb-4">Languages</h3>
        <div id="languages-grid" className="grid grid-cols-5">
          <div id="javascript">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              className="w-10"
            />
            <h4 className="mt-2">JavaScript</h4>
          </div>
          <div id="python">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
              className="w-10"
            />
            <h4 className="mt-2">Python</h4>
          </div>
          <div id="css">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              className="w-10"
            />
            <h4 className="mt-2">CSS</h4>
          </div>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              className="w-10"
            />
            <h4 className="mt-2">HTML</h4>
          </div>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
              className="w-10"
            />
            <h4 className="mt-2">SQL</h4>
          </div>
        </div>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Libraries & Frameworks</h3>
        <div id="libraries-frameworks-grid" className="grid grid-cols-5">
            <div id="react">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-10"/>
                <h4 className="mt-2">React</h4>
            </div>
            <div id="django">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" className="w-10"/>
                <h4 className="mt-2">Django</h4>
            </div>
            <div id="express">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" className="w-10"/>
                <h4 className="mt-2">Express</h4>
            </div>
            <div id="mongoose">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg" className="w-10"/>
                <h4 className="mt-2">Mongoose</h4>
            </div>
            <div id="tailwind">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-10"/>
                <h4 className="mt-2">Tailwind CSS</h4>
            </div>
        </div>
        <h3 className="text-2xl font-semibold mt-8 mb-4">Databases & Other</h3>
      </div>
    </section>
  );
};

export default Skills;
