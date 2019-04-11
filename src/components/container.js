import styled from "styled-components"

import { rhythm } from "../utils/typography"

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.mobileBreakpoint};
  padding: ${rhythm(1 / 4)} ${rhythm(1 / 2)};

  @media (min-width: ${props => props.theme.mobileBreakpoint}) {
    padding: ${rhythm(1 / 2)} ${rhythm(1 / 2)};
  }
`
