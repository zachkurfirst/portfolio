import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </nav>
      <h1>My Portfolio</h1>
    </header>
  );
};

export default Header;
