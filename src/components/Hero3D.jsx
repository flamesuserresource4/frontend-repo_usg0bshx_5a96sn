import Spline from '@splinetool/react-spline'
import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function AssistantModel() {
  const { scene } = useGLTF('/models/shakti.glb', true)
  return <primitive object={scene} scale={1.2} />
}

export default function Hero3D() {
  const [hasModel, setHasModel] = useState(false)

  useEffect(() => {
    // Check if the GLB exists to avoid runtime errors
    fetch('/models/shakti.glb', { method: 'HEAD' })
      .then((res) => setHasModel(res.ok))
      .catch(() => setHasModel(false))
  }, [])

  return (
    <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[620px] rounded-2xl overflow-hidden shadow-2xl bg-black/30 backdrop-blur-xl">
      <Spline
        scene="https://prod.spline.design/XuAg4PYWfzmy0iW1/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />

      {hasModel && (
        <div className="absolute inset-0 pointer-events-none">
          <Canvas camera={{ position: [0, 1.2, 3.5], fov: 50 }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[3, 5, 2]} intensity={1.2} color="#ff3b3b" />
            <AssistantModel />
            <OrbitControls enablePan={false} enableZoom={false} />
          </Canvas>
        </div>
      )}
    </div>
  )
}

useGLTF.preload('/models/shakti.glb')
