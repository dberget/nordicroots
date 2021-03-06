import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Button, Segment, Divider } from 'semantic-ui-react'

export default ({
  handleCheckout,
  display_price: {
    with_tax: { amount, currency, formatted },
  },
}) => (
  <div>
    <Divider />
    <Segment clearing size="large">
      <strong>Sub total:</strong> {formatted}
      <StripeCheckout
        name="Nordic Roots Store"
        amount={amount}
        currency={currency || 'USD'}
        stripeKey={process.env.STRIPE_PUBLISHABLE_KEY || ''}
        shippingAddress={false}
        billingAddress
        zipCode
        token={handleCheckout}
        reconfigureOnUpdate={false}
        triggerEvent="onClick"
      >
        <Button color="black" floated="right">
          Check out
        </Button>
      </StripeCheckout>
    </Segment>
  </div>
)
