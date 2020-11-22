import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import residential from "../images/icons/residential-housing.svg"
// import commercial from "../images/icons/commercial.svg"
// import groupHousing from "../images/icons/network-connection-online-houses-homes.svg"
// import religious from "../images/icons/religious-building.svg"
// import institutional from "../images/icons/institutional-building.svg"
// import publicBuilding from "../images/icons/Bank.svg"
// import interior from "../images/icons/interior-designing.svg"
// import hvac from "../images/icons/ventilation.svg"
// import masterPlanning from "../images/icons/Expand.svg"

const Services = () => {
  const data = useStaticQuery(graphql`
    {
      image1: file(relativePath: { eq: "sg-1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image2: file(relativePath: { eq: "sg-2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      image3: file(relativePath: { eq: "sg-3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Services" />

      <section id="servicesBanner">
        <div className="servicesBanner">
          <h2 className="page-headings">Services</h2>
          <h2 className="heading-primary">Architecture & Designs</h2>
          <p>
            We are committed to create amazing design solutions that are
            individually tailored to suit the specific criteria for each
            project.
          </p>
        </div>
        <div className="servicesGallery">
          <div className="servicesGallery-images">
            <Image fluid={data.image1.childImageSharp.fluid} />
          </div>
          <div className="servicesGallery-images">
            <Image fluid={data.image2.childImageSharp.fluid} />
          </div>
          <div className="servicesGallery-images">
            <Image fluid={data.image3.childImageSharp.fluid} />
          </div>
        </div>
      </section>

      <section id="servicesDetail">
        <div className="servicesDetail">
          <h2 className="heading-secondary">Our Business</h2>
          <hr className="underline margin-bottom-medium" />
          <div className="servicesDetail-cardContainer">
            <div className="servicesDetails-card">
              <p className="servicesDetails-title  margin-bottom-small">
                ARCHITECTURE AND PLANNING
              </p>
              <ul className="servicesDetails-para">
                <li>Site analysis</li>
                <li>Concept designing</li>
                <li>Functional sketches</li>
                <li>Feasibility studies</li>
                <li>Detail drawings</li>
                <li>Site supervision</li>
              </ul>
            </div>

            <div className="servicesDetails-card">
              <p className="servicesDetails-title  margin-bottom-small">
                ENGINEERING
              </p>
              <ul className="servicesDetails-para">
                <li>Structural drawing</li>
                <li>
                  Co-ordination between structural and architectural drawings
                </li>
                <li>detail estimation of projects</li>
                <li>tender documentation</li>
              </ul>
            </div>

            <div className="servicesDetails-card">
              <p className="servicesDetails-title  margin-bottom-small">
                INTERIOR DESIGN
              </p>
              <ul className="servicesDetails-para">
                <li>Detail requirement analysis</li>
                <li>3D Visualization</li>
                <li>Furniture & colour combination with surrounding</li>
                <li>Audio-visual programming</li>
                <li>Detail drawings</li>
                <li>Site supervision</li>
              </ul>
            </div>

            <div className="servicesDetails-card">
              <p className="servicesDetails-title  margin-bottom-small">
                LANDSCAPING
              </p>
              <ul className="servicesDetails-para">
                <li>
                  Research of soil and environmental condition of the said area
                </li>
                <li>Softscape design</li>
                <li>Hardscape design</li>
                <li>
                  Selection of different landscape elements and supervision
                </li>
              </ul>
            </div>

            <div className="servicesDetails-card">
              <p className="servicesDetails-title  margin-bottom-small">
                MASTER PLANNING & URBAN DESIGNING
              </p>
              <ul className="servicesDetails-para">
                <li>Research and development</li>
                <li>
                  Conservation, rehabilitation of downtown and old town areas
                </li>
                <li>Smart cities/town development</li>
                <li>Proposing ideas for future development</li>
              </ul>
            </div>
            <div className="servicesDetails-card">
              <p className="servicesDetails-title  margin-bottom-small">
                PROJECT MANAGEMENT
              </p>
              <ul className="servicesDetails-para">
                <li>Development of budget and cost</li>
                <li>Development of schedule of work and supervision</li>
                <li>Assistance in prequalification of contracts</li>
                <li>Suggestions and proposal of products to be used</li>
              </ul>
            </div>

            <div className="servicesDetails-card">
              <p className="servicesDetails-title  margin-bottom-small">
                VASTU
              </p>
              <ul className="servicesDetails-para">
                <li>Site analysis</li>
                <li>Design as per the vastu guidelines</li>
              </ul>
            </div>

            <div className="servicesDetails-card">
              <p className="servicesDetails-title  margin-bottom-small">
                FURNITURE & PRODUCT DESIGNING
              </p>
              <ul className="servicesDetails-para">
                <li>Designing of furniture according to the built space</li>
                <li>Innovative use of materials</li>
                <li>Multiuse furniture designing</li>
                <li>Product desingning for landscaping & interior </li>
                <li>Detail drawings</li>
                <li>Designing of signages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Services
