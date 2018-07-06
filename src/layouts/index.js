import React from 'react'
import { Container } from 'semantic-ui-react'
import Headroom from 'react-headroom'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby-link'
import 'semantic-ui-css/semantic.min.css'
import AuthProvider from '../components/Context/AuthProvider'
import CartProvider from '../components/Context/CartProvider'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Layout extends React.PureComponent {
  render() {
    const { location, children } = this.props

    return (
      <AuthProvider>
        <CartProvider>
          <Helmet
            meta={[
              {
                name: 'description',
                content: 'Nordic Roots Baking Co.',
              },
              { name: 'keywords', content: 'nordic, bakery' },
              { name: 'msapplication-TileColor', content: '#da532c' },
              { name: 'theme-color', content: '#ffffff' },
            ]}
          >
            <html lang="en" />
            {/* <!-- A little help for the Netlify post-processing bots --> */}
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href={withPrefix('/favicons/apple-touch-icon.png')}
            />
            <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href={withPrefix('/favicons/favicon-32x32.png')}
            />
            <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href={withPrefix('/favicons/favicon-16x16.png')}
            />
          </Helmet>
          <Headroom style={{ zIndex: '20', height: 80 }}>
            <Header location={location} />
          </Headroom>
          <form name="contact" netlify netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message" />
          </form>
          <Container>{children()}</Container>
          <Footer />
        </CartProvider>
      </AuthProvider>
    )
  }
}

export default Layout
