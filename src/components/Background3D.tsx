import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSpheres = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.3;
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <group ref={group}>
      {[...Array(5)].map((_, i) => (
        <Sphere key={i} position={[Math.sin(i) * 3, Math.cos(i) * 2, i * 0.5]} scale={0.2}>
          <meshStandardMaterial
            color={new THREE.Color().setHSL(i * 0.1, 0.8, 0.6)}
            transparent
            opacity={0.6}
          />
        </Sphere>
      ))}
    </group>
  );
};

const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSpheres />
      </Canvas>
    </div>
  );
};

export default Background3D;