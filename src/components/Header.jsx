import { Link } from "react-router-dom";
// import { Link } from "react-scroll";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="Header">
      <a href="#">Zach Kurfirst</a>
      <nav className="nav">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
};

export default Header;
