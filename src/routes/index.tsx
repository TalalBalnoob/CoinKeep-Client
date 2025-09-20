import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { getUserAccount } from '../services/endpoints/User'
import { useEffect } from 'react'
import { Account } from '../services/Atoms'
import { useAtom } from 'jotai'
import BalanceCard from '../components/BalanceCard'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [userAccount, setUserAccount] = useAtom(Account)

  const { data, isSuccess } = useQuery({
    queryKey: ['UserAccount'],
    queryFn: getUserAccount,
  })

  useEffect(() => {
    if (isSuccess || data) setUserAccount(data.data[0])
  }, [data])

  if (!userAccount) {
    return <></>
  }

  return (
    <div className='container mx-auto space-y-4 p-4'>
      {/* Show User Account Balance */}
      <BalanceCard account={userAccount} />
      {/* transactions History */}
      {/* Total amount ber category */}
      {/* total expanse amount */}
      {/* total income amount */}
      {/* --------extra---------- */}
      {/* Pai chart expanse/income */}
      {/* Pai Chart Expanses among categories */}
    </div>
  )
}
