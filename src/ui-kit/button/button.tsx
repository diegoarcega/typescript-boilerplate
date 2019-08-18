import React from 'react'

export default ({ children, ...rest }: { children: string }): JSX.Element => (
  <button {...rest}>{children}</button>
)
