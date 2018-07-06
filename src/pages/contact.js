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
    this.state = { name: '', email: '', message: '', phone: '' }
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
    const { name, email, phone, message } = this.state

    return (
      <Container text>
        <Helmet title="About" />
        {/* <!-- A little help for the Netlify post-processing bots --> */}
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="phone" name="phone" />
          <input type="email" name="email" />
          <textarea name="message" />
        </form>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Field>
              <Input
                onChange={this.handleChange('name')}
                value={name}
                iconPosition="left"
                placeholder="Name"
                type="text"
              >
                <Icon name="user" />
                <input />
              </Input>
            </Form.Field>
            <Form.Field>
              <Input
                onChange={this.handleChange('email')}
                iconPosition="left"
                value={email}
                type="email"
                placeholder="Email"
              >
                <Icon name="at" />
                <input />
              </Input>
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <Input
                onChange={this.handleChange('phone')}
                iconPosition="left"
                value={phone}
                placeholder="Phone Number"
              >
                <Icon name="phone" />
                <input name="phone" />
              </Input>
            </Form.Field>
          </Form.Group>
          <Form.TextArea
            onChange={this.handleChange('message')}
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
