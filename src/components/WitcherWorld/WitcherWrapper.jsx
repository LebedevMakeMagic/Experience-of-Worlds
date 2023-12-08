import {
  BakeShadows,
  Environment,
  KeyboardControls,
  PointerLockControls,
} from '@react-three/drei'
import { Physics, RigidBody } from '@react-three/rapier'
import { getProject } from '@theatre/core'
import { PerspectiveCamera, SheetProvider } from '@theatre/r3f'
import { useEffect } from 'react'
import TheatreMesh from '../../helpers/TheatreMesh'
import WitcherTheatre from '../../theatre/Witcher.json'
import FP from '../Physics/FP'
import { Ground } from '../Physics/Ground'
import { WitcherMedalion } from './WitcherMedalion'
import { WitcherWorld } from './WitcherWorld'

const witcherSheet = getProject('Deheet', { state: WitcherTheatre }).sheet(
  'Demo Sheet',
)

const WitcherWrapper = (props) => {
  useEffect(() => {
    witcherSheet.project.ready.then(() =>
      witcherSheet.sequence.play({ iterationCount: Infinity }),
    )
  }, [])
  return (
    <KeyboardControls
      map={[
        { name: 'forward', keys: ['ArrowUp', 'w', 'W', 'Ц', 'ц'] },
        { name: 'backward', keys: ['ArrowDown', 's', 'S', 'ы', 'Ы'] },
        { name: 'left', keys: ['ArrowLeft', 'a', 'A', 'ф', 'Ф'] },
        { name: 'right', keys: ['ArrowRight', 'd', 'D', 'В', 'в'] },
        { name: 'jump', keys: ['Space'] },
      ]}>
      <SheetProvider sheet={witcherSheet}>
        {props.active && (
          <PerspectiveCamera
            position={[5, 5, 5]}
            theatreKey="CameraWitcher"
            makeDefault
            fov={75}
          />
        )}

        <ambientLight intensity={0.8} />
        <Environment preset="sunset" />

        <Physics gravity={[0, -30, 0]}>
          <Ground />
          {props.active && (
            <FP height={[0.75, 0.5]} speed={3.5} position={[12, 0, -8]} />
          )}
          <TheatreMesh theatreKey="WitcherHouse">
            <RigidBody type="fixed" colliders={false}>
              <WitcherWorld castShadow receiveShadow visible={!!props.active} />
            </RigidBody>
          </TheatreMesh>
        </Physics>

        {!props.active && (
          <TheatreMesh theatreKey="WitcherMedalion">
            <WitcherMedalion />
          </TheatreMesh>
        )}

        {props.active && <PointerLockControls />}
      </SheetProvider>

      <BakeShadows />
    </KeyboardControls>
  )
}

export default WitcherWrapper
