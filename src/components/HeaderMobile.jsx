// import { useClickAway } from "react-use";
// import { useRef } from "react";
import { useState } from "react";
import { Turn as Hamburger } from 'hamburger-react'
// import { AnimatePresence, motion } from "framer-motion";
// import { routes } from "../routes";

const HeaderMobile = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div id="header-mobile" className="sm:hidden pl-4 py-2">
            <Hamburger toggled={isOpen} size={20} toggle={setOpen} direction="left" />
        </div>
    )
}

export default HeaderMobile;