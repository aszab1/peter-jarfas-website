import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Photos from './components/Photos.jsx'
import Videos from './components/Videos.jsx'
import Awards from './components/Awards.jsx'
import Classes from './components/TimeTable.jsx'
import Reviews from './components/Reviews.jsx'
import './i18n'


import './index.css'
import './styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/kepek',
        element: <Photos />,
      },
      {
        path: '/videok',
        element: <Videos />,
      },
      {
        path: '/eredmenyek',
        element: <Awards />,
      },
      {
        path: '/orarend-arak',
        element: <Classes />,
      },
      {
        path: '/velemenyek',
        element: <Reviews />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
