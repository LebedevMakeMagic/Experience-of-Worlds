import { Cloud, Clouds, Sky } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'

const EnvironmentWorld = () => {
  return (
    <group>
      <Sky sunPosition={[50, 70, 0]} rayleigh={0.0001} />
      <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud
          growth={10}
          seed={3}
          segments={60}
          bounds={[10, 5, 20]}
          position={[0, -7, 0]}
          volume={7}
        />
      </Clouds>
    </group>
  )
}

export default EnvironmentWorld
