import React from 'react'
import Helmet from 'react-helmet'
import { Form, Container, Input, Icon } from 'semantic-ui-react'

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })

    e.preventDefault()
  }

  render() {
    return (
      <Container text>
        <Helmet title="About" />
        <Form
          onSubmit={() => this.handleSubmit}
          name="contact"
          method="POST"
          netlify
        >
          <Form.Group widths="equal">
            <Form.Field>
              <Input iconPosition="left" placeholder="Name">
                <Icon name="user" />
                <input onChange={this.handleChange} name="name" />
              </Input>
            </Form.Field>
            <Form.Field>
              <Input iconPosition="left" placeholder="Email">
                <Icon name="at" />
                <input onChange={this.handleChange} name="email" />
              </Input>
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <Input iconPosition="left" placeholder="Phone Number">
                <Icon name="phone" />
                <input onChange={this.handleChange} name="phone" />
              </Input>
            </Form.Field>
          </Form.Group>
          <Form.TextArea label="Message" name="message" />
          <Form.Button type="submit">Submit</Form.Button>
          <input
            onChange={this.handleChange}
            type="hidden"
            name="form-name"
            value="contact"
          />
        </Form>
      </Container>
    )
  }
}

export default Contact
