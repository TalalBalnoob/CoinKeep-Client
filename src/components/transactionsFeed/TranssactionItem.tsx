import { useMemo } from 'react'
import type { Transaction } from '../../types'
import { getMonthName } from '../../utils/Date'
import TransactionIcon from './transactionIcon'

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const date = useMemo(() => {
    return new Date(transaction.createdAt)
  }, [transaction.createdAt])
  return (
    <div
      key={transaction.id}
      className='m-4 flex items-center gap-4 p-4 py-2'
    >
      <TransactionIcon transactionType={transaction.transactionType} />
      <div>
        {transaction.categoryName}
        <div className='flex gap-1 text-gray-400'>
          <p>{date.getFullYear()}</p>
          <p>{getMonthName(date.getMonth()).slice(0, 3)}</p>
          <p>{date.getDate()}</p>
        </div>
      </div>
      <h1 className='ml-auto text-xl font-medium text-black/80'>
        {transaction.amount} USD
      </h1>
    </div>
  )
}

export default TransactionItem
