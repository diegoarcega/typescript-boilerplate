import React from 'react'
import { Button, Input } from '../../ui-kit'
import { api } from '../../modules/services/api'

export default () => {
  api.get('/dasda')
  return (
    <form onSubmit={() => console.log('submitted')}>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Button type="submit">Login</Button>
    </form>
  )
}
