import { RouterProvider } from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import router from "./router.tsx";
import './App.css'

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" />
    </>
  )
}

export default App
