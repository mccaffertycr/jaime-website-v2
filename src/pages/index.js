import React from "react"

import About from "../components/about"
import Layout from "../components/layout"
// import SEO from "../components/seo"

const HomeIndex = ({ location }) => {
  return (
    <Layout location={location} title={"Communicating Through the Classroom"}>
      {/* <SEO title="All posts" /> */}
      <About />
    </Layout>
  )
}

export default HomeIndex
