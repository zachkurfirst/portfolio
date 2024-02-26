const Home = (props) => {
  return (
    <section id="hero" className="bg-circuit-board border-b-2 border-sky-950 dark:bg-circuit-board-dark w-full h-screen flex flex-col justify-center text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-sky-950 dark:text-sky-100 mb-4">
        Hello there!
      </h1>
      <h2 className="text-xl font-semibold sm:text-2xl mx-6 text-sky-950 dark:text-sky-100 mb-6">
        My name is Zach Kurfirst, and I'm a full stack software engineer.
      </h2>
      <div className="flex justify-center">
        <a href="#projects" className="btn sm:btn-lg btn-primary mr-4">
          Projects
        </a>
        <a href="#contact" className="btn sm:btn-lg btn-secondary">
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Home;