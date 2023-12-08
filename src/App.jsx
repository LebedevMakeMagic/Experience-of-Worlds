import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
// import extension from '@theatre/r3f/dist/extension'
// import studio from '@theatre/studio'
import { useCallback, useEffect, useState } from 'react'
import './App.css'
import WorldsWrapper from './components/WorldsWrapper'
import  EnvironmentWorld  from './Environment'

// studio.initialize()
// studio.extend(extension)

const App = () => {
  const [active, setActive] = useState(null)

  const onKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      setActive(null)
    }
  }, [])

  useEffect(() => {
    if (active) {
      window.addEventListener('keydown', onKeyDown)
    }
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active, onKeyDown])

  return (
    <div className="worlds">
      <Canvas id="canvasWorlds" shadows>
        <WorldsWrapper setActive={setActive} active={active} />
        <EnvironmentWorld />
      </Canvas>
      <Loader
        dataInterpolation={p => `${Math.floor(p)}%`}
        dataStyles={{ fontSize: '30px', color: 'white' }}
        containerStyles={{ background: 'black', zIndex: 15 }}
      />
    </div>
  )
}

export default App
