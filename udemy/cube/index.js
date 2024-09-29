import * as THREE from "three";

// Create a scene
const scene = new THREE.Scene();

// Camera
const width = window.innerWidth;
const height = window.innerHeight;
const viewAngle = 45; // view angle for camera
const nearCliping = 0.1; // near view point of camera
const farCliping = 9999; // far view point of camer

const camera = new THREE.PerspectiveCamera(viewAngle, width / height, nearCliping, farCliping);
camera.position.set(0, 0, 10);


// Geometry + Material = Mesh
// BoxGeometry >> CUBE
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
// MeshBasicMaterial >> Material for CUBE
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });
// Mesh = Geometry + Material
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

cube.position.set(0, 0, 0);
// Add Mesh to the scene
scene.add(cube)


// Capsule
const capsuleGeometry = new THREE.CapsuleGeometry(1, 1, 1);
const capsuleMaterial = new THREE.MeshBasicMaterial({ color: "green" });
const capsule = new THREE.Mesh(capsuleGeometry, capsuleMaterial);
capsule.position.set(-5, 0, 0)
scene.add(capsule)

// Capsule
const coneGeometry = new THREE.ConeGeometry(2, 5, 32);
const coneMaterial = new THREE.MeshBasicMaterial({ color: "green" });
const cone = new THREE.Mesh(coneGeometry, coneMaterial);
cone.position.set(5, 0, 0)
scene.add(cone)

// Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(width, height)

// Get element
const element = document.getElementById("container")
element.appendChild(renderer.domElement);


function animate() {
    cube.rotation.y += 0.01;
    cube.rotation.x += 0.01;
    capsule.rotation.y += 0.01;
    capsule.rotation.x += 0.01;
    cone.rotation.z += 0.01;
    requestAnimationFrame(animate); // this method calls 'animate' function again and again;
    renderer.render(scene, camera)
}

animate();

