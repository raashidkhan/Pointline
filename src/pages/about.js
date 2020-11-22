import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Aboutpage = () => {
  const data = useStaticQuery(graphql`
    {
      aboutHero: file(relativePath: { eq: "arc-mac.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      aboutVision: file(relativePath: { eq: "about-hero.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      showCaseImage1: file(relativePath: { eq: "show1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      showCaseImage2: file(relativePath: { eq: "show2.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      showCaseImage3: file(relativePath: { eq: "show3.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      showCaseImage4: file(relativePath: { eq: "show4.jpg" }) {
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
      <SEO title="About" />
      <header id="aboutIntro">
        <div className="aboutIntro">
          <div className="aboutIntro-image">
            <Image
              fluid={data.aboutHero.childImageSharp.fluid}
              alt="Pointline About"
              classNameName="scale-image"
            ></Image>
          </div>
          <div className="aboutIntro-content">
            <article className="aboutIntro-content--heading">
              <h1 className="heading-primary margin-bottom-medium">
                Pointline Architects. We are growing creative Architect firm.
              </h1>
            </article>
            <article className="aboutIntro-content--para">
              <p className="margin-bottom-small">
                Pointline Architects, a firm established by young architects
                holding interest in a wide range of urban designing and
                interiors projects which includes affordable housing,
                apartments, bungalows , banquet halls etc.
              </p>
              <p>
                <strong>
                  We delivers a bespoke sustainable service to our clients in
                  the field of Architecture , interiors and urban designing.
                </strong>
              </p>
            </article>
          </div>
        </div>

        <article className="aboutDetails">
          Our aim is to apply new ideas and creativity with an approach that
          departs from the conventional model to create a project that stands
          out in every aspect. We provide simplicity and enthusiasm to take up
          even the most complex challenges. We believe that an open-minded
          vision and the ability to execute it at its best, completes the
          purpose of art. The firm constantly works on research, development and
          implementation of innovative and efficient design strategies. The
          ultimate goal that binds our work and drives us, is finding the
          smartest solutions for each and every project.
        </article>
      </header>

      <section id="pointlineVision" className="section-gap">
        <div className="pointlineVision">
          <div className="pointlineVision-content">
            <h2 className="heading-secondary">Our Vision</h2>
            <hr className="underline margin-bottom-medium" />
            <p className="margin-bottom-small">
              To be viewed as a respected architectural firm, providing high
              quality design and services to our clients with honesty and
              integrity. The mission we strive each day for excellence in
              bringing our valued client's ideas to life.
            </p>
            <a href="https://instagram.com/pointlinearchitects?igshid=mx83dlks90nx">
              Explore our work at Instagram
            </a>
          </div>

          <div className="pointlineVision-image">
            <Image
              fluid={data.aboutVision.childImageSharp.fluid}
              alt="Pointline Vision"
            ></Image>
          </div>
        </div>
      </section>

      <section id="whyUs">
        <div className="whyUs">
          <h2 className="heading-secondary">Why Choose Us</h2>
          <hr className="underline margin-bottom-medium" />
          <div className="whyUs-items">
            <div className="whyUs-items--content">
              <span>01</span>
              <h3 className="heading-quaternary">We are Passionate</h3>
            </div>
            <div className="whyUs-items--content">
              <span>02</span>
              <h3 className="heading-quaternary">
                We are Honest and Dependable
              </h3>
            </div>
            <div className="whyUs-items--content">
              <span>03</span>
              <h3 className="heading-quaternary">
                Innovative and efficient design strategies{" "}
              </h3>
            </div>
            <div className="whyUs-items--content">
              <span>04</span>
              <h3 className="heading-quaternary">Always improving</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="our-approach">
        <div className="our-approach">
          <div className="our-approach--content">
            <h2 className="heading-secondary">Our Approach to design.</h2>
            <hr className="underline margin-bottom-medium" />
            <h3 className="heading-quaternary margin-bottom-small">
              Designing now with awareness of past and the unknown future.
            </h3>
            <article>
              We at Pointline Architects, listens to your ideas and thoughts and
              explore ideas to create a good design solution and great
              architect. We understand the importance of designing to satisfy
              clients. We are conscious of budgetary constraints and aim for
              buildings to be cost efficient. Additionally, the firm maintains a
              strong commitment to create design solutions that are individually
              tailored to suit the specific criteria for each project.
            </article>
          </div>
        </div>
      </section>

      <section id="showcase-image">
        <div className="showcase-image">
          <div className="showcase-image--img">
            <Image
              fluid={data.showCaseImage1.childImageSharp.fluid}
              alt="Pointline About"
              classNameName="scale-image"
            ></Image>
          </div>
          <div className="showcase-image--img">
            <Image
              fluid={data.showCaseImage2.childImageSharp.fluid}
              alt="Pointline About"
              classNameName="scale-image"
            ></Image>
          </div>
          <div className="showcase-image--img">
            <Image
              fluid={data.showCaseImage3.childImageSharp.fluid}
              alt="Pointline About"
              classNameName="scale-image"
            ></Image>
          </div>
          <div className="showcase-image--img">
            <Image
              fluid={data.showCaseImage4.childImageSharp.fluid}
              alt="Pointline About"
              classNameName="scale-image"
            ></Image>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Aboutpage
