import React from 'react'
import Img from 'gatsby-image'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  z-index: 10;
  margin-top: -10px;

  &:hover {
    background-color: '#004c99';
  }
`

const Hero = ({ sizes }) => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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
      style={{ backgroundColor: '#004c99', zIndex: 10, marginTop: '-10px' }}
      primary
      size="big"
    >
      See the Food
    </Button>
    <StyledButton style={{ marginTop: '-10px' }} size="big">
      Our Event Schedule
    </StyledButton>
  </div>
)

export default Hero
