import React from "react"
import arrow from "../../images/icons/arrow-right.svg"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      aboutImage: file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <section id="aboutPointline" className="section-gap">
      <div className="aboutPointline">
        <div className="aboutPointline-content">
          <h2 className="heading-secondary">About Pointline</h2>
          <hr className="underline margin-bottom-medium"></hr>
          <article className="margin-bottom-small">
            Pointline Architects, a firm established by young architects holding
            interest in a wide range of urban designing and interiors projects
            which includes affordable housing, apartments, bungalows , banquet
            halls etc. We are currently operating from our two branches located
            at Mumbai and Patna.
            <br />
            <br></br>
            We take our projects as an opportunity to test our skills and
            perform our best. We strive to learn and unleash something new in
            all of them. Thus, with every project we feel ourselves becoming
            more and more mature. This spirit of learning from every opportunity
            we get, is what keeps us going
          </article>
          <Link
            to="/about"
            className="page-links"
            aria-label="Read More about Pointline"
          >
            <img src={arrow} alt=""></img>
            <span>read more</span>
          </Link>
        </div>
        <div className="aboutPointline-image">
          <Image
            fluid={data.aboutImage.childImageSharp.fluid}
            alt="Architect building"
            className="scale-image"
          ></Image>
        </div>
      </div>
    </section>
  )
}

export default About
