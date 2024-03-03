import Header from '../layouts/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

export default function FirstLayout() {
  return (
    <>
      <Header />
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  )
}
