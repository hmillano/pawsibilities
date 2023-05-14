The issue is that the `map` variable is defined inside the `displayAddressOnMap` function, which makes it inaccessible inside the `addMarkerWithLabel` function. To fix this issue, you can pass the `map` object as a parameter to the `addMarkerWithLabel` function. Here's the fixed code:

```javascript
function displayAddressOnMap(address) {
  // Use OpenStreetMap API to get latitude and longitude for the address
  fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`)
    .then(response => response.json())
    .then(data => {
      if (data.length < 1) {
        alert('Address not found');
        return;
      }

      const lat = data[0].lat;
      const lon = data[0].lon;

      // Create a map and display it
      const map = L.map('map').setView([lat, lon], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Add a marker on the address location
      L.marker([lat, lon]).addTo(map)
        .bindPopup('The address is here!')
        .openPopup();

      // Add hardcoded coordinates
      const hardcodedLat = 46.052412;
      const hardcodedLon = 14.495886;
      addMarkerWithLabel(hardcodedLat, hardcodedLon, 'Proben test yoyo', map);
    })
    .catch(error => {
      console.error('Error fetching location:', error);
    });
}

function displayAddress() {
  let adresa = document.getElementById("adresa").value;
  console.log(adresa)
  displayAddressOnMap(adresa);
}

function addMarkerWithLabel(lat, lng, customText, map) {
  var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var label = L.divIcon({
    className: 'custom-label',
    html: customText,
    iconSize: null,
    iconAnchor: [15, 46]
  });

  L.marker([lat, lng], { icon: greenIcon }).addTo(map);
  L.marker([lat, lng], { icon: label }).addTo(map);
}
```

The main change is in the `displayAddressOnMap` function:

```javascript
addMarkerWithLabel(hardcodedLat, hardcodedLon, 'Proben test yoyo', map);
```

And in the `addMarkerWithLabel` function definition:

```javascript
function addMarkerWithLabel(lat, lng, customText, map) {
  // ...
}
```
