// JavaScript
var mapa = L.map('mapid').setView([20.3734975,-101.0626376  ], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(mapa);

L.marker([20.3734975,-101.0626376]).addTo(mapa)
    .bindPopup('Donas de Ley.')
    .openPopup();

