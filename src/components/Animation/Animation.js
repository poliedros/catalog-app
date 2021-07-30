import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ReactDOM from "react-dom";
import { Canvas } from 'react-three-fiber';
import * as THREE from "three";

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

Animation.propTypes = {};

Animation.defaultProps = {};

export default function Animation() {
  /*useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://threejs.org/build/three.min.js";
    script1.type = "text/jsx";
    script1.async = true;
    const script2 = document.createElement("script");
    script2.src = "https://threejs.org/examples/js/loaders/GLTFLoader.js";
    const script3 = document.createElement("script");
    script3.src = "https://threejs.org/examples/js/controls/OrbitControls.js";
    const script = document.createElement("script");
    script.src = "./animation_script.js";
    script.type = "text/jsx";
    script.async = true;
    
    document.body.appendChild(script1);
    document.body.appendChild(script2);
    document.body.appendChild(script3);
    //document.body.appendChild(script);

    const container = document.getElementById('animation'); 
    container.appendChild(script);
    
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
      //document.body.removeChild(script);
      
      container.removeChild(script); 
    }
  }, []);

  return (<div id="animation">
    <div id="canvas"></div>
  </div>);*/
  var container;

  //componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    
    var renderer = new THREE.WebGLRenderer({ alpha: true, antialiase: true });
    renderer.setClearColor( 0x000000, 0 );

    renderer.setSize(window.innerWidth*0.3, window.innerHeight*0.3); //(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //container = document.getElementById( 'canvas' );
    //document.body.appendChild( container );
    //container.appendChild( renderer.domElement );
    
    //var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    //var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    //var cube = new THREE.Mesh( geometry, material );
    //scene.add( cube );
    camera.position.z = 3;
    camera.position.y = 1.5;
    camera.position.z = 5;

    var light = new THREE.DirectionalLight(0xefefff, 3);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);
    var light = new THREE.DirectionalLight(0xffefef, 3);
    light.position.set(-1, -1, -1).normalize();
    scene.add(light);

    window.addEventListener("resize", function() {
      let width = window.innerWidth;
      let height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    var loader = new GLTFLoader();
    var mixer;
    var model;
    loader.load(
      "https://poliedros.github.io/catalog-app/Samba.glb", function( gltf ) {

        //shadows and materials
        gltf.scene.traverse( function( node ) {
            if ( node instanceof THREE.Mesh ) { 
              node.castShadow = true; 
              node.material.side = THREE.DoubleSide;
            }
          }
        );

        model = gltf.scene;
        model.scale.set(0.025,0.025,0.025);
        scene.add(model);

        console.log(gltf.animations); //shows all animations imported into the dopesheet in blender

        mixer = new THREE.AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();

        document.body.addEventListener("click", kill);
        function kill() {
          /*
          //mixer.clipAction(gltf.animations[1]).stop();
          mixer.clipAction(gltf.animations[0]).play();
          setTimeout(function() {
            mixer.clipAction(gltf.animations[0]).stop();
            //mixer.clipAction(gltf.animations[1]).play();
          }, 1500);*/
        }
      }
    );

    console.log("Loader");
    console.log(loader);

    /*var animate = function () {
      requestAnimationFrame( animate );
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();*/

    var clock = new THREE.Clock();
    function render() {
      requestAnimationFrame(render);
      var delta = clock.getDelta();
      if (mixer != null) mixer.update(delta);
      if (model) model.rotation.y += 0.025;

      renderer.render(scene, camera);
    }

    render();

    // === THREE.JS EXAMPLE CODE END ===
  //}
  //render() {
    return (
      <div id="canvas" />
    )
  //}

}

//const rootElement = document.getElementById("root");
//ReactDOM.render(<Animation />, rootElement);