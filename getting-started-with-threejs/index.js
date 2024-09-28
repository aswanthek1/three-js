import * as THREE from "three";

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = THREE.WebGLRenderer({ antialiasF: true });
renderer.setSize(w, h);

document.body.appendChild(renderer.domElement);

