import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

const BlobMesh = ({
  color = "#FFEAC5",
  speed = 1.5,
  distort = 0.9,
  radius = 2,
}) => {
  const meshRef = useRef();

  useFrame((state) => {
    const { clock } = state;
    const time = clock.getElapsedTime();

    if (meshRef.current) {
      // More organic movement
      meshRef.current.rotation.x = Math.sin(time * 1.3) * 0.2;
      meshRef.current.rotation.y = Math.cos(time * 0.4) * 0.2;
      meshRef.current.position.y = Math.sin(time * 2.5) * 0.1;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <sphereGeometry args={[radius, 128, 128]} />
        <MeshDistortMaterial
          color={color}
          speed={speed}
          distort={distort}
          radius={radius}
          attach="material"
          transparent
          opacity={0.7}
          roughness={1.2}
          metalness={0.1}
          envMapIntensity={0.5}
        />
      </mesh>
      <Environment preset="sunset" />
    </>
  );
};

export default BlobMesh;
