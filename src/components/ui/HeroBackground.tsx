'use client'

import { useRef, useEffect, Suspense, Component, ReactNode } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export const ANIMATION_TIME_SCALE = 0.3
export const MAX_ROTATION = 0.3
export const LERP_FACTOR = 0.05

export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor
}

interface SceneContentProps {
  mouseRef: React.MutableRefObject<{ x: number; y: number }>
}

function SceneContent({ mouseRef }: SceneContentProps) {
  const { scene: gltfScene, animations } = useGLTF('/models/earth.glb')
  const groupRef = useRef<THREE.Group>(null)
  const mixerRef = useRef<THREE.AnimationMixer | null>(null)
  const rotationRef = useRef({ x: 0, y: 0, z: 0 })
  const { size } = useThree()

  // Clone scene to avoid mutation issues
  const clonedScene = gltfScene.clone(true)

  useEffect(() => {
    if (!groupRef.current) return
    // Set up animation mixer
    const mixer = new THREE.AnimationMixer(groupRef.current)
    mixerRef.current = mixer
    if (animations && animations.length > 0) {
      const action = mixer.clipAction(animations[0])
      action.timeScale = ANIMATION_TIME_SCALE
      action.play()
    }
    return () => { mixer.stopAllAction() }
  }, [animations])

  useFrame((_, delta) => {
    if (!groupRef.current) return
    // Update animation mixer
    mixerRef.current?.update(delta)
    // Continuous slow spin
    groupRef.current.rotation.y += delta * 0.15
    // Mouse parallax
    rotationRef.current.x = lerp(rotationRef.current.x, mouseRef.current.y * MAX_ROTATION, LERP_FACTOR)
    rotationRef.current.z = lerp(rotationRef.current.z, mouseRef.current.x * MAX_ROTATION, LERP_FACTOR)
    groupRef.current.rotation.x = rotationRef.current.x
    groupRef.current.rotation.z = rotationRef.current.z
  })

  // Scale based on viewport — sit to the right, partially visible
  const scale = Math.min(size.width, size.height) * 0.0012

  return (
    <group ref={groupRef} scale={scale} position={[1.5, 0, 0]}>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 3, 5]} intensity={3} color="#ffffff" />
      <directionalLight position={[-5, -3, -5]} intensity={0.5} color="#4488ff" />
      <primitive object={clonedScene} />
    </group>
  )
}

class GLBErrorBoundary extends Component<{ children: ReactNode }, { error: boolean }> {
  state = { error: false }
  static getDerivedStateFromError() { return { error: true } }
  render() {
    if (this.state.error) return null
    return this.props.children
  }
}

useGLTF.preload('/models/earth.glb')

export default function HeroBackground() {
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <GLBErrorBoundary>
          <Suspense fallback={null}>
            <SceneContent mouseRef={mouseRef} />
          </Suspense>
        </GLBErrorBoundary>
      </Canvas>
    </div>
  )
}
