import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function StartPanel() {
  const [started, setStarted] = useState(false)
  const [phase, setPhase] = useState(0)
  const [flash, setFlash] = useState(false)

  useEffect(() => {
    let timers = []
    if (started) {
      setPhase(1)
      timers.push(setTimeout(() => setPhase(2), 1600))
      timers.push(setTimeout(() => setPhase(3), 3200))
      timers.push(
        setTimeout(() => {
          setPhase(4)
          setFlash(true)
          setTimeout(() => setFlash(false), 2400)
        }, 4800)
      )
    }
    return () => timers.forEach(clearTimeout)
  }, [started])

  return (
    <div className="relative">
      <AnimatePresence>
        {flash && (
          <motion.div
            key="flash"
            className="absolute -inset-6 rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.9, 0.2, 0.9, 0] }}
            transition={{ duration: 2.4, ease: 'easeInOut' }}
            style={{
              background:
                'radial-gradient(60% 60% at 50% 50%, rgba(239,68,68,0.35) 0%, rgba(0,0,0,0) 70%)',
              boxShadow: '0 0 80px rgba(239,68,68,0.35) inset'
            }}
            aria-hidden
          />
        )}
      </AnimatePresence>

      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
        <div className="space-y-4">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold drop-shadow">AI + IoT • Live Safety</h2>
          <p className="text-white/80">
            Activate the assistant to simulate voice-triggered SOS detection.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setStarted(true)}
              className="px-6 py-3 rounded-full bg-red-600 text-white font-medium shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:shadow-[0_0_40px_rgba(220,38,38,0.8)] hover:bg-red-500 transition duration-200"
            >
              Start Shakti Alert
            </button>
            <Link
              to="/tracker"
              className="px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition duration-200"
            >
              View Live Tracker
            </Link>
          </div>

          <div className="min-h-[84px] pt-2">
            <AnimatePresence mode="wait">
              {!started && (
                <motion.p
                  key="idle"
                  className="text-white/70"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                >
                  Ready when you are.
                </motion.p>
              )}
              {started && phase >= 1 && (
                <motion.p
                  key={`p-${phase}`}
                  className="text-white/90"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  {phase === 1 && 'System activated…'}
                  {phase === 2 && "Say 'Help' to trigger alert"}
                  {phase === 3 && "Listening for 'Help'..."}
                  {phase === 4 && 'Voice detected! Starting alert sequence...'}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute -inset-0.5 rounded-2xl pointer-events-none"
             style={{
               background:
                 'linear-gradient(135deg, rgba(239,68,68,0.35), rgba(0,0,0,0))',
               mask:
                 'linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)',
               WebkitMask:
                 'linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)'
             }}
        />
      </div>
    </div>
  )
}
