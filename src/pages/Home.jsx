// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faComment } from "@fortawesome/free-solid-svg-icons";

const Home = (props) => {
  return (
    <section id="hero" className="bg-circuit-board border-b-2 border-sky-950 dark:bg-circuit-board-dark w-full h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-sky-950 dark:text-sky-100 mb-4">
        Hello there!
      </h1>
      <h2 className="text-xl font-semibold sm:text-2xl max-w-screen-md mx-6 text-sky-950 dark:text-sky-100 mb-6">
        My name is Zach Kurfirst, and I&rsquo;m a full-stack software engineer. Welcome to my corner of the web.
      </h2>
      <div className="flex justify-center">
        <a href="#projects" className="btn sm:btn-lg btn-primary mr-4">
        <FontAwesomeIcon icon={faFlask} className="mr-2"/>
        Projects
        {/* <FontAwesomeIcon icon={faFlask} className="ml-2"/> */}
        </a>
        <a href="#contact" className="btn sm:btn-lg btn-secondary">
        <FontAwesomeIcon icon={faComment} className="mr-2"/>
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Home;