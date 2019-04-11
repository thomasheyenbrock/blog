import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Container } from "./container"
import { Footer } from "./footer"
import { GlobalStyles } from "./globalStyle"
import { Header } from "./header"
import { Theme } from "./theme"

const StyledMain = styled.main`
  min-height: calc(100vh - 50.75px - 89.25px);
  @media (min-width: ${props => props.theme.mobileBreakpoint}) {
    min-height: calc(100vh - 78px - 180px);
  }
`

export const Layout = ({ children, title }) => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = setTheme
  }, [])

  if (!theme) return null

  return (
    <Theme value={theme}>
      <>
        <GlobalStyles />
        <Header title={title} />
        <StyledMain>
          <Container>{children}</Container>
        </StyledMain>
        <Footer />
      </>
    </Theme>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
}
