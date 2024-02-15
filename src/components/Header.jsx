const Header = (props) => {
  return (
    <header className="flex justify-between sm:text-xl text-sm py-4 bg-sky-800 dark:bg-sky-950 text-slate-100 dark:border-b dark:border-slate-100 uppercase fixed top-0 left-0 right-0">
      <a href="#" className="hover:underline underline-offset-8 ml-4 sm:ml-6">
        Zach Kurfirst
      </a>
      <nav className="flex">
        <a href="#about" className="hover:underline underline-offset-8 mr-2 sm:mr-6">
          About
        </a>
        <a href="#skills" className="hover:underline underline-offset-8 mr-2 sm:mr-6">
          Skills
        </a>
        <a href="#projects" className="hover:underline underline-offset-8 mr-2 sm:mr-6">
          Projects
        </a>
        <a href="#contact" className="hover:underline underline-offset-8 mr-4 sm:mr-6">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
