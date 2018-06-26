/* eslint-disable */

import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ProductList from '../components/ProductList'
import Hero from '../components/Hero'

class StoreIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const products = get(this, 'props.data.allMoltinProduct.edges')
    const sizes = get(this, 'props.data.background.sizes')
    const filterProductsWithoutImages = products.filter(
      v => v.node.includedData.main_image
    )
    return (
      <div>
        <Helmet title={siteTitle} />
        <Hero sizes={sizes} />
        <ProductList products={filterProductsWithoutImages} />
      </div>
    )
  }
}

export default StoreIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMoltinProduct {
      edges {
        node {
          originalId
          name
          description
          meta {
            display_price {
              with_tax {
                amount
                currency
                formatted
              }
            }
          }
          includedData {
            main_image {
              id
              link {
                href
              }
            }
          }
          mainImage {
            childImageSharp {
              sizes(maxWidth: 600) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
    background: imageSharp(id: { regex: "/wall.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
