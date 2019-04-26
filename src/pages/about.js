import { graphql } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import styled from "styled-components"

import { StyledHeading } from "../components/heading"
import { SEO } from "../components/seo"
import { rhythm } from "../utils/typography"

const StyledDivider = styled.hr`
  margin-top: ${rhythm(1)};
  background-color: ${props => props.theme.body.color};
`

const StyledImage = styled(Image)`
  border-radius: 50%;
`

const About = ({ data }) => (
  <>
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
    <StyledHeading>Who am I?</StyledHeading>
    <p>
      My name is Thomas. I live in Wasserburg am Inn, a beautiful city in
      Bavaria in southern Germany.
    </p>
    <StyledHeading>What am I?</StyledHeading>
    <p>
      I am currently working as Data Scientist at{" "}
      <a
        href="https://www.finanzchef24.de/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Finanzchef24
      </a>
      , a young company located in Munich, Germany.
    </p>
    <p>
      I create automated reports using{" "}
      <a
        href="https://www.mysql.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        MySQL
      </a>
      ,{" "}
      <a
        href="https://www.mongodb.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        MongoDB
      </a>
      ,{" "}
      <a
        href="https://analytics.google.com/analytics/web"
        target="_blank"
        rel="noopener noreferrer"
      >
        Google Analytics
      </a>{" "}
      and{" "}
      <a
        href="https://powerbi.microsoft.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        PowerBI
      </a>{" "}
      to provide my colleagues and our partners with the latest insight into our
      business.
    </p>
    <p>
      If I'm not busy moving data around I'm also coding in JavaScript. My main
      focus is drawn to the frontend where I favour using{" "}
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        React
      </a>
      .
    </p>
    <p>
      Last but not least, if I'm not working I enjoy sports and nature. I love
      skiing in particular. I'm also a qualified skiing teacher of the highest
      level.
    </p>
    <StyledImage
      fluid={data.skiingPicture.childImageSharp.fluid}
      alt="skiing"
    />
    <StyledDivider />
    <p>
      Got some questions for me? Feel free to get in touch via{" "}
      <a
        href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>{" "}
      or just <a href="mailto:thomas.heyenbrock@gmail.com">write me an email</a>
      .
    </p>
  </>
)

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          twitter
        }
        title
      }
    }
    skiingPicture: file(absolutePath: { regex: "/skiing.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 720) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
