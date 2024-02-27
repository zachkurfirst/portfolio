import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import Routes from "./Routes";

// Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const HeaderMobile = () => {
  // keeps track of menu state
  const [isOpen, setOpen] = useState(false);
  // acts as a label to <div> el, referencing menu container
  const ref = useRef(null);

  // close menu when user clicks outside
  useClickAway(ref, () => {
    console.log("OUTSIDE CLICKED");
    setOpen(false);
  });

  return (
    <div
      id="header-mobile"
      ref={ref}
      className="flex justify-between items-center sm:hidden px-4 py-4"
    >
      <a href="#" onClick={() => setOpen(false)}>
        <img src="assets/favicon-1.png" alt="icon" className="w-10" />
      </a>
      <div className="flex items-center">
        <a
          href="https://drive.google.com/file/d/1l0w8Zk-aY3DOdd1tUJ2-c590OSaGJ7Fa/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary py-2 text-sm"
          onClick={() => setOpen(false)}
        >
          Resume
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-2" />
        </a>
        {/* render hamburger menu */}
        <Hamburger
          toggled={isOpen}
          size={20}
          toggle={setOpen}
          direction="left"
        />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              // start as invisible
              initial={{ opacity: 0 }}
              // fade-in: animate to full visible
              animate={{ opacity: 1 }}
              // fade-out
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-16 pt-4 pb-8 pl-8 bg-sky-800 dark:bg-sky-950 border-b border-sky-100 text-lg"
            >
              <ul className="flex flex-col gap-4">
                {Routes.map((route, idx) => {
                  return (
                    <motion.li
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                        velocity: 10,
                        delay: 0.1 + idx / 10,
                      }}
                      key={route.title}
                      className="hover:underline underline-offset-8"
                    >
                      <a href={route.href} onClick={() => setOpen(false)}>
                        {route.icon}
                        <span>{route.title}</span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeaderMobile;
