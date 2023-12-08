import { CuboidCollider, RigidBody } from '@react-three/rapier'

export function Ground() {
  // const texture = useTexture(grass)
  // texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  return (
    <RigidBody type="fixed" colliders={false}>
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[1000, 1000]} />
        <meshPhongMaterial opacity={0} transparent />
      </mesh>
      <CuboidCollider args={[1000, 2, 1000]} position={[0, -2, 0]} />
    </RigidBody>
  )
}
