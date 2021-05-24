import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

export default () => {
  const ref = useRef();

  const [hovered, setHover] = useState(false);

  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.005;
  })

  const color = hovered ? 'purple' : 'orange';
  const onPointerDown = event => console.log(event);
  const onPointerOver = () => setHover(true);
  const onPointerOut = () => setHover(false);

  return (
    <mesh {...{ onPointerDown, onPointerOut, onPointerOver, ref }}>
      <boxGeometry args={[1,1,1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
