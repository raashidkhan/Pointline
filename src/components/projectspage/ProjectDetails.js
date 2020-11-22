import React from "react"
import Image from "gatsby-image"
import { motion, AnimatePresence } from "framer-motion"

const ProjectDetails = props => {
  const [count, setCount] = React.useState(0)

  const handleNext = () => {
    count <= props.numOfImages - 2 ? setCount(count + 1) : setCount(0)
  }

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <div>
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: "1" }}
            exit={{ opacity: 0 }}
            key={count}
          >
            <Image fluid={props.images[count].pics.childImageSharp.fluid} />
          </motion.div>
          <span className="gallery-dots">
            {props.images.map((dot, index) => {
              return (
                <span
                  key={index}
                  className={count === index ? "active-dot" : "disable-dot"}
                ></span>
              )
            })}
          </span>
        </div>
      </AnimatePresence>

      <button className="imageNextBtn" onClick={handleNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="63.946"
          height="25.725"
          viewBox="0 0 63.946 25.725"
        >
          <g
            id="Group_56"
            data-name="Group 56"
            transform="translate(10254.699 -5935.946)"
          >
            <line
              id="Line_4"
              data-name="Line 4"
              y1="0.587"
              x2="62.54"
              transform="translate(-10254.689 5949.113)"
              fill="none"
              stroke="#4F6072"
              strokeWidth="5"
            />
            <line
              id="Line_5"
              data-name="Line 5"
              y1="12.506"
              x2="11.127"
              transform="translate(-10202.627 5948.5)"
              fill="none"
              stroke="#4F6072"
              strokeWidth="5"
            />
            <line
              id="Line_6"
              data-name="Line 6"
              y1="0.587"
              x2="16.443"
              transform="translate(-10203.921 5937.41) rotate(45)"
              fill="none"
              stroke="#4F6072"
              strokeLinecap="square"
              strokeWidth="5"
            />
          </g>
        </svg>
      </button>
    </>
  )
}

export default ProjectDetails
