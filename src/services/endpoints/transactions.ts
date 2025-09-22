import type { Transaction } from '../../types'
import api from '../api'

export const getRecentTransactions = async (accountId: number) => {
  const transactions = await api.get<Transaction[]>(`/transaction/${accountId}/recent`)
  return transactions
}
