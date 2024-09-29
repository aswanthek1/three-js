import * as THREE from "three";


const scene = new THREE.Scene();


const width = window.innerWidth;
const height = window.innerHeight;
const viewAngle = 75;
const nearCliping = 0.1;
const farCliping = 9999;


const camera = new THREE.PerspectiveCamera(viewAngle, width / height, nearCliping, farCliping);
camera.position.set(0, 0, 10);

const cubes = [
    {
        color: "gray",
        position: {
            x: -3,
            y: 3,
            z: 0
        }
    },
    {
        color: "blue",
        position: {
            x: 0,
            y: 3,
            z: 0
        }
    },
    {
        color: "green",
        position: {
            x: 3,
            y: 3,
            z: 0
        }
    },
    {
        color: "yellow",
        position: {
            x: -3,
            y: 0,
            z: 0
        }
    },
    {
        color: "aqua",
        position: {
            x: 0,
            y: 0,
            z: 0
        }
    },
    {
        color: "white",
        position: {
            x: 3,
            y: 0,
            z: 0
        }
    },
    {
        color: "red",
        position: {
            x: -3,
            y: -3,
            z: 0
        }
    }
]


const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(width, height)

const element = document.getElementById("container")
element.appendChild(renderer.domElement)

for (let obj of cubes) {
    console.log(obj)
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    // MeshBasicMaterial >> Material for CUBE
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: obj.color });
    // Mesh = Geometry + Material
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    cube.position.set(obj.position.x, obj.position.y, obj.position.z);
    // Add Mesh to the scene
    scene.add(cube)

    function animate() {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        requestAnimationFrame(animate);
        renderer.render(scene, camera)
    }

    animate();
}