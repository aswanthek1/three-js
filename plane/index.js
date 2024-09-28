import * as THREE from "three";


const scene = new THREE.Scene();


const width = window.innerWidth;
const height = window.innerHeight;
const viewAngle = 75;
const nearCliping = 0.1;
const farCliping = 9999;


const camera = new THREE.PerspectiveCamera(viewAngle, width / height, nearCliping, farCliping);
camera.position.set(0, 10, 25);


// plane
const geometry = new THREE.PlaneGeometry(20, 20);
const material = new THREE.MeshBasicMaterial({ color: "green", side: 2 })
const plane = new THREE.Mesh(geometry, material);
scene.rotation.set(1.6, 0, 0)
scene.add(plane)

// cube
const cubGeo = new THREE.BoxGeometry(3, 3);
const cubMat = new THREE.MeshBasicMaterial({color: "red"})
const cube = new THREE.Mesh(cubGeo, cubMat)
scene.add(cube)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(width, height)

const element = document.getElementById("container")
element.appendChild(renderer.domElement)


function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    requestAnimationFrame(animate);
    renderer.render(scene, camera)
}

animate();