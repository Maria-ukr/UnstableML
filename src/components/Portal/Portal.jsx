import React, { useRef, useState } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import * as THREE from 'three';
import './Portal.sass';

const baseUrl = import.meta.env.BASE_URL;

// Custom rounded plane geometry
class RoundedPlaneGeometry extends THREE.BufferGeometry {
  constructor(width = 1, height = 1, radius = 0.1, segments = 32) {
    super();
    
    const vertices = [];
    const indices = [];
    const uvs = [];
    
    // Create rounded rectangle
    const halfWidth = width / 2;
    const halfHeight = height / 2;
    
    // Center
    vertices.push(0, 0, 0);
    uvs.push(0.5, 0.5);
    
    // Create vertices around the edges
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      // Top right corner
      vertices.push(halfWidth - radius + x, halfHeight - radius + y, 0);
      uvs.push(1 - radius/width + x/width, 1 - radius/height + y/height);
      
      // Top left corner
      vertices.push(-halfWidth + radius + x, halfHeight - radius + y, 0);
      uvs.push(radius/width + x/width, 1 - radius/height + y/height);
      
      // Bottom left corner
      vertices.push(-halfWidth + radius + x, -halfHeight + radius + y, 0);
      uvs.push(radius/width + x/width, radius/height + y/height);
      
      // Bottom right corner
      vertices.push(halfWidth - radius + x, -halfHeight + radius + y, 0);
      uvs.push(1 - radius/width + x/width, radius/height + y/height);
    }
    
    // Create indices for triangles
    for (let i = 0; i < segments; i++) {
      const base = i * 4 + 1;
      indices.push(0, base, base + 1);
      indices.push(0, base + 1, base + 2);
      indices.push(0, base + 2, base + 3);
      indices.push(0, base + 3, base + 4);
    }
    
    this.setIndex(indices);
    this.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    this.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  }
}

// Extend Three.js with our custom geometry
extend({ RoundedPlaneGeometry });

const videos = [
  `${baseUrl}videos/enhance/enhance1.mov`,
  `${baseUrl}videos/enhance/enhance2.mov`,
  `${baseUrl}videos/enhance/enhance3.mov`,
  `${baseUrl}videos/enhance/enhance1.mov`,
  `${baseUrl}videos/enhance/enhance2.mov`,
  `${baseUrl}videos/enhance/enhance3.mov`,
  `${baseUrl}videos/enhance/enhance2.mov`,
];

function VideoPlane({ video, position, rotation = [0, 0, 0], isMirrored }) {
  const meshRef = useRef();
  const [videoTexture, setVideoTexture] = useState(null);
  
  React.useEffect(() => {
    const videoElement = document.createElement('video');
    videoElement.src = video;
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.playsInline = true;
    videoElement.autoplay = true;
    
    videoElement.oncanplay = () => {
      videoElement.play();
      const texture = new THREE.VideoTexture(videoElement);
      texture.needsUpdate = true;
      setVideoTexture(texture);
    };
  }, [video]);

  useFrame(() => {
    if (meshRef.current) {
      if (isMirrored) {
        meshRef.current.rotation.y = 0.7;
        meshRef.current.rotation.x = -0.1;
        meshRef.current.rotation.z = 0.03;
      } else {
        meshRef.current.rotation.y = -0.7;
        meshRef.current.rotation.x = -0.1;
        meshRef.current.rotation.z = -0.03;
      }
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <roundedPlaneGeometry args={[7, 4, 0.1]} />
      {videoTexture && (
        <meshBasicMaterial
          map={videoTexture}
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      )}
    </mesh>
  );
}

function Scene({ videos, isMirrored = false }) {
  return (
    <>
      {videos.map((video, index) => {
        const angle = 10;
        const centerIndex = Math.floor(videos.length / 2);
        const offset = index - centerIndex;
        const x = Math.sin(angle) * offset * 8;
        const z = Math.cos(angle) * offset * 10;
        
        return (
          <VideoPlane
            key={`${isMirrored ? 'mirrored' : 'original'}-${index}`}
            video={video}
            isMirrored={isMirrored}
            position={[isMirrored ? -x : x, 0, z]}
            rotation={isMirrored ? [0, -1, 0] : [0, 1, 0]}
          />
        );
      })}
    </>
  );
}

export default function Portal() {
  return (
    <section className='portal'>
      <div className='portal-scene portal-scene--left'>
        <Canvas camera={{ position: [0, 0, 17], fov: 50 }}>
          <Scene videos={videos} isMirrored={true} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
      </div>
      <div className='portal-scene portal-scene--right'>
        <Canvas camera={{ position: [0, 0, 17], fov: 50 }}>
          <Scene videos={videos} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
        </Canvas>
      </div>
    </section>
  );
}
