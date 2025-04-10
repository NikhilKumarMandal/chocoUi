import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

const BlobMesh = ({ 
  color = '#FFEAC5', 
  speed = 1.2, 
  distort = 0.7, 
  radius = 2,
  opacity = 0.15,
  roughness = 0.8,
  metalness = 0.05
}) => {
  const meshRef = useRef();

  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();
    
    if (meshRef.current) {
      // Subtle organic movement
      meshRef.current.rotation.x = Math.sin(time * 0.7) * 0.1;
      meshRef.current.rotation.y = Math.cos(time * 0.5) * 0.1;
      meshRef.current.position.y = Math.sin(time * 1.5) * 0.05;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <sphereGeometry args={[radius, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={distort}
          radius={radius}
          attach="material"
          transparent
          opacity={opacity}
          roughness={roughness}
          metalness={metalness}
          envMapIntensity={0.9}
          clearcoat={0.2}
          // clearcoatRoughness={0.1}
          // transmission={0.9}
          thickness={5}
        />
      </mesh>

    </>
  );
};

export default BlobMesh;