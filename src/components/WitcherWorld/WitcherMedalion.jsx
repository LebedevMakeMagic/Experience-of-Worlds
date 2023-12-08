import { useGLTF } from '@react-three/drei'

export function WitcherMedalion(props) {
  const { nodes, materials } = useGLTF('/models/WitcherMedalion.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.witcher_medalion}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/WitcherMedalion.glb')
