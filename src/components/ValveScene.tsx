import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function MetallicSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.2}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#b0b8c4"
          metalness={1}
          roughness={0.15}
          distort={0.15}
          speed={2}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

function ValveRing({ radius, speed }: { radius: number; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed;
      ref.current.rotation.z = state.clock.elapsedTime * speed * 0.5;
    }
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.06, 16, 100]} />
      <meshStandardMaterial
        color="#e87a1e"
        metalness={0.9}
        roughness={0.2}
        emissive="#e87a1e"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

export default function ValveScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#fff5e0" />
        <pointLight position={[-3, -3, 2]} intensity={0.8} color="#e87a1e" />
        <pointLight position={[3, 2, -2]} intensity={0.5} color="#8899aa" />

        <MetallicSphere />
        <ValveRing radius={3} speed={0.4} />
        <ValveRing radius={3.4} speed={-0.25} />

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
