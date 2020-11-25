import React from "react"
import { Link } from "gatsby"
import logoLight from "../images/icons/logo-dark.svg"
import facebook from "../images/icons/facebook.svg"
import twitter from "../images/icons/twitter.svg"
import instagram from "../images/icons/instagram.svg"
import youtube from "../images/icons/youtube.svg"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer">
        <div className="footer-logo">
          <div className="footer-logo--icon margin-bottom-medium">
            <img className="scale-image" src={logoLight} alt="" />
          </div>
          <h4 className="heading-quaternary text-white margin-bottom-small">
            From imagination to real serenity is expressed by design
          </h4>
          <div className="footer-logo--social">
            <a href="https://m.facebook.com/Pointline-Architects-112065133882771/">
              <img src={facebook} alt="icon-facebook" />
            </a>
            <a href="https://instagram.com/pointlinearchitects?igshid=mx83dlks90nx">
              <img src={instagram} alt="icon-instagram" />
            </a>
            <a href="https://twitter.com/PointArchitects?s=08">
              <img src={twitter} alt="icon twitter" />
            </a>
            <a href="https://youtu.be/P9vEVJvLBFw">
              <img src={youtube} alt="icon youtube" />
            </a>
          </div>
        </div>
        <div className="footer-sitelinks">
          <ul className="footer-sitelinks--link">
            <h3 className="heading-quaternary text-white margin-bottom-small">
              SITE
            </h3>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3 className="heading-quaternary text-white margin-bottom-small">
            GET IN TOUCH FOR
          </h3>
          <ul className="footer-contact--address margin-bottom-small">
            <li>Architectural Designs</li>
            <li>Interior Designs</li>
            <li>Urban Designs</li>
          </ul>
          <div className="footer-contact--phone margin-bottom-small">
            <h4 className="text-accent heading-quaternary">
              <a href="tel:+919795687556">Mumbai: +91-9795687556</a>
              <br />
              <a href="tel:+917033602464">Patna: +91-7033602464</a>
            </h4>
          </div>
          <div className="footer-contact--email">
            <h4 className="text-accent">contact@pointlinearch.com</h4>
          </div>
        </div>
      </div>
      <p className="copyright">
        All right reserved. © {new Date().getFullYear()} Pointline Architects
      </p>
    </footer>
  )
}

export default Footer
