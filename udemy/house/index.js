import * as THREE from "three"
       
// Scene
var scene = new THREE.Scene(); 


// Camera
var width = window.innerWidth; // width of browser window
var height = window.innerHeight; // height of browser window
var viewAngle = 75; // view angle for Camera
var nearClipping = 0.1; // near view point of camera
var farClipping = 9999; // far view point of camera

var camera = new THREE.PerspectiveCamera(viewAngle, width / height, nearClipping, farClipping);
camera.position.set(0,5,15)

// Geometry + Material = Mesh 
// // PlaneGeometry >> PLANE 
const geometry = new THREE.PlaneGeometry( 10, 10 );
// MeshBasicMaterial >> Material for PLANE 
const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
// Mesh = Geometry + Material 
const plane = new THREE.Mesh( geometry, material );
// Add PLANE Mesh into scene     
plane.rotation.set(1.6,0,0)
// scene.add( plane );

const cubeGeo = new THREE.BoxGeometry(10,5,0.2);
const cubeMat = new THREE.MeshBasicMaterial({color:"red"})
const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat)
cubeMesh.position.set(0,2.5,-4)
// scene.add(cubeMesh)


const cubeGeo2 = new THREE.BoxGeometry(10,5,0.2);
const cubeMat2 = new THREE.MeshBasicMaterial({color:"blue"})
const cubeMesh2 = new THREE.Mesh(cubeGeo2, cubeMat2)
cubeMesh2.position.set(0,2.4,4)
// scene.add(cubeMesh2)


const cubeGeo3 = new THREE.BoxGeometry(10,8,0.2);
const cubeMat3 = new THREE.MeshBasicMaterial({color:"green"})
const cubeMesh3 = new THREE.Mesh(cubeGeo3, cubeMat3)
cubeMesh3.position.set(0,5,0) // (x,y,z)
// scene.add(cubeMesh3)
cubeMesh3.rotation.set(1.6,0,0)


const cubeGeo4 = new THREE.BoxGeometry(8,5,0.2);
const cubeMat4 = new THREE.MeshBasicMaterial({color:"blue"})
const cubeMesh4 = new THREE.Mesh(cubeGeo4, cubeMat4)
cubeMesh4.position.set(-5,2.4,0)
cubeMesh4.rotation.set(0,1.6,0)

// scene.add(cubeMesh4)

const g1 = new THREE.Group()
g1.add(plane, cubeMesh, cubeMesh2, cubeMesh3,cubeMesh4)
scene.add(g1)

// Renderer
var renderer = new THREE.WebGLRenderer({antialias : true});
renderer.setSize(width, height);

// JS to get elements
var element = document.getElementById("container")
// JS to append domElement into our HTML 
element.appendChild(renderer.domElement);




function animate() {
    g1.rotation.y += 0.01 
    // cubeMesh2.rotation.x +=0.01
    // plane.rotation.x += 0.01
    requestAnimationFrame(animate); // this method calls `animate` frame again & again
    renderer.render(scene, camera);
}

animate();