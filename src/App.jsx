import { RouterProvider } from 'react-router-dom'
import { useContext } from 'react'
import { router } from './routes/index'
import { ThemeContext } from './theme'
function App() {
  const { theme } = useContext(ThemeContext)
  document.documentElement.setAttribute('data-theme', theme)
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
