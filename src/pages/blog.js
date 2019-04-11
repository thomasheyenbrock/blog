import { Link, graphql } from "gatsby"
import React from "react"

import { SEO } from "../components/seo"
import { StyledHeading, StyledSubHeading } from "../components/heading"

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <>
      <SEO
        title="Blog"
        keywords={[
          `blog`,
          `gatsby`,
          `javascript`,
          `react`,
          `power bi`,
          `data science`,
        ]}
      />
      <StyledHeading>Blog</StyledHeading>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <>
            <StyledSubHeading>
              <Link to={`/blog${node.fields.slug}`}>{title}</Link>
            </StyledSubHeading>
            <small>{node.frontmatter.date}</small>
            <p>{node.frontmatter.description || node.excerpt}</p>
          </>
        )
      })}
    </>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
