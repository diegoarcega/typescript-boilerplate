import React from 'react'
import { Button, Input } from '../../ui-kit'

export default () => (
  <form onSubmit={() => console.log('submitted')}>
    <Input placeholder="email" />
    <Input placeholder="password" />
    <Button type="submit">Login</Button>
  </form>
)
