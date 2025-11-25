import './style.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Form from "./components/Form"
import HoldingPage from "./components/HoldingPage"
import AboutTheGame from './components/AboutTheGame'

function App() {
  return (<>
    <div className="min-h-screen">
      <Router >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/about-the-game" element={<AboutTheGame />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    {/* <div className="min-h-screen">
      <HoldingPage />
    </div> */}
  </>
  )
}

export default App
