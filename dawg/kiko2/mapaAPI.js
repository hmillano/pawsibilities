function displayAddressOnMap(address) {
  fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`)
    .then(response => response.json())
    .then(data => {
      if (data.length < 1) return;
      const lat = data[0].lat;
      const lon = data[0].lon;

      const map = L.map('map').setView([lat, lon], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([lat, lon]).addTo(map)
        .bindPopup('The address is here!')
        .openPopup();

      const hardcodedLat1 = 46.052412;
      const hardcodedLon1 = 14.495886;
      addMarkerWithLabel(hardcodedLat1, hardcodedLon1, 'Tivoli', map);

      const hardcodedLat2 = 46.05044954313361;
      const hardcodedLon2 = 14.503009580364361;
      addMarkerWithLabel(hardcodedLat2, hardcodedLon2, 'Kongresni trg', map);

      const hardcodedLat3 = 46.04868851779243;
      const hardcodedLon3 = 14.508298896401362;
      addMarkerWithLabel(hardcodedLat3, hardcodedLon3, 'Ljubljanski grad', map);

      const hardcodedLat4 = 46.05567271932635;
      const hardcodedLon4 = 14.476648830865535;
      addMarkerWithLabel(hardcodedLat4, hardcodedLon4, 'Rožnik', map);

      const hardcodedLat5 = 46.06780734407591;
      const hardcodedLon5 = 14.47030808923009;
      addMarkerWithLabel(hardcodedLat5, hardcodedLon5, 'Košeski bajer', map);
      displayElement2AfterElement1('map', 'prasalnik');
      document.getElementById("qqq").style.opacity = 1;
    })
    .catch(error => {
      console.error('Error fetching location:', error);
    });
}

function displayAddress() {
  let adresa = document.getElementById("adresa").value;
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
    className: 'text-below-marker',
    html: customText,
    iconSize: null,
    iconAnchor: [15, 46]
  });

  L.marker([lat, lng], { icon: greenIcon }).addTo(map);
  L.marker([lat, lng], { icon: label }).addTo(map);
}


function displayElement2AfterElement1(element1Id, element2Id) {
  var element1 = document.getElementById(element1Id);
  var element2 = document.getElementById(element2Id);

  if (!element1 || !element2) {
    console.error('Unable to find one or more elements with the provided IDs.');
    return;
  }

  element2.style.display = 'none';

  element1.addEventListener('transitionend', function displayElement2() {
    element1.removeEventListener('transitionend', displayElement2);

    element2.style.display = 'block';
  });

  element1.style.opacity = 1;
  element2.style.opacity = 2;
}
