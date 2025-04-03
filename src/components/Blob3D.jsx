import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import BlobMesh from './Blob3D/BlobMesh';

const Blob3D = ({ 
  className = '', 
  color = '#ff0000',
  speed = 1.5,
  distort = 0.4,
  radius = 1,
  width = '100%',
  height = '400px'
}) => {
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 13]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        <BlobMesh color={color} speed={speed} distort={distort} radius={radius} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default Blob3D; 