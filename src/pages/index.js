import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { StyledHeading, StyledSubHeading } from "../components/heading"
import { SEO } from "../components/seo"
import { rhythm } from "../utils/typography"

const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${props => props.theme.mobileBreakpoint}) {
    flex-direction: row;
  }
`

const Card = styled(Link)`
  background-color: red;
  margin: ${rhythm(1)} 0;
  padding: ${rhythm(1)};
  background-color: ${props => props.theme.home.cards[props.index]};
  color: ${props => props.theme.home.color};
  background-image: none;
  &:hover {
    transform: ${props => props.theme.transform._1_03};
  }
  & h2 {
    color: ${props => props.theme.home.color};
  }
  & a {
    color: ${props => props.theme.home.color};
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0) 1px,
      ${props => props.theme.home.color} 1px,
      ${props => props.theme.home.color} 2px,
      rgba(0, 0, 0, 0) 2px
    );
  }
  @media (min-width: ${props => props.theme.mobileBreakpoint}) {
    flex: 1;
    &:not(:first-child) {
      margin-left: ${rhythm(1)};
    }
  }
`

const Index = ({ data }) => {
  const lastBlogPost = data.allMarkdownRemark.edges[0]
  return (
    <>
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
      <StyledHeading>Welcome to my personal website!</StyledHeading>
      <p>
        Here you can find my all my blog posts as well as information about my
        work and myself. Enjoy!
      </p>
      <StyledFlexColumn>
        <Card index={0} to="/blog">
          <StyledSubHeading>My Blog</StyledSubHeading>
          <p>
            The space where I write down all my learnings and other thoughts.
          </p>
          <Link to={`/blog${lastBlogPost.node.fields.slug}`}>
            Last Blogpost:{" "}
            <strong>{lastBlogPost.node.frontmatter.title}</strong>
          </Link>
        </Card>
      </StyledFlexColumn>
      <StyledFlexColumn>
        <Card index={1} to="/work">
          <StyledSubHeading>My Work</StyledSubHeading>
          <p>
            Take a look at some of the applications that I build and the
            projects that I am currently working on.
          </p>
        </Card>
        <Card index={2} to="/about">
          <StyledSubHeading>About me</StyledSubHeading>
          <p>Some notes about myself, where I come from and what I do.</p>
        </Card>
      </StyledFlexColumn>
    </>
  )
}

export default Index

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
