import { Canvas } from '@react-three/fiber';
import { render } from 'react-dom';

import { mesh } from "./scene.mjs";

const { createElement } = React;

const view = createElement(Canvas, null, createElement(mesh));

render(view, document.querySelector('body'));
