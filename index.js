
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(locationCallback, locationErrorCallback, {maximumAge: 0, enableHighAccuracy: true, timeout: 2000});
} else {
    var x = document.getElementById("geolocation-error");
    x.innerHTML = "Oh, mist.. Da funktioniert was nicht. Probiers mal mit einem anderen Gerät..";
}

function locationErrorCallback(error) {
    console.log("ERROR :(");
    console.log(error);
    var x = document.getElementById("geolocation-error");
    x.innerHTML = "Oh, mist.. Da funktioniert was nicht. Probiers mal mit einem anderen Gerät..";
}

function locationCallback(position) {
    console.log(position);
    var x = document.getElementById("geolocation-error");
    x.innerHTML = position.coords.latitude;
}
