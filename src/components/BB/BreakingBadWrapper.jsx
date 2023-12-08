import {
  BakeShadows,
  Environment,
  KeyboardControls,
  PointerLockControls,
  useVideoTexture,
} from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import { getProject } from '@theatre/core'
import { PerspectiveCamera, SheetProvider } from '@theatre/r3f'
import React, { Suspense, useEffect } from 'react'
import * as THREE from 'three'
import CurvedPlane from '../../helpers/PlaneHelper'
import TheatreMesh from '../../helpers/TheatreMesh'
import BB from '../../theatre/BreakingBad.json'
import FP from '../Physics/FP'
import { Ground } from '../Physics/Ground'
import { BreakingBadModel } from './BreakingBadModel'

const BBSheet = getProject('BreakingBad', { state: BB }).sheet('Demo Sheet')

const BreakingBadWrapper = (props) => {
  useEffect(() => {
    BBSheet.project.ready.then(() =>
      BBSheet.sequence.play({ iterationCount: Infinity }),
    )
  }, [])

  const videoTexture = useVideoTexture('/video/Chemistry.mp4', {
    muted: props.active,
    loop: true,
    start: props.active,
    volume: 0.2,
  })
  return (
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowUp', 'w', 'W', 'Ц', 'ц'] },
        { name: 'backward', keys: ['ArrowDown', 's', 'S', 'ы', 'Ы'] },
        { name: 'left', keys: ['ArrowLeft', 'a', 'A', 'ф', 'Ф'] },
        { name: 'right', keys: ['ArrowRight', 'd', 'D', 'В', 'в'] },
        { name: 'jump', keys: ['Space'] },
      ]}>
      <SheetProvider sheet={BBSheet}>
        {props.active && (
          <PerspectiveCamera
            position={[5, 5, 5]}
            theatreKey="CameraBB"
            makeDefault
            fov={75}
          />
        )}

        <Environment preset="sunset" />

        <Physics gravity={[0, -30, 0]}>
          <Ground />
          {props.active && (
            <FP height={[0.75, 0.5]} speed={3.5} position={[12, 0, -8]} />
          )}

          <TheatreMesh theatreKey="BreakingBadModel">
            <RigidBody type="fixed" colliders="hull">
              <BreakingBadModel
                castShadow
                receiveShadow
                visible={!!props.active}
              />
            </RigidBody>
          </TheatreMesh>
        </Physics>

        {props.active && (
          <Suspense fallback={null}>
            <TheatreMesh theatreKey="VideoTexture">
              <CurvedPlane>
                <meshBasicMaterial
                  side={THREE.DoubleSide}
                  map={videoTexture}
                  toneMapped={false}
                />
              </CurvedPlane>
            </TheatreMesh>
          </Suspense>
        )}

        {props.active && <PointerLockControls />}
      </SheetProvider>

      <BakeShadows />
    </KeyboardControls>
  )
}

export default BreakingBadWrapper
