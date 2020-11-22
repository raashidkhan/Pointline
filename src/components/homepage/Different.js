import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Different = () => {
  const data = useStaticQuery(graphql`
    {
      different: file(relativePath: { eq: "different.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section id="differentPointline" className="section-gap">
      <div className="differentPointline">
        <h3 className="heading-tertiary">DESIGNING WITH BALANCE AND CARE</h3>
        <div className="differentPointline-image margin-bottom-large">
          <Image
            fluid={data.different.childImageSharp.fluid}
            alt="Architect building"
            className="scale-image"
          ></Image>
        </div>
        <div className="differentPointline-content">
          <div className="differentPointline-content--heading">
            <hr className="underline margin-bottom-small"></hr>
            <h2 className="heading-secondary margin-bottom-medium">
              Why we are different
            </h2>
          </div>
          <article className="differentPointline-content--article">
            We at Pointline Architects, understand the importance of designing
            to satisfy clients. We are conscious of budgetary constraints and
            aim for buildings to be cost efficient. Additionally, the firm
            maintains a strong commitment to create design solutions that are
            individually tailored to suit the specific criteria for each
            project. We take our projects as an opportunity to test our skills
            and perform our best. We strive to learn and unleash something new
            in all of them. Thus, with every project we feel ourselves becoming
            more and more mature. This spirit of learning from every opportunity
            we get, is what keeps us going
          </article>
        </div>
      </div>
    </section>
  )
}

export default Different
