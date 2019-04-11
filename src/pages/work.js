import React from "react"
import { graphql } from "gatsby"

import { SEO } from "../components/seo"

const Work = () => (
  <SEO
    title="My Work"
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

export default Work

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
