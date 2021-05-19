import { BoxBufferGeometry, Mesh, MeshNormalMaterial } from 'three';

export const Scene = () =>
  createElement(Mesh, [
    createElement(BoxBufferGeometry, null, { args: [1, 1, 1], attach: 'geometry' }),
    createElement(MeshNormalMaterial, null, { attach: 'material' })
  ]);
