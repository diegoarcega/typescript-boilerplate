import React from 'react'
import { Button, Input } from '../../ui-kit'

export default () => (
  <form onSubmit={() => console.log('submitted')}>
    <Input placeholder="name" />
    <Input placeholder="email" />
    <Input placeholder="password" />
    <Input placeholder="confirm password" />
    <Button type="submit">Sign up</Button>
  </form>
)
