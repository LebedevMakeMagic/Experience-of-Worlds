import { PositionalAudio, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'
import React, { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'
import TheatreMesh from '../../helpers/TheatreMesh'

const vec = new THREE.Vector3()

export function ScaryScene(props) {
  const { nodes, materials } = useGLTF('/models/ScaryScene.glb')
  const ghostRef = useRef(null)
  const pianoRef = useRef(null)
  const gramophoneRef = useRef(null)
  const { active, setTarget, target } = props

  useFrame((state) => {
    const getPosition = (ref) => {
      return state.camera.position.distanceTo(
        ref?.current.getWorldPosition(vec),
      )
    }
    if (active) {
      if (getPosition(ghostRef) < 2.9) {
        setTarget('ghost')
      } else if (getPosition(pianoRef) < 6.5) {
        setTarget('piano')
      } else if (getPosition(gramophoneRef) < 12) {
        setTarget('gramophone')
      }
    }
  })

  const AudioState = useMemo(() => {
    return (
      <>
        {target === 'piano' && (
          <PositionalAudio
            url="music/Piano.mp3"
            distance={1000}
            position={[0, 50, 0]}
            loop={false}
            autoplay
          />
        )}
        {target === 'gramophone' && (
          <PositionalAudio
            url="music/Insidious - Tip Toe2.mp3"
            distance={100}
            setMaxDistance={2}
            position={[0, 300, 300]}
            loop
            autoplay
          />
        )}
      </>
    )
  }, [target])

  return (
    <group {...props} dispose={null}>
      <Suspense fallback={null}>
        {/* Sounds */}
        {active && (
          <>
            {AudioState}
            <PositionalAudio
              url="music/Insidious.mp3"
              distance={100}
              setMaxDistance={2}
              position={[0, 1000, 1000]}
              loop
              autoplay
            />
          </>
        )}
      </Suspense>

      <RigidBody type="dynamic" colliders="hull">
        <group
          position={[9.425, 0.023, 34.455]}
          rotation={[Math.PI / 2, 0, -3.053]}
          scale={-1.734}>
          <mesh
            geometry={nodes.body_retopo_M1_Bloody_0.geometry}
            material={materials.M1_Bloody}
          />
          <mesh
            geometry={nodes.body_retopo_M1_Bloody_0_1.geometry}
            material={materials.M2_Bloody}
          />
          <mesh
            geometry={nodes.body_retopo_M1_Bloody_0_2.geometry}
            material={materials.Cornea}
          />
          <mesh
            geometry={nodes.body_retopo_M1_Bloody_0_3.geometry}
            material={materials.knife}
          />
        </group>
      </RigidBody>

      <group
        position={[0.001, -0.006, 6.678]}
        rotation={[-Math.PI / 2, 0, 3.119]}
        scale={0.017}>
        <mesh
          geometry={nodes.defaultMaterial016.geometry}
          material={materials.Vitre}
        />
        <mesh
          geometry={nodes.defaultMaterial016_1.geometry}
          material={materials.Porte_D}
        />
        <mesh
          geometry={nodes.defaultMaterial016_3.geometry}
          material={materials.Fenetre}
        />
        <mesh
          geometry={nodes.defaultMaterial016_4.geometry}
          material={materials.Tablier_moulures}
        />
        <mesh
          geometry={nodes.defaultMaterial016_5.geometry}
          material={materials.murs}
        />
        <mesh
          geometry={nodes.defaultMaterial016_6.geometry}
          material={materials.Plafond}
        />
        <mesh
          geometry={nodes.defaultMaterial016_7.geometry}
          material={materials.material_8}
        />
        <mesh
          geometry={nodes.defaultMaterial016_8.geometry}
          material={materials.material}
        />
      </group>

      <mesh
        geometry={nodes.Corridor2.geometry}
        material={materials['Porte_G.001']}
        position={[9.441, -0.055, 23.152]}
        rotation={[-1.569, 0.008, -0.023]}
        scale={0.017}
      />
      <group
        position={[6.796, -0.019, 5.182]}
        rotation={[Math.PI / 2, 0, 3.132]}
        scale={[-1.522, -1.468, -1.517]}>
        <mesh
          geometry={nodes.Wall_Clear_Short001_Wall_Trim_0001.geometry}
          material={materials.Wall_Trim}
        />
        <mesh
          geometry={nodes.Wall_Clear_Short001_Wall_Trim_0001_2.geometry}
          material={materials.Bathtube}
        />
        <mesh
          geometry={nodes.Wall_Clear_Short001_Wall_Trim_0001_3.geometry}
          material={materials.Frames}
        />
        <mesh
          geometry={nodes.Wall_Clear_Short001_Wall_Trim_0001_4.geometry}
          material={materials.Door_and_windows}
        />
        <mesh
          geometry={nodes.Wall_Clear_Short001_Wall_Trim_0001_5.geometry}
          material={materials.Fabric}
        />
        <mesh
          geometry={nodes.Wall_Clear_Short001_Wall_Trim_0001_6.geometry}
          material={materials.Floor}
        />
        <mesh
          geometry={nodes.Wall_Clear_Short001_Wall_Trim_0001_7.geometry}
          material={materials.Selling_Bump}
        />
        <mesh
          geometry={nodes.Wall_Clear_Short001_Wall_Trim_0001_8.geometry}
          material={materials.Glass}
        />
        <mesh
          ref={pianoRef}
          geometry={nodes.Wall_Clear_Short001_Wall_Trim_0001_9.geometry}
          material={materials.Piano}
        />
        <mesh
          geometry={nodes.Wall_Clear_Short001_Wall_Trim_0001_10.geometry}
          material={materials.White_keys}
        />
        <mesh
          geometry={nodes.Wall_Clear_Short001_Wall_Trim_0001_11.geometry}
          material={materials.Black_keys}
        />
        <mesh
          geometry={nodes.Wall_Clear_Short001_Wall_Trim_0001_12.geometry}
          material={materials.Cups}
        />
        <mesh
          geometry={nodes.Wall_Clear_Short001_Wall_Trim_0001_13.geometry}
          material={materials.Decor_2}
        />
      </group>

      <TheatreMesh theatreKey="Gramaphone">
        <group
          ref={gramophoneRef}
          position={[10.162, 1.392, 14.584]}
          rotation={[-0.011, -2.361, -0.003]}
          scale={0.399}>
          <mesh
            geometry={nodes.Wooden_bot_lp002_recordplayer_0.geometry}
            material={materials.recordplayer}
          />
          <mesh
            geometry={nodes.Wooden_bot_lp002_recordplayer_0_1.geometry}
            material={materials.disk}
          />
        </group>
        <group
          position={[10.161, 0.648, 14.589]}
          rotation={[-Math.PI, 0.086, -Math.PI]}
          scale={0.43}>
          <mesh
            geometry={nodes.defaultMaterial020.geometry}
            material={materials['Material.001']}
          />
          <mesh
            geometry={nodes.defaultMaterial020_1.geometry}
            material={materials['Material.002']}
          />
        </group>
      </TheatreMesh>

      <group
        position={[-0.267, -0.026, 15.62]}
        rotation={[-Math.PI / 2, 0, 1.566]}
        scale={0.015}>
        <mesh
          geometry={nodes.ClockCase_ClockCase_0.geometry}
          material={materials.ClockCase}
        />
        <mesh
          geometry={nodes.ClockCase_ClockCase_0_1.geometry}
          material={materials['Glass.001']}
        />
        <mesh
          geometry={nodes.ClockCase_ClockCase_0_2.geometry}
          material={materials.MoonDial}
        />
        <mesh
          geometry={nodes.ClockCase_ClockCase_0_3.geometry}
          material={materials.Clockface}
        />
      </group>
      <TheatreMesh theatreKey="Ghost">
        <group
          ref={ghostRef}
          position={[-0.414, 1.698, 14.363]}
          rotation={[-Math.PI, 2.785, -Math.PI]}
          scale={0.017}>
          <mesh
            geometry={nodes.ee_obj_1_Mat_0.geometry}
            material={materials['material.002']}
          />
          <mesh
            geometry={nodes.ee_obj_1_Mat_0_1.geometry}
            material={materials['Mat.1']}
          />
        </group>
      </TheatreMesh>
    </group>
  )
}

useGLTF.preload('/ScaryScene.glb')
