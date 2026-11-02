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
  // Music plays on the kiosk page, not in the forecast iframe. mediaPlaying=false
  // keeps WeatherStar from starting a second player that iOS would silence on each rotation.
  common: "hazards=true&current-weather=true&latest-observations=true&hourly=false&hourly-graph=true&travel=true&regional-forecast=true&local-forecast=true&extended-forecast=true&almanac=true&spc-outlook=false&radar=true&future-radar=false&kiosk=true&units=us&scanLines=true&scanLineMode=auto&mediaPlaying=false&mediaVolume=0&customTextEnable=true&speed=1.00",

  // Cedar Park home strip. Pollen is not listed: the free Open-Meteo pollen feed is Europe-only.
  home: {
    name: "Cedar Park, TX",
    lat: 30.5052,
    lon: -97.8203,
    timezone: "America/Chicago",
  },
  asuncion: {
    lat: -25.2637,
    lon: -57.5759,
    timezone: "America/Asuncion",
  },

  // Scheduled times only. No booking code, passenger name, or seat — this site is public.
  // Return stays null until the flight is known; the panel shows RETURN: TBD.
  trip: {
    layover: "1h23m",
    outbound: [
      {
        flight: "CM 716",
        from: "AUS",
        depart: "2026-11-02T14:32:00-06:00",
        departZone: "America/Chicago",
        to: "PTY",
        arrive: "2026-11-02T20:00:00-05:00",
        arriveZone: "America/Panama",
      },
      {
        flight: "CM 291",
        from: "PTY",
        depart: "2026-11-02T21:23:00-05:00",
        departZone: "America/Panama",
        to: "ASU",
        arrive: "2026-11-03T05:25:00-03:00",
        arriveZone: "America/Asuncion",
      },
    ],
    returnTrip: {
      flight: null,
      from: null,
      depart: null,
      departZone: null,
      to: null,
      arrive: null,
      arriveZone: null,
    },
  },

  // A commercial break in the main area after every 3 city rotations.
  // Videos are YouTube embeds (youtube-nocookie.com). They are not downloaded.
  adsEvery: 3,
  commercials: [
    { id: "Ngru5J-bFCw", title: "Got Milk? Body Cast", year: 1995 },
    { id: "0Gkqzxss8Ss", title: "Got Milk? Alexander Hamilton", year: 1993 },
    { id: "JqgqgcE8Zck", title: "Mentos The Freshmaker", year: 1992 },
    { id: "BmkStuhnmRk", title: "Mentos Car Movers", year: 1993 },
    { id: "-n0Bupm8mkg", title: "Furby", year: 1998 },
    { id: "aKLW0kQ83qg", title: "Taco Bell Chihuahua", year: 1997 },
    { id: "O-5NIviSXV4", title: "Kool-Aid", year: 1991 },
    { id: "Up9jO2l2wqo", title: "Nintendo 64", year: 1996 },
    { id: "1uDQ8mTYUHQ", title: "Super Mario 64 Got Milk?", year: 1996 },
    { id: "oWyMk-2aH9E", title: "Super Mario World", year: 1991 },
    { id: "Apbq8w6hdyo", title: "Toys R Us Super Nintendo", year: 1992 },
    { id: "qzAo9HzOgtQ", title: "Pokemon Game Boy", year: 1998 },
    { id: "rJQhanz2CiE", title: "Fruit Gushers", year: 1995 },
    { id: "SnUBvULphfA", title: "Surge Feed the Rush", year: 1997 },
    { id: "8SzMe82v5Tw", title: "Skip-It", year: 1992 },
    { id: "xLRO7k-SGE8", title: "Fruity Pebbles Dick Tracy", year: 1990 },
    { id: "jPoM2o9kIBM", title: "Coca-Cola Polar Bears", year: 1993 },
    { id: "YtK-yq-BQDU", title: "Pepsi Cindy Crawford", year: 1992 },
    { id: "29M9QKrsq6A", title: "McDonald's Ronald and Hamburglar", year: 1994 },
    { id: "gcfjtpFGvQk", title: "Hot Wheels", year: 1990 },
    { id: "ePrAxox-sq0", title: "Talkboy", year: 1994 },
    { id: "Npi8rQexW5E", title: "Blockbuster Video", year: 1996 },
    { id: "JBQMsQ-zzEs", title: "Rice Krispies", year: 1993 },
    { id: "eW11JcekdZk", title: "Nerf Crossbow", year: 1995 },
    { id: "rX4PzvWgu6c", title: "Apple iMac", year: 1998 },
  ],
};
