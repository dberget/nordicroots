import React, { Component } from 'react'
import Link from 'gatsby-link'
import {
  Menu,
  Container,
  Icon,
  Portal,
  Segment,
  Divider,
  Button,
} from 'semantic-ui-react'
import styled from 'styled-components'
import ShoppingCartIcon from './ShoppingCartIcon'
import Logo from './Logo'

const StyledLink = styled(Link)`
  font-weight: bold;
  text-align: center;
  font-size: 2em;
  &:hover {
    text-decoration: underline;
  }
`

const BurgerButton = styled(Button)`
  &&& {
    font-size: 1rem;
    padding: 0.785em 1.5em;
    box-shadow: 0 0 0 1px transparent inset,
      0 0 0 0 rgba(34, 36, 38, 0.15) inset;
  }
`
const CloseButton = BurgerButton.extend`
  &&& {
    position: absolute;
    top: -4em;
    right: 0em;
    padding: 0.5em;
    font-size: 1.5em;
    width: 2em;
    height: 2em;
  }
`

const StyledSegment = styled(Segment)`
  &&& {
    position: fixed;
    top: 0%;
    left: 0vw;
    z-index: 1000;
    width: 100vw;
    height: 110vh;
  }
`

const StyledContainer = styled.div`
  &&& {
    margin-top: 6em;
    text-align: center;
    position: relative;
  }
`

const StyledDivider = styled(Divider)`
  &&& {
    margin: 2em;
  }
`

class MobileMenu extends Component {
  state = { open: false, activeItem: '/' }

  componentWillReceiveProps(nextProps) {
    const nextPathname = nextProps.location.pathname
    const currentPathname = this.props.location.pathname

    if (nextPathname !== currentPathname) {
      this.setState({
        activeItem: `/${nextPathname
          .split('/')
          .pop()
          .toString()}`,
      })
    }
  }

  handleClick = () => this.setState({ open: !this.state.open })

  handleClose = () => this.setState({ open: false })

  render() {
    const { open, activeItem } = this.state
    const { token, cartCount } = this.props

    return (
      <Menu size="huge" borderless pointing>
        <Container>
          <Menu.Item as={Link} to="/" header active={activeItem === '/'}>
            <Logo />
            Nordic Roots Baking Co.
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as={Link} to="/cart/" active={activeItem === '/cart'}>
              <ShoppingCartIcon cartCount={cartCount} name="Cart" />
            </Menu.Item>
          </Menu.Menu>
          <Portal closeOnEscape onClose={this.handleClose} open={open}>
            <StyledSegment className role="dialog" aria-label="Navigation Menu">
              <StyledContainer>
                <CloseButton
                  aria-label="Close Navigation"
                  basic
                  circular
                  onClick={this.handleClose}
                  autoFocus
                >
                  X
                </CloseButton>
                <StyledLink to="/" onClick={this.handleClose}>
                  Home
                </StyledLink>
                <StyledDivider />
                <StyledLink to="/cart/" onClick={this.handleClose}>
                  {`Shopping Cart ${cartCount ? `(${cartCount})` : ''}`}
                </StyledLink>
              </StyledContainer>
            </StyledSegment>
          </Portal>
        </Container>
      </Menu>
    )
  }
}

export default MobileMenu
