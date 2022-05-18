/*
function changeCamera(){
    console.log("chagne");
}
*/

const infoButton1 = document.querySelector('#infoButton1');
const buyButton1 = document.querySelector('#buyButton1');
const playButton1 = document.querySelector('#playButton1');
const pauseButton1 = document.querySelector('#pauseButton1');
infoButton1.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame1');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton1.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223828469007253505","_blank");
});
playButton1.addEventListener('click', function (evt) {
    playButton1.setAttribute("visible",false);
    playButton1.className = "";

    pauseButton1.setAttribute("visible",true);
    pauseButton1.className = "clickable";

    document.querySelector("#frameImg1").setAttribute("visible",false);
    document.querySelector("#frameVideo1").setAttribute("visible",true);
    document.querySelector("#Shot1").play();
});
pauseButton1.addEventListener('click', function (evt) {
    playButton1.setAttribute("visible",true);
    playButton1.className = "clickable";

    pauseButton1.setAttribute("visible",false);
    pauseButton1.className = "";
    
    document.querySelector("#frameImg1").setAttribute("visible",true);
    document.querySelector("#frameVideo1").setAttribute("visible",false);
    document.querySelector("#Shot1").pause();
});

const infoButton2 = document.querySelector('#infoButton2');
const buyButton2 = document.querySelector('#buyButton2');
const playButton2 = document.querySelector('#playButton2');
const pauseButton2 = document.querySelector('#pauseButton2');
infoButton2.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame2');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton2.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223829568518881281","_blank");
});
playButton2.addEventListener('click', function (evt) {
    playButton2.setAttribute("visible",false);
    playButton2.className = "";

    pauseButton2.setAttribute("visible",true);
    pauseButton2.className = "clickable";

    document.querySelector("#frameImg2").setAttribute("visible",false);
    document.querySelector("#frameVideo2").setAttribute("visible",true);
    document.querySelector("#Shot2").play();
});
pauseButton2.addEventListener('click', function (evt) {
    playButton2.setAttribute("visible",true);
    playButton2.className = "clickable";

    pauseButton2.setAttribute("visible",false);
    pauseButton2.className = "";
    
    document.querySelector("#frameImg2").setAttribute("visible",true);
    document.querySelector("#frameVideo2").setAttribute("visible",false);
    document.querySelector("#Shot2").pause();
});

const infoButton3 = document.querySelector('#infoButton3');
const buyButton3 = document.querySelector('#buyButton3');
const playButton3 = document.querySelector('#playButton3');
const pauseButton3 = document.querySelector('#pauseButton3');
infoButton3.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame3');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton3.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223830668030509057","_blank");
});
playButton3.addEventListener('click', function (evt) {
    playButton3.setAttribute("visible",false);
    playButton3.className = "";

    pauseButton3.setAttribute("visible",true);
    pauseButton3.className = "clickable";

    document.querySelector("#frameImg3").setAttribute("visible",false);
    document.querySelector("#frameVideo3").setAttribute("visible",true);
    document.querySelector("#Shot3").play();
});
pauseButton3.addEventListener('click', function (evt) {
    playButton3.setAttribute("visible",true);
    playButton3.className = "clickable";

    pauseButton3.setAttribute("visible",false);
    pauseButton3.className = "";
    
    document.querySelector("#frameImg3").setAttribute("visible",true);
    document.querySelector("#frameVideo3").setAttribute("visible",false);
    document.querySelector("#Shot3").pause();
});

const infoButton4 = document.querySelector('#infoButton4');
const buyButton4 = document.querySelector('#buyButton4');
const playButton4 = document.querySelector('#playButton4');
const pauseButton4 = document.querySelector('#pauseButton4');
infoButton4.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame4');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton4.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223831767542136833","_blank");
});
playButton4.addEventListener('click', function (evt) {
    playButton4.setAttribute("visible",false);
    playButton4.className = "";

    pauseButton4.setAttribute("visible",true);
    pauseButton4.className = "clickable";

    document.querySelector("#frameImg4").setAttribute("visible",false);
    document.querySelector("#frameVideo4").setAttribute("visible",true);
    document.querySelector("#Shot4").play();
});
pauseButton4.addEventListener('click', function (evt) {
    playButton4.setAttribute("visible",true);
    playButton4.className = "clickable";

    pauseButton4.setAttribute("visible",false);
    pauseButton4.className = "";
    
    document.querySelector("#frameImg4").setAttribute("visible",true);
    document.querySelector("#frameVideo4").setAttribute("visible",false);
    document.querySelector("#Shot4").pause();
});

const infoButton5 = document.querySelector('#infoButton5');
const buyButton5 = document.querySelector('#buyButton5');
const playButton5 = document.querySelector('#playButton5');
const pauseButton5 = document.querySelector('#pauseButton5');
infoButton5.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame5');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton5.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223832867053764609","_blank");
});
playButton5.addEventListener('click', function (evt) {
    playButton5.setAttribute("visible",false);
    playButton5.className = "";

    pauseButton5.setAttribute("visible",true);
    pauseButton5.className = "clickable";

    document.querySelector("#frameImg5").setAttribute("visible",false);
    document.querySelector("#frameVideo5").setAttribute("visible",true);
    document.querySelector("#Shot5").play();
});
pauseButton5.addEventListener('click', function (evt) {
    playButton5.setAttribute("visible",true);
    playButton5.className = "clickable";

    pauseButton5.setAttribute("visible",false);
    pauseButton5.className = "";
    
    document.querySelector("#frameImg5").setAttribute("visible",true);
    document.querySelector("#frameVideo5").setAttribute("visible",false);
    document.querySelector("#Shot5").pause();
});

const infoButton6 = document.querySelector('#infoButton6');
const buyButton6 = document.querySelector('#buyButton6');
const playButton6 = document.querySelector('#playButton6');
const pauseButton6 = document.querySelector('#pauseButton6');
infoButton6.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame6');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton6.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223833966565392385","_blank");
});
playButton6.addEventListener('click', function (evt) {
    playButton6.setAttribute("visible",false);
    playButton6.className = "";

    pauseButton6.setAttribute("visible",true);
    pauseButton6.className = "clickable";

    document.querySelector("#frameImg6").setAttribute("visible",false);
    document.querySelector("#frameVideo6").setAttribute("visible",true);
    document.querySelector("#Shot6").play();
});
pauseButton6.addEventListener('click', function (evt) {
    playButton6.setAttribute("visible",true);
    playButton6.className = "clickable";

    pauseButton6.setAttribute("visible",false);
    pauseButton6.className = "";
    
    document.querySelector("#frameImg6").setAttribute("visible",true);
    document.querySelector("#frameVideo6").setAttribute("visible",false);
    document.querySelector("#Shot6").pause();
});

const infoButton7 = document.querySelector('#infoButton7');
const buyButton7 = document.querySelector('#buyButton7');
const playButton7 = document.querySelector('#playButton7');
const pauseButton7 = document.querySelector('#pauseButton7');
infoButton7.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame7');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton7.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223835066077020161","_blank");
});
playButton7.addEventListener('click', function (evt) {
    playButton7.setAttribute("visible",false);
    playButton7.className = "";

    pauseButton7.setAttribute("visible",true);
    pauseButton7.className = "clickable";

    document.querySelector("#frameImg7").setAttribute("visible",false);
    document.querySelector("#frameVideo7").setAttribute("visible",true);
    document.querySelector("#Shot7").play();
});
pauseButton7.addEventListener('click', function (evt) {
    playButton7.setAttribute("visible",true);
    playButton7.className = "clickable";

    pauseButton7.setAttribute("visible",false);
    pauseButton7.className = "";
    
    document.querySelector("#frameImg7").setAttribute("visible",true);
    document.querySelector("#frameVideo7").setAttribute("visible",false);
    document.querySelector("#Shot7").pause();
});

const infoButton8 = document.querySelector('#infoButton8');
const buyButton8 = document.querySelector('#buyButton8');
const playButton8 = document.querySelector('#playButton8');
const pauseButton8 = document.querySelector('#pauseButton8');
infoButton8.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame8');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton8.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223836165588647937","_blank");
});
playButton8.addEventListener('click', function (evt) {
    playButton8.setAttribute("visible",false);
    playButton8.className = "";

    pauseButton8.setAttribute("visible",true);
    pauseButton8.className = "clickable";

    document.querySelector("#frameImg8").setAttribute("visible",false);
    document.querySelector("#frameVideo8").setAttribute("visible",true);
    document.querySelector("#Shot8").play();
});
pauseButton8.addEventListener('click', function (evt) {
    playButton8.setAttribute("visible",true);
    playButton8.className = "clickable";

    pauseButton8.setAttribute("visible",false);
    pauseButton8.className = "";
    
    document.querySelector("#frameImg8").setAttribute("visible",true);
    document.querySelector("#frameVideo8").setAttribute("visible",false);
    document.querySelector("#Shot8").pause();
});

const infoButton9 = document.querySelector('#infoButton9');
const buyButton9 = document.querySelector('#buyButton9');
const playButton9 = document.querySelector('#playButton9');
const pauseButton9 = document.querySelector('#pauseButton9');
infoButton9.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame9');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton9.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223837265100275713","_blank");
});
playButton9.addEventListener('click', function (evt) {
    playButton9.setAttribute("visible",false);
    playButton9.className = "";

    pauseButton9.setAttribute("visible",true);
    pauseButton9.className = "clickable";

    document.querySelector("#frameImg9").setAttribute("visible",false);
    document.querySelector("#frameVideo9").setAttribute("visible",true);
    document.querySelector("#Shot9").play();
});
pauseButton9.addEventListener('click', function (evt) {
    playButton9.setAttribute("visible",true);
    playButton9.className = "clickable";

    pauseButton9.setAttribute("visible",false);
    pauseButton9.className = "";
    
    document.querySelector("#frameImg9").setAttribute("visible",true);
    document.querySelector("#frameVideo9").setAttribute("visible",false);
    document.querySelector("#Shot9").pause();
});

const infoButton10 = document.querySelector('#infoButton10');
const buyButton10 = document.querySelector('#buyButton10');
const playButton10 = document.querySelector('#playButton10');
const pauseButton10 = document.querySelector('#pauseButton10');
infoButton10.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame10');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton10.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223848260216553473","_blank");
});
playButton10.addEventListener('click', function (evt) {
    playButton10.setAttribute("visible",false);
    playButton10.className = "";

    pauseButton10.setAttribute("visible",true);
    pauseButton10.className = "clickable";

    document.querySelector("#frameImg10").setAttribute("visible",false);
    document.querySelector("#frameVideo10").setAttribute("visible",true);
    document.querySelector("#Shot10").play();
});
pauseButton10.addEventListener('click', function (evt) {
    playButton10.setAttribute("visible",true);
    playButton10.className = "clickable";

    pauseButton10.setAttribute("visible",false);
    pauseButton10.className = "";
    
    document.querySelector("#frameImg10").setAttribute("visible",true);
    document.querySelector("#frameVideo10").setAttribute("visible",false);
    document.querySelector("#Shot10").pause();
});

const infoButton11 = document.querySelector('#infoButton11');
const buyButton11 = document.querySelector('#buyButton11');
const playButton11 = document.querySelector('#playButton11');
const pauseButton11 = document.querySelector('#pauseButton11');
infoButton11.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame11');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton11.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223838364611903489","_blank");
});
playButton11.addEventListener('click', function (evt) {
    playButton11.setAttribute("visible",false);
    playButton11.className = "";

    pauseButton11.setAttribute("visible",true);
    pauseButton11.className = "clickable";

    document.querySelector("#frameImg11").setAttribute("visible",false);
    document.querySelector("#frameVideo11").setAttribute("visible",true);
    document.querySelector("#Shot11").play();
});
pauseButton11.addEventListener('click', function (evt) {
    playButton11.setAttribute("visible",true);
    playButton11.className = "clickable";

    pauseButton11.setAttribute("visible",false);
    pauseButton11.className = "";
    
    document.querySelector("#frameImg11").setAttribute("visible",true);
    document.querySelector("#frameVideo11").setAttribute("visible",false);
    document.querySelector("#Shot11").pause();
});

const infoButton12 = document.querySelector('#infoButton12');
const buyButton12 = document.querySelector('#buyButton12');
const playButton12 = document.querySelector('#playButton12');
const pauseButton12 = document.querySelector('#pauseButton12');
infoButton12.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame12');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton12.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223839464123531265","_blank");
});
playButton12.addEventListener('click', function (evt) {
    playButton12.setAttribute("visible",false);
    playButton12.className = "";

    pauseButton12.setAttribute("visible",true);
    pauseButton12.className = "clickable";

    document.querySelector("#frameImg12").setAttribute("visible",false);
    document.querySelector("#frameVideo12").setAttribute("visible",true);
    document.querySelector("#Shot12").play();
});
pauseButton12.addEventListener('click', function (evt) {
    playButton12.setAttribute("visible",true);
    playButton12.className = "clickable";

    pauseButton12.setAttribute("visible",false);
    pauseButton12.className = "";
    
    document.querySelector("#frameImg12").setAttribute("visible",true);
    document.querySelector("#frameVideo12").setAttribute("visible",false);
    document.querySelector("#Shot12").pause();
});

const infoButton13 = document.querySelector('#infoButton13');
const buyButton13 = document.querySelector('#buyButton13');
const playButton13 = document.querySelector('#playButton13');
const pauseButton13 = document.querySelector('#pauseButton13');
infoButton13.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame13');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton13.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223841663146786817","_blank");
});
playButton13.addEventListener('click', function (evt) {
    playButton13.setAttribute("visible",false);
    playButton13.className = "";

    pauseButton13.setAttribute("visible",true);
    pauseButton13.className = "clickable";

    document.querySelector("#frameImg13").setAttribute("visible",false);
    document.querySelector("#frameVideo13").setAttribute("visible",true);
    document.querySelector("#Shot13").play();
});
pauseButton13.addEventListener('click', function (evt) {
    playButton13.setAttribute("visible",true);
    playButton13.className = "clickable";

    pauseButton13.setAttribute("visible",false);
    pauseButton13.className = "";
    
    document.querySelector("#frameImg13").setAttribute("visible",true);
    document.querySelector("#frameVideo13").setAttribute("visible",false);
    document.querySelector("#Shot13").pause();
});

const infoButton14 = document.querySelector('#infoButton14');
const buyButton14 = document.querySelector('#buyButton14');
const playButton14 = document.querySelector('#playButton14');
const pauseButton14 = document.querySelector('#pauseButton14');
infoButton14.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame14');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton14.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223842762658414593","_blank");
});
playButton14.addEventListener('click', function (evt) {
    playButton14.setAttribute("visible",false);
    playButton14.className = "";

    pauseButton14.setAttribute("visible",true);
    pauseButton14.className = "clickable";

    document.querySelector("#frameImg14").setAttribute("visible",false);
    document.querySelector("#frameVideo14").setAttribute("visible",true);
    document.querySelector("#Shot14").play();
});
pauseButton14.addEventListener('click', function (evt) {
    playButton14.setAttribute("visible",true);
    playButton14.className = "clickable";

    pauseButton14.setAttribute("visible",false);
    pauseButton14.className = "";
    
    document.querySelector("#frameImg14").setAttribute("visible",true);
    document.querySelector("#frameVideo14").setAttribute("visible",false);
    document.querySelector("#Shot14").pause();
});

const infoButton15 = document.querySelector('#infoButton15');
const buyButton15 = document.querySelector('#buyButton15');
const playButton15 = document.querySelector('#playButton15');
const pauseButton15 = document.querySelector('#pauseButton15');
infoButton15.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame15');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton15.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223843862170042369","_blank");
});
playButton15.addEventListener('click', function (evt) {
    playButton15.setAttribute("visible",false);
    playButton15.className = "";

    pauseButton15.setAttribute("visible",true);
    pauseButton15.className = "clickable";

    document.querySelector("#frameImg15").setAttribute("visible",false);
    document.querySelector("#frameVideo15").setAttribute("visible",true);
    document.querySelector("#Shot15").play();
});
pauseButton15.addEventListener('click', function (evt) {
    playButton15.setAttribute("visible",true);
    playButton15.className = "clickable";

    pauseButton15.setAttribute("visible",false);
    pauseButton15.className = "";
    
    document.querySelector("#frameImg15").setAttribute("visible",true);
    document.querySelector("#frameVideo15").setAttribute("visible",false);
    document.querySelector("#Shot15").pause();
});

const infoButton16 = document.querySelector('#infoButton16');
const buyButton16 = document.querySelector('#buyButton16');
const playButton16 = document.querySelector('#playButton16');
const pauseButton16 = document.querySelector('#pauseButton16');
infoButton16.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame16');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton16.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223844961681670145","_blank");
});
playButton16.addEventListener('click', function (evt) {
    playButton16.setAttribute("visible",false);
    playButton16.className = "";

    pauseButton16.setAttribute("visible",true);
    pauseButton16.className = "clickable";

    document.querySelector("#frameImg16").setAttribute("visible",false);
    document.querySelector("#frameVideo16").setAttribute("visible",true);
    document.querySelector("#Shot16").play();
});
pauseButton16.addEventListener('click', function (evt) {
    playButton16.setAttribute("visible",true);
    playButton16.className = "clickable";

    pauseButton16.setAttribute("visible",false);
    pauseButton16.className = "";
    
    document.querySelector("#frameImg16").setAttribute("visible",true);
    document.querySelector("#frameVideo16").setAttribute("visible",false);
    document.querySelector("#Shot16").pause();
});

const infoButton17 = document.querySelector('#infoButton17');
const buyButton17 = document.querySelector('#buyButton17');
const playButton17 = document.querySelector('#playButton17');
const pauseButton17 = document.querySelector('#pauseButton17');
infoButton17.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame17');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton17.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223846061193297921","_blank");
});
playButton17.addEventListener('click', function (evt) {
    playButton17.setAttribute("visible",false);
    playButton17.className = "";

    pauseButton17.setAttribute("visible",true);
    pauseButton17.className = "clickable";

    document.querySelector("#frameImg17").setAttribute("visible",false);
    document.querySelector("#frameVideo17").setAttribute("visible",true);
    document.querySelector("#Shot17").play();
});
pauseButton17.addEventListener('click', function (evt) {
    playButton17.setAttribute("visible",true);
    playButton17.className = "clickable";

    pauseButton17.setAttribute("visible",false);
    pauseButton17.className = "";
    
    document.querySelector("#frameImg17").setAttribute("visible",true);
    document.querySelector("#frameVideo17").setAttribute("visible",false);
    document.querySelector("#Shot17").pause();
});

const infoButton18 = document.querySelector('#infoButton18');
const buyButton18 = document.querySelector('#buyButton18');
const playButton18 = document.querySelector('#playButton18');
const pauseButton18 = document.querySelector('#pauseButton18');
infoButton18.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame18');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton18.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223840563635159041","_blank");
});
playButton18.addEventListener('click', function (evt) {
    playButton18.setAttribute("visible",false);
    playButton18.className = "";

    pauseButton18.setAttribute("visible",true);
    pauseButton18.className = "clickable";

    document.querySelector("#frameImg18").setAttribute("visible",false);
    document.querySelector("#frameVideo18").setAttribute("visible",true);
    document.querySelector("#Shot18").play();
});
pauseButton18.addEventListener('click', function (evt) {
    playButton18.setAttribute("visible",true);
    playButton18.className = "clickable";

    pauseButton.setAttribute("visible",false);
    pauseButton18.className = "";
    
    document.querySelector("#frameImg18").setAttribute("visible",true);
    document.querySelector("#frameVideo18").setAttribute("visible",false);
    document.querySelector("#Shot18").pause();
});

const infoButton19 = document.querySelector('#infoButton19');
const buyButton19 = document.querySelector('#buyButton19');
const playButton19 = document.querySelector('#playButton19');
const pauseButton19 = document.querySelector('#pauseButton19');
infoButton19.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame19');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton19.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223847160704925697","_blank");
});
playButton19.addEventListener('click', function (evt) {
    playButton19.setAttribute("visible",false);
    playButton19.className = "";

    pauseButton19.setAttribute("visible",true);
    pauseButton19.className = "clickable";

    document.querySelector("#frameImg19").setAttribute("visible",false);
    document.querySelector("#frameVideo19").setAttribute("visible",true);
    document.querySelector("#Shot19").play();
});
pauseButton19.addEventListener('click', function (evt) {
    playButton19.setAttribute("visible",true);
    playButton19.className = "clickable";

    pauseButton19.setAttribute("visible",false);
    pauseButton19.className = "";
    
    document.querySelector("#frameImg19").setAttribute("visible",true);
    document.querySelector("#frameVideo19").setAttribute("visible",false);
    document.querySelector("#Shot19").pause();
});

const infoButton20 = document.querySelector('#infoButton20');
const buyButton20 = document.querySelector('#buyButton20');
const playButton20 = document.querySelector('#playButton20');
const pauseButton20 = document.querySelector('#pauseButton20');
infoButton20.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame20');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton20.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223849359728181249","_blank");
});
playButton20.addEventListener('click', function (evt) {
    playButton20.setAttribute("visible",false);
    playButton20.className = "";

    pauseButton20.setAttribute("visible",true);
    pauseButton20.className = "clickable";

    document.querySelector("#frameImg20").setAttribute("visible",false);
    document.querySelector("#frameVideo20").setAttribute("visible",true);
    document.querySelector("#Shot20").play();
});
pauseButton20.addEventListener('click', function (evt) {
    playButton20.setAttribute("visible",true);
    playButton20.className = "clickable";

    pauseButton20.setAttribute("visible",false);
    pauseButton20.className = "";
    
    document.querySelector("#frameImg20").setAttribute("visible",true);
    document.querySelector("#frameVideo20").setAttribute("visible",false);
    document.querySelector("#Shot20").pause();
});

const infoButton21 = document.querySelector('#infoButton21');
const buyButton21 = document.querySelector('#buyButton21');
const playButton21 = document.querySelector('#playButton21');
const pauseButton21 = document.querySelector('#pauseButton21');
infoButton21.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame21');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton21.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223850459239809025","_blank");
});
playButton21.addEventListener('click', function (evt) {
    playButton21.setAttribute("visible",false);
    playButton21.className = "";

    pauseButton21.setAttribute("visible",true);
    pauseButton21.className = "clickable";

    document.querySelector("#frameImg21").setAttribute("visible",false);
    document.querySelector("#frameVideo21").setAttribute("visible",true);
    document.querySelector("#Shot21").play();
});
pauseButton21.addEventListener('click', function (evt) {
    playButton21.setAttribute("visible",true);
    playButton21.className = "clickable";

    pauseButton21.setAttribute("visible",false);
    pauseButton21.className = "";
    
    document.querySelector("#frameImg21").setAttribute("visible",true);
    document.querySelector("#frameVideo21").setAttribute("visible",false);
    document.querySelector("#Shot21").pause();
});

const infoButton22 = document.querySelector('#infoButton22');
const buyButton22 = document.querySelector('#buyButton22');
const playButton22 = document.querySelector('#playButton22');
const pauseButton22 = document.querySelector('#pauseButton22');
infoButton22.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame22');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton22.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223851558751436801","_blank");
});
playButton22.addEventListener('click', function (evt) {
    playButton22.setAttribute("visible",false);
    playButton22.className = "";

    pauseButton22.setAttribute("visible",true);
    pauseButton22.className = "clickable";

    document.querySelector("#frameImg22").setAttribute("visible",false);
    document.querySelector("#frameVideo22").setAttribute("visible",true);
    document.querySelector("#Shot22").play();
});
pauseButton22.addEventListener('click', function (evt) {
    playButton22.setAttribute("visible",true);
    playButton22.className = "clickable";

    pauseButton22.setAttribute("visible",false);
    pauseButton22.className = "";
    
    document.querySelector("#frameImg22").setAttribute("visible",true);
    document.querySelector("#frameVideo22").setAttribute("visible",false);
    document.querySelector("#Shot22").pause();
});

const infoButton23 = document.querySelector('#infoButton23');
const buyButton23 = document.querySelector('#buyButton23');
const playButton23 = document.querySelector('#playButton23');
const pauseButton23 = document.querySelector('#pauseButton23');
infoButton23.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame23');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton23.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223852658263064577","_blank");
});
playButton23.addEventListener('click', function (evt) {
    playButton23.setAttribute("visible",false);
    playButton23.className = "";

    pauseButton23.setAttribute("visible",true);
    pauseButton23.className = "clickable";

    document.querySelector("#frameImg23").setAttribute("visible",false);
    document.querySelector("#frameVideo23").setAttribute("visible",true);
    document.querySelector("#Shot23").play();
});
pauseButton23.addEventListener('click', function (evt) {
    playButton23.setAttribute("visible",true);
    playButton23.className = "clickable";

    pauseButton23.setAttribute("visible",false);
    pauseButton23.className = "";
    
    document.querySelector("#frameImg23").setAttribute("visible",true);
    document.querySelector("#frameVideo23").setAttribute("visible",false);
    document.querySelector("#Shot23").pause();
});

const infoButton24 = document.querySelector('#infoButton24');
const buyButton24 = document.querySelector('#buyButton24');
const playButton24 = document.querySelector('#playButton24');
const pauseButton24 = document.querySelector('#pauseButton24');
infoButton24.addEventListener('click', function (evt) {
    infoText = document.querySelector('#infoFrame24');

    if(infoText.getAttribute("visible") == true){
        infoText.setAttribute("visible",false);
    }else{
        infoText.setAttribute("visible",true);
    }
});
buyButton24.addEventListener('click', function (evt) {

    window.open("https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/11008098764250472881749386972867163286971159423479359307477223853757774692353","_blank");
});
playButton24.addEventListener('click', function (evt) {
    playButton24.setAttribute("visible",false);
    playButton24.className = "";

    pauseButton24.setAttribute("visible",true);
    pauseButton24.className = "clickable";

    document.querySelector("#frameImg24").setAttribute("visible",false);
    document.querySelector("#frameVideo24").setAttribute("visible",true);
    document.querySelector("#Shot24").play();
});
pauseButton24.addEventListener('click', function (evt) {
    playButton24.setAttribute("visible",true);
    playButton24.className = "clickable";

    pauseButton24.setAttribute("visible",false);
    pauseButton24.className = "";
    
    document.querySelector("#frameImg24").setAttribute("visible",true);
    document.querySelector("#frameVideo24").setAttribute("visible",false);
    document.querySelector("#Shot24").pause();
});