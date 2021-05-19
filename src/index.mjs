import { Canvas, render } from '@react-three/fiber';
import { Scene } from "./scene.mjs";

const { createElement } = React;

const view = createElement(Canvas, Scene);

render(view, document.querySelector('body'));
