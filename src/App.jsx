import Navbar from "./components/Navbar"
import { BrowserRouter } from "react-router-dom"
import About from "./pages/About"

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <About/>
    </BrowserRouter>
    </>
  )
}

export default App
