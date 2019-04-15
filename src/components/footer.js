import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import { Container } from "./container"
import { EmailIcon, GithubIcon, TwitterIcon } from "./icons"

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
  justify-content: center;
`

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledImage = styled(Image)`
  height: ${rhythm(3)};
  width: ${rhythm(3)};
  @media (min-width: ${props => props.theme.mobileBreakpoint}) {
    height: ${rhythm(5)};
    width: ${rhythm(5)};
  }
`

const StyledLink = styled.a`
  background-image: none;
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
          email
          github
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
              <StyledIconContainer>
                <StyledLink
                  href={`mailto:${data.site.siteMetadata.social.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <EmailIcon />
                </StyledLink>
                <StyledLink
                  href={`https://github.com/${
                    data.site.siteMetadata.social.github
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                </StyledLink>
                <StyledLink
                  href={`https://twitter.com/${
                    data.site.siteMetadata.social.twitter
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterIcon />
                </StyledLink>
              </StyledIconContainer>
              © {new Date().getFullYear()}, {author}
            </StyledContentContainer>
          </StyledFooterContainer>
        </StyledFooter>
      )
    }}
  />
)
