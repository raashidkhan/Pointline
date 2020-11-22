import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/homepage/Hero"
import About from "../components/homepage/About"
import Services from "../components/homepage/Services"
import Projects from "../components/homepage/Projects"
import Different from "../components/homepage/Different"
import PointlineClients from "../components/homepage/PointlineClients"
import PointlineContact from "../components/homepage/PointlineContact"
import "../styles/scss/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero></Hero>
    <About></About>
    <Services></Services>
    <Different></Different>
    <Projects></Projects>
    <PointlineClients></PointlineClients>
    <PointlineContact></PointlineContact>
  </Layout>
)

export default IndexPage
