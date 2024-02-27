import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

const Header = () => {
  return (
    <header className="bg-sky-800 dark:bg-sky-950 text-sky-100 dark:border-b dark:border-sky-100 uppercase fixed top-0 left-0 right-0 z-10">
      <nav className="">
        <HeaderMobile />
        <HeaderDesktop />
      </nav>
    </header>
  );
};

export default Header;
