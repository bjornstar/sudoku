import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
export default () => {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.005;
  })

  return (
    <mesh ref={ref}>
      <boxGeometry args={[1,1,1]} />
      <meshStandardMaterial color='orange' />
    </mesh>
  );
};
