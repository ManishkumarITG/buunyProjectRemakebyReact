import LeyOut from './components/appLayout'
import "./resourse/style.css"
import Home from './components/Home'
import About from './components/About'

// import "../style.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LeyOut />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "About",
          element: <About/>
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
