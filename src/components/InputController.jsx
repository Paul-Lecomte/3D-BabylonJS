import React, {useContext, useEffect, useState} from 'react';
import { Scalar } from '@babylonjs/core';
import { GameObjectContext } from '../contexts/GameObjectContext';

export const InputController = ({onInputUpdated}) => {
    const {scene} = useContext(GameObjectContext);
    const {keys, setKeys} = useState({})

    useEffect(() => {
        const handleKeyDown = (e) => {
            setKeys((prevKeys) => ({ ...prevKeys, [e.key]: true }));
        }

        const handleKeyUp = (e) => {
            setKeys((prevKeys) => ({ ...prevKeys, [e.key]: false }));
        }
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
            window.removeEventListener('keyup', handleKeyUp)
        }

    }, [])

    useEffect(() => {
        if(!scene) return;
        const processInput = () => {
            let horizontal = 0;
            if (keys['ArrowLeft'] || keys['w']) horizontal += 1;
            if (keys['ArrowRight'] || keys['s']) horizontal -= 1;

            let vertical = 0;
            if (keys['ArrowUp'] || keys['w']) vertical += 1;
            if (keys['ArrowDown'] || keys['s']) vertical -= 1;
        }

        const newInputValue = {
            horizontal,
            vertical,
        }

        if (onInputUpdated){
            onInputUpdated(newInputValue)
        }

        scene.registerBeforeRender(processInput)
        return () => {
            scene.unregisterBeforeRender(processInput)
        }
    }, [scene, keys])

    return null;
}