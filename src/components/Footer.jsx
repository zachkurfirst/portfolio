// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer = (props) => {
  return (
    <footer className="flex items-center bg-sky-800 text-sky-100 py-6">
      <p className="text-center flex-1">© Zach Kurfirst. All Rights Reserved.</p>
      <a href="#" className="mr-4 hover:ease-in"><FontAwesomeIcon icon={faCircleArrowUp} size="2x"/></a>
    </footer>
  );
};

export default Footer;