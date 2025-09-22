import { BanknoteArrowDown, BanknoteArrowUp } from 'lucide-react'
import type { User } from '../types'

const BalanceCard = ({ user }: { user: User }) => {
  return (
    <>
      <div className='flex h-30 w-full justify-between gap-28 rounded-xl bg-[#14121f] px-4 text-center'>
        <div className='flex flex-col items-start justify-between gap-2 p-4 text-white/90'>
          <h1 className='text-2xl'>{user.account.name}</h1>
          <h1 className='text-4xl font-bold'>
            ${user.account.balance.toString()}
          </h1>
        </div>
        <div className='flex items-end gap-2 pb-4'>
          <button className='btn rounded-3xl bg-white text-black'>
            <BanknoteArrowDown />
            Deposit
          </button>
          <button className='btn btn-outline rounded-3xl text-white/80 hover:bg-transparent'>
            <BanknoteArrowUp />
            Withdraw
          </button>
        </div>
      </div>
    </>
  )
}

export default BalanceCard
