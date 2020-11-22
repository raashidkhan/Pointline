import React from "react"
import Layout from "../components/layout"
import Form from "../components/contactpage/ContactForm"
import SEO from "../components/seo"
import facebook from "../images/icons/facebook.svg"
import twitter from "../images/icons/twitter.svg"
import instagram from "../images/icons/instagram.svg"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <header id="contactHero">
        <div className="contactHero">
          <div className="contactHero-heading">
            <h2 className="page-headings text-black margin-bottom-small">
              Let's Talk
            </h2>

            <ul className="contactHero-heading--social">
              <li>
                <a href="#0">
                  <img src={facebook} alt="pointline facebook icon"></img>
                </a>
              </li>
              <li>
                <a href="#0">
                  <img src={twitter} alt="pointline twitter icon"></img>
                </a>
              </li>
              <li>
                <a href="#0">
                  <img src={instagram} alt="pointline instagram icon"></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <Form></Form>

      <section id="contactMaps">
        <div className="contactMaps">
          <div className="contactMaps-mumbai">
            <h3 className="heading-tertiary margin-bottom-small">
              Mumbai Branch
            </h3>
            <address className="margin-bottom-medium">
              <strong>HEAD OFFICE</strong> <br /> STUDIO HEAD- AR MOHD TABISH{" "}
              <br /> Craft stone , plot no.- 64 , riverside D.P. road , khapoi ,
              Mumbai (MH)-4
            </address>
            <div className="map-area">
              <iframe
                title="mumbai-address-map"
                width="100%"
                height="100%"
                id="mapcanvas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.900585245876!2d73.32640821489697!3d18.80258328724542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be80740175c883d%3A0x8e309b8cf1a55cef!2sRiver%20valley!5e0!3m2!1sen!2sin!4v1594474609389!5m2!1sen!2sin"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              >
                <div>
                  <div id="gmap_canvas"></div>
                </div>
              </iframe>
            </div>
          </div>
          <div className="contactMaps-patna">
            <h3 className="heading-tertiary margin-bottom-small">
              Patna Branch
            </h3>
            <address className="margin-bottom-medium">
              <strong>BRANCH OFFICE</strong> <br /> STUDIO HEAD- AR MOHD FAEQUE
              HASHIM <br />
              Karbala road , AIIMS road , phulwari sharif , patna (BIHAR)-801505
            </address>
            <div className="map-area">
              <iframe
                title="patna-address-map"
                width="100%"
                height="100%"
                id="mapcanvas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.946255078795!2d85.0594719150171!3d25.573454783722543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2a9d38f55f701%3A0x6d2bbb287f4bafa3!2sQamruddin%20Plaza!5e0!3m2!1sen!2sin!4v1594474704377!5m2!1sen!2sin"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              >
                <div>
                  <div id="gmap_canvas"></div>
                </div>
              </iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
