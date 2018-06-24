import React from 'react'
import { Image } from 'semantic-ui-react'

import dala from '../../images/dala.svg'

const Logo = () => (
  <Image
    size="mini"
    src={dala}
    style={{ marginRight: '1.5em' }}
    alt="Nordic Roots Baking Co."
  />
)

export default Logo
