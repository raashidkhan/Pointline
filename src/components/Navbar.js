import React, { useState } from "react"
// import Logo from "../images/icons/logo-small-dark.svg"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "gatsby"

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  const handleOpen = e => {
    setOpen(true)
  }
  const handleClose = e => {
    setOpen(false)
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          viewBox="0 0 94.72 62.313"
        >
          <g
            id="Group_60"
            data-name="Group 60"
            transform="translate(4326.553 2933.234)"
          >
            <path
              id="Path_35"
              data-name="Path 35"
              d="M-4326.553-2870.92l46.735-62.313,29.354,39.01h-39.01l6.051-8.111h16.866l-13.261-17.252-36.563,48.667"
              // fill="#EF8A8A"
            />
            <path
              id="Path_36"
              data-name="Path 36"
              d="M-4219-3696.113h9.573l-8.05,11.314h51.567l6.092,8.051h-74.2Z"
              transform="translate(-72.016 805.784)"
              // fill="#EF8A8A"
            />
          </g>
        </svg>
      </Link>
      <div className="navbar-menu">
        <a className="nav-phone" href="tel:+91-9795687556 ">
          +91-9795687556
        </a>
        <div
          // ref={el => (menu = el)}
          onClick={handleOpen}
          className="menu-btn"
        >
          <button aria-label="Menu Button"></button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            exit={{ x: "100vw" }}
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2 }}
            // ref={el => (close = el)}
            className="navfull"
            onClick={handleClose}
          >
            <ul className="navfull-link">
              <motion.li
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="navfull-link--item"
              >
                <Link to="/">Home</Link>
              </motion.li>
              <motion.li
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="navfull-link--item"
              >
                <Link to="/about">About</Link>
              </motion.li>
              <motion.li
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="navfull-link--item"
              >
                <Link to="/projects">Projects</Link>
              </motion.li>
              <motion.li
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.55 }}
                className="navfull-link--item"
              >
                <Link to="/services">Services</Link>
              </motion.li>
              <motion.li
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="navfull-link--item"
              >
                <Link to="/team">Team</Link>
              </motion.li>

              <motion.li
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.75 }}
                className="navfull-link--item"
              >
                <Link to="/contact">Contact</Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
