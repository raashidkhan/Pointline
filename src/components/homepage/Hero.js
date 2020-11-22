import React, { useRef } from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import facebook from "../../images/icons/facebook.svg"
import twitter from "../../images/icons/twitter.svg"
import instagram from "../../images/icons/instagram.svg"
import youtube from "../../images/icons/youtube.svg"
import arrow from "../../images/icons/arrow-right.svg"
import { motion } from "framer-motion"

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      heroImage: file(relativePath: { eq: "hero-image.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      project1: file(relativePath: { eq: "project-1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      project2: file(relativePath: { eq: "project-2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      project3: file(relativePath: { eq: "project-3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      project4: file(relativePath: { eq: "project-4.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      project5: file(relativePath: { eq: "project-5.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  //HERO SLIDER STARTS
  let heroSlider = useRef(null)
  let isDown = false
  let startX
  let scrollLeft
  const downHandle = e => {
    isDown = true

    startX = e.pageX - heroSlider.offsetLeft
    scrollLeft = heroSlider.scrollLeft
  }
  const leaveHandle = e => {
    isDown = false
  }
  const upHandle = e => {
    isDown = false
  }
  const movehandle = e => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - heroSlider.offsetLeft
    const walk = (x - startX) * 3 //scroll-fast
    heroSlider.scrollLeft = scrollLeft - walk
  }
  //HERO SLIDER ENDS

  return (
    <header>
      <div className="hero section-gap">
        <div className="hero-image">
          <div className="hero-image--socialIcons">
            <motion.a
              initial={{ y: "50px", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ delay: 1 }}
              href="https://m.facebook.com/Pointline-Architects-112065133882771/"
            >
              <img src={facebook}></img>
            </motion.a>
            <motion.a
              initial={{ y: "50px", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ delay: 1.2 }}
              href="https://twitter.com/PointArchitects?s=08"
            >
              <img src={twitter} alt="pointline twitter icon"></img>
            </motion.a>
            <motion.a
              initial={{ y: "50px", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ delay: 1.3 }}
              href="https://instagram.com/pointlinearchitects?igshid=mx83dlks90nx"
            >
              <img src={instagram} alt="pointline instagram icon"></img>
            </motion.a>
            <motion.a
              initial={{ y: "50px", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ delay: 1.4 }}
              href="https://youtu.be/P9vEVJvLBFw"
            >
              <img src={youtube} alt="pointline youtube icon"></img>
            </motion.a>
          </div>
          <motion.div
            initial={{ y: "50px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="hero-image--img"
          >
            <Image
              fluid={data.heroImage.childImageSharp.fluid}
              alt="Architect building"
              className="scale-image"
            ></Image>
          </motion.div>
        </div>
        <div className="hero-content">
          <div className="hero-heading margin-bottom-medium">
            <motion.h1
              initial={{ y: "50px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1.7,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="heading-primary"
            >
              You Got space,
              <br /> We got ideas.
            </motion.h1>
            <motion.h2
              initial={{ y: "50px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1.8,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="heading-tertiary text-accent"
            >
              Pointline Architects
            </motion.h2>
          </div>
          <div
            className="hero-slider"
            ref={el => {
              heroSlider = el
            }}
            onMouseDown={downHandle}
            onMouseLeave={leaveHandle}
            onMouseUp={upHandle}
            onMouseMove={movehandle}
          >
            <motion.div
              initial={{ y: "50px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1.9,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="hero-slider--projectCard"
            >
              <motion.div
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1.9,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="projectimage"
              >
                <Image
                  fluid={data.project1.childImageSharp.fluid}
                  alt="Architect building"
                  className="scale-image"
                ></Image>
              </motion.div>
              <motion.p
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="projectName"
              >
                Faizan Villa
              </motion.p>
              <motion.h5
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="projectAddress text-accent"
              >
                Mubarakpur, Azamgarh
              </motion.h5>
            </motion.div>

            <motion.div
              initial={{ y: "50px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 2.2,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="hero-slider--projectCard"
            >
              <motion.div
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.2,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="projectimage"
              >
                <Image
                  fluid={data.project2.childImageSharp.fluid}
                  alt="Architect building"
                  className="scale-image"
                ></Image>
              </motion.div>
              <motion.p
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.3,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="projectName"
              >
                New Hyderabad Apartment
              </motion.p>
              <motion.h5
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.4,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="projectAddress text-accent"
              >
                Lucknow,UP
              </motion.h5>
            </motion.div>

            <motion.div
              initial={{ y: "50px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 2.5,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="hero-slider--projectCard"
            >
              <motion.div
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.5,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="projectimage"
              >
                <Image
                  fluid={data.project3.childImageSharp.fluid}
                  alt="Architect building"
                  className="scale-image"
                ></Image>
              </motion.div>
              <motion.p
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.6,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="projectName"
              >
                Naushad Residence
              </motion.p>
              <motion.h5
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.7,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="projectAddress text-accent"
              >
                Gorakhpur, UP
              </motion.h5>
            </motion.div>

            <motion.div
              initial={{ y: "50px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 2.5,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="hero-slider--projectCard"
            >
              <motion.div
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.5,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="projectimage"
              >
                <Image
                  fluid={data.project4.childImageSharp.fluid}
                  alt="Architect building"
                  className="scale-image"
                ></Image>
              </motion.div>
              <motion.p
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.6,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="projectName"
              >
                Ajwa Dryfruits
              </motion.p>
              <motion.h5
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.7,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="projectAddress text-accent"
              >
                Shah Ganj
              </motion.h5>
            </motion.div>

            <motion.div
              initial={{ y: "50px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 2.5,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="hero-slider--projectCard"
            >
              <motion.div
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.5,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="projectimage"
              >
                <Image
                  fluid={data.project5.childImageSharp.fluid}
                  alt="Architect building"
                  className="scale-image"
                ></Image>
              </motion.div>
              <motion.p
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.6,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="projectName"
              >
                Utkarsh Mansion
              </motion.p>
              <motion.h5
                initial={{ y: "50px", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 2.7,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="projectAddress text-accent"
              >
                Near PGI , Lucknow
              </motion.h5>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: "50px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 2.8,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="project-controls"
          >
            <Link
              to="/projects"
              initial={{ y: "50px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 2.9,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="explore-project page-links"
            >
              <img src={arrow} alt=""></img>
              <span>projects</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* <h1 className="test-word">NOTICE THE COLOR SHIFT</h1> */}
    </header>
  )
}

export default Hero
