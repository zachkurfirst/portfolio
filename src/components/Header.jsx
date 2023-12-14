import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="Header">
      <Link to="">Zach Kurfirst</Link>
      <nav className="nav">
        <Link to="#projects">Projects</Link>
        <Link to="#about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
