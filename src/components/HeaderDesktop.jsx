// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const HeaderDesktop = (props) => {
  return (
    <div
      id="header-desktop"
      className="hidden md:flex md:justify-between md:items-center p-4"
    >
      <div id="left-nav" className="flex items-center gap-6 text-lg">
      <a href="#">
        <img src="assets/favicon-1.png" alt="icon" className="w-10" />
      </a>
        <a href="#about" className="hover:underline underline-offset-8">
          About
        </a>
        <a href="#projects" className="hover:underline underline-offset-8">
          Projects
        </a>
        <a href="#skills" className="hover:underline underline-offset-8">
          Skills
        </a>
        <a
          href="#contact"
          className="hover:underline underline-offset-8 mr-4 sm:mr-6"
        >
          Contact
        </a>
      </div>
      <div id="right-nav" className="flex items-center gap-8">
        <div id="social-icons" className="flex items-center gap-6 text-xl">
          <a
            href="mailto:zachmk11@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="hover:text-sky-400 transition-all"
            />
          </a>
          <a
            href="https://github.com/zachkurfirst"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:text-sky-400 transition-all"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/zachary-kurfirst/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="hover:text-sky-400 transition-all"
            />
          </a>
        </div>
        <a
          href="https://drive.google.com/file/d/1l0w8Zk-aY3DOdd1tUJ2-c590OSaGJ7Fa/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary py-2 text-sm"
        >
          Resume
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default HeaderDesktop;
