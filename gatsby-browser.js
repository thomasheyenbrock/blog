// custom typefaces
import "typeface-fira-mono"

import React from "react"
import Layout from "./src/components/layout"

export const wrapPageElement = ({ element, props }) => (
  <Layout title={props.data.site.siteMetadata.title}>{element}</Layout>
)
