var x = document.getElementById("coordinates");

var id, target, option;
var count = 0;
var latitude = null;
var longitude = null;

function success(pos) {
    var crd = pos.coords;

    latitude = crd.latitude;
    longitude = crd.longitude;
    //x.innerHTML = "Count: " + count + "<br>Latitude: " + crd.latitude +
    //    "<br>Longitude: " + crd.longitude;
};

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
    x.innerHTML = 'ERROR(' + err.code + '): ' + err.message;
};

target = {
    latitude: 0,
    longitude: 0,
}

options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
};

const watchId = navigator.geolocation.getCurrentPosition(success, error, options);