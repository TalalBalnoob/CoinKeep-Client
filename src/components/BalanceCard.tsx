import type { UserAccount } from '../types'

const BalanceCard = ({ account }: { account: UserAccount }) => {
  return (
    <>
      <div className='card text-primary-content w-80 bg-transparent text-center'>
        <div className='card-body'>
          <p className='text-lg'>
            Current Balance:{' '}
            <span className='text-3xl font-bold'>${account.balance}</span>
          </p>
        </div>
      </div>
      <div className='divider'></div>
    </>
  )
}

export default BalanceCard
