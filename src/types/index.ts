export type User = {
  id: number
  username: string
  email: string
  account: UserAccount
}

export type UserAccount = {
  id: number
  balance: number
  name: string
  transactions: Transaction[]
}

export type Transaction = {
  id: number
  amount: number
  note: string
  categoryId: string
  categoryName: string
  transactionType: 'Income' | 'Expense' | 'Adjustment'
  createdAt: string
}
