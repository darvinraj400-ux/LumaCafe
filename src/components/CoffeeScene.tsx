import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'

// Realistic coffee cup with proper ceramic proportions
function CoffeeCup() {
  const groupRef = useRef<THREE.Group>(null)

  // Cup profile - smooth curves like a real ceramic cup
  const cupProfile = useMemo(() => {
    const points: THREE.Vector2[] = []
    // Base
    points.push(new THREE.Vector2(0, 0))
    points.push(new THREE.Vector2(0.55, 0))
    points.push(new THREE.Vector2(0.58, 0.02))
    points.push(new THREE.Vector2(0.60, 0.05))
    // Body - gentle outward curve
    points.push(new THREE.Vector2(0.62, 0.15))
    points.push(new THREE.Vector2(0.64, 0.30))
    points.push(new THREE.Vector2(0.67, 0.50))
    points.push(new THREE.Vector2(0.70, 0.70))
    points.push(new THREE.Vector2(0.73, 0.90))
    points.push(new THREE.Vector2(0.76, 1.05))
    points.push(new THREE.Vector2(0.78, 1.15))
    // Rim - slight outward flare
    points.push(new THREE.Vector2(0.80, 1.20))
    points.push(new THREE.Vector2(0.81, 1.23))
    points.push(new THREE.Vector2(0.80, 1.25))
    // Inner wall going down
    points.push(new THREE.Vector2(0.76, 1.23))
    points.push(new THREE.Vector2(0.73, 1.18))
    points.push(new THREE.Vector2(0.70, 1.10))
    return points
  }, [])

  // Saucer profile
  const saucerProfile = useMemo(() => {
    const points: THREE.Vector2[] = []
    points.push(new THREE.Vector2(0, 0))
    points.push(new THREE.Vector2(0.4, 0))
    points.push(new THREE.Vector2(0.7, 0.01))
    points.push(new THREE.Vector2(0.9, 0.02))
    points.push(new THREE.Vector2(1.05, 0.04))
    points.push(new THREE.Vector2(1.15, 0.06))
    points.push(new THREE.Vector2(1.20, 0.08))
    points.push(new THREE.Vector2(1.22, 0.10))
    points.push(new THREE.Vector2(1.20, 0.12))
    points.push(new THREE.Vector2(1.15, 0.11))
    points.push(new THREE.Vector2(1.05, 0.09))
    points.push(new THREE.Vector2(0.9, 0.07))
    points.push(new THREE.Vector2(0.7, 0.05))
    points.push(new THREE.Vector2(0.4, 0.03))
    points.push(new THREE.Vector2(0, 0.02))
    return points
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      // Very slow, gentle rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08
      // Subtle breathing motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.02
    }
  })

  return (
    <group ref={groupRef} position={[0, -1.2, 0]}>
      {/* Saucer */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <latheGeometry args={[saucerProfile, 64]} />
        <meshStandardMaterial
          color="#f5f0e8"
          roughness={0.2}
          metalness={0.0}
        />
      </mesh>

      {/* Cup body */}
      <mesh position={[0, 0.12, 0]} castShadow receiveShadow>
        <latheGeometry args={[cupProfile, 64]} />
        <meshStandardMaterial
          color="#f8f3eb"
          roughness={0.18}
          metalness={0.02}
        />
      </mesh>

      {/* Coffee surface */}
      <mesh position={[0, 1.22, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.70, 64]} />
        <meshStandardMaterial
          color="#1a0a02"
          roughness={0.15}
          metalness={0.4}
        />
      </mesh>

      {/* Crema - outer ring */}
      <mesh position={[0, 1.225, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.58, 0.70, 64]} />
        <meshStandardMaterial
          color="#8B5A2B"
          roughness={0.4}
          metalness={0.1}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Crema - inner highlight */}
      <mesh position={[0, 1.226, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.55, 0.62, 64]} />
        <meshStandardMaterial
          color="#A0703C"
          roughness={0.3}
          metalness={0.1}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Handle */}
      <group position={[0.82, 0.65, 0]}>
        <mesh castShadow>
          <torusGeometry args={[0.25, 0.05, 20, 32, Math.PI]} />
          <meshStandardMaterial
            color="#f8f3eb"
            roughness={0.18}
            metalness={0.02}
          />
        </mesh>
      </group>
    </group>
  )
}

// Subtle, wispy steam
function Steam() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 40

  const { positions, velocities, lifetimes, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    const life = new Float32Array(count)
    const sz = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = Math.random() * 0.25
      pos[i * 3] = Math.cos(angle) * radius
      pos[i * 3 + 1] = Math.random() * 2
      pos[i * 3 + 2] = Math.sin(angle) * radius

      vel[i * 3] = (Math.random() - 0.5) * 0.002
      vel[i * 3 + 1] = 0.004 + Math.random() * 0.006
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002

      life[i] = Math.random()
      sz[i] = 0.03 + Math.random() * 0.04
    }
    return { positions: pos, velocities: vel, lifetimes: life, sizes: sz }
  }, [])

  useFrame((state) => {
    if (!particlesRef.current) return
    const posAttr = particlesRef.current.geometry.attributes.position
    const posArray = posAttr.array as Float32Array
    const time = state.clock.elapsedTime

    for (let i = 0; i < count; i++) {
      lifetimes[i] += 0.006

      if (lifetimes[i] > 1) {
        lifetimes[i] = 0
        const angle = Math.random() * Math.PI * 2
        const radius = Math.random() * 0.2
        posArray[i * 3] = Math.cos(angle) * radius
        posArray[i * 3 + 1] = 0
        posArray[i * 3 + 2] = Math.sin(angle) * radius
      }

      // Gentle swirl
      const swirl = Math.sin(time * 1.5 + i * 0.5) * 0.001
      posArray[i * 3] += velocities[i * 3] + swirl
      posArray[i * 3 + 1] += velocities[i * 3 + 1]
      posArray[i * 3 + 2] += velocities[i * 3 + 2] + swirl
    }

    posAttr.needsUpdate = true
  })

  return (
    <points ref={particlesRef} position={[0, 0.1, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#ffffff"
        transparent
        opacity={0.08}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function CoffeeScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0.5, 4], fov: 30 }}
        shadows
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
        }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        {/* Warm café lighting */}
        <ambientLight intensity={0.4} color="#ffeedd" />
        
        {/* Main key light - warm, soft */}
        <directionalLight
          position={[3, 5, 4]}
          intensity={1.2}
          color="#fff0dd"
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-camera-far={15}
          shadow-camera-left={-3}
          shadow-camera-right={3}
          shadow-camera-top={3}
          shadow-camera-bottom={-3}
          shadow-bias={-0.001}
        />
        
        {/* Fill light - cooler, softer */}
        <directionalLight
          position={[-3, 3, -2]}
          intensity={0.3}
          color="#ddeeff"
        />

        {/* Rim light for separation */}
        <directionalLight
          position={[-2, 2, -4]}
          intensity={0.5}
          color="#ffccaa"
        />

        {/* Subtle warm point light */}
        <pointLight
          position={[1, 2, 2]}
          intensity={0.4}
          color="#ffaa66"
          distance={6}
        />

        {/* Scene */}
        <CoffeeCup />
        <Steam />

        {/* Environment for reflections */}
        <Environment preset="apartment" />

        {/* Subtle fog */}
        <fog attach="fog" args={['#1a0e08', 8, 18]} />
      </Canvas>
    </div>
  )
}
