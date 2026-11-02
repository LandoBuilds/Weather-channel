# Lando Weather Channel

A 1990s Weather Channel-style station for the house. It rotates Cedar Park, Texas, Sarasota, Florida, and Asunción, Paraguay, with the blue-and-orange bumper, scanlines, a scrolling ticker, and smooth-jazz background music.

**Live site:** https://landobuilds.github.io/Weather-channel/

Cedar Park is the station that comes up first. Austin shows on the Cedar Park regional forecast and in the national travel-cities list. US cities use National Weather Service data directly in the browser. Asunción uses [Open-Meteo](https://open-meteo.com/), because NWS coverage stops at the US. Nothing here needs a server proxy.

## Add it to an iPhone or iPad Home Screen

1. Open https://landobuilds.github.io/Weather-channel/ in **Safari** (the system Safari, not another browser).
2. Tap the **Share** button, then **Add to Home Screen**.
3. The name should already read **Lando WX**. Tap **Add**.
4. Launch **Lando WX** from the Home Screen. It opens full screen on the kiosk.
5. Tap once when you see **TAP FOR MUSIC**. Safari will not start the music until you do. That tap is remembered by the kiosk page, so the music keeps playing when the city changes.

`?crt=false` turns the scanline overlay off. `?rotate=90` (or any number of seconds) changes how long each city stays up. The default is 4 minutes. `?music=false` leaves the music off. `?panel=false` hides the side panel. `?ads=false` skips the commercial breaks.

The right side of the screen stays up during the forecast and during commercials: the Paraguay trip, today's and tomorrow's schedule, and Cedar Park sun, moon, air quality, and UV. Open the schedule with a link that ends in `#k=` and the key you were given. The key stays on this device after that. The public page never includes a booking code, passenger name, or seat.

## AirPlay it to an Apple TV

1. Open the **Lando WX** Home Screen icon, or the same page in Safari.
2. Swipe down from the top-right corner to open **Control Center**.
3. Tap **Screen Mirroring** and choose the Apple TV.
4. Leave the iPhone or iPad awake (or use Guided Access) so the rotation keeps running. Tap **TAP FOR MUSIC** once if it has not started. The song keeps going across city changes, and Screen Mirroring carries that audio to the TV.

## Where to customize

| What | Where |
| --- | --- |
| Cities, ticker, trip times, and the commercial list | [`lando/lando-config.js`](lando/lando-config.js) |
| The Asunción screen | [`lando/asuncion.html`](lando/asuncion.html) |
| The bumper, CRT overlay, side panel, commercials, and rotation | [`lando/lando.html`](lando/lando.html) |
| Encrypted schedule | [`data/schedule.enc.json`](data/schedule.enc.json), built with [`scripts/encrypt-schedule.mjs`](scripts/encrypt-schedule.mjs) |
| Home Screen name and icon | [`lando/lando.webmanifest`](lando/lando.webmanifest), [`lando/lando-icon.png`](lando/lando-icon.png) |
| Music | `vendor/ws4kp/server/music/` |

More detail is in [`lando/README.md`](lando/README.md).

To use your own music, drop `.mp3` files in `vendor/ws4kp/server/music/` (the folder itself, not a subfolder) and rebuild. With no files there, the site plays the four royalty-free tracks WeatherStar 4000+ ships: Catch the Sun, Crisp day, Rolling Clouds, and Strong Breeze.

Austin is listed in the vendored travel-cities file (`vendor/ws4kp/datagenerators/output/travelcities.json`, grid EWX 156,91) and was already in the regional-cities file. Do not put Austin ahead of Cedar Park in `stations` if Cedar Park should stay the default.

## Build

The forecast UI is [WeatherStar 4000+](https://github.com/netbymatt/ws4kp) (Matt Walsh), vendored at commit `237c60d242f9d70e0ee9c1bab87f3119c4b3b729` (v8.2.2) under the MIT license in [`LICENSE`](LICENSE). This repo builds its static dist (`npm run build`, which runs the `buildDist` gulp task with `serverAvailable: false`) so the browser talks to NWS itself.

```bash
cd vendor/ws4kp
npm ci
npm run build
cd ../..
./scripts/assemble-site.sh
```

`site/` is the Pages artifact. It is gitignored. To preview it the way GitHub Pages will, under the `/Weather-channel/` subpath:

```bash
mkdir -p /tmp/lando-preview
ln -sfn "$PWD/site" /tmp/lando-preview/Weather-channel
python3 -m http.server 8080 --directory /tmp/lando-preview
```

Then open http://127.0.0.1:8080/Weather-channel/

Pushing to `main` runs [`.github/workflows/pages.yml`](.github/workflows/pages.yml), which builds this same site and deploys it with `actions/configure-pages`, `actions/upload-pages-artifact`, and `actions/deploy-pages`.

## Enable GitHub Pages (one time)

The workflow asks `actions/configure-pages` to enable Pages (`enablement: true`). The default `GITHUB_TOKEN` is not allowed to create a Pages site — that call needs `administration:write`, which GitHub will not grant to `GITHUB_TOKEN`. If the deploy job stops with “Get Pages site failed” or “Create Pages site failed,” do this once:

1. Open **https://github.com/LandoBuilds/Weather-channel/settings/pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Save if GitHub asks you to.
4. On the **Actions** tab, open the failed **Pages** run and choose **Re-run failed jobs**.

The site will then publish at https://landobuilds.github.io/Weather-channel/

If the Pages screen says the organization has disabled Pages, a repo admin has to allow GitHub Pages for this repository before that Source menu will stick.

## Credit and disclaimer

WeatherStar 4000+ is copyright 2020–2026 Matt Walsh and used under the MIT license. The WeatherSTAR 4000 is owned by The Weather Channel. This is an unofficial fan display and is not a substitute for National Weather Service warnings. See the upstream project for the full notes: https://github.com/netbymatt/ws4kp
