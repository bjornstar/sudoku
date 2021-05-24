import { Canvas } from '@react-three/fiber';
import { render } from 'react-dom';

import Box from './scene.jsx';

const View = () => (
  <Canvas>
    <Box />
  </Canvas>
);

render(<View />, document.querySelector('body > div'));
