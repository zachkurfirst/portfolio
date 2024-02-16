const Header = (props) => {
  return (
    <header className="flex justify-between text-sm sm:text-xl py-4 bg-sky-800 dark:bg-sky-950 text-sky-100 dark:border-b dark:border-sky-100 uppercase fixed top-0 left-0 right-0">
      <a href="#" className="hover:underline underline-offset-8 ml-4 sm:ml-6 hidden sm:inline">
        Zach Kurfirst
      </a>
      <a href="#" className="hover:underline underline-offset-8 ml-4 sm:ml-6 sm:hidden">
        ZK
      </a>
      <nav className="flex gap-4 sm:gap-8">
        <a href="#about" className="hover:underline underline-offset-8">
          About
        </a>
        <a href="#skills" className="hover:underline underline-offset-8">
          Skills
        </a>
        <a href="#projects" className="hover:underline underline-offset-8">
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
