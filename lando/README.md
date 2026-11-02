# Lando's Weather Lounge — where to customize

These files are copied onto the built forecast site by `scripts/assemble-site.sh`. The published root is the kiosk (`index.html`, same file as `lando.html`). The forecast page itself is `ws4kp.html`, which the kiosk loads in an iframe. That forecast display is WeatherStar 4000+ by Matt Walsh.

- Cities, rotation time, ticker, trip, callsigns, and display flags: `lando/lando-config.js`
- Channel lineups (cartoons, Saturday morning, commercials, music videos): `lando/channels.js`
- Asuncion screen (Open-Meteo, °F): `lando/asuncion.html`
- Bumper, CRT overlay, scrolling side panel, flight tracker, rotation, and music: `lando/lando.html`
  - `?crt=false` turns the overlay off
  - `?rotate=SECONDS` changes how long each city stays on screen
  - `?music=false` disables the kiosk music
  - `?panel=false` hides the side panel
  - `?scroll=false` stops the panel from auto-scrolling
  - `?ads=false` skips commercial breaks. `?ads=now` starts one after a few seconds (for testing)
  - `?tracker=false` hides the flight map. `?now=<ISO>` freezes the clock for testing a leg in the air
  - `?ch=25` opens that channel (8 weather, 25 cartoons, 30 Saturday morning, 40 commercials, 52 music videos). The last channel is remembered in the browser.
  - Music is a single `<audio>` on this page, fed by `playlist.json`. It pauses during a commercial and resumes after. The forecast page's own player stays off (`mediaPlaying=false`).
- Home Screen name and icon: `lando/lando.webmanifest` and `lando/lando-icon.png`
- Music: put `.mp3` files directly in `vendor/ws4kp/server/music/` (not in a subfolder) and rebuild. If that folder has no mp3s, the four royalty-free tracks in `server/music/default/` are used.
- Austin is a travel city in `vendor/ws4kp/datagenerators/output/travelcities.json` and a regional city in `regionalcities.json`. Cedar Park stays the first station in the rotation.

Paths are relative so the site works at `https://landobuilds.github.io/Weather-channel/`.
