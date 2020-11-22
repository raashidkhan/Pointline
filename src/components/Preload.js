import React from "react"
import { motion } from "framer-motion"

const Preload = () => {
  return (
    <div className="pre-load">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100vh" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pre-loadBox"
      ></motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100vh" }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: "easeOut",
        }}
        className="pre-loadBox"
      ></motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100vh" }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          ease: "easeOut",
        }}
        className="pre-loadBox"
      ></motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100vh" }}
        transition={{
          duration: 0.5,
          delay: 0.6,
          ease: "easeOut",
        }}
        className="pre-loadBox"
      ></motion.div>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100vh" }}
        transition={{
          duration: 0.5,
          delay: 0.8,
          ease: "easeOut",
        }}
        className="pre-loadBox"
      ></motion.div>
    </div>
  )
}

export default Preload
