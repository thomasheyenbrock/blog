import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Container from "./container"
import Toggle from "./toggle"
import { rhythm, scale } from "../utils/typography"

const StyledHeader = styled.header`
  background-color: ${props => props.theme.header.background};
  color: ${props => props.theme.header.color};
`

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledHeaderLinkContainer = styled.div`
  display: flex;
  align-items: center;
  > * + * {
    margin-left: ${rhythm(1)};
  }
`

const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
  background-image: none;
`

const StyledHomeLink = styled(StyledLink)`
  ${scale(0.6)};
`

const Header = ({ title, theme }) => (
  <StyledHeader>
    <HeaderContainer>
      <StyledHomeLink to="/">{title}</StyledHomeLink>
      <StyledHeaderLinkContainer>
        <StyledLink to="/work">My Work</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <Toggle theme={theme} />
      </StyledHeaderLinkContainer>
    </HeaderContainer>
  </StyledHeader>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  theme: PropTypes.oneOf(["light", "dark"]).isRequired,
}

export default Header
