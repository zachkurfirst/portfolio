// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Header = (props) => {
  return (
    <header className="flex justify-between items-center text-sm sm:text-xl bg-sky-800 dark:bg-sky-950 text-sky-100 border-b border-sky-300 dark:border-b dark:border-sky-100 uppercase fixed top-0 left-0 right-0 z-10 px-6 py-4">
      {/* <a href="#" className="hover:underline underline-offset-8 ml-4 sm:ml-6 hidden sm:inline">
        <img src="/assets/favicon-1.png" alt="ZK icon" className="w-8"/>
      </a>
      <a href="#" className="hover:underline underline-offset-8 ml-4 sm:ml-6 sm:hidden">
        ZK
      </a> */}
      <nav id="site-nav" className="flex gap-4 sm:gap-8">
        <a href="#about" className="hover:underline underline-offset-8">
          About
        </a>
        <a href="#skills" className="hover:underline underline-offset-8">
          Skills
        </a>
        <a href="#projects" className="hover:underline underline-offset-8">
          Projects
        </a>
        <a href="#contact" className="hover:underline underline-offset-8 mr-4 sm:mr-6">
          Contact
        </a>
      </nav>
      <nav id="social-nav" className="hidden sm:flex sm:gap-4 md:gap-8">
        <a href="mailto:zachmk11@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} className="hover:text-sky-400 transition-all"/></a>
        <a href="https://github.com/zachkurfirst" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className="hover:text-sky-400 transition-all"/></a>
        <a href="https://www.linkedin.com/in/zachary-kurfirst/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="hover:text-sky-400 transition-all"/></a>
        <a href="https://drive.google.com/file/d/1l0w8Zk-aY3DOdd1tUJ2-c590OSaGJ7Fa/view?usp=sharing" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFileLines} className="hover:text-sky-400 transition-all"/></a>
      </nav>
    </header>
  );
};

export default Header;
