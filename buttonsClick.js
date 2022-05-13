// detect click event
const playButton = document.querySelector('#playButton');
const pauseButton = document.querySelector('#pauseButton');

playButton.addEventListener("click", event => {
    playButton.setAttribute("class","");
    playButton.setAttribute("visible","false");

    pauseButton.setAttribute("class","clickable");
    pauseButton.setAttribute("visible","true");

});

pauseButton.addEventListener("click", event => {
    pauseButton.setAttribute("class","");
    pauseButton.setAttribute("visible","false");

    playButton.setAttribute("class","clickable");
    playButton.setAttribute("visible","true");

});