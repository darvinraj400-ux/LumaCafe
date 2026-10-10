import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function CoffeeCup() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Cup body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.6, 1.2, 32]} />
        <meshStandardMaterial color="#f5f0e8" roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Coffee liquid */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.75, 0.75, 0.1, 32]} />
        <meshStandardMaterial color="#3d1c0a" roughness={0.1} metalness={0.3} />
      </mesh>
      {/* Cup rim */}
      <mesh position={[0, 0.6, 0]}>
        <torusGeometry args={[0.78, 0.04, 16, 32]} />
        <meshStandardMaterial color="#f5f0e8" roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Handle */}
      <mesh position={[0.9, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.3, 0.06, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#f5f0e8" roughness={0.3} metalness={0.1} />
      </mesh>
      {/* Saucer */}
      <mesh position={[0, -0.65, 0]}>
        <cylinderGeometry args={[1.1, 1.0, 0.08, 32]} />
        <meshStandardMaterial color="#f5f0e8" roughness={0.3} metalness={0.1} />
      </mesh>
    </group>
  )
}

function SteamParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 50

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 0.5
      pos[i * 3 + 1] = Math.random() * 2 + 0.5
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.5
    }
    return pos
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += 0.01
        positions[i * 3] += Math.sin(state.clock.elapsedTime + i) * 0.002
        if (positions[i * 3 + 1] > 3) {
          positions[i * 3 + 1] = 0.5
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef} position={[0, 0, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

function CoffeeBeans() {
  const beansRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (beansRef.current) {
      beansRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const beans = useMemo(() => {
    const items = []
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      const radius = 2.5 + Math.random() * 0.5
      items.push({
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 2,
          Math.sin(angle) * radius
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ] as [number, number, number],
        scale: 0.15 + Math.random() * 0.1
      })
    }
    return items
  }, [])

  return (
    <group ref={beansRef}>
      {beans.map((bean, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={0.5}>
          <mesh position={bean.position} rotation={bean.rotation} scale={bean.scale}>
            <capsuleGeometry args={[0.5, 1, 4, 8]} />
            <meshStandardMaterial color="#4a2c17" roughness={0.8} metalness={0.1} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

function AmbientSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -3]} scale={3}>
      <icosahedronGeometry args={[1, 1]} />
      <MeshDistortMaterial
        color="#2d1810"
        roughness={0.4}
        metalness={0.8}
        distort={0.3}
        speed={2}
        transparent
        opacity={0.15}
      />
    </mesh>
  )
}

export default function CoffeeScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 1, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffeedd" />
        <pointLight position={[-3, 2, -2]} intensity={0.5} color="#ff9944" />
        <spotLight position={[0, 5, 0]} intensity={0.8} angle={0.5} penumbra={1} color="#ffddaa" />
        
        <CoffeeCup />
        <SteamParticles />
        <CoffeeBeans />
        <AmbientSphere />
        
        <Environment preset="sunset" />
      </Canvas>
    </div>
  )
}
