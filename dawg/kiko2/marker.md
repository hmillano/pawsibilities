First, let's create a new function called `addMarkerWithLabel` that takes three parameters: `lat`, `lng`, and `customText`.

Then, add a marker with the green icon at the given location, and finally, add a permanent label below the marker using the `L.divIcon` feature from Leaflet.

Here is the modified code:

```
function addMarkerWithLabel(lat, lng, customText) {
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

Now, you can call this function with the desired latitude, longitude, and custom text to display a marker with a permanent label:

```
addMarkerWithLabel(51.505, -0.09, 'Custom Text');
```

Don't forget to add some CSS style for the `.custom-label` class to position the label correctly.

```
<style>
  .custom-label {
    display: block;
    text-align: center;
    position: relative;
    top: -15px;
  }
</style>
```
