import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"

const About = () => (
  <SEO
    title="About"
    keywords={[
      `blog`,
      `gatsby`,
      `javascript`,
      `react`,
      `power bi`,
      `data science`,
    ]}
  />
)

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
