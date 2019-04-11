import React from "react"
import { graphql } from "gatsby"

import { SEO } from "../components/seo"

const BlogIndex = () => (
  <SEO
    title="Thomas Heyenbrock"
    useExactTitle
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

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
