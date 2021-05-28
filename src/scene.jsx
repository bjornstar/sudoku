import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

const framerate = 60;

export default () => {
  const ref = useRef();

  const [active, setActive] = useState(false);
  const [frame, setFrame] = useState(0);
  const [hovered, setHover] = useState(false);

  useFrame(({ raycaster }, delta) => {
    const { current, current: { position, rotation } } = ref;

    setHover(!!raycaster.intersectObject(current).length);

    const framerateMultiplier = delta * framerate;

    rotation.x += 0.01 * framerateMultiplier;
    rotation.y += 0.005 * framerateMultiplier;

    setFrame(frame + delta);

    position.x = Math.sin(frame);
    position.y = Math.cos(frame);
  });

  const onClick = () => setActive(!active);

  const args = [1,1,1];
  const color = hovered ? 'purple' : 'orange';
  const scale = active ? 1.5 : 1;

  return (
    <mesh {...{ onClick, ref, scale }}>
      <boxGeometry {...{ args }} />
      <meshStandardMaterial {...{ color }} />
    </mesh>
  );
};
