/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react'
import { NavLink } from 'react-router-dom'
import SwitchTheme from '../components/SwitchTheme'
import Search from '../components/Search'
export default function Sidebar({ children }) {
  return (
    <div className='drawer lg:drawer-open'>
      <input
        id='my-drawer-2'
        type='checkbox'
        className='drawer-toggle'
      />
      <div className='drawer-content flex flex-col items-center  p-4'>
        {/* Page content here */}
        {children}
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-2'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu p-4 w-80 gap-2 min-h-full bg-base-200 text-base-content'>
          {/* Sidebar content here */}
          <li className='md:hidden lg:hidden'>
            <div>
              <SwitchTheme />
            </div>
          </li>

          <li>
            <NavLink to='/'>
              <Icon icon='tabler:home' />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/popular'>
              <Icon icon='mdi:cards-heart' />
              Popular
            </NavLink>
          </li>
          <li>
            <NavLink to='/toprated'>
              <Icon icon='mdi:star' />
              Top Rated
            </NavLink>
          </li>
          <li className='md:hidden lg:hidden'>
            <div>
              <Search />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
