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
    console.log(this.state)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(res => res)
      .then(res => console.log(res))

    e.preventDefault()
  }

  render() {
    const { name, email, phone, message } = this.state

    return (
      <Container text>
        <Helmet title="About" />
        <Form onSubmit={this.handleSubmit} name="contact" method="POST" netlify>
          <Form.Group widths="equal">
            <Form.Field>
              <Input
                onChange={this.handleChange('name')}
                value={name}
                iconPosition="left"
                placeholder="Name"
              >
                <Icon name="user" />
                <input name="name" />
              </Input>
            </Form.Field>
            <Form.Field>
              <Input
                onChange={this.handleChange('email')}
                iconPosition="left"
                value={email}
                placeholder="Email"
              >
                <Icon name="at" />
                <input name="email" />
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
          <input type="hidden" name="form-name" value="contact" />
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    )
  }
}

export default Contact
