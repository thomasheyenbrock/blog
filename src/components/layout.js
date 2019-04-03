import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

import Theme from "./theme"
import Toggle from "./toggle"
import { rhythm, scale } from "../utils/typography"
import GlobalStyles from "./globalStyle"

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`

const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const h1Scale = scale(1.5)
const StyledH1 = styled.h1`
  font-size: ${h1Scale.fontSize};
  line-height: ${h1Scale.lineHeight};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`

const StyledH3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
`

const Layout = ({ children, location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = setTheme
  }, [])

  if (location.pathname === rootPath) {
    header = (
      <StyledH1>
        <StyledLink to={`/`}>{title}</StyledLink>
      </StyledH1>
    )
  } else {
    header = (
      <StyledH3>
        <StyledLink to={`/`}>{title}</StyledLink>
      </StyledH3>
    )
  }
  return (
    <Theme value={theme}>
      <Container>
        <GlobalStyles />
        <Header>
          {header}
          <Toggle theme={theme} />
        </Header>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}</footer>
      </Container>
    </Theme>
  )
}

export default Layout
