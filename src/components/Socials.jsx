// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Socials = [
  {
    title: "Email",
    href: "mailto:zachmk11@gmail.com",
    icon: <FontAwesomeIcon icon={faEnvelope} className="" size="xl" />,
  },
  {
    title: "GitHub",
    href: "https://github.com/zachkurfirst",
    icon: <FontAwesomeIcon icon={faGithub} className="" size="xl" />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/zachary-kurfirst/",
    icon: <FontAwesomeIcon icon={faLinkedin} className="" size="xl" />,
  },
];

export default Socials;
