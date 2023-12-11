import { Link } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
