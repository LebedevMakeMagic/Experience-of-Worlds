import * as RAPIER from '@dimforge/rapier3d-compat'
import { useKeyboardControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { CapsuleCollider, RigidBody, useRapier } from '@react-three/rapier'
import React, { useRef } from 'react'
import * as THREE from 'three'

const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()

const FP = (props) => {
  const { speed, height, position } = props
  const ref = useRef()
  const [, get] = useKeyboardControls()
  const rapier = useRapier()
  useFrame((state) => {
    const { forward, backward, left, right, jump } = get()
    const velocity = ref?.current?.linvel()
    // update camera
    const transformedData = Object.values(ref?.current?.translation())
    state.camera.position.set(...transformedData)
    // movement
    frontVector.set(0, 0, backward - forward)
    sideVector.set(left - right, 0, 0)
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(speed)
      .applyEuler(state.camera.rotation)
    ref?.current?.setLinvel({ x: direction.x, y: velocity.y, z: direction.z })
    // jumping
    const world = rapier.world.raw()
    const ray = world.castRay(
      new RAPIER.Ray(ref.current.translation(), { x: 0, y: -1, z: 0 }),
    )
    const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.75
    if (jump && grounded) ref.current.setLinvel({ x: 0, y: 7.5, z: 0 })
  })
  return (
    <RigidBody
      ref={ref}
      colliders={false}
      mass={1}
      type="dynamic"
      position={position}
      scale={1.3}
      enabledRotations={[false, false, false]}>
      <CapsuleCollider args={height} />
    </RigidBody>
  )
}

export default FP
