import { useGLTF } from '@react-three/drei'
import React from 'react'

export function BreakingBadModel(props) {
  const { nodes, materials } = useGLTF('/models/BB.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 1.579, 0.514]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={0.954}>
        <mesh
          geometry={nodes.Windows_Windows_0_1.geometry}
          material={materials.Windows}
        />
        <mesh
          geometry={nodes.Windows_Windows_0_2.geometry}
          material={materials.Wheels}
        />
        <mesh
          geometry={nodes.Windows_Windows_0_3.geometry}
          material={materials.MainBody}
        />
        <mesh
          geometry={nodes.Windows_Windows_0_4.geometry}
          material={materials.RoofBoxes}
        />
        <mesh
          geometry={nodes.Windows_Windows_0_5.geometry}
          material={materials.SidePannelDetail}
        />
        <mesh
          geometry={nodes.Windows_Windows_0_6.geometry}
          material={materials.Lights}
        />
        <mesh
          geometry={nodes.Windows_Windows_0_7.geometry}
          material={materials.ChromePipes}
        />
        <mesh
          geometry={nodes.Windows_Windows_0_8.geometry}
          material={materials.Mirrors}
        />
        <mesh
          geometry={nodes.Windows_Windows_0_9.geometry}
          material={materials.RearAxle}
        />
        <mesh
          geometry={nodes.Windows_Windows_0_10.geometry}
          material={materials.Exhaust}
        />
        <mesh
          geometry={nodes.Windows_Windows_0_11.geometry}
          material={materials.Tarp}
        />
        <mesh
          geometry={nodes.Windows_Windows_0_12.geometry}
          material={materials.Bumpers}
        />
        <mesh
          geometry={nodes.Windows_Windows_0_13.geometry}
          material={materials.NumberPlate}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/BB.glb')
