import { CameraControls, Preload, useCursor } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import PortalWrapper from '../helpers/PortalWrapper'
import BreakingBadWrapper from './BB/BreakingBadWrapper'
import ScaryWrapper from './ScaryScene/ScaryWrapper'
import WitcherWrapper from './WitcherWorld/WitcherWrapper'

const WorldsWrapper = (props) => {
  const { active, setActive } = props
  const [hovered, setHovered] = useState(null)
  useCursor(Boolean(hovered))
  const controlsRef = useRef(null)
  const scene = useThree(state => state.scene)

  useEffect(() => {
    if (active) {
      const targetPosition = new THREE.Vector3()
      scene?.getObjectByName(active)?.getWorldPosition(targetPosition)
      controlsRef?.current?.setLookAt(
        0,
        0,
        5,
        targetPosition.x,
        targetPosition.y,
        targetPosition.z,
        true,
      )
    } else {
      controlsRef?.current?.setLookAt(0, 0, 4.6, 0, 0, 0, true)
    }
  }, [active, scene])

  return (
    <>
      <CameraControls
        ref={controlsRef}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
      />

      <PortalWrapper
        name="Witcher"
        color="#D5DDDC"
        texture="env/SunstetWitcher.jpg"
        active={active}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
        fontName="theWitcherFont.ttf">
        <WitcherWrapper active={active === 'Witcher'} />
      </PortalWrapper>

      <PortalWrapper
        name="???"
        color="#D5DDDC"
        texture="env/SunstetWitcher.jpg"
        active={active}
        position-x={-2.5}
        rotation-y={Math.PI / 8}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
        fontName="Scary.ttf">
        <ScaryWrapper active={active === '???'} />
      </PortalWrapper>
      
      <PortalWrapper
        name="Breaking Bad"
        color="#D5DDDC"
        texture="env/breakingBad2.jpg"
        active={active}
        position-x={2.5}
        rotation-y={-Math.PI / 8}
        setActive={setActive}
        hovered={hovered}
        setHovered={setHovered}
        fontName="Heart-Breaking-Bad.otf">
        <BreakingBadWrapper active={active === 'Breaking Bad'} />
      </PortalWrapper>

      <Preload all />
    </>
  )
}

export default WorldsWrapper
