import React from "react"
import { graphql } from "gatsby"

import { StyledHeading } from "../components/heading"
import { SEO } from "../components/seo"

const Work = () => (
  <>
    <SEO
      title="My Work"
      keywords={[
        `blog`,
        `gatsby`,
        `javascript`,
        `react`,
        `power bi`,
        `data science`,
      ]}
    />
    <StyledHeading>My Applications</StyledHeading>
    <ul>
      <li>
        <a
          href="https://ski-eiselfing.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://ski-eiselfing.de/
        </a>
        : The website of my skiclub, built with <i>ReactJS</i> and{" "}
        <i>Bootstrap</i>. The frontend applications talks to the server via a{" "}
        <i>GraphQL</i>-API. The application show events from the underlying
        database with online registration. It also contains a simple image
        galery.
      </li>
      <li>
        <a
          href="https://karalaxen.thomasheyenbrock.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://karalaxen.thomasheyenbrock.com/
        </a>
        : Here you can play a bavarian card game (which is not rather well known
        I suppose 😅). The application is still work-in-progress, you can
        currently only play against simulated opponents. In the future the app
        shall feature multi-player-mode.
        <br />
        The frontend is built with <i>ReactJS</i> and <i>TypeScript</i>. It is
        hosted with <i>Firebase</i>, which is also the platform that I used for
        authentication and as database. The application is a progressive web app
        and can be used completely offline.
      </li>
      <li>
        <a
          href="https://stateofjs2018.thomasheyenbrock.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://stateofjs2018.thomasheyenbrock.com/
        </a>
        : I created this application for a{" "}
        <a
          href="https://medium.com/@sachagreif/announcing-the-state-of-javascript-2018-data-visualization-contest-4d75abad96c8"
          target="_blank"
          rel="noopener noreferrer"
        >
          contest
        </a>
        . (I did indeed win a t-shirt!) The application visualizes some data
        from the State-of-JS survey 2018. It is again built with <i>ReactJS</i>.
      </li>
      <li>
        <a
          href="https://fillapix.thomasheyenbrock.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://fillapix.thomasheyenbrock.com/
        </a>
        : I build this application to try out <i>VueJS</i>. It's very simple,
        all the state lies in the client. No server, no database. I also used{" "}
        <i>TypeScript</i> here.
        <br />
        The game itself is very simple, kind of like Minesweeper. You have to
        color the box in the grid in such a way that there are as many colored
        boxes around a number as it tells you. (So e.g. all boxes around a{" "}
        <i>9</i> have to be colored.)
        <br />
        You can also jump to the solution if this is too much work for you. The
        solution is not stored anywhere but it is computed algorithmically on
        runtime.
      </li>
      {/* TODO: passion */}
      {/* TODO: stealing-stones */}
    </ul>
    <StyledHeading>NPM Packages</StyledHeading>
    <ul>
      <li>
        <a
          href="https://www.npmjs.com/package/combine-utils"
          target="_blank"
          rel="noopener noreferrer"
        >
          combine-utils
        </a>
        : This package helps with combinatorical problems like combining
        multiple items of a collection together and creating sets of
        collections. The basis is a recursive function.
      </li>
      <li>
        <a
          href="https://www.npmjs.com/package/react-cross-platform-cli"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-cross-platform-cli
        </a>
        : This package is a CLI that will set up a boilerplate app using{" "}
        <i>React Native</i>, <i>react-native-web</i> to compile the app for the
        web and <i>Electron</i> to compile the app as desktop application.
        <br />
        It has been a long time since I last touched this, so beware! I have no
        idea if everything still works. The package versions of the dependencies
        are probably heavily outdated as well.
      </li>
      <li>TODO: terminal-canvas</li>
    </ul>
    <StyledHeading>Other work</StyledHeading>
    <ul>
      <li>TODO: rent-a-hacker</li>
    </ul>
  </>
)

export default Work

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
