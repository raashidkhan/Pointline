// import React, { useRef } from "react"
// import Image from "gatsby-image"
// import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"
// import facebook from "../../images/icons/facebook.svg"
// import twitter from "../../images/icons/twitter.svg"
// import instagram from "../../images/icons/instagram.svg"
// import arrow from "../../images/icons/arrow-right.svg"
// import { motion } from "framer-motion"
// import Preload from "../Preload"

// const Test = () => {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.25,
//       },
//     },
//   }

//   const item = {
//     hidden: { y: "50px", opacity: 0 },
//     show: {
//       y: "0",
//       opacity: 1,
//       transition: {
//         duration: 0.4,
//         ease: "easeOut",
//       },
//     },
//   }

//   const data = useStaticQuery(graphql`
//     {
//       heroImage: file(relativePath: { eq: "hero-image.jpg" }) {
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//       project1: file(relativePath: { eq: "project-1.jpg" }) {
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//       project2: file(relativePath: { eq: "project-2.jpg" }) {
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//       project3: file(relativePath: { eq: "project-3.jpg" }) {
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//       project4: file(relativePath: { eq: "project-4.jpg" }) {
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//       project5: file(relativePath: { eq: "project-5.jpg" }) {
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid_withWebp
//           }
//         }
//       }
//     }
//   `)
//   //HERO SLIDER STARTS
//   let heroSlider = useRef(null)
//   let isDown = false
//   let startX
//   let scrollLeft
//   const downHandle = e => {
//     isDown = true

//     startX = e.pageX - heroSlider.offsetLeft
//     scrollLeft = heroSlider.scrollLeft
//   }
//   const leaveHandle = e => {
//     isDown = false
//   }
//   const upHandle = e => {
//     isDown = false
//   }
//   const movehandle = e => {
//     if (!isDown) return
//     e.preventDefault()
//     const x = e.pageX - heroSlider.offsetLeft
//     const walk = (x - startX) * 3 //scroll-fast
//     heroSlider.scrollLeft = scrollLeft - walk
//   }
//   //HERO SLIDER ENDS

//   return (
//     <header>
//       <Preload></Preload>
//       <motion.div
//         variants={container}
//         initial="hidden"
//         animate="show"
//         className="hero section-gap"
//       >
//         <div className="hero-image">
//           <div className="hero-image--socialIcons">
//             <motion.a variants={item} href="#0">
//               <img src={facebook}></img>
//             </motion.a>
//             <motion.a variants={item} href="#0">
//               <img src={twitter} alt="pointline twitter icon"></img>
//             </motion.a>
//             <motion.a variants={item} href="#0">
//               <img src={instagram} alt="pointline instagram icon"></img>
//             </motion.a>
//           </div>
//           <motion.div variants={item} className="hero-image--img">
//             <Image
//               fluid={data.heroImage.childImageSharp.fluid}
//               alt="Architect building"
//               className="scale-image"
//             ></Image>
//           </motion.div>
//         </div>
//         <div className="hero-content">
//           <div className="hero-heading margin-bottom-medium">
//             <motion.h1 variants={item} className="heading-primary">
//               You Got space,
//               <br /> We got ideas.
//             </motion.h1>
//             <motion.h2 variants={item} className="heading-tertiary text-accent">
//               Pointline Architects
//             </motion.h2>
//           </div>
//           <div
//             className="hero-slider"
//             ref={el => {
//               heroSlider = el
//             }}
//             onMouseDown={downHandle}
//             onMouseLeave={leaveHandle}
//             onMouseUp={upHandle}
//             onMouseMove={movehandle}
//           >
//             <motion.div
//               //   variants={container}
//               className="hero-slider--projectCard"
//             >
//               <motion.div variants={item} className="projectimage">
//                 <Image
//                   fluid={data.project1.childImageSharp.fluid}
//                   alt="Architect building"
//                   className="scale-image"
//                 ></Image>
//               </motion.div>
//               <motion.p variants={item} className="projectName">
//                 River Valley
//               </motion.p>
//               <motion.h5 variants={item} className="projectAddress text-accent">
//                 Khopoli Mumbai
//               </motion.h5>
//             </motion.div>

//             <motion.div
//               //   variants={container}
//               className="hero-slider--projectCard"
//             >
//               <motion.div variants={item} className="projectimage">
//                 <Image
//                   fluid={data.project2.childImageSharp.fluid}
//                   alt="Architect building"
//                   className="scale-image"
//                 ></Image>
//               </motion.div>
//               <motion.p variants={item} className="projectName">
//                 River Valley
//               </motion.p>
//               <motion.h5 variants={item} className="projectAddress text-accent">
//                 Khopoli Mumbai
//               </motion.h5>
//             </motion.div>

//             <motion.div
//               //   variants={container}
//               className="hero-slider--projectCard"
//             >
//               <motion.div variants={item} className="projectimage">
//                 <Image
//                   fluid={data.project3.childImageSharp.fluid}
//                   alt="Architect building"
//                   className="scale-image"
//                 ></Image>
//               </motion.div>
//               <motion.p variants={item} className="projectName">
//                 River Valley
//               </motion.p>
//               <motion.h5 variants={item} className="projectAddress text-accent">
//                 Khopoli Mumbai
//               </motion.h5>
//             </motion.div>

//             <motion.div
//               //   variants={container}
//               className="hero-slider--projectCard"
//             >
//               <motion.div variants={item} className="projectimage">
//                 <Image
//                   fluid={data.project4.childImageSharp.fluid}
//                   alt="Architect building"
//                   className="scale-image"
//                 ></Image>
//               </motion.div>
//               <motion.p variants={item} className="projectName">
//                 River Valley
//               </motion.p>
//               <motion.h5 variants={item} className="projectAddress text-accent">
//                 Khopoli Mumbai
//               </motion.h5>
//             </motion.div>

//             <motion.div
//               //   variants={container}
//               className="hero-slider--projectCard"
//             >
//               <motion.div variants={item} className="projectimage">
//                 <Image
//                   fluid={data.project5.childImageSharp.fluid}
//                   alt="Architect building"
//                   className="scale-image"
//                 ></Image>
//               </motion.div>
//               <motion.p variants={item} className="projectName">
//                 River Valley
//               </motion.p>
//               <motion.h5 variants={item} className="projectAddress text-accent">
//                 Khopoli Mumbai
//               </motion.h5>
//             </motion.div>
//           </div>
//           <div className="project-controls">
//             <Link to="/projects" className="explore-project page-links">
//               <img src={arrow} alt=""></img>
//               <span>explore</span>
//             </Link>
//           </div>
//         </div>
//       </motion.div>

//       {/* <h1 className="test-word">NOTICE THE COLOR SHIFT</h1> */}
//     </header>
//   )
// }

// export default Test
