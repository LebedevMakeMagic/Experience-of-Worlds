import { editable as e } from '@theatre/r3f'
import React from 'react'

const TheatreMesh = (props) => {
  const { theatreKey, children } = props
  return <e.mesh theatreKey={theatreKey}>{children}</e.mesh>
}

export default TheatreMesh
