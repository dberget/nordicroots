import React from 'react'
import Helmet from 'react-helmet'
import { Form, Container, Input, Icon, Button } from 'semantic-ui-react'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', message: '' }
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value })

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })

    e.preventDefault()
  }

  render() {
    const { name, email, message } = this.state

    return (
      <Container text>
        <Helmet title="About" />
        <Form
          style={{ width: '75%', margin: '0 auto', marginTop: '15px' }}
          onSubmit={this.handleSubmit}
        >
          <Form.Input
            onChange={this.handleChange}
            value={name}
            iconPosition="left"
            placeholder="Name"
            name="name"
            type="text"
          >
            <Icon name="user" />
            <input />
          </Form.Input>
          <Form.Input
            onChange={this.handleChange}
            iconPosition="left"
            value={email}
            name="email"
            type="email"
            placeholder="Email"
          >
            <Icon name="at" />
            <input />
          </Form.Input>
          <Form.TextArea
            onChange={this.handleChange}
            label="Message"
            value={message}
            name="message"
          />
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default Contact
