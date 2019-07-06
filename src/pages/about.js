import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

export default ({ data: { site } }) => {
  return <Layout site={site} noSubscribeForm></Layout>
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
