import React from "react"
import logo1 from "../../images/icons/cs.png"
import logo2 from "../../images/icons/gi.png"
import logo3 from "../../images/icons/azwa.png"
import logo4 from "../../images/icons/m5.png"

const PointlineClients = () => {
  return (
    <section id="pointlineclients">
      <div className="pointlineclients">
        <h2 className="heading-secondary">Our Clients</h2>
        <hr className="underline margin-bottom-medium" />
        <article>
          With our aim and experience client is the soul of the project. Our
          main target is to bring confidence among the clients and provide them
          the simplicity to carry out even the most complex challenges and find
          solutions to every problem on project given.
        </article>
        <div className="pointlineclients-logo">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
        </div>
      </div>
    </section>
  )
}

export default PointlineClients
