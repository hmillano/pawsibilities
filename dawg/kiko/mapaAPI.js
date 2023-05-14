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
      })
      .catch(error => {
        console.error('Error fetching location:', error);
      });
}

function displayAddress() {
  let adresa = document.getElementById("adresa").value;
  displayAddressOnMap(adresa);
}


function displayElement2AfterElement1(element1Id, element2Id) {
  // Find the DOM elements by their IDs
  var element1 = document.getElementById(element1Id);
  var element2 = document.getElementById(element2Id);

  // Make sure we have all the elements
  if (!element1 || !element2) {
    console.error('Unable to find one or more elements with the provided IDs.');
    return;
  }

  // Set element2's display style to 'none' initially
  element2.style.display = 'none';

  // Add a function to run when element1's transition is finished
  element1.addEventListener('transitionend', function displayElement2() {
    // Remove the event listener since this is a one-time event
    element1.removeEventListener('transitionend', displayElement2);

    // Set element2's display style to 'block' or any other display style you like
    element2.style.display = 'block';
  });

  // Ensure that element1 becomes fully visible
  element1.style.opacity = 1;
  element2.style.opacity = 2;
}




