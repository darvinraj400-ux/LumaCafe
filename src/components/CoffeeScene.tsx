import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Environment, ContactShadows, MeshReflectorMaterial } from '@react-three/drei'
import * as THREE from 'three'

// Realistic coffee cup using lathe geometry
function CoffeeCup() {
  const groupRef = useRef<THREE.Group>(null)
  const coffeeRef = useRef<THREE.Mesh>(null)

  // Cup profile (cross-section for lathe)
  const cupProfile = useMemo(() => {
    const points: THREE.Vector2[] = []
    // Bottom
    points.push(new THREE.Vector2(0, 0))
    points.push(new THREE.Vector2(0.45, 0))
    points.push(new THREE.Vector2(0.48, 0.02))
    // Body curve
    points.push(new THREE.Vector2(0.50, 0.08))
    points.push(new THREE.Vector2(0.52, 0.2))
    points.push(new THREE.Vector2(0.54, 0.4))
    points.push(new THREE.Vector2(0.56, 0.6))
    points.push(new THREE.Vector2(0.58, 0.8))
    points.push(new THREE.Vector2(0.60, 1.0))
    points.push(new THREE.Vector2(0.62, 1.1))
    // Rim
    points.push(new THREE.Vector2(0.64, 1.15))
    points.push(new THREE.Vector2(0.65, 1.18))
    points.push(new THREE.Vector2(0.64, 1.20))
    // Inner wall
    points.push(new THREE.Vector2(0.60, 1.18))
    points.push(new THREE.Vector2(0.58, 1.15))
    points.push(new THREE.Vector2(0.56, 1.10))
    return points
  }, [])

  // Saucer profile
  const saucerProfile = useMemo(() => {
    const points: THREE.Vector2[] = []
    points.push(new THREE.Vector2(0, 0))
    points.push(new THREE.Vector2(0.3, 0))
    points.push(new THREE.Vector2(0.6, 0.01))
    points.push(new THREE.Vector2(0.8, 0.02))
    points.push(new THREE.Vector2(0.95, 0.04))
    points.push(new THREE.Vector2(1.0, 0.06))
    points.push(new THREE.Vector2(1.02, 0.08))
    points.push(new THREE.Vector2(1.0, 0.10))
    points.push(new THREE.Vector2(0.95, 0.09))
    points.push(new THREE.Vector2(0.6, 0.06))
    points.push(new THREE.Vector2(0.3, 0.04))
    points.push(new THREE.Vector2(0, 0.03))
    return points
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
    if (coffeeRef.current) {
      // Subtle coffee surface movement
      const material = coffeeRef.current.material as THREE.MeshStandardMaterial
      material.roughness = 0.05 + Math.sin(state.clock.elapsedTime * 2) * 0.02
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.8, 0]}>
      {/* Saucer */}
      <mesh position={[0, -0.05, 0]} castShadow receiveShadow>
        <latheGeometry args={[saucerProfile, 64]} />
        <meshPhysicalMaterial
          color="#f8f4ee"
          roughness={0.15}
          metalness={0.0}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
        />
      </mesh>

      {/* Cup body */}
      <mesh position={[0, 0.05, 0]} castShadow receiveShadow>
        <latheGeometry args={[cupProfile, 64]} />
        <meshPhysicalMaterial
          color="#f5f0e8"
          roughness={0.12}
          metalness={0.0}
          clearcoat={1.0}
          clearcoatRoughness={0.15}
          sheen={0.5}
          sheenColor={new THREE.Color('#ffe8d0')}
        />
      </mesh>

      {/* Coffee liquid */}
      <mesh ref={coffeeRef} position={[0, 1.12, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.55, 64]} />
        <meshPhysicalMaterial
          color="#2a1005"
          roughness={0.05}
          metalness={0.3}
          clearcoat={1.0}
          clearcoatRoughness={0.05}
        />
      </mesh>

      {/* Crema ring */}
      <mesh position={[0, 1.125, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.48, 0.56, 64]} />
        <meshPhysicalMaterial
          color="#8B5E3C"
          roughness={0.3}
          metalness={0.1}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Handle */}
      <group position={[0.65, 0.6, 0]}>
        <mesh castShadow>
          <torusGeometry args={[0.22, 0.045, 16, 32, Math.PI]} />
          <meshPhysicalMaterial
            color="#f5f0e8"
            roughness={0.12}
            metalness={0.0}
            clearcoat={1.0}
            clearcoatRoughness={0.15}
          />
        </mesh>
      </group>
    </group>
  )
}

// Elegant steam effect
function Steam() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 80

  const { positions, velocities, lifetimes } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const vel = new Float32Array(count * 3)
    const life = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2
      const radius = Math.random() * 0.2
      pos[i * 3] = Math.cos(angle) * radius
      pos[i * 3 + 1] = Math.random() * 1.5 + 0.3
      pos[i * 3 + 2] = Math.sin(angle) * radius

      vel[i * 3] = (Math.random() - 0.5) * 0.003
      vel[i * 3 + 1] = 0.005 + Math.random() * 0.008
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.003

      life[i] = Math.random()
    }
    return { positions: pos, velocities: vel, lifetimes: life }
  }, [])

  useFrame((state) => {
    if (!particlesRef.current) return
    const posAttr = particlesRef.current.geometry.attributes.position
    const posArray = posAttr.array as Float32Array
    const time = state.clock.elapsedTime

    for (let i = 0; i < count; i++) {
      lifetimes[i] += 0.008

      if (lifetimes[i] > 1) {
        lifetimes[i] = 0
        const angle = Math.random() * Math.PI * 2
        const radius = Math.random() * 0.15
        posArray[i * 3] = Math.cos(angle) * radius
        posArray[i * 3 + 1] = 0.3
        posArray[i * 3 + 2] = Math.sin(angle) * radius
      }

      posArray[i * 3] += velocities[i * 3] + Math.sin(time * 2 + i) * 0.001
      posArray[i * 3 + 1] += velocities[i * 3 + 1]
      posArray[i * 3 + 2] += velocities[i * 3 + 2] + Math.cos(time * 2 + i) * 0.001
    }

    posAttr.needsUpdate = true
  })

  return (
    <points ref={particlesRef} position={[0, 0.3, 0]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#ffffff"
        transparent
        opacity={0.15}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Floating coffee beans with proper shape
function CoffeeBean({ position, rotation, scale }: { position: [number, number, number]; rotation: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  // Bean shape using merged spheres
  const beanGeometry = useMemo(() => {
    const shape = new THREE.Shape()
    // Bean outline (oval with center crease)
    shape.moveTo(0, -0.5)
    shape.bezierCurveTo(0.35, -0.5, 0.5, -0.2, 0.5, 0)
    shape.bezierCurveTo(0.5, 0.2, 0.35, 0.5, 0, 0.5)
    shape.bezierCurveTo(-0.35, 0.5, -0.5, 0.2, -0.5, 0)
    shape.bezierCurveTo(-0.5, -0.2, -0.35, -0.5, 0, -0.5)

    const extrudeSettings = {
      depth: 0.3,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.05,
      bevelSegments: 8,
      curveSegments: 16,
    }

    return new THREE.ExtrudeGeometry(shape, extrudeSettings)
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = rotation[2] + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        rotation={rotation}
        scale={scale}
        geometry={beanGeometry}
        castShadow
      >
        <meshPhysicalMaterial
          color="#3d1f0a"
          roughness={0.7}
          metalness={0.05}
          clearcoat={0.3}
          clearcoatRoughness={0.4}
        />
      </mesh>
    </Float>
  )
}

function FloatingBeans() {
  const beans = useMemo(() => {
    const items = []
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const radius = 2.2 + Math.random() * 0.8
      items.push({
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 1.5,
          Math.sin(angle) * radius,
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ] as [number, number, number],
        scale: 0.25 + Math.random() * 0.15,
      })
    }
    return items
  }, [])

  return (
    <group>
      {beans.map((bean, i) => (
        <CoffeeBean key={i} {...bean} />
      ))}
    </group>
  )
}

// Reflective ground
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.7, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={40}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#1a0e08"
        metalness={0.5}
        mirror={0.5}
      />
    </mesh>
  )
}

// Ambient light orbs
function LightOrbs() {
  const orb1Ref = useRef<THREE.Mesh>(null)
  const orb2Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (orb1Ref.current) {
      orb1Ref.current.position.x = Math.sin(t * 0.3) * 3
      orb1Ref.current.position.z = Math.cos(t * 0.3) * 3
      orb1Ref.current.position.y = Math.sin(t * 0.5) * 0.5 + 1
    }
    if (orb2Ref.current) {
      orb2Ref.current.position.x = Math.cos(t * 0.2) * 2.5
      orb2Ref.current.position.z = Math.sin(t * 0.2) * 2.5
      orb2Ref.current.position.y = Math.cos(t * 0.4) * 0.5 + 0.5
    }
  })

  return (
    <>
      <mesh ref={orb1Ref}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#ff9944" transparent opacity={0.8} />
        <pointLight color="#ff9944" intensity={2} distance={4} />
      </mesh>
      <mesh ref={orb2Ref}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#ffcc88" transparent opacity={0.6} />
        <pointLight color="#ffcc88" intensity={1.5} distance={3} />
      </mesh>
    </>
  )
}

export default function CoffeeScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 1.5, 4.5], fov: 35 }}
        shadows
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} color="#ffeedd" />
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.5}
          color="#fff5e6"
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-far={20}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
        />
        <directionalLight position={[-3, 4, -3]} intensity={0.4} color="#aabbff" />
        <spotLight
          position={[0, 6, 0]}
          intensity={1}
          angle={0.4}
          penumbra={1}
          color="#ffddaa"
          castShadow
        />

        {/* Scene */}
        <CoffeeCup />
        <Steam />
        <FloatingBeans />
        <Ground />
        <LightOrbs />

        {/* Contact shadows for grounding */}
        <ContactShadows
          position={[0, -1.68, 0]}
          opacity={0.4}
          scale={8}
          blur={2}
          far={4}
          color="#000000"
        />

        {/* Environment */}
        <Environment preset="studio" />

        {/* Fog for depth */}
        <fog attach="fog" args={['#1a0e08', 6, 15]} />
      </Canvas>
    </div>
  )
}
