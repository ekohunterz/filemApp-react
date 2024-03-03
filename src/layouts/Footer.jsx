import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <footer className='footer items-center p-4 bg-base-200  dark:bg-neutral dark:text-neutral-content'>
      <aside className='items-center grid-flow-col'>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'>
        <a href='https://github.com/ekohunterz/filemApp-react'>
          <Icon
            icon='mdi:github'
            width={24}
          />
        </a>
      </nav>
    </footer>
  )
}
