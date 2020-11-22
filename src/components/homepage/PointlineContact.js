import React from "react"
import { Link } from "gatsby"

const PointlineContact = () => {
  return (
    <section id="contactPointline">
      <div className="contactPointline ">
        <article className="contactPointline-message margin-bottom-medium">
          <h2 className="heading-secondary">Have a project in mind?</h2>
          <hr className="underline margin-bottom-small" />
          <p className="heading-quaternary">We would love to hear from you.</p>
        </article>
        <Link className="btn-primary" to="/contact">
          Contact Us
        </Link>
      </div>
    </section>
  )
}

export default PointlineContact
