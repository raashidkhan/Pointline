import React from "react"
import residential from "../../images/icons/residential-housing.svg"
import commercial from "../../images/icons/commercial.svg"
import groupHousing from "../../images/icons/network-connection-online-houses-homes.svg"
import religious from "../../images/icons/religious-building.svg"
import institutional from "../../images/icons/institutional-building.svg"
import publicBuilding from "../../images/icons/Bank.svg"
import interior from "../../images/icons/interior-designing.svg"
import hvac from "../../images/icons/ventilation.svg"
import masterPlanning from "../../images/icons/Expand.svg"
import evaluate from "../../images/icons/evaluate.svg"
import furniture from "../../images/icons/furniture.svg"
import vastu from "../../images/icons/vastu.svg"
import urban from "../../images/icons/urban.svg"
import landscaping from "../../images/icons/landscaping.svg"

const Services = () => {
  return (
    <section id="servicesPointline" className="section-gap">
      <div className="servicesPointline">
        <div className="servicesPointline-heading margin-bottom-medium">
          <h2 className="heading-secondary">Our Business</h2>
          <hr className="underline margin-bottom-small" />
          <article className="heading-quaternary">
            We expertise in the following formats of designing
          </article>
        </div>
        <ul className="servicesPointline-content margin-bottom-small">
          <li className="servicesPointline-content--items">
            <span>
              <img
                src={residential}
                alt="Residential Buildings"
                className="services-icons"
              ></img>
            </span>
            <h4 className="services-title">Residential Buildings</h4>
          </li>
          <li className="servicesPointline-content--items">
            <span>
              <img
                src={commercial}
                alt="Commercial Buildings"
                className="services-icons"
              ></img>
            </span>
            <h4 className="services-title">Commercial Buildings</h4>
          </li>
          <li className="servicesPointline-content--items">
            <span>
              <img
                src={groupHousing}
                alt="Group Housing"
                className="services-icons"
              ></img>
            </span>
            <h4 className="services-title">Group Housing</h4>
          </li>
          <li className="servicesPointline-content--items">
            <span>
              <img
                src={religious}
                alt="Religious Building"
                className="services-icons"
              ></img>
            </span>
            <h4 className="services-title">Religious Buildings</h4>
          </li>
          <li className="servicesPointline-content--items">
            <span>
              <img
                src={institutional}
                alt="Institutional Buildings"
                className="services-icons"
              ></img>
            </span>
            <h4 className="services-title">Institutional</h4>
          </li>
          <li className="servicesPointline-content--items">
            <span>
              <img
                src={publicBuilding}
                alt="Public Buildings"
                className="services-icons"
              ></img>
            </span>
            <h4 className="services-title">Public Buildings</h4>
          </li>
          <li className="servicesPointline-content--items">
            <span>
              <img
                src={interior}
                alt="Interior Designing"
                className="services-icons"
              ></img>
            </span>
            <h4 className="services-title">Interiors</h4>
          </li>
          <li className="servicesPointline-content--items">
            <span>
              <img
                src={hvac}
                alt="HVAC Designing"
                className="services-icons"
              ></img>
            </span>
            <h4 className="services-title">HVAC designings</h4>
          </li>
          <li className="servicesPointline-content--items">
            <span>
              <img src={urban} alt="" className="services-icons"></img>
            </span>
            <h4 className="services-title">Urban Planning</h4>
          </li>
          <li className="servicesPointline-content--items">
            <span>
              <img src={landscaping} alt="" className="services-icons"></img>
            </span>
            <h4 className="services-title">Landscaping</h4>
          </li>
          <li className="servicesPointline-content--items">
            <span>
              <img src={masterPlanning} alt="" className="services-icons"></img>
            </span>
            <h4 className="services-title">Project Management</h4>
          </li>
          <li className="servicesPointline-content--items">
            <span>
              <img src={evaluate} alt="" className="services-icons"></img>
            </span>
            <h4 className="services-title">Estimate And Evaluation</h4>
          </li>

          <li className="servicesPointline-content--items">
            <span>
              <img src={vastu} alt="" className="services-icons"></img>
            </span>
            <h4 className="services-title">Vastu Consultation</h4>
          </li>
          <li className="servicesPointline-content--items">
            <span>
              <img src={furniture} alt="" className="services-icons"></img>
            </span>
            <h4 className="services-title">Bespoke Furniture</h4>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Services
