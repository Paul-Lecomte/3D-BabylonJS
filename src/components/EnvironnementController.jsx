// EnvironmentController.jsx
import React, {useContext, useEffect} from 'react';
import { MeshBuilder, HemisphericLight, Vector3 } from '@babylonjs/core';
import { GameObjectContext } from '../contexts/GameObjectContext';

export const EnvironmentController = () => {
    const {scene} = useContext(GameObjectContext);
    useEffect(() => {
        const ground = MeshBuilder.CreateGround("ground", {width : 100, height : 100}, scene);
    }, [scene]);
    return null;
}