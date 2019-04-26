import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { rhythm } from "../utils/typography"

const colors = {
  grey: {
    50: "hsl(209, 61%, 16%)",
    100: "hsl(211, 39%, 23%)",
    200: "hsl(209, 34%, 30%)",
    300: "hsl(209, 28%, 39%)",
    400: "hsl(210, 22%, 49%)",
    500: "hsl(209, 23%, 60%)",
    600: "hsl(211, 27%, 70%)",
    700: "hsl(210, 31%, 80%)",
    800: "hsl(212, 33%, 89%)",
    900: "hsl(210, 36%, 96%)",
  },
  blue: {
    50: "hsl(205, 100%, 21%)",
    100: "hsl(205, 87%, 29%)",
    200: "hsl(205, 82%, 33%)",
    300: "hsl(205, 76%, 39%)",
    400: "hsl(205, 67%, 45%)",
    500: "hsl(205, 65%, 55%)",
    600: "hsl(205, 74%, 65%)",
    700: "hsl(205, 84%, 74%)",
    800: "hsl(205, 97%, 85%)",
    900: "hsl(205, 79%, 92%)",
  },
  green: {
    50: "hsl(170, 97%, 15%)",
    100: "hsl(168, 80%, 23%)",
    200: "hsl(166, 72%, 28%)",
    300: "hsl(164, 71%, 34%)",
    400: "hsl(162, 63%, 41%)",
    500: "hsl(160, 51%, 49%)",
    600: "hsl(158, 58%, 62%)",
    700: "hsl(156, 73%, 74%)",
    800: "hsl(154, 75%, 87%)",
    900: "hsl(152, 68%, 96%)",
  },
  magenta: {
    50: "hsl(308, 91%, 23%)",
    100: "hsl(306, 90%, 31%)",
    200: "hsl(306, 88%, 37%)",
    300: "hsl(306, 85%, 43%)",
    400: "hsl(305, 80%, 49%)",
    500: "hsl(300, 82%, 60%)",
    600: "hsl(296, 96%, 70%)",
    700: "hsl(294, 100%, 78%)",
    800: "hsl(294, 97%, 88%)",
    900: "hsl(294, 100%, 96%)",
  },
  orange: {
    50: "hsl(6, 96%, 26%)",
    100: "hsl(8, 92%, 35%)",
    200: "hsl(10, 93%, 40%)",
    300: "hsl(12, 86%, 47%)",
    400: "hsl(14, 89%, 55%)",
    500: "hsl(16, 94%, 61%)",
    600: "hsl(18, 100%, 70%)",
    700: "hsl(20, 100%, 77%)",
    800: "hsl(22, 100%, 85%)",
    900: "hsl(24, 100%, 93%)",
  },
  red: {
    50: "hsl(348, 94%, 20%)",
    100: "hsl(350, 94%, 28%)",
    200: "hsl(352, 90%, 35%)",
    300: "hsl(354, 85%, 44%)",
    400: "hsl(356, 75%, 53%)",
    500: "hsl(360, 83%, 62%)",
    600: "hsl(360, 91%, 69%)",
    700: "hsl(360, 100%, 80%)",
    800: "hsl(360, 100%, 87%)",
    900: "hsl(360, 100%, 95%)",
  },
  violet: {
    50: "hsl(276, 91%, 23%)",
    100: "hsl(274, 87%, 31%)",
    200: "hsl(274, 87%, 37%)",
    300: "hsl(274, 87%, 43%)",
    400: "hsl(273, 80%, 49%)",
    500: "hsl(268, 82%, 60%)",
    600: "hsl(264, 96%, 70%)",
    700: "hsl(262, 100%, 78%)",
    800: "hsl(262, 100%, 88%)",
    900: "hsl(262, 90%, 96%)",
  },
  yellow: {
    50: "hsl(15, 86%, 30%)",
    100: "hsl(22, 82%, 39%)",
    200: "hsl(29, 80%, 44%)",
    300: "hsl(36, 77%, 49%)",
    400: "hsl(42, 87%, 55%)",
    500: "hsl(44, 92%, 63%)",
    600: "hsl(48, 94%, 68%)",
    700: "hsl(48, 95%, 76%)",
    800: "hsl(48, 100%, 88%)",
    900: "hsl(49, 100%, 96%)",
  },
}

const transition = "all 0.2s ease-in-out"

const transform = {
  _1_03: "scale(1.03)",
  _1_1: "scale(1.1)",
}

const code = {
  attrName: colors.yellow[600],
  attrValue: colors.green[600],
  background: colors.grey[50],
  boolean: colors.yellow[600],
  className: colors.magenta[700],
  color: colors.grey[800],
  comment: colors.grey[500],
  function: colors.magenta[700],
  highlightBackground: colors.grey[100],
  highlightLeftBorder: colors.magenta[700],
  keyword: colors.violet[700],
  number: colors.yellow[600],
  operator: colors.grey[700],
  punctuation: colors.grey[700],
  string: colors.green[600],
  tag: colors.orange[700],
}

const mobileBreakpoint = rhythm(24)

const baseTheme = {
  code,
  colors,
  mobileBreakpoint,
  transform,
  transition,
}

const lightTheme = {
  ...baseTheme,
  value: "light",
  body: {
    background: colors.grey[900],
    color: colors.grey[50],
  },
  blockquote: {
    borderLeft: colors.grey[200],
    color: colors.grey[200],
  },
  link: {
    color: colors.grey[200],
  },
  header: {
    background: colors.blue[200],
    color: colors.grey[900],
  },
  home: {
    cards: [colors.green[200], colors.yellow[200], colors.red[200]],
    color: colors.grey[900],
  },
}

const darkTheme = {
  ...baseTheme,
  value: "dark",
  body: {
    background: colors.grey[100],
    color: colors.grey[900],
  },
  blockquote: {
    borderLeft: colors.grey[700],
    color: colors.grey[700],
  },
  link: {
    color: colors.grey[700],
  },
  header: {
    background: colors.blue[600],
    color: colors.grey[50],
  },
  home: {
    cards: [colors.green[700], colors.yellow[700], colors.red[700]],
    color: colors.grey[50],
  },
}

export const Theme = ({ children, value }) => (
  <ThemeProvider theme={value === "light" ? lightTheme : darkTheme}>
    {children}
  </ThemeProvider>
)

Theme.propTypes = {
  value: PropTypes.oneOf(["light", "dark"]).isRequired,
}
