function changeCamera(){
    const sceneEl = document.querySelector('a-scene');
    const arSystem = sceneEl.systems["mindar-face-system"];
    
    arSystem.switchCamera(); // switch between front/back cameras
}

