import { Canvas } from '@react-three/fiber';
import { render } from 'react-dom';

import Scene from './scene.jsx';

const View = () => (
  <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Scene />
  </Canvas>
);

render(<View />, document.querySelector('body > div'));
