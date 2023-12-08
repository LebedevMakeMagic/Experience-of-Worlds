import {
  MeshDistortMaterial,
  PositionalAudio,
  useAnimations,
  useGLTF,
} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'

export function WitcherWorld(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/WitcherWorld.glb')
  const { actions } = useAnimations(animations, group)

  useFrame(() => {
    const allAnims = Object.values(actions)
    allAnims.forEach(item => item.play())
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="8x8_Fire"
          position={[-4.173, 0.57, 1.095]}
          rotation={[0, -1.388, 0]}
          scale={1.128}>
          <primitive object={nodes.Bone001} />
          <primitive object={nodes.Bone002} />
          <primitive object={nodes.Bone003} />
          <primitive object={nodes.Bone004} />
          <primitive object={nodes.Bone005} />
          <primitive object={nodes.Bone006} />
          <primitive object={nodes.Bone007} />
          <primitive object={nodes.Bone008} />
          <primitive object={nodes.Bone009} />
          <primitive object={nodes.Bone010} />
          <primitive object={nodes.Bone011} />
          <primitive object={nodes.Bone012} />
          <primitive object={nodes.Bone013} />
          <primitive object={nodes.Bone014} />
          <primitive object={nodes.Bone015} />
          <primitive object={nodes.Bone016} />
          <primitive object={nodes.Bone017} />
          <primitive object={nodes.Bone018} />
          <primitive object={nodes.Bone019} />
          <primitive object={nodes.Bone020} />
          <primitive object={nodes.Bone021} />
          <primitive object={nodes.Bone022} />
          <primitive object={nodes.Bone023} />
          <primitive object={nodes.Bone024} />
          <primitive object={nodes.Bone025} />
          <primitive object={nodes.Bone026} />
          <primitive object={nodes.Bone027} />
          <primitive object={nodes.Bone028} />
          <primitive object={nodes.Bone029} />
          <primitive object={nodes.Bone030} />
          <primitive object={nodes.Bone031} />
          <primitive object={nodes.Bone032} />
          <primitive object={nodes.Bone033} />
          <primitive object={nodes.Bone034} />
          <primitive object={nodes.Bone035} />
          <primitive object={nodes.Bone036} />
          <primitive object={nodes.Bone037} />
          <primitive object={nodes.Bone038} />
          <primitive object={nodes.Bone039} />
          <primitive object={nodes.Bone040} />
          <primitive object={nodes.Bone041} />
          <primitive object={nodes.Bone042} />
          <primitive object={nodes.Bone043} />
          <primitive object={nodes.Bone044} />
          <primitive object={nodes.Bone045} />
          <primitive object={nodes.Bone046} />
          <primitive object={nodes.Bone047} />
          <primitive object={nodes.Bone048} />
          <primitive object={nodes.Bone049} />
          <primitive object={nodes.Bone050} />
          <primitive object={nodes.Bone051} />
          <primitive object={nodes.Bone052} />
          <primitive object={nodes.Bone053} />
          <primitive object={nodes.Bone054} />
          <primitive object={nodes.Bone055} />
          <primitive object={nodes.Bone056} />
          <primitive object={nodes.Bone057} />
          <primitive object={nodes.Bone058} />
          <primitive object={nodes.Bone059} />
          <primitive object={nodes.Bone060} />
          <primitive object={nodes.Bone061} />
          <primitive object={nodes.Bone062} />
          <primitive object={nodes.Bone063} />
          <primitive object={nodes.Bone064} />
          <skinnedMesh
            name="Sprite_8x8002"
            geometry={nodes.Sprite_8x8002.geometry}
            material={materials['8x8.001']}
            skeleton={nodes.Sprite_8x8002.skeleton}
          />
        </group>
        <group
          name="Bubbles002"
          position={[3.732, -0.059, -4.423]}
          rotation={[Math.PI, -0.204, Math.PI]}
          scale={1.25}>
          <primitive object={nodes.Bone} />
          <skinnedMesh
            name="BubbleMesh002"
            geometry={nodes.BubbleMesh002.geometry}
            material={materials['Bubbles.002']}
            skeleton={nodes.BubbleMesh002.skeleton}
          />
        </group>
        <mesh
          name="Blanket001"
          geometry={nodes.Blanket001.geometry}
          material={materials['Material.009']}
          position={[3.732, -0.059, -4.423]}
          rotation={[Math.PI, -0.204, Math.PI]}
          scale={1.25}
        />
        <mesh
          name="candel001"
          geometry={nodes.candel001.geometry}
          material={materials['candel.001']}
          position={[2.336, 1.81, -1.526]}
          rotation={[1.643, -0.001, 1.366]}
          scale={0.095}
        />
        <mesh
          name="Feuertopf001"
          geometry={nodes.Feuertopf001.geometry}
          material={materials['Material.004']}
          position={[-4.224, 0.468, 1.067]}
          rotation={[Math.PI, -0.204, Math.PI]}
          scale={0.629}
        />
        <mesh
          name="Furnitureh001"
          geometry={nodes.Furnitureh001.geometry}
          material={materials['Material.011']}
          position={[3.732, -0.059, -4.423]}
          rotation={[Math.PI, -0.204, Math.PI]}
          scale={1.25}
        />
        <mesh
          name="Furniturev001"
          geometry={nodes.Furniturev001.geometry}
          material={materials['Material.010']}
          position={[3.732, -0.059, -4.423]}
          rotation={[Math.PI, -0.204, Math.PI]}
          scale={1.25}
        />
        <mesh
          name="Geralt001"
          geometry={nodes.Geralt001.geometry}
          material={materials['Material.014']}
          position={[2.234, -1.121, 0.254]}
          rotation={[Math.PI, -0.59, Math.PI]}
          scale={1.25}
        />
        <mesh
          name="GeraltAugenbrauen"
          geometry={nodes.GeraltAugenbrauen.geometry}
          material={materials['7_eyelashes_0.2_0_0.001']}
          position={[2.234, -1.121, 0.254]}
          rotation={[Math.PI, -0.59, Math.PI]}
          scale={1.25}
        />
        <mesh
          name="GeraltBart"
          geometry={nodes.GeraltBart.geometry}
          material={materials['25_-beard1.beard1_0.2_0_0.001']}
          position={[2.234, -1.121, 0.254]}
          rotation={[Math.PI, -0.59, Math.PI]}
          scale={1.25}
        />
        <mesh
          name="GeraltHaare"
          geometry={nodes.GeraltHaare.geometry}
          material={materials['25_-hlongb.hlongb_0.2_0_0.001']}
          position={[2.234, -1.121, 0.254]}
          rotation={[Math.PI, -0.59, Math.PI]}
          scale={1.25}
        />
        <mesh
          name="Holz001"
          geometry={nodes.Holz001.geometry}
          material={materials['Material.006']}
          position={[3.732, -0.059, -4.423]}
          rotation={[Math.PI, -0.204, Math.PI]}
          scale={1.25}
        />
        <mesh
          name="Krams001"
          geometry={nodes.Krams001.geometry}
          material={materials['Material.007']}
          position={[3.732, -0.059, -4.423]}
          rotation={[Math.PI, -0.204, Math.PI]}
          scale={1.25}
        />
        <mesh
          name="Seife002"
          geometry={nodes.Seife002.geometry}
          material={materials['Material.013']}
          position={[1.999, 0.457, -0.087]}
          rotation={[Math.PI, -0.204, Math.PI]}
          scale={1.25}
        />
        <group
          name="Floor"
          position={[3.732, -0.059, -4.423]}
          rotation={[Math.PI, -0.204, Math.PI]}
          scale={1.25}>
          <mesh
            name="6_part1-part1-mesh15_01_16_16066"
            geometry={nodes['6_part1-part1-mesh15_01_16_16066'].geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="6_part1-part1-mesh15_01_16_16066_1"
            geometry={nodes['6_part1-part1-mesh15_01_16_16066_1'].geometry}
            material={materials['Material.012']}
          />
          <mesh
            name="6_part1-part1-mesh15_01_16_16066_2"
            geometry={nodes['6_part1-part1-mesh15_01_16_16066_2'].geometry}
            material={materials['Material.003']}
          />
        </group>
        <mesh
          name="Steine067"
          geometry={nodes.Steine067.geometry}
          material={materials['Material.008']}
          position={[3.732, -0.059, -4.423]}
          rotation={[Math.PI, -0.204, Math.PI]}
          scale={1.25}
        />
        <Suspense fallback={null}>
          {props.visible && (
            <PositionalAudio
              url="music/kaerMorhen.mp3"
              distance={100}
              setMaxDistance={2}
              position={[1000, 1000, 1000]}
              loop
              autoplay
            />
          )}
        </Suspense>
        <mesh
          castShadow
          name="HapyyBDay"
          geometry={nodes.HapyyBDay.geometry}
          material={materials.Happy_Birthday}
          position={[2.204, 0.843, -1.427]}
          rotation={[-1.604, 0.097, -2.885]}
          scale={[0.639, 0.707, 0.637]}>
          <MeshDistortMaterial
            {...materials.Happy_Birthday}
            speed={2}
            distort={0.2}
          />
        </mesh>
        <group
          name="Cake"
          position={[0.839, 0.398, -0.349]}
          rotation={[-Math.PI / 2, 0, -0.099]}
          scale={0.121}>
          <mesh
            name="Cake_Plate_GlassOpaque_0"
            geometry={nodes.Cake_Plate_GlassOpaque_0.geometry}
            material={materials.GlassOpaque} />
          <mesh
            name="Cake_Plate_GlassOpaque_0_1"
            geometry={nodes.Cake_Plate_GlassOpaque_0_1.geometry}
            material={materials.Cake_Material}
          />
        </group>
        <mesh
          name="Medalion"
          geometry={nodes.Medalion.geometry}
          material={materials.witcher_medalion}
          position={[0.803, 0.53, -0.355]}
          rotation={[-1.028, 0.509, 2.713]}
          scale={0.031}
        />
        lorem100
        <group
          name="door"
          position={[3.434, -0.111, -5.714]}
          rotation={[Math.PI, -0.204, Math.PI]}
          scale={1.463}>
          <mesh
            name="Object_1002"
            geometry={nodes.Object_1002.geometry}
            material={materials['Material.017']}
          />
          <mesh
            name="Object_1002_1"
            geometry={nodes.Object_1002_1.geometry}
            material={materials['Material.026']}
          />
        </group>
        <mesh
          castShadow
          name="Gifts"
          geometry={nodes.Gifts.geometry}
          material={materials['Gift_Mat.001']}
          position={[-0.594, -0.083, -0.004]}
          rotation={[0, -0.525, 0]}
          scale={0.864} />
        <mesh
          name="Confetti"
          geometry={nodes.Confetti.geometry}
          material={materials.Confetti_Mat}
          position={[-1.773, 0.494, -0.053]}
          rotation={[-2.479, 1.393, 0.257]}
          scale={1.348}>
          <MeshDistortMaterial
            {...materials.Confetti_Mat}
            speed={0.7}
            distort={0.3}
          />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('/models/WitcherWorld.glb')
