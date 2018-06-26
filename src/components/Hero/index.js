import React from 'react'
import Img from 'gatsby-image'
import { Button, Icon } from 'semantic-ui-react'

const Hero = ({ sizes }) => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Img
      style={{
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
      }}
      sizes={sizes}
      alt="Nordic Roots"
    />
    <Button
      style={{
        zIndex: 10,
        position: 'absolute',
        bottom: 5,
        border: 'none',
      }}
      basic
      size="big"
      as="a"
      href="#products"
    >
      <Icon name="down arrow" />
      Food
    </Button>
  </div>
)

export default Hero
