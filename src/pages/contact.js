import React from 'react'
import Helmet from 'react-helmet'
import { Form, Button, Container, Input, Icon } from 'semantic-ui-react'

const Contact = () => (
  <Container text>
    <Helmet title="About" />
    <Form name="contact" method="POST" netlify>
      <Form.Group widths="equal">
        <Form.Field>
          <Input iconPosition="left" placeholder="Name">
            <Icon name="user" />
            <input name="name" />
          </Input>
        </Form.Field>
        <Form.Field>
          <Input iconPosition="left" placeholder="Email">
            <Icon name="at" />
            <input name="email" />
          </Input>
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field>
          <Input iconPosition="left" placeholder="Phone Number">
            <Icon name="phone" />
            <input name="phone" />
          </Input>
        </Form.Field>
      </Form.Group>
      <Form.TextArea label="Message" name="message" />
      <Form.Button type="submit">Submit</Form.Button>
    </Form>
  </Container>
)

export default Contact
