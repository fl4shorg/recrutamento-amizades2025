
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface CubeProps {
  position?: [number, number, number];
  color?: string;
}

const Cube: React.FC<CubeProps> = ({ position = [0, 0, 0], color = '#9b87f5' }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh position={position} ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

interface SpinningLogoProps {
  height?: string;
  width?: string;
  className?: string;
}

const SpinningLogo: React.FC<SpinningLogoProps> = ({ 
  height = '400px', 
  width = '100%',
  className = '' 
}) => {
  return (
    <div style={{ height, width }} className={className}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Cube position={[0, 0, 0]} color="#9b87f5" />
        <Cube position={[-2.5, 0, 0]} color="#7E69AB" />
        <Cube position={[2.5, 0, 0]} color="#D6BCFA" />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
};

export default SpinningLogo;
