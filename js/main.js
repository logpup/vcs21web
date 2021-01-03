//Variables for setup

let container;
let camera;
let renderer;
let scene;

function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#fa9b9b');

  //Camera setup    
  const fov = 35;
  const aspect = container.clientWidth * 1.0/ container.clientHeight;
  const near = 0.1;
  const far = 1000;

  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 300);
  
  //GridVis
    
    const size = 10;
    const divisions = 10;
    const colorGrid = '#28d155';

    const gridHelper = new THREE.GridHelper( size, divisions, colorGrid );
    scene.add( gridHelper );
    grid = gridHelper;
    gridHelper.rotation.set(50, 250, 100);
 
      
    
  //Light setup
  const ambient = new THREE.AmbientLight(0x404040, 2);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(50, 50, 100);
  scene.add(light);
    
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth * 1.0, container.clientHeight * 1.0);
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);

  //Load Models
  let loader = new THREE.GLTFLoader();
    
  loader.load("obj/spiralwhite.gltf", function(gltf) {
    scene.add(gltf.scene);
    spiral = gltf.scene;
    animate();
  });
    
   loader.load("obj/fourobjects.gltf", function(gltf) {
    scene.add(gltf.scene);
    fourobj = gltf.scene;
    animate();
  });
          

}


function animate() {
  
    
  spiral.rotation.x += .001;
  spiral.rotation.y += .01;
  spiral.rotation.z += .001;
    
  fourobj.rotation.x += .001;
  fourobj.rotation.y += -.02;
  fourobj.rotation.z += .001;
  
     
    
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
    
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth * 1.0/ container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth * 1.0, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);
