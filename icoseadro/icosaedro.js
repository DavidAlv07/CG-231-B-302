var WIDTH = window.innerWidth;
        var HEIGHT = window.innerHeight;
        
        var scene = new THREE.Scene();
       
        //camara en vista perspectiva
        var camera = new THREE.PerspectiveCamera(100,WIDTH / HEIGHT,0.1,1000);
        camera.position.x=1;
        camera.position.y=2;
        camera.position.z =5;
        

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(WIDTH, HEIGHT);
        renderer.setClearColor(0xDDDDDD, 1);
        document.body.appendChild(renderer.domElement);


        //EJES y GRILLA
        var size = 150;
        var divisions = 160;
        var axesHelper = new THREE.AxesHelper(1000);
        var gridHelper = new THREE.GridHelper(size, divisions);
       

        var controls = new THREE.OrbitControls(camera, renderer.domElement);//ORBITCONTROLS


        //CREACION DEL CUBO 
        var phi = (1 + Math.sqrt(5)) / 2;
        var vertices = [  [-1, phi, 0],
        [1, phi, 0],
        [-1, -phi, 0],
        [1, -phi, 0],
        [0, -1, phi],
        [0, 1, phi],
        [0, -1, -phi],
        [0, 1, -phi],
        [phi, 0, -1],
        [phi, 0, 1],
        [-phi, 0, -1],
        [-phi, 0, 1]
      ];
      
      var indices = [  [0, 11, 5],
        [0, 5, 1],
        [0, 1, 7],
        [0, 7, 10],
        [0, 10, 11],
        [1, 5, 9],
        [5, 11, 4],
        [11, 10, 2],
        [10, 7, 6],
        [7, 1, 8],
        [3, 9, 4],
        [3, 4, 2],
        [3, 2, 6],
        [3, 6, 8],
        [3, 8, 9],
        [4, 9, 5],
        [2, 4, 11],
        [6, 2, 10],
        [8, 6, 7],
        [9, 8, 1]
      ];
      
      var geometry = new THREE.BufferGeometry();
      
      var verticesBuffer = new Float32Array(vertices.flat());
      var indicesBuffer = new Uint16Array(indices.flat());
      
      geometry.setAttribute('position', new THREE.BufferAttribute(verticesBuffer, 3));
      geometry.setIndex(new THREE.BufferAttribute(indicesBuffer, 1));
      
      var material = new THREE.MeshBasicMaterial({ color: 0x0000ff});
      var mesh = new THREE.Mesh(geometry, material);
      
      var scene = new THREE.Scene();
      scene.add(mesh);
      scene.add(gridHelper);
      scene.add(axesHelper);

      function animate() {
        requestAnimationFrame(animate);

        renderer.render(scene, camera);
      }
      
      animate();