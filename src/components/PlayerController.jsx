// PlayerController.jsx
import React, { useEffect, useRef, useContext } from 'react';
import {
    MeshBuilder,
    TransformNode,
    Vector3,
    Scalar,
    StandardMaterial,
    Color3,
    Mesh as meshBuilder
} from '@babylonjs/core';
import { GameObjectContext } from '../contexts/GameObjectContext';
import { GRAVITY, PLAYER_SPEED, PLAYER_JUMP_FORCE, ROTATION_SPEED } from '../settings/const';

export const PlayerController = () => {
    const {scene} = useContext(GameObjectContext);

    useEffect(() => {

        const player = MeshBuilder.CreateSphere("player", {diameter: 2}, scene);
        player.position = new Vector3(0, 1, 0);

        //player material
        const playerMatetial = new StandardMaterial("playerMaterial", scene)
        playerMatetial.diffuseColor = new Color3(0, 0, 1);

        player.checkCollisions = true;

        const node = new TransformNode("playerNode", scene);
        node.parent = player;
        node.position.set(0, 0, 1);
        const square = MeshBuilder.CreateBox("square", {size: 0.5}, scene);
        square.parent = node

    }, [scene]);


    return null;
}