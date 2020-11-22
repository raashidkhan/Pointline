import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Thanks = () => {
  return (
    <Layout>
      <SEO title="Thanks" />
      <div className="thanks-section">
        <h3 className="heading-tertiary margin-bottom-small">
          Thanks You for submitting your query. We will get back to you as soon
          as possible.
        </h3>

        <Link to="/" className="btn-primary">
          Lets Go Home
        </Link>
      </div>
    </Layout>
  )
}

export default Thanks
