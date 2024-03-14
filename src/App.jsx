import Navbar from "./components/Navbar"
import { BrowserRouter } from "react-router-dom"
import About from "./pages/About"
import Projects from "./pages/Projects"

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <About/>
      <Projects/>
    </BrowserRouter>
    </>
  )
}

export default App
