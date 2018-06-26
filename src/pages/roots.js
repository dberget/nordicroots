import React from 'react'
import Helmet from 'react-helmet'
import { Icon, Container } from 'semantic-ui-react'

const Roots = () => (
  <div>
    <Helmet title="About" />
    <Container text>
      <h1>Our Roots</h1>
      Nordic Roots Baking Co. was born from the love and passion that I have for
      all things Scandinavian. I look forward to sharing my experiences
      learning, tasting, seeing, and exploring my heritage with you!
      <br />
      <br />
      Another passion of mine has been reducing the waste created by my family,
      and encouraging others to learn about ways they can reduce, reuse, and
      recycle as well. Not every ingredient is purchased the “Zero Waste” way.
      However, a great deal of effort has been put forth to reduce the amount of
      packaging and plastic used to create the recipes shared, while also
      composting and properly disposing of the trash created. When possible, I
      use locally sourced ingredients made right here in Minnesota, cutting down
      on each recipe’s carbon footprint. Not only are you enjoying deliciously
      made baked goods made with high quality ingredients, you’re supporting
      other MN businesses, and helping the earth as well!
      <br />
      <br />
      Along with locally sourced ingredients with reduced/no packaging, the
      items that are handmade are created using vintage or upcycled materials
      whenever possible.
      <br />
      <br />
      Tusen takk, og velkommen! <Icon color="red" name="heart" />Julia
    </Container>
  </div>
)

export default Roots
