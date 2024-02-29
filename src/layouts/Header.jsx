import { Icon } from '@iconify/react'
import SwitchTheme from '../components/SwitchTheme'
import { Link } from 'react-router-dom'
import Search from '../components/Search'

export default function Header() {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link
          to='/'
          className='btn btn-ghost text-xl'
        >
          Filem App
        </Link>
      </div>
      <div className='flex-none gap-2'>
        <div className='hidden md:block'>
          <Search />
        </div>
        <label
          htmlFor='my-drawer-2'
          className='btn btn-square btn-ghost drawer-button lg:hidden'
        >
          <Icon icon='tabler:menu-2' />
        </label>
        <div className='hidden md:block lg:block'>
          <SwitchTheme />
        </div>
      </div>
    </div>
  )
}
