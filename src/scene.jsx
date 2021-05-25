import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

const targetFramerate = 1 / 60;

export default () => {
  const ref = useRef();

  const [hovered, setHover] = useState(false);

  useFrame(({ raycaster }, delta) => {
    const { current } = ref;

    setHover(!!raycaster.intersectObject(current).length);

    const framerateMultiplier = delta / targetFramerate;

    const { rotation } = current;

    rotation.x += 0.01 * framerateMultiplier;
    rotation.y += 0.005 * framerateMultiplier;
  })

  const args = [1,1,1];
  const color = hovered ? 'purple' : 'orange';

  return (
    <mesh {...{ ref }}>
      <boxGeometry {...{ args }} />
      <meshStandardMaterial {...{ color }} />
    </mesh>
  );
};
