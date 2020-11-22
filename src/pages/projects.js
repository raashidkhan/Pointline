import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectHeader from "../components/projectspage/ProjectHeader"
import { useStaticQuery, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"
import Gallery from "../components/projectspage/ProjectDetails"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      project: allStrapiProjects(sort: { fields: strapiId, order: DESC }) {
        nodes {
          name
          address
          detail
          image {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          strapiId
          images {
            pics: project_pics {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            id
            project_Name
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Projects" />
      <ProjectHeader></ProjectHeader>
      <section id="projectDesc">
        {data.project.nodes.map((item, index) => {
          return (
            <div key={item.strapiId} className="imageFrontcard">
              <div className="imageFrontcard-content contentFront-content">
                <h2 className="heading-tertiary">{item.name}</h2>
                <hr className="underline margin-bottom-small" />
                <h3 className="heading-quaternary text-accent margin-bottom-small">
                  {item.address}
                </h3>
                <article>
                  <ReactMarkdown source={item.detail} />
                </article>
              </div>

              <div className="imageFrontcard-image imageFront-image">
                <Gallery
                  key={item.strapiId}
                  images={item.images}
                  numOfImages={item.images.length}
                />
              </div>
            </div>
          )
        })}
      </section>
    </Layout>
  )
}

export default Projects
