import styled from "styled-components"

import { rhythm } from "../utils/typography"

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${props => props.theme.mobileBreakpoint};
  padding: ${rhythm(1)} 0;
`

export default Container
