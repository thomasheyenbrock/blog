import { Link, graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

import { StyledHeading } from "../components/heading"
import { SEO } from "../components/seo"
import { rhythm } from "../utils/typography"

const StyledTextContainer = styled.div`
  margin-top: ${rhythm(1)};
`

const StyledDivider = styled.hr`
  margin-bottom: ${rhythm(1)};
`

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Link to={`/blog`}>← back</Link>
      <StyledHeading>{post.frontmatter.title}</StyledHeading>
      <small>{post.frontmatter.date}</small>
      <StyledTextContainer dangerouslySetInnerHTML={{ __html: post.html }} />
      <StyledDivider />
      <StyledList>
        <li>
          {previous && (
            <Link to={`/blog${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={`/blog${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </StyledList>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
