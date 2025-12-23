import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProfilePage from './pages/profile.tsx'
import Home from './index.tsx'
import App from './_layout.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </StrictMode>,
)
