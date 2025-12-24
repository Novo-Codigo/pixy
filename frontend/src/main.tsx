import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProfilePage from './pages/profile.tsx'
import SetupPage from './pages/setup.tsx'
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
  },
  {
    path: '/setup',
    element: <SetupPage />
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </StrictMode>,
)
