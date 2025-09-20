import { Link } from '@tanstack/react-router'
import { Home } from 'lucide-react'
import type { ReactNode } from 'react'

const SideBar = () => {
  return (
    <aside className='bg-base-300 h-screen w-[300px]'>
      <div className='mt-[10%] flex w-full flex-col items-center'>
        <h1 className='mb-[30%] text-3xl font-semibold'>CoinKeep</h1>
        <nav className='w-full'>
          <SideBarBtn
            text='Home'
            icon={<Home />}
          />
          <SideBarBtn text='Home' />
          <SideBarBtn text='Home' />
          <SideBarBtn text='Home' />
        </nav>
      </div>
    </aside>
  )
}

const SideBarBtn = ({ icon, text }: { text: string; icon?: ReactNode }) => {
  return (
    <div className='bg bg-base-200 hover:bg-base-300 flex cursor-pointer items-center gap-3 p-3 text-2xl'>
      {icon} <Link to='/'>{text}</Link>
    </div>
  )
}

export default SideBar
