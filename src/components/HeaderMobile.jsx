import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import Routes from "./Routes";

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
      className="flex justify-between items-center sm:hidden px-4 py-2"
    >
      <a href="#">
        <img src="public/assets/favicon-1.png" alt="icon" className="w-10" />
      </a>
      {/* render hamburger menu */}
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} direction="left" />
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
            className="fixed inset-x-0 top-16 pt-4 pb-8 pl-10 bg-sky-800 dark:bg-sky-950 border-b border-sky-100 text-xl"
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
                        velocity: 5,
                        delay: 0.1 + idx / 10,
                    }}
                    key={route.title}
                    className="hover:underline underline-offset-8"
                  >
                    <a href={route.href} onClick={() => setOpen(false)}>
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
  );
};

export default HeaderMobile;
