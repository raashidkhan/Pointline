import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import arrow from "../../images/icons/arrow-right.svg"
import { Link } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      project1: file(relativePath: { eq: "projectSec-1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      project2: file(relativePath: { eq: "projectSec-2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      project3: file(relativePath: { eq: "projectSec-3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      project4: file(relativePath: { eq: "projectSec-4.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <section id="pointlineProjects" className="section-gap">
      <div className="pointlineProjects">
        <div className="pointlineProjects-heading margin-bottom-medium">
          <h2 className="heading-secondary">Our Projects</h2>
        </div>
        <div className="pointlineProjects-rowone">
          <div className="pointlineProjects-rowone--images">
            <div className="rowone-image">
              <Image
                fluid={data.project1.childImageSharp.fluid}
                alt="Architect building"
                classNameName="scale-image"
              ></Image>
            </div>
            <div className="rowone-image">
              <Image
                fluid={data.project2.childImageSharp.fluid}
                alt="Architect building"
                classNameName="scale-image"
              ></Image>
            </div>
          </div>
          <Link to="/projects" className="page-links ">
            <img src={arrow} alt=""></img>
            <span>more projects</span>
          </Link>
        </div>
        <div className="pointlineProjects-rowtwo">
          <h3 className="heading-quaternary">Design. Creativity.</h3>
          <div className="pointlineProjects-rowtwo--images">
            <div className="rowtwo-image">
              <Image
                fluid={data.project3.childImageSharp.fluid}
                alt="Architect building"
                classNameName="scale-image"
              ></Image>
            </div>
            <div className="rowtwo-image">
              <Image
                fluid={data.project4.childImageSharp.fluid}
                alt="Architect building"
                classNameName="scale-image"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
