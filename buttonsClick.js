// detect click event
const infoButton = document.querySelector('#infoButton1');
const buyButton = document.querySelector('#buyButton1');
const playButton = document.querySelector('#playButton1');
const pauseButton = document.querySelector('#pauseButton1');

infoButton.addEventListener('click', function (evt) {

    infoText = document.querySelector('#infoFrame1');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }

});

buyButton.addEventListener('click', function (evt) {

    window.open("https://opensea.io/","_blank");

});

playButton.addEventListener('click', function (evt) {

    playButton.setAttribute("visible",false);
    playButton.className = "";

    pauseButton.setAttribute("visible",true);
    pauseButton.className = "clickable";

    document.querySelector("#frameImg1").setAttribute("visible",false);
    document.querySelector("#frameVideo1").setAttribute("visible",true);
    document.querySelector("#Shot1").play();

});

pauseButton.addEventListener('click', function (evt) {

    playButton.setAttribute("visible",true);
    playButton.className = "clickable";

    pauseButton.setAttribute("visible",false);
    pauseButton.className = "";
    
    document.querySelector("#frameImg1").setAttribute("visible",true);
    document.querySelector("#frameVideo1").setAttribute("visible",false);
    document.querySelector("#Shot1").pause();

});

