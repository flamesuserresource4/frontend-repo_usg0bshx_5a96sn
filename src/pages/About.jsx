export default function About() {
  return (
    <main className="pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-white">About</h1>
        <p className="text-white/80">
          Shakti Alert is an AI-powered emergency system integrating IoT, location tracking, and automated SOS alerting for women’s safety.
          It combines real-time data with intelligent detection to accelerate response when it matters most.
        </p>
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.3)]">
          <p className="text-white">
            Developed by <span className="font-semibold">Dev Tomar</span> • Powered by AI & IoT
          </p>
        </div>
      </div>
    </main>
  )
}
