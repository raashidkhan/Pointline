import React, { useState } from "react"
import { navigate } from "gatsby"

const ContactForm = () => {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "New message",
  })

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => navigate("/thanks/"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <section id="contactForm">
      <div className="contactForm">
        <div className="contactForm-card">
          <h2 className="heading-tertiary text-white margin-bottom-medium">
            Contact Us
          </h2>
          <p>Mail us at: contact@pointlinearch.com</p>
          <div className="contactForm-card--phone">
            <a href="tel:+919795687556">
              Mumbai Branch: <strong>+919795687556</strong>
            </a>
            <a href="tel:+917033602464 ">
              Patna Branch: <strong>+917033602464</strong>
            </a>
          </div>
        </div>
        <div className="contactForm-form">
          <h2 className="heading-secondary">
            GET IN TOUCH <span></span>
          </h2>
          <p className="margin-bottom-medium">
            Feel free to drop us a line below!
          </p>
          <form
            data-netlify="true"
            name="contact"
            method="post"
            action="/"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="subject" value="New message" />
            <div className="formDiv">
              <label
                htmlFor="name"
                name="name"
                className="formLabel"
                aria-label="Name"
              >
                Name
              </label>
              <input
                required
                type="text"
                name="name"
                onChange={handleChange}
                value={formState.name}
                className="formInput"
              />
            </div>

            <div className="formDiv">
              <label
                htmlFor="phone"
                name="phone"
                className="formLabel"
                aria-label="Phone"
              >
                Phone
              </label>
              <input
                required
                type="tel"
                name="phone"
                className="formInput"
                onChange={handleChange}
                value={formState.phone}
              />
            </div>

            <div className="formDiv">
              <label
                htmlFor="email"
                name="email"
                className="formLabel"
                aria-label="Email"
              >
                Email
              </label>
              <input
                required
                type="email"
                name="email"
                onChange={handleChange}
                value={formState.email}
                className="formInput"
              />
            </div>

            <div className="formDiv">
              <label htmlFor="message" name="message" className="formLabel">
                Message
              </label>
              <textarea
                required
                name="message"
                className="formTextarea"
                onChange={handleChange}
                value={formState.message}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary">
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
