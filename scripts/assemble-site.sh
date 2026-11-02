#!/usr/bin/env bash
# Lay the static WeatherStar dist under the Lando kiosk so GitHub Pages
# (and a local /Weather-channel/ preview) open on the rotation.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT/vendor/ws4kp/dist"
OUT="$ROOT/site"

if [[ ! -f "$DIST/index.html" ]]; then
  echo "Missing $DIST/index.html — run 'npm run build' in vendor/ws4kp first." >&2
  exit 1
fi

rm -rf "$OUT"
mkdir -p "$OUT"
cp -a "$DIST/." "$OUT/"
mv "$OUT/index.html" "$OUT/ws4kp.html"

cp "$ROOT/lando/lando.html" "$OUT/index.html"
cp "$ROOT/lando/lando.html" "$OUT/lando.html"
cp "$ROOT/lando/lando-config.js" "$OUT/lando-config.js"
cp "$ROOT/lando/channels.js" "$OUT/channels.js"
cp "$ROOT/lando/lando.css" "$OUT/lando.css"
cp "$ROOT/lando/asuncion.html" "$OUT/asuncion.html"
cp "$ROOT/lando/lando.webmanifest" "$OUT/lando.webmanifest"
cp "$ROOT/lando/lando-icon.png" "$OUT/lando-icon.png"
cp "$ROOT/vendor/ws4kp/LICENSE" "$OUT/LICENSE"

python3 - "$OUT" << 'PY'
import json, sys
from pathlib import Path
out = Path(sys.argv[1])
manifest = json.loads((out / "lando.webmanifest").read_text())
start = manifest.get("start_url", "")
icon = manifest["icons"][0]["src"]
if start.startswith("/") or icon.startswith("/") or "://" in start or "://" in icon:
    raise SystemExit(f"Manifest paths must stay relative for the /Weather-channel/ subpath: {manifest}")
kiosk = (out / "index.html").read_text()
if "ws4kp.html" not in kiosk:
    raise SystemExit("Kiosk does not load ws4kp.html")
if "src=\"index.html" in kiosk or "src='index.html" in kiosk:
    raise SystemExit("Kiosk still points the iframe at index.html")
for rel in ("fonts/Star4000.woff", "fonts/Star4000 Large.woff", "playlist.json", "music/default"):
    if not (out / rel).exists():
        raise SystemExit(f"Missing {rel} in the assembled site")
print("Assembled", out)
PY
