import { motion } from 'framer-motion'

const mockHistory = [
  {
    id: 1,
    time: '2025-05-20 21:14',
    location: { label: 'Connaught Place, New Delhi', lat: 28.6315, lng: 77.2167 },
    audioUrl: 'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  {
    id: 2,
    time: '2025-05-18 18:02',
    location: { label: 'DLF CyberHub, Gurugram', lat: 28.4946, lng: 77.0888 },
    audioUrl: 'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
  }
]

export default function History() {
  return (
    <main className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Alert History</h1>
        <p className="text-white/80 mb-6">A timeline of past alerts with quick access to media evidence.</p>

        <div className="grid gap-6 md:grid-cols-2">
          {mockHistory.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold">{item.time}</h3>
                <a
                  className="text-red-300 hover:text-red-200 text-sm"
                  href={`https://maps.google.com/?q=${item.location.lat},${item.location.lng}`}
                  target="_blank" rel="noreferrer"
                >
                  {item.location.label}
                </a>
              </div>

              <div className="space-y-3">
                <audio controls className="w-full">
                  <source src={item.audioUrl} />
                </audio>
                <video controls className="w-full rounded-lg overflow-hidden">
                  <source src={item.videoUrl} />
                </video>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
