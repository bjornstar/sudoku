import { createElement } from 'react';
import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three';

export const mesh = () => {
  const mesh = new Mesh()
  mesh.geometry = new BoxGeometry(1,1,1);
  mesh.material = new MeshStandardMaterial({ color: 'orange' })
  return mesh;
};

/**
  new Mesh(
    new BoxGeometry(1,1,1),
    new MeshStandardMaterial({ color: 'orange' })
  )
**/
