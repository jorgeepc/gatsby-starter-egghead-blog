import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'

export default ({ data: { site } }) => {
  return (
    <Layout site={site} noSubscribeForm>
      <Container>
        <h2>
          ¡Hola! I'm Jorge Padilla{' '}
          <span role="img" aria-label="hi">
            👋
          </span>
        </h2>
        <p>
          I am a Software Engineer based in Cuenca, Ecuador with industry
          experience building web and mobile applications. I currently focus on
          JavaScript and specialize in building and testing backend services
          with Node.js. I also have experience working in frontend with React
          and ReactNative (native modules with Java).
        </p>
        <p>
          I feel passionate about participating in projects that have the goal
          to improve the life quality of people.
        </p>
      </Container>
    </Layout>
  )
}

export const data = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
  }
`
