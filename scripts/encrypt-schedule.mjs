#!/usr/bin/env node
// Encrypt a schedule for the public Lando Weather Channel page.
//
//   node scripts/encrypt-schedule.mjs <plain.json> <base64url-key> > data/schedule.enc.json
//
// The key is 32 raw bytes, encoded base64url (no padding required).
// Output is AES-256-GCM, WebCrypto style: 12-byte IV, ciphertext with the
// 16-byte auth tag appended. Both iv and ct are standard base64.
// The key is never written into the output.

import { createCipheriv, randomBytes } from 'node:crypto';
import { readFileSync } from 'node:fs';

const [plainPath, keyB64] = process.argv.slice(2);
if (!plainPath || !keyB64) {
  console.error('usage: node scripts/encrypt-schedule.mjs <plain.json> <base64url-key>');
  process.exit(1);
}

const key = Buffer.from(keyB64, 'base64url');
if (key.length !== 32) {
  console.error(`key must be 32 bytes, got ${key.length}`);
  process.exit(1);
}

const plain = readFileSync(plainPath);
const iv = randomBytes(12);
const cipher = createCipheriv('aes-256-gcm', key, iv);
const ciphertext = Buffer.concat([cipher.update(plain), cipher.final()]);
const ct = Buffer.concat([ciphertext, cipher.getAuthTag()]);

process.stdout.write(JSON.stringify({
  v: 1,
  iv: iv.toString('base64'),
  ct: ct.toString('base64'),
}));
