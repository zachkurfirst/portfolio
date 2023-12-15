const Home = (props) => {
  return (
    <section id="hero" className="flex flex-col my-44 text-center">
      <h1 className="text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4">
        Hello there!
      </h1>
      <h2 className="text-3xl text-slate-900 dark:text-slate-100 mb-6">
        My name is Zach Kurfirst, and I'm a full stack software engineer.
      </h2>
      <div className="flex justify-center">
        <a href="#projects" className="btn-lg btn-primary mr-4">
          Projects
        </a>
        <a href="#contact" className="btn-lg btn-secondary">
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Home;
