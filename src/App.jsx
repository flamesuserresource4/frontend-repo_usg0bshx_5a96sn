import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import GradientBackground from './components/GradientBackground'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tracker from './pages/Tracker'
import History from './pages/History'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative flex flex-col">
        <GradientBackground />
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracker" element={<Tracker />} />
            <Route path="/history" element={<History />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
