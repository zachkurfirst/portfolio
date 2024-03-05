import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import Routes from "./Routes";
import Socials from "./Socials";

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
            <motion.aside
              // start as invisible
              initial={{ opacity: 0 }}
              // fade-in: animate to full visible
              animate={{ opacity: 1 }}
              // fade-out
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-x-0 top-16 pt-4 pb-12 px-8 bg-sky-800 dark:bg-sky-950 border-b border-sky-100 text-lg divide-y divide-solid"
            >
              <ul id="site-links" className="flex flex-col gap-4 pb-6">
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
                <div id="social-container" className="flex flex-col items-center pt-6">
                <h3 className="mb-2">Let&rsquo;s Connect</h3>
                <ul className="flex gap-6">
                  {Socials.map((social) => {
                    return (
                      <li key={social.title}>
                        <a href={social.href} target="_blank" rel="noopener noreferrer">
                          {social.icon}
                        </a>
                      </li>
                    )
                  })}
              </ul>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeaderMobile;
