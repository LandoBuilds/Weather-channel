# Lando Weather Channel — where to customize

These files are copied onto the built WeatherStar site by `scripts/assemble-site.sh`. The published root is the kiosk (`index.html`, same file as `lando.html`). The WeatherStar page itself is `ws4kp.html`, which the kiosk loads in an iframe.

- Cities, rotation time, ticker text, and WeatherStar display flags: `lando/lando-config.js`
- Asuncion screen (Open-Meteo, °F): `lando/asuncion.html`
- Bumper, CRT overlay, rotation, and the music player: `lando/lando.html`
  - `?crt=false` turns the overlay off
  - `?rotate=SECONDS` changes how long each city stays on screen
  - `?music=false` disables the kiosk music
  - `?panel=false` hides the side panel
  - `?ads=false` skips commercial breaks. `?ads=now` starts one after a few seconds (for testing)
  - Music is a single `<audio>` on this page, fed by `playlist.json`. It pauses during a commercial and resumes after. WeatherStar's own player stays off (`mediaPlaying=false`).
- Paraguay trip times, the return-flight placeholder, and the YouTube commercial list: `lando/lando-config.js` (`trip`, `commercials`)
- Schedule: `data/schedule.enc.json` is AES-256-GCM. The device key arrives only as `#k=<base64url>` and is stored in localStorage as `landoWxKey`. Rebuild the file with `node scripts/encrypt-schedule.mjs plain.json <base64url-key>`. Do not commit the key.
- Home Screen name and icon: `lando/lando.webmanifest` and `lando/lando-icon.png`
- Music: put `.mp3` files directly in `vendor/ws4kp/server/music/` (not in a subfolder) and rebuild. If that folder has no mp3s, the four royalty-free tracks in `server/music/default/` are used.
- Austin is a travel city in `vendor/ws4kp/datagenerators/output/travelcities.json` and a regional city in `regionalcities.json`. Cedar Park stays the first station in the rotation.

Paths are relative so the site works at `https://landobuilds.github.io/Weather-channel/`.
