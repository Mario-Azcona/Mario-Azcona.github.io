// detect click event
const playButton = document.querySelector('#playButton');
const pauseButton = document.querySelector('#pauseButton');

playButton.addEventListener("click", event => {
    playButton.setAttribute("visible",false);

    pauseButton.setAttribute("visible",true);

});

pauseButton.addEventListener("click", event => {
    pauseButton.setAttribute("visible",false);

    playButton.setAttribute("visible",true);

});