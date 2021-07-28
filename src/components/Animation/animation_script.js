var container;
console.log("ANIMATION");
//===================================================== canvas
  var renderer = new THREE.WebGLRenderer({ alpha: true, antialiase: true });
  renderer.setSize(300, 300); //(window.innerWidth, window.innerHeight);
  //document.body.appendChild(renderer.domElement);

  container = document.getElementById( 'canvas' );
  //document.body.appendChild( container );
  container.appendChild( renderer.domElement );

  //===================================================== scene
  var scene = new THREE.Scene();

  //===================================================== camera
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 3;
  camera.position.y = 1.5;

  //===================================================== lights
  var light = new THREE.DirectionalLight(0xefefff, 3);
  light.position.set(1, 1, 1).normalize();
  scene.add(light);
  var light = new THREE.DirectionalLight(0xffefef, 3);
  light.position.set(-1, -1, -1).normalize();
  scene.add(light);

  //===================================================== resize
  window.addEventListener("resize", function() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });


  //===================================================== model
  var loader = new THREE.GLTFLoader();
  var mixer;
  var model;
  loader.load(
    "Samba Dancing.fbx", function(gltf) {

      //shadows and materials
       gltf.scene.traverse( function( node ) {
          if ( node instanceof THREE.Mesh ) { 
            node.castShadow = true; 
            node.material.side = THREE.DoubleSide;
          }
        });


      model = gltf.scene;
      model.scale.set(.35,.35,.35);
      scene.add(model);

      console.log(gltf.animations); //shows all animations imported into the dopesheet in blender

      mixer = new THREE.AnimationMixer(model);
      mixer.clipAction(gltf.animations[1]).play();

      document.body.addEventListener("click", kill);
      function kill() {
        mixer.clipAction(gltf.animations[1]).stop();
        mixer.clipAction(gltf.animations[0]).play();
        setTimeout(function() {
          mixer.clipAction(gltf.animations[0]).stop();
          mixer.clipAction(gltf.animations[1]).play();
        }, 1500);
      }


  });


//===================================================== animate
var clock = new THREE.Clock();
function render() {
  requestAnimationFrame(render);
  var delta = clock.getDelta();
  if (mixer != null) mixer.update(delta);
  if (model) model.rotation.y += 0.025;

  renderer.render(scene, camera);
}

render();