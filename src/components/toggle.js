import React, { useContext } from "react"
import styled, { ThemeContext } from "styled-components"

const StyledSvg = styled.svg`
  color: ${props => props.theme.colors.grey[50]};
  cursor: pointer;
  &:hover {
    transform: ${props => props.theme.transform._1_1};
    transition: ${props => props.theme.transition};
  }
`

const StyledCircle = styled.circle`
  fill: ${props => props.theme.colors.grey[500]};
`

const StyledPath = styled.path`
  fill: ${props => props.theme.colors.yellow[400]};
`

const sunPath =
  "M0,-12 C 2,-5 2,-5 10,-10 C 5,-2 5,-2 12,0 C 5,2 5,2 10,10 C 2,5 2,5 0,12 C -2,5 -2,5 -10,10 C -5,2 -5,2 -12,0 C -5,-2 -5,-2 -10,-10 C -2,-5 -2,-5 0,-12"
const moonPath =
  "M0,-12 C 3.14,-12 6.26,-10.7 8.48,-8.48 C 10.7,-6.26 12,-3.14 12,0 C 12,3.14 10.7,6.26 8.48,8.48 C 6.26,10.7 3.14,12 0,12 C 3,9.5 3.25,9 4.55,7 C 5.7,5 6.3,2 6.3,0 C 6.3,-2 5.7,-5 4.55,-7 C 3.25,-9 3,-9.5 0,-12"

export const Toggle = () => {
  const { value: theme } = useContext(ThemeContext)

  const time = new Date()
  const minuteRotation = (360 * time.getMinutes()) / 60
  const hourRotation = (360 * (time.getHours() % 12)) / 12 + minuteRotation / 12

  return (
    <StyledSvg
      id="clock"
      height="48"
      width="48"
      viewBox="-20 -20 40 40"
      onClick={() =>
        window.__setPreferredTheme(theme === "light" ? "dark" : "light")
      }
    >
      <StyledCircle
        cx="0"
        cy="0"
        r="19"
        fill="none"
        strokeWidth="2"
        stroke="currentcolor"
      />
      <StyledPath
        d={theme === "dark" ? moonPath : sunPath}
        transform={`rotate(${theme === "dark" ? "20" : "0"})`}
      >
        <animate
          attributeName="d"
          dur="0.5s"
          from={theme === "dark" ? sunPath : moonPath}
          to={theme === "light" ? sunPath : moonPath}
          begin="clock.click"
          fill="freeze"
          calcMode="splines"
          keyTimes="0;1"
          keySplines="0.25 0.1 0.25 1"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={theme === "dark" ? "0" : "20"}
          to={theme === "dark" ? "20" : "0"}
          begin="clock.click"
          fill="freeze"
          calcMode="spline"
          dur="0.5s"
          keyTimes="0;0.5"
          keySplines="0.25 0.1 0.25 1"
        />
      </StyledPath>
      <rect
        x="-1"
        y="-13"
        height="14"
        width="2"
        rx="1"
        ry="1"
        fill="currentcolor"
        transform={`rotate(${minuteRotation})`}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={minuteRotation}
          to={minuteRotation + 1080}
          begin="clock.click"
          fill="freeze"
          calcMode="spline"
          dur="1s"
          keyTimes="0;1"
          keySplines="0.25 0.1 0.25 1"
        />
      </rect>
      <rect
        x="-1"
        y="-11"
        height="12"
        width="2"
        rx="1"
        ry="1"
        transform={`rotate(${hourRotation})`}
        fill="currentcolor"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from={hourRotation}
          to={hourRotation + 360}
          begin="clock.click"
          calcMode="spline"
          dur="1s"
          keyTimes="0;1"
          keySplines="0.25 0.1 0.25 1"
        />
      </rect>
      <rect
        x="-20"
        y="-1"
        height="2"
        width="6"
        rx="1"
        ry="1"
        fill="currentcolor"
      />
      <rect
        x="-20"
        y="-1"
        height="2"
        width="4"
        rx="1"
        ry="1"
        fill="currentcolor"
        transform="rotate(30)"
      />
      <rect
        x="-20"
        y="-1"
        height="2"
        width="4"
        rx="1"
        ry="1"
        fill="currentcolor"
        transform="rotate(60)"
      />
      <rect
        x="-20"
        y="-1"
        height="2"
        width="6"
        rx="1"
        ry="1"
        fill="currentcolor"
        transform="rotate(90)"
      />
      <rect
        x="-20"
        y="-1"
        height="2"
        width="4"
        rx="1"
        ry="1"
        fill="currentcolor"
        transform="rotate(120)"
      />
      <rect
        x="-20"
        y="-1"
        height="2"
        width="4"
        rx="1"
        ry="1"
        fill="currentcolor"
        transform="rotate(150)"
      />
      <rect
        x="-20"
        y="-1"
        height="2"
        width="6"
        rx="1"
        ry="1"
        fill="currentcolor"
        transform="rotate(180)"
      />
      <rect
        x="-20"
        y="-1"
        height="2"
        width="4"
        rx="1"
        ry="1"
        fill="currentcolor"
        transform="rotate(210)"
      />
      <rect
        x="-20"
        y="-1"
        height="2"
        width="4"
        rx="1"
        ry="1"
        fill="currentcolor"
        transform="rotate(240)"
      />
      <rect
        x="-20"
        y="-1"
        height="2"
        width="6"
        rx="1"
        ry="1"
        fill="currentcolor"
        transform="rotate(270)"
      />
      <rect
        x="-20"
        y="-1"
        height="2"
        width="4"
        rx="1"
        ry="1"
        fill="currentcolor"
        transform="rotate(300)"
      />
      <rect
        x="-20"
        y="-1"
        height="2"
        width="4"
        rx="1"
        ry="1"
        fill="currentcolor"
        transform="rotate(330)"
      />
    </StyledSvg>
  )
}

Toggle.propTypes = {}
