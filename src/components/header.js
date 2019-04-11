import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"

import { useDeviceCategory } from "../hooks"
import { rhythm, scale } from "../utils/typography"
import { Container } from "./container"
import { Toggle } from "./toggle"

const StyledHeader = styled.header`
  background-color: ${props => props.theme.header.background};
  color: ${props => props.theme.header.color};
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: 0px 1px 4px 0px ${props => props.theme.colors.grey[400]};
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
  @media (min-width: ${props => props.theme.mobileBreakpoint}) {
    ${scale(0.6)};
  }
`

const MenuIcon = styled.span`
  ${scale(1 / 2)};
`

const StyledList = styled.ul`
  margin: 0;
  height: calc((100vh - 50.75px) * ${props => (props.isOpen ? 1 : 0)});
  opacity: ${props => (props.isOpen ? "1" : "0")};
  transform: scale(1, ${props => (props.isOpen ? "1" : "0")});
  transform-origin: top;
  transition: ${props => props.theme.transition};
  border-top: 1px solid ${props => props.theme.header.color};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledListItem = styled.li`
  margin: 0;
  margin-top: ${props => (props.hasBiggerMargin ? rhythm(4) : rhythm(1))};
  display: block;
  padding: ${rhythm(1 / 4)} ${rhythm(1 / 2)};
`

const links = [
  <StyledLink key="work" to="/work">
    My Work
  </StyledLink>,
  <StyledLink key="blog" to="/blog">
    Blog
  </StyledLink>,
  <StyledLink key="about" to="/about">
    About
  </StyledLink>,
]

export const Header = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false)
  const category = useDeviceCategory()
  return (
    <StyledHeader>
      <HeaderContainer>
        <StyledHomeLink to="/">{title}</StyledHomeLink>
        {category === "desktop" ? (
          <StyledHeaderLinkContainer>
            {links}
            <Toggle />
          </StyledHeaderLinkContainer>
        ) : (
          <MenuIcon onClick={() => setIsOpen(value => !value)}>
            &#9776;
          </MenuIcon>
        )}
      </HeaderContainer>
      {category === "mobile" && (
        <StyledList isOpen={isOpen}>
          {links.map((link, index) => (
            <StyledListItem key={index} onClick={() => setIsOpen(false)}>
              {link}
            </StyledListItem>
          ))}
          <StyledListItem hasBiggerMargin>
            <Toggle />
          </StyledListItem>
        </StyledList>
      )}
    </StyledHeader>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
