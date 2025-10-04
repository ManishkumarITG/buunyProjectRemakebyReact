import LeyOut from './components/appLayout'
import "./resourse/style.css"
import Home from './components/Home'
// import "../style.css"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element: <LeyOut/>,
      children:[
        {
          index: true,
          element: <Home />

        }
      ]
    }
  ]) 

  return <RouterProvider router={router}/>
}

export default App
