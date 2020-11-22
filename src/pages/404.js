import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NotFound from "../images/icons/404.svg"
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="fourOfour-section">
      <img
        className="scale-image fourOfour-image"
        src={NotFound}
        alt="404 not found"
      />
      <h3 className="heading-tertiary margin-bottom-small">
        Looks like you took a wrong direction. Page not found.
      </h3>

      <Link to="/" className="btn-primary">
        Lets Go Home
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
