// ==== LANDO WEATHER CHANNEL CONFIG — edit here ====
// Austin is not its own rotation stop. It shows up on the Cedar Park
// regional map and in the national travel-cities list (see vendor/ws4kp).
window.LANDO = {
  rotateSeconds: 240,          // time on each location before switching
  ticker: "Welcome to the Lando Weather Channel ... Local on the 8s ... Cedar Park * Austin * Sarasota * Asuncion ... Stay tuned for your local forecast ... Buen viaje, Landon!",
  // NWS (US) locations: ws4kp query params. Austin appears via regional/nearby lists + travel cities.
  stations: [
    { name: "Cedar Park, TX", query: "latLonQuery=Cedar+Park%2C+TX%2C+USA&latLon=%7B%22lat%22%3A30.5052%2C%22lon%22%3A-97.8203%7D" },
    { name: "Sarasota, FL",   query: "latLonQuery=Sarasota%2C+FL%2C+USA&latLon=%7B%22lat%22%3A27.3364%2C%22lon%22%3A-82.5307%7D" },
    { name: "Asuncion, PY",   page: "asuncion.html?lat=-25.2637&lon=-57.5759&name=ASUNCION" },
  ],
  common: "hazards=true&current-weather=true&latest-observations=true&hourly=false&hourly-graph=true&travel=true&regional-forecast=true&local-forecast=true&extended-forecast=true&almanac=true&spc-outlook=false&radar=true&future-radar=false&kiosk=true&units=us&scanLines=true&scanLineMode=auto&mediaPlaying=true&mediaVolume=0.75&customTextEnable=true&speed=1.00",
};
