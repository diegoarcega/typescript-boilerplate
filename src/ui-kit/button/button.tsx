import React from 'react'

export default ({ children, ...rest }: { children: string }) => <button {...rest}>{children}</button>
