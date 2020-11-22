import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Team = () => {
  const data = useStaticQuery(graphql`
    {
      team: allStrapiTeams(sort: { fields: strapiId, order: ASC }) {
        nodes {
          position
          strapiId
          member_details
          name
          photo {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Team" />
      <header id="teamHeader">
        <div className="teamHeader">
          <h2 className="page-headings text-black">Our Team</h2>
        </div>
      </header>
      <section id="teamFounder">
        {/*============================ Team Member start==================================== */}
        {data.team.nodes.map((item, index) => {
          return (
            <div key={index} className="teamFounder">
              <div className="teamFounder-image">
                <Image
                  fluid={item.photo.childImageSharp.fluid}
                  alt="Pointline About"
                  classNameName="scale-image"
                ></Image>
              </div>
              <div className="teamFounder-content">
                <h2 className="heading-tertiary">{item.name}</h2>
                <h3 className="heading-quaternary text-accent margin-bottom-small">
                  {item.position}
                </h3>
                <p>{item.member_details}</p>
              </div>
            </div>
          )
        })}

        {/* ============================Team Member ends==================*/}

        {/*============================ Team Member start==================================== */}
        {/* <div className="teamFounder">
          <div className="teamFounder-image">
            <Image
              fluid={data.tabish.childImageSharp.fluid}
              alt="Pointline About"
              classNameName="scale-image"
            ></Image>
          </div>
          <div className="teamFounder-content">
            <h2 className="heading-tertiary">AR MOHD TABISH</h2>
            <h3 className="heading-quaternary text-accent margin-bottom-small">
              Co Founder
            </h3>
            <p>
              He holds a degree in bachelor of architecture and with much
              experience in the same field playing with some small and big
              projects. His architectural background has given him a strong
              foundation in designing and planning many vital projects. He is
              specialized in contemporary architecture and mix-use development
              which is the need of the hour.
            </p>
          </div>
        </div> */}
        {/* ============================Team Member ends==================*/}
      </section>
    </Layout>
  )
}

export default Team
