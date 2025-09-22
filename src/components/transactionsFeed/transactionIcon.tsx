import { Wrench, BanknoteArrowUp, BanknoteArrowDown } from 'lucide-react'

const TransactionIcon = ({
  transactionType,
}: {
  transactionType: 'Income' | 'Expense' | 'Adjustment'
}) => {
  return (
    <span className='bg-base-100 aspect-square h-full'>
      {transactionType === 'Expense' ? (
        <BanknoteArrowUp className='fill-red-500' />
      ) : transactionType === 'Income' ? (
        <BanknoteArrowDown className='text-green-400' />
      ) : (
        <Wrench className='text-gray-600' />
      )}
    </span>
  )
}
export default TransactionIcon
