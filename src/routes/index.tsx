import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { getUser } from '../services/endpoints/User'
import { useEffect } from 'react'
import { UserProfile } from '../services/Atoms'
import { useAtom } from 'jotai'
import BalanceCard from '../components/BalanceCard'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [userProfile, setUserProfile] = useAtom(UserProfile)

  const { data, isSuccess } = useQuery({
    queryKey: ['User'],
    queryFn: getUser,
  })

  useEffect(() => {
    if (isSuccess || data) setUserProfile(data.data)
  }, [data])

  if (!userProfile) {
    return <></>
  }

  return (
    <div className='container mx-auto space-y-4 p-4'>
      {/* Show User Account Balance */}
      <BalanceCard user={userProfile} />
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
