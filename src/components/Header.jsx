import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="Header">
      <div>Zach Kurfirst</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
