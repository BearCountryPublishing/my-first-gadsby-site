import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt='Circuit Map of US Courts'
        src='../images/CircuitMap.svg'
      />
    </Layout>
  )
}

export default IndexPage