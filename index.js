let map;

async function initMap() {
  // The location of Life Sciences Institute
  const position = { lat: 49.26258, lng: -123.24457};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const {PinElement} = await google.maps.importLibrary("marker");

const infoWindow = new google.maps.InfoWindow({
  content: "<div><strong> H-Mart Express </strong><br>The University of British Columbia, University Blvd #103, Vancouver, BC V6T 1K6</div>"
});

const infoWindow2 = new google.maps.InfoWindow({
  content: "<div><strong> Foodhub Market </strong><br>2260 West Mall, Vancouver, BC V6T 1W9</div>"
});

const infoWindow3 = new google.maps.InfoWindow({
  content: "<div><strong> SUMS's Grocery Checkout </strong><br>6133 University Blvd, Vancouver, BC V6T 1Z1</div>"
});

const infoWindow4 = new google.maps.InfoWindow({
  content: "<div><strong> Current Location: Life Sciences Building </strong><br>2350 Health Sciences Mall, Vancouver, BC V6T 1Z3</div>"
});

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 14,
    center: position,
    mapId: "e62a12afc88ab857",
  });

  // The markers, positioned around UBC
  const marker = new AdvancedMarkerElement({
    map: map,
    position: { lat: 49.26710, lng: -123.24304 },
    title: "H-Mart Express",
  });

    const marker2 = new AdvancedMarkerElement({
      map: map,
      position: { lat: 49.26240, lng: -123.25317 },
      title: "Foodhub Market",
    });

        const marker3 = new AdvancedMarkerElement({
          map: map,
          position: { lat: 49.26644, lng: -123.24922 },
          title: "SUMS's Grocery Checkout ",
        });


const marker4 = new google.maps.Marker({
  map: map,
  position: { lat: 49.26254, lng: -123.24454 },
  title: "Current Location",
  icon: {
    url: 'https://www.pngkit.com/png/full/129-1294869_pin-location-map-icon-navigation-symbol-ma-google.png', // URL of the custom colored marker icon
  scaledSize: new google.maps.Size(28, 48)}
});

// Add a click listener to the marker
marker.addListener('click', function() {
  infoWindow.open(map, marker);
});

// Add a click listener to the marker
marker2.addListener('click', function() {
  infoWindow2.open(map, marker2);
});

// Add a click listener to the marker
marker3.addListener('click', function() {
  infoWindow3.open(map, marker3);
});

// Add a click listener to the marker
marker4.addListener('click', function() {
  infoWindow4.open(map, marker4);
});



}

initMap();