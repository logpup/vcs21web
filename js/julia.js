$("document").ready(function(){
  var user = $(document).scrollTop();
  var doc = $(document).height();
  var w = $(window).width();
  var height;
  var portimH;
  var portslH;

  function resize() {
    // ScrollBar
    var doc = $(document).height();
    var w = $(window).width();
    $(window).scroll(function(){
      var user = $(document).scrollTop();
      $("#top-scroll").css({width: (user / doc) * 100 + "vw"})
    });
    // Image Resize like Flex: Info Card
    var ppH = $(".pp-side").height();
    var ssH = $(".state-side h4").height();
    height = ssH + 100;
    $(".intro").css({ height: height + "px" });
    if (w < 1000) {
      alert("hhh");
      w = $(window).width();
      height = ppH + ssH + 70;
      $(".intro").css({ height: height + "px" });

      $(".port-img").mouseover(function(){
        
        $(this).siblings().css("transform", "scaleX(0)");
      });
  
      $(".port-img").mouseout(function(){
        $(this).siblings().css("transform", "scaleX(0)");
      });
    }

    // Image Resize like Flex: Portfolio
    // var w = $(window).width();
    // portslH = $(".port-img").height();
    // portimH = portslH + 100;
    // $(".port-slot").css({ height: height + "vw" });
    
  }
  
  // Piece Description Hover
  $(".port-img").mouseover(function(){
      $(this).siblings().css("transform", "scaleX(1)");
      $(this).siblings().find(".desc-cont").css("z-index", "1");
  });

  $(".port-img").mouseout(function(){
      $(".desc-cont").css("transform", "scaleX(0)");
      $(".desc-cont").css("z-index", "1");
  });

  window.onresize = resize;
  resize();
  
});

//Variables for setup

let container;
let camera;
let renderer;
let scene;

function init() {
  container = document.querySelector(".scene");

  //Create scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color('#ffffff');


  //Camera setup    
  const fov = 35;
  const aspect = container.clientWidth * 1.0/ container.clientHeight;
  const near = 0.1;
  const far = 1000;

  camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 50);

    
  //Light setup
  const ambient = new THREE.AmbientLight(0xff6347, 3);
  scene.add(ambient);

    
  //Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth * 1.0, container.clientHeight * 1.0);
  
  renderer.setPixelRatio(window.devicePixelRatio);

  container.appendChild(renderer.domElement);


  //Load Models
  let loader = new THREE.GLTFLoader();
    
    loader.load("obj/cloudrainbow_prof.gltf", function(gltf) {
    scene.add(gltf.scene);
    cloud = gltf.scene;
    animate();    
    });

}


function animate() {
  cloud.rotation.z += 0.006;
  cloud.rotation.y += 0.007;

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
