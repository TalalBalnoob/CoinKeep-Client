import { useQuery } from '@tanstack/react-query'
import type { UserAccount } from '../../types'
import { getRecentTransactions } from '../../services/endpoints/transactions'
import { getMonthName } from '../../utils/Date'
import TransactionItem from './TranssactionItem'

const TransactionsFeed = ({ account }: { account: UserAccount }) => {
  const transactionsRes = useQuery({
    queryKey: ['recentTransactions'],
    queryFn: () => getRecentTransactions(account.id),
  })

  if (!transactionsRes.isSuccess) return <div>...is loading</div>

  return (
    <div className='bg-base-200 border-base-300 rounded border-[1px] p-4 shadow'>
      <h1 className='pb-2 text-2xl'>Transactions</h1>
      <div className='max-h-[600px] overflow-y-scroll'>
        {transactionsRes.data?.data.map((tran, index, arr) => {
          const startDate = new Date(tran.createdAt)

          if (index == 0) {
            return (
              <>
                <div className='divider'>
                  {getMonthName(startDate.getMonth())} {startDate.getDate()}
                </div>
                <TransactionItem transaction={tran} />
              </>
            )
          }

          if (
            startDate.getDate() != new Date(arr[index - 1].createdAt).getDate()
          ) {
            return (
              <>
                <div className='divider'>
                  {getMonthName(startDate.getMonth())} {startDate.getDate()}
                </div>
                <TransactionItem transaction={tran} />
              </>
            )
          } else {
            return <TransactionItem transaction={tran} />
          }
        })}
      </div>
    </div>
  )
}

export default TransactionsFeed
