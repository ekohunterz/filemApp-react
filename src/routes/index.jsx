import { createBrowserRouter } from 'react-router-dom'

import HomePage from '../views/HomePage'
import DetailPage from '../views/DetailPage'
import NotFoundPage from '../views/NotFoundPage'
import FirstLayout from '../layouts/FirstLayout'
import PopularPage from '../views/PopularPage'
import TopRatedPage from '../views/TopRatedPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <FirstLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        index: true
      },
      {
        path: '/detail/:id',
        element: <DetailPage />
      },
      {
        path: '/popular',
        element: <PopularPage />
      },
      {
        path: '/toprated',
        element: <TopRatedPage />
      }
    ]
  }
])
