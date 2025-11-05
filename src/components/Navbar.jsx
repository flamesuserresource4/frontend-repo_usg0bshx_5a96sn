import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const linkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-full transition-colors duration-200 ${
      isActive
        ? 'text-white bg-red-600/80 shadow-[0_0_20px_rgba(220,38,38,0.6)]'
        : 'text-white/80 hover:text-white hover:bg-white/10'
    }`

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full fixed top-0 left-0 z-40 backdrop-blur-xl bg-black/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-red-500 to-red-800 shadow-[0_0_20px_rgba(220,38,38,0.7)]" />
          <span className="text-white font-semibold tracking-wide">Shakti Alert</span>
        </div>
        <nav className="flex items-center gap-2">
          <NavLink to="/" className={linkClasses} end>
            Home
          </NavLink>
          <NavLink to="/tracker" className={linkClasses}>
            Live Track
          </NavLink>
          <NavLink to="/history" className={linkClasses}>
            History
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
        </nav>
      </div>
    </motion.header>
  )
}
