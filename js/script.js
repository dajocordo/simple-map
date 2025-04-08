// Initialize the map
let map = L.map('map').setView([51.505, -0.09], 13); // [latitude, longitude], zoom level

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Optional: Add a marker
L.marker([51.505, -0.09]).addTo(map)
    .bindPopup('A simple marker on the map.')
    .openPopup();