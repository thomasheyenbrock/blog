import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import { Container } from "./container"
import { GithubIcon, NpmIcon, TwitterIcon } from "./icons"

const StyledFooter = styled.footer`
  background: ${props => props.theme.header.background};
  color: ${props => props.theme.header.color};
  box-shadow: 0px 1px 4px 0px ${props => props.theme.colors.grey[400]};
`

const StyledFooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const StyledImage = styled(Image)`
  height: ${rhythm(3)};
  width: ${rhythm(3)};
  @media (min-width: ${props => props.theme.mobileBreakpoint}) {
    height: ${rhythm(5)};
    width: ${rhythm(5)};
  }
`

const authorQuery = graphql`
  query AuthorQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 150, maxHeight: 150) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          github
          npm
          twitter
        }
      }
    }
  }
`

export const Footer = () => (
  <StaticQuery
    query={authorQuery}
    render={data => {
      const { author } = data.site.siteMetadata
      return (
        <StyledFooter>
          <StyledFooterContainer>
            <StyledImage
              fluid={data.avatar.childImageSharp.fluid}
              alt={author}
              imgStyle={{ borderRadius: `50%` }}
            />
            <StyledContentContainer>
              © {new Date().getFullYear()}, {author}
              <StyledIconContainer>
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
              </StyledIconContainer>
            </StyledContentContainer>
          </StyledFooterContainer>
        </StyledFooter>
      )
    }}
  />
)
