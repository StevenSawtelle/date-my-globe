import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// import earthNoClouds from '../content/earth_no_clouds.jpg';
import earthNoClouds2 from '../content/earth_no_clouds_2.jpg';
import montenegro from '../content/montenegro3.png';
import south_sudan from '../content/south_sudan.png';
import east_timor from '../content/east_timor.png';
import cabo_verde from '../content/cabo_verde.png';
import {useSelector} from "react-redux";
import {selectEarthCurrentQuestion, selectHasFound} from "../store/earth/earth.selectors";

const imageMap = {
    "South Sudan": south_sudan,
    "Montenegro": montenegro,
    "Republic of Cabo Verde": cabo_verde,
    "\"East Timor\" or \"Timor-Leste\"": east_timor,
}

const delta = .03;

function Earth() {

    const { newName, oldName, date, cameraY, cameraX } = useSelector(selectEarthCurrentQuestion);
    const found = useSelector(selectHasFound);
    console.log(newName, oldName, date, cameraY, cameraX)

    const containerRef = useRef(null);

    useEffect(() => {
        // Set up Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 15;
        camera.position.y = 10;
        camera.position.x = -2;

        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        const controls = new OrbitControls( camera, renderer.domElement );
        //controls.update() must be called after any manual changes to the camera's transform
        // camera.position.set( 0, 20, 10 );
        controls.minDistance = 6;
        controls.maxDistance = 10;
        // controls.distance = 7;
        controls.update();

        if (containerRef.current) {
            containerRef.current.appendChild(renderer.domElement);
        }

        // Create Earth model
        const geometry = new THREE.SphereGeometry(5, 32, 32);
        geometry.clearGroups();
        geometry.addGroup( 0, Infinity, 0 );
        geometry.addGroup( 0, Infinity, 1 );
        const texture = new THREE.TextureLoader().load(earthNoClouds2);
        const texture2 = new THREE.TextureLoader().load(imageMap[newName]);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const material2 = new THREE.MeshBasicMaterial({ map: texture2, transparent: true, opacity: 1 });
        const earth = new THREE.Mesh(geometry, [material, material2]);
        scene.add(earth);
        earth.position.set(0,1,0);
        camera.lookAt(earth)

        function animate() {
            requestAnimationFrame(animate);

            if(!found) {
                const earthY = earth.rotation.y;
                if (!(earthY - delta <= cameraY && earthY + delta >= cameraY)) {
                    if (earthY > cameraY) {
                        earth.rotation.y -= delta;
                    } else if (earthY < cameraY) {
                        earth.rotation.y += delta;
                    }
                }
                const earthX = earth.rotation.x;
                if (!(earthX - delta <= cameraX && earthX + delta >= cameraX)) {
                    if (earthX > cameraX) {
                        earth.rotation.x -= delta;
                    } else if (earthX < cameraX) {
                        earth.rotation.x += delta;
                    }
                }
            }
            controls.update();
            if (containerRef.current) {
                renderer.render(scene, camera);
            }
        }
        animate();

        return () => {
            // window.removeEventListener('mousemove', onMouseMove);
            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, [newName, oldName, date, cameraY, cameraX ]);

    return <div ref={containerRef} />;
}

export default Earth;
