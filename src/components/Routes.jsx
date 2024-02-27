// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faAddressCard, faToolbox, faFlask, faComment } from "@fortawesome/free-solid-svg-icons";

const Routes = [
  {
    title: "Home",
    href: "#",
    icon: <FontAwesomeIcon icon={faHouse} className="mr-4" />,
  },
  {
    title: "About",
    href: "#about",
    icon: <FontAwesomeIcon icon={faAddressCard} className="mr-4" />,
  },
  {
    title: "Skills",
    href: "#skills",
    icon: <FontAwesomeIcon icon={faToolbox} className="mr-4" />,
  },
  {
    title: "Projects",
    href: "#projects",
    icon: <FontAwesomeIcon icon={faFlask} className="mr-4" />,
  },
  {
    title: "Contact",
    href: "#contact",
    icon: <FontAwesomeIcon icon={faComment} className="mr-4" />,
  },
];

export default Routes;
