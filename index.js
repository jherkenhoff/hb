

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(locationCallback);
} else {
    var x = document.getElementById("geolocation-error");
    x.innerHTML = "Oh, mist.. Da funktioniert was nicht. Probiers mal mit einem anderen Gerät..";
}




function locationCallback(position) {
    console.log(position);
}
