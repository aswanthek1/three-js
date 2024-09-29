import * as THREE from "three";


const scene = new THREE.Scene();


const width = window.innerWidth;
const height = window.innerHeight;
const viewAngle = 75;
const nearCliping = 0.1;
const farCliping = 9999;


const camera = new THREE.PerspectiveCamera(viewAngle, width / height, nearCliping, farCliping);
camera.position.set(0, 5, 25);


// plane
const geometry = new THREE.PlaneGeometry(20, 20);
const material = new THREE.MeshBasicMaterial({ color: "green", side: THREE.DoubleSide })
const plane = new THREE.Mesh(geometry, material);
plane.rotation.set(1.6, 0, 0)
// scene.add(plane)

// cube
const cubGeo = new THREE.BoxGeometry(1, 1);
const cubMat = new THREE.MeshBasicMaterial({color: "red"})
const cube = new THREE.Mesh(cubGeo, cubMat)
cube.position.set(0, 0, 1)
// scene.add(cube)


// left side
const leftCubGeo = new THREE.BoxGeometry(1, 1);
const leftCubMat = new THREE.MeshBasicMaterial({color: "blue"})
const leftCube = new THREE.Mesh(leftCubGeo, leftCubMat)
leftCube.position.set(-7, 7, 0)
// scene.add(leftCube)

// left side
const leftBackCubGeo = new THREE.BoxGeometry(1, 1);
const leftBackCubMat = new THREE.MeshBasicMaterial({color: "blue"})
const leftBackCube = new THREE.Mesh(leftBackCubGeo, leftBackCubMat)
leftBackCube.position.set(-7, -6, 0)
// scene.add(leftBackCube)

// right side
const rightCubGeo = new THREE.BoxGeometry(1, 1);
const rightCubMat = new THREE.MeshBasicMaterial({color: "blue"})
const rightCube = new THREE.Mesh(rightCubGeo, rightCubMat)
rightCube.position.set(7, 7, 1)
// scene.add(rightCube)

// right side
const rightBackCubGeo = new THREE.BoxGeometry(1, 1);
const rightBackCubMat = new THREE.MeshBasicMaterial({color: "blue"})
const rightBackCube = new THREE.Mesh(rightBackCubGeo, rightBackCubMat)
rightBackCube.position.set(7, -6, 0)
// scene.add(rightBackCube)


// create a group
const g1 = new THREE.Group();
g1.add(plane, cube, rightCube)
scene.add(g1)

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(width, height)

const element = document.getElementById("container")
element.appendChild(renderer.domElement)


function animate() {
    // plane.rotation.x += 0.01;
    // rightCube.rotation.y += 0.01;
    // g1.rotation.x += 0.01;
    requestAnimationFrame(animate);
    renderer.render(scene, camera)
}

animate();