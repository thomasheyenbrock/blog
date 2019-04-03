import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import Theme from "./theme"
import GlobalStyles from "./globalStyle"
import Container from "./container"
import Header from "./header"

const Layout = ({ children, title }) => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = setTheme
  }, [])

  return (
    <Theme value={theme}>
      <>
        <GlobalStyles />
        <Header title={title} theme={theme} />
        <main>
          <Container>{children}</Container>
        </main>
        <footer>© {new Date().getFullYear()}</footer>
      </>
    </Theme>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Layout
