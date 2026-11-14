import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

interface TechSculptureProps {
  mouse: React.MutableRefObject<{ x: number; y: number }>
}

export const TechSculpture = ({ mouse }: TechSculptureProps) => {
  const { size } = useThree()
  const aspect = size.width / Math.max(size.height, 1)
  const isMobile = aspect < 0.85 || size.width < 768

  const groupRef = useRef<THREE.Group>(null)
  const innerCoreRef = useRef<THREE.Mesh>(null)
  const outerWireRef = useRef<THREE.Mesh>(null)
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const ring3Ref = useRef<THREE.Mesh>(null)
  const nodesGroupRef = useRef<THREE.Group>(null)

  // Target rotation for smooth lerped cursor parallax
  const targetRotation = useRef({ x: 0, y: 0 })

  // Vertices for the node points
  const nodePositions = useMemo(() => {
    const geom = new THREE.IcosahedronGeometry(1.4, 0)
    const posAttr = geom.getAttribute('position')
    const points: [number, number, number][] = []
    const seen = new Set<string>()

    for (let i = 0; i < posAttr.count; i++) {
      const x = Number(posAttr.getX(i).toFixed(3))
      const y = Number(posAttr.getY(i).toFixed(3))
      const z = Number(posAttr.getZ(i).toFixed(3))
      const key = `${x},${y},${z}`
      if (!seen.has(key)) {
        seen.add(key)
        points.push([x, y, z])
      }
    }
    return points
  }, [])

  useFrame((_, delta) => {
    const t = performance.now() * 0.001

    // 1. Cursor parallax interpolation
    targetRotation.current.x = mouse.current.y * 0.35
    targetRotation.current.y = mouse.current.x * 0.45

    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotation.current.x,
        delta * 3.0
      )
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation.current.y,
        delta * 3.0
      )

      // Subtle organic floating motion
      const floatY = Math.sin(t * 0.8) * 0.05
      const targetX = isMobile ? 0 : 1.3
      const targetY = isMobile ? -0.05 : 0
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, delta * 3.0)
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY + floatY, delta * 3.0)
    }

    // 2. Kinetic rotation of individual structural components
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y += delta * 0.25
      innerCoreRef.current.rotation.x += delta * 0.15
    }

    if (outerWireRef.current) {
      outerWireRef.current.rotation.y -= delta * 0.18
      outerWireRef.current.rotation.z += delta * 0.12
    }

    if (nodesGroupRef.current) {
      nodesGroupRef.current.rotation.y -= delta * 0.18
      nodesGroupRef.current.rotation.z += delta * 0.12
    }

    // Gyro orbital rings rotating at mathematical harmonic ratios
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.35
      ring1Ref.current.rotation.y += delta * 0.2
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.4
      ring2Ref.current.rotation.z += delta * 0.25
    }

    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * 0.22
      ring3Ref.current.rotation.z -= delta * 0.38
    }
  })

  // Responsive scale: ensures comfortable proportion and non-overlapping placement
  const sculptureScale = isMobile ? 0.45 : 0.72

  return (
    <group ref={groupRef} scale={sculptureScale}>
      {/* ─── 1. INNER REFLECTIVE CORE ─── */}
      <mesh ref={innerCoreRef}>
        <octahedronGeometry args={[0.75, 0]} />
        <meshPhysicalMaterial
          color="#0f172a"
          emissive="#00f0ff"
          emissiveIntensity={0.25}
          roughness={0.15}
          metalness={0.9}
          clearcoat={1.0}
          clearcoatRoughness={0.1}
          wireframe={false}
        />
      </mesh>

      {/* ─── 2. OUTER STRUCTURAL WIREFRAME CAGE ─── */}
      <mesh ref={outerWireRef}>
        <icosahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={0.35}
          wireframe={true}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* ─── 3. DISTRIBUTED NODES (LATTICE VERTICES) ─── */}
      <group ref={nodesGroupRef}>
        {nodePositions.map((pos, idx) => (
          <mesh key={idx} position={pos}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
        ))}
      </group>

      {/* ─── 4. KINETIC GYRO-RINGS (ORBITAL TRACKS) ─── */}
      {/* Ring Alpha: Cyan Inner Track */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.75, 0.015, 16, 90]} />
        <meshStandardMaterial
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Ring Beta: Smoked Titanium Middle Track */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.98, 0.018, 16, 90]} />
        <meshStandardMaterial
          color="#94a3b8"
          emissive="#38bdf8"
          emissiveIntensity={0.15}
          roughness={0.35}
          metalness={0.85}
        />
      </mesh>

      {/* Ring Gamma: Outer Reference Axis Track */}
      <mesh ref={ring3Ref} rotation={[0, Math.PI / 4, Math.PI / 6]}>
        <torusGeometry args={[2.2, 0.012, 16, 90]} />
        <meshStandardMaterial
          color="#64748b"
          emissive="#0284c7"
          emissiveIntensity={0.2}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>
    </group>
  )
}
