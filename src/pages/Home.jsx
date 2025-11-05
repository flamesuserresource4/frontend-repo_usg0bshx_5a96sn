import { motion } from 'framer-motion'
import Hero3D from '../components/Hero3D'
import StartPanel from '../components/StartPanel'

export default function Home() {
  return (
    <main className="pt-20">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Shakti Alert
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="text-white/80 text-lg max-w-prose"
          >
            AI-powered emergency system with live tracking and voice-triggered SOS.
          </motion.p>

          <StartPanel />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full"
        >
          <Hero3D />
        </motion.div>
      </section>
    </main>
  )
}
