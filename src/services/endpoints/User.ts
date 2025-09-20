import type { UserAccount } from '../../types'
import api from '../api'

export const getUserAccount = async () => {
  const account = await api.get<UserAccount[]>('/User/Account/')
  return account
}
