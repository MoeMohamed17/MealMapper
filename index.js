let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 49.26495, lng: -123.24682 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 14,
    center: position,
    mapId: "e62a12afc88ab857",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: { lat: 49.26495, lng: -123.24682 },
    title: "Uluru",
  });
}

initMap();