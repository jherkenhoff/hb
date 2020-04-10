
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(locationCallback, locationErrorCallback, {maximumAge: 0, enableHighAccuracy: true, timeout: 10000});
} else {
    $('#error-alert').addClass('show');
}

function locationErrorCallback(error) {
    console.log("ERROR :(");
    console.log(error);
    $('#error-alert').addClass('show');
}

function locationCallback(position) {
    console.log("Moin");
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let head = position.coords.heading;
    let accuracy = position.coords.accuracy;

    let goalLat = 53.2761823525;
    let goalLon = 10.43903360;
    let distance = distanceInKmBetweenEarthCoordinates(lat, lon, goalLat, goalLon) * 1000;

    $("#distance").text("Noch " + distance.toFixed(1) + " m (±" + accuracy.toFixed(0) + " m)");
}

function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}

function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
  var earthRadiusKm = 6371;

  var dLat = degreesToRadians(lat2-lat1);
  var dLon = degreesToRadians(lon2-lon1);

  lat1 = degreesToRadians(lat1);
  lat2 = degreesToRadians(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return earthRadiusKm * c;
}

function angleFromCoordinate(lat1, long1, lat2, long2) {

    let dLon = degreesToRadians(long2 - long1);
    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);

    let y = Math.sin(dLon) * Math.cos(lat2);
    let x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);

    let brng = Math.atan2(y, x);

    brng = brng/2/Math.PI * 360
    brng = (brng + 360) % 360;
    brng = 360 - brng; // count degrees counter-clockwise - remove to make clockwise

    return brng;
}
