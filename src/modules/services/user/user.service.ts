import { api } from '../api'
import { User } from '../../../types/user.type'

const create = (user: User): Promise<any> => {
  return api.post('/user/create')
}

export const SignupService = {
  create,
}
