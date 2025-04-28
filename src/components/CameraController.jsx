// CameraController.jsx
import {useContext, useEffect} from 'react';
import {FollowCamera, Vector3} from '@babylonjs/core';
import { GameObjectContext } from '../contexts/GameObjectContext';

export const CameraController = ({playerMesh}) => {
    const {scene, engine} = useContext(GameObjectContext);

    useEffect(() => {
        if (!scene || !playerMesh) return;
        const existingCamera = scene.getCameraByName("camera");
        if (existingCamera) {
            existingCamera.dispose();
        }

        const camera = new FollowCamera("main-camera", new Vector3(0,5,-20), scene);
        camera.radius = 10;
        camera.heightOffset = 5;
        camera.rotationOffset = 180;
        camera.cameraAcceleration = 0.5;
        camera.maxCameraSpeed = 0.1;

        camera.lockedTarget = playerMesh;
        scene.activeCamera = camera;
        camera.attachControl(engine.getRenderingCanvas(), true);
    }, [scene, playerMesh]);
}