import {
  BakeShadows,
  KeyboardControls,
  PointerLockControls,
  SpotLight,
} from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import { getProject } from '@theatre/core'
import { PerspectiveCamera, SheetProvider } from '@theatre/r3f'
import { useEffect, useState } from 'react'
import * as THREE from 'three'
import TheatreMesh from '../../helpers/TheatreMesh'
import ScaryAnim from '../../theatre/Scary.json'
import FP from '../Physics/FP'
import { Ground } from '../Physics/Ground'
import { ScaryScene } from './ScaryScene'

const scarySheet = getProject('ScarySheet', { state: ScaryAnim }).sheet(
  'Demo Sheet',
)

const ScaryWrapper = (props) => {
  const [clownTarget] = useState(() => new THREE.Object3D())
  const [target, setTarget] = useState('idle')

  useEffect(() => {
    if (target === 'ghost') {
      scarySheet.project.ready.then(() =>
        scarySheet.sequence.play({ iterationCount: 1, range: [0, 12] }),
      )
    }
  }, [target])

  return (
    <KeyboardControls
        map={[
          { name: 'forward', keys: ['ArrowUp', 'w', 'W', 'Ц', 'ц'] },
          { name: 'backward', keys: ['ArrowDown', 's', 'S', 'ы', 'Ы'] },
          { name: 'left', keys: ['ArrowLeft', 'a', 'A', 'ф', 'Ф'] },
          { name: 'right', keys: ['ArrowRight', 'd', 'D', 'В', 'в'] },
        ]}>
        <SheetProvider sheet={scarySheet}>
          {props.active && (
            <PerspectiveCamera theatreKey="Camera" makeDefault fov={55} />
          )}

          {/* Light */}
          <TheatreMesh theatreKey="ClownDirectional">
            <SpotLight
              castShadow
              target={clownTarget}
              penumbra={0.2}
              radiusTop={0.2}
              radiusBottom={40}
              distance={8}
              angle={0.22}
              intensity={1}
              opacity={0.1}
              receiveShadow
            />
          </TheatreMesh>

          <TheatreMesh theatreKey="ClownDirectional2">
            <pointLight
              castShadow
              target={clownTarget}
              decay={3}
              distance={2}
              intensity={0.5}
              receiveShadow
            />
          </TheatreMesh>

          <TheatreMesh theatreKey="Test">
            <primitive object={clownTarget} position={[50, -158, 50]} />
          </TheatreMesh>

          <TheatreMesh theatreKey="ClownPoint1">
            <pointLight intensity={0.3} distance={3} />
          </TheatreMesh>

          <TheatreMesh theatreKey="ClownPoint2">
            <pointLight intensity={0.3} distance={3} />
          </TheatreMesh>

          <TheatreMesh theatreKey="ClownPoint3">
            <pointLight intensity={0.3} distance={6} />
          </TheatreMesh>

          <TheatreMesh theatreKey="ClownPoint4">
            <pointLight intensity={0.1} distance={10} />
          </TheatreMesh>

          <TheatreMesh theatreKey="ClownPoint5">
            <spotLight intensity={0.3} distance={10} />
          </TheatreMesh>

          <TheatreMesh theatreKey="ClownPoint6">
            <pointLight intensity={0.3} distance={10} />
          </TheatreMesh>

          <TheatreMesh theatreKey="ClownPoint7">
            <pointLight intensity={0.5} distance={5} />
          </TheatreMesh>

          <TheatreMesh theatreKey="ClownPoint8">
            <pointLight intensity={0.3} distance={3} />
          </TheatreMesh>

          <TheatreMesh theatreKey="ClownPoint9">
            <pointLight intensity={0.3} distance={3} />
          </TheatreMesh>

          <TheatreMesh theatreKey="ClownPoint10">
            <pointLight intensity={0.3} distance={3} />
          </TheatreMesh>

          <TheatreMesh theatreKey="ClownPoint11">
            <pointLight intensity={0.3} distance={3} />
          </TheatreMesh>

          <TheatreMesh theatreKey="ClownPoint12">
            <pointLight intensity={0.3} distance={2.5} />
          </TheatreMesh>
          {/* Atmosphere */}
          <fog attach="fog" args={['#000', 3, 6]} />

          {/* Physics */}
          <Physics gravity={[0, -10, 0]}>
            <Ground />
            {props.active && (
              <FP speed={1.3} position={[-3, 0, -9]} height={[1, 0.9]} />
            )}
            <RigidBody type="fixed" colliders={false}>
              <ScaryScene
                castShadow
                setTarget={setTarget}
                target={target}
                object={clownTarget}
                receiveShadow
                active={props.active}
              />
            </RigidBody>
          </Physics>

          {props.active && <PointerLockControls />}

          <BakeShadows />
        </SheetProvider>
      </KeyboardControls>
  )
}

export default ScaryWrapper
