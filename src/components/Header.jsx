import "./Header.css";

const Header = (props) => {
  return (
    <header className="flex justify-between text-xl py-4 bg-sky-800 dark:bg-sky-950 text-slate-100 dark:border-b dark:border-slate-100 uppercase fixed top-0 left-0 right-0">
      <a href="#" className="pl-6 hover:underline underline-offset-8">
        Zach Kurfirst
      </a>
      <nav className="flex">
        <a href="#projects" className="hover:underline underline-offset-8 mr-6">
          Projects
        </a>
        <a href="#about" className="hover:underline underline-offset-8 mr-6">
          About
        </a>
        <a href="#contact" className="hover:underline underline-offset-8 mr-6">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
