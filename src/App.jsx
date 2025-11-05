import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import GradientBackground from './components/GradientBackground'
import Home from './pages/Home'
import Tracker from './pages/Tracker'
import History from './pages/History'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative">
        <GradientBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/history" element={<History />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
