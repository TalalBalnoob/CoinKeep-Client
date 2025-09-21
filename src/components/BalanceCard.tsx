import type { User } from '../types'

const BalanceCard = ({ user }: { user: User }) => {
  return (
    <>
      <div className='card text-primary-content w-80 bg-transparent text-center'>
        <div className='card-body'>
          <h2 className='card-title text-3xl'>Hello, {user.username} 👋</h2>
          <p className='text-lg'>
            Current Balance:{' '}
            <span className='text-3xl font-bold'>${user.account.balance}</span>
          </p>
        </div>
      </div>
      <div className='divider'></div>
    </>
  )
}

export default BalanceCard
