
import { createRoot } from 'react-dom/client'
import './App.css'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { mainRouter } from './router/mainRouter';

createRoot(document.getElementById('root')!).render(
  
  <RouterProvider router={mainRouter} />,
)
