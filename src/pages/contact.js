import React from 'react'
import Helmet from 'react-helmet'
import { Form, Button, Container, Input, Icon } from 'semantic-ui-react'

const Contact = () => (
  <Container text>
    <Helmet title="About" />
    <Form name="contact" method="POST" data-netlify="true">
      <Form.Group widths="equal">
        <Form.Field>
          <Input iconPosition="left" placeholder="Name">
            <Icon name="user" />
            <input />
          </Input>
        </Form.Field>
        <Form.Field>
          <Input iconPosition="left" placeholder="Email">
            <Icon name="at" />
            <input />
          </Input>
        </Form.Field>
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Field>
          <Input iconPosition="left" placeholder="Phone Number">
            <Icon name="phone" />
            <input />
          </Input>
        </Form.Field>
      </Form.Group>
      <Form.TextArea label="Message" />
      <Button type="submit">Submit</Button>
    </Form>
  </Container>
)

export default Contact
