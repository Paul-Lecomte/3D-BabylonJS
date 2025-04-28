// PlayerController.jsx
import React, { useEffect, useRef, useContext } from 'react';
import {MeshBuilder, TransformNode, Vector3, Scalar, StandardMaterial, Color3} from '@babylonjs/core';
import { GameObjectContext } from '../contexts/GameObjectContext';
import { GRAVITY, PLAYER_SPEED, PLAYER_JUMP_FORCE, ROTATION_SPEED } from '../settings/const';

export const PlayerController = () => {
    const {scene} = useContext(GameObjectContext);

    useEffect(() => {

        const player = MeshBuilder.CreateSphere("player", {diameter: 1}, scene);
        player.position = new Vector3(0, 0, 0);

        //player material
        const playerMatetial = new StandardMaterial("playerMaterial", scene)
        playerMatetial.diffuseColor = new Color3(0, 0, 1);
    }, [scene]);


    return null;
}