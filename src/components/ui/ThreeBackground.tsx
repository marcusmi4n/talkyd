'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleNetwork() {
  const ref = useRef<THREE.Points>(null!);
  
  // Create random points in space
  const [positions, colors] = useMemo(() => {
    const count = 3000;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      // Interpolate between Blue (#1FA0D6) and Green (#4CAF50)
      const mix = Math.random();
      cols[i * 3] = 0.12 * (1 - mix) + 0.3 * mix; // R
      cols[i * 3 + 1] = 0.63 * (1 - mix) + 0.68 * mix; // G
      cols[i * 3 + 2] = 0.84 * (1 - mix) + 0.31 * mix; // B
    }
    return [pos, cols];
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-dark overflow-hidden">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleNetwork />
      </Canvas>
    </div>
  );
}
