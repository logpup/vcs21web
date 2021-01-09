$("document").ready(function(){
  var user = $(document).scrollTop();
  console.log(user);
  var doc = $(document).height();
  console.log(doc);
  var w = $(window).width();
  console.log(w + " window width");

  function resize() {
    var doc = $(document).height();
    var w = $(window).width();
    console.log(doc);
    $(window).scroll(function(){
      var user = $(document).scrollTop();
      console.log(user);
      $("#top-scroll").css({width: 5 + (user / doc) * 200 + "%"})
    })
  }
  

  window.onresize = resize;
  resize();
  
});

//Variables for setup

let container;
let camera;
let renderer;
let scene;
var raycaster, mouse = { x : 0, y : 0 };

function init() {

  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();
  scene.background = null;

  //Camera setup    
  const fov = 35;
  const aspect = container.clientWidth * 1.0/ container.clientHeight;
  const near = 0.1;
  const far = 1000;

  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 40);
 
      
    
  //Light setup
  const ambient = new THREE.AmbientLight(0xd3d3d3, 20);
  scene.add(ambient);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(50, 50, 100);
  scene.add(light);
    
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth * 1.0, container.clientHeight * 1.0);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor( 0xffffff, 0 );

  container.appendChild(renderer.domElement);

  //Load Models
  let loader = new THREE.GLTFLoader();

    loader.load("obj/cloudrainbow.gltf", function(gltf) {
    scene.add(gltf.scene);
    cloud = gltf.scene;
    animate();
    });       

}


function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cloud.rotation.z += 0.0003;
  cloud.rotation.y += 0.0009;
}

init();

function onWindowResize() {
  camera.aspect = container.clientWidth * 1.0/ container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth * 1.0, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);