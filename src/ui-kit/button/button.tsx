import React, { ButtonHTMLAttributes } from 'react'

export default ({ children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => (
  <button {...rest}>{children}</button>
)
