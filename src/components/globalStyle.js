import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body.background};
    color: ${props => props.theme.body.color};
    transition: ${props => props.theme.transition};
  }

  .gatsby-highlight {
    background-color: ${props => props.theme.code.background};
    border-radius: 8px;
    overflow-y: auto;
    margin-bottom: 32px;
  }

  .gatsby-highlight-code-line {
    display: block;
    background-color: ${props => props.theme.code.highlightBackground};
    margin: 0 -16px;
    padding-left: 10px;
    border-left: 6px solid ${props => props.theme.code.highlightLeftBorder};
    border-right: 16px solid ${props => props.theme.code.background};
  }

  pre {
    color: ${props => props.theme.code.color};
    padding: 16px;
    margin-bottom: 0;

    code {
      .script {
        color: ${props => props.theme.code.color};
      }

      .punctuation {
        color: ${props => props.theme.code.punctuation};
      }

      .operator {
        color: ${props => props.theme.code.punctuation};
      }

      .comment {
        color: ${props => props.theme.code.comment};
        font-style: italic;
      }

      .string {
        color: ${props => props.theme.code.string};
      }

      .attr-value {
        color: ${props => props.theme.code.attrValue};
      }

      .function {
        color: ${props => props.theme.code.function};
      }

      .class-name {
        color: ${props => props.theme.code.className};
      }

      .tag {
        color: ${props => props.theme.code.tag};
      }

      .keyword {
        color: ${props => props.theme.code.keyword};
      }

      .number {
        color: ${props => props.theme.code.number};
      }

      .attr-name {
        color: ${props => props.theme.code.attrName};
      }

      .boolean {
        color: ${props => props.theme.code.boolean};
      }
    }
  }
`

export default GlobalStyles
