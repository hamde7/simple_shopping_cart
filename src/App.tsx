import { Container } from "react-bootstrap"
import {Routes , Route} from 'react-router-dom'
import About from "./pages/About"
import Home from "./pages/Home"
import Store from "./pages/Store"
import NavBar from "./components/NavBar"
import { ShoppingCartProvider } from "./context/SoppingCartContext"
function App() {
  return (
    <ShoppingCartProvider>
    <NavBar />
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Store" element={<Store/>} />
        <Route path="/About" element={<About/>} />
      </Routes>
    </Container>
    </ShoppingCartProvider>
  )
}

export default App
