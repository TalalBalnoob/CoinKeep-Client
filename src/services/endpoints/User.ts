import type { User } from '../../types'
import api from '../api'

export const getUser = async () => {
  const account = await api.get<User>('/User/profile')
  return account
}
