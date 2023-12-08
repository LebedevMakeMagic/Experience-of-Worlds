import {
  MeshPortalMaterial,
  RoundedBox,
  Text,
  useTexture,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useRef } from 'react'
import * as THREE from 'three'

const PortalWrapper = ({
  children,
  texture,
  name,
  color,
  active,
  setActive,
  hovered,
  setHovered,
  fontName,
  ...props
}) => {
  const map = useTexture(texture)

  const portalMaterial = useRef(null)

  useFrame((_state, delta) => {
    const worldOpen = active === name
    easing.damp(portalMaterial.current, 'blend', worldOpen ? 1 : 0, 0.2, delta)
  })

  return (
    <group {...props}>
      <Text
        font={`/fonts/${fontName}`}
        fontSize={0.32}
        position={[0, -1.3, 0.051]}
        anchorY="bottom">
        {name}
        <meshBasicMaterial color={color} toneMapped={false} />
      </Text>

      <RoundedBox
        name={name}
        args={[2, 3, 0.1]}
        onDoubleClick={() => setActive(active === name ? null : name)}
        onPointerEnter={() => setHovered(name)}
        onPointerLeave={() => setHovered(null)}>
        <MeshPortalMaterial ref={portalMaterial} side={THREE.DoubleSide}>
          {children}
          <mesh>
            <sphereGeometry args={[105, 64, 64]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  )
}

export default PortalWrapper
