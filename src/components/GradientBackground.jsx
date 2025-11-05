import { motion } from 'framer-motion'

export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-0 overflow-hidden">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{ background: 'linear-gradient(135deg, #8B0000 0%, #000000 60%)' }}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[60vh] w-[60vh] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(239,68,68,0.35) 0%, rgba(0,0,0,0) 60%)' }}
        animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-[50vh] w-[50vh] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(127,29,29,0.4) 0%, rgba(0,0,0,0) 60%)' }}
        animate={{ x: [0, -30, 10, 0], y: [0, -20, 5, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
