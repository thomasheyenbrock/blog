/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import { GithubIcon, TwitterIcon, NpmIcon } from "./icons"

export const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author } = data.site.siteMetadata
      return (
        <div style={{ marginBottom: rhythm(2.5) }}>
          <div style={{ display: `flex` }}>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              This is the website of <strong>{author}</strong>, a passionate
              skier who uses his free time for coding and data science.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <a
              href={`https://github.com/${
                data.site.siteMetadata.social.github
              }`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundImage: "none" }}
            >
              <GithubIcon />
            </a>
            <a
              href={`https://twitter.com/${
                data.site.siteMetadata.social.twitter
              }`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundImage: "none" }}
            >
              <TwitterIcon />
            </a>
            <a
              href={`https://www.npmjs.com/settings/${
                data.site.siteMetadata.social.npm
              }/packages`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundImage: "none" }}
            >
              <NpmIcon />
            </a>
          </div>
        </div>
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`
