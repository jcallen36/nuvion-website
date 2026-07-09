#!/usr/bin/env node
/* One-shot image optimization for the redesign.
 * Converts the heavyweight PNGs in src/assets to right-sized WebP.
 * Originals stay untouched; components import the .webp versions.
 */
import sharp from 'sharp'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const jobs = [
  { in: 'src/assets/nuvion-logo.png', out: 'src/assets/nuvion-logo.webp', width: 600 },
  { in: 'src/assets/jaeden-callender.png', out: 'src/assets/jaeden-callender.webp', width: 800 },
  { in: 'src/assets/david-prudhomme.png', out: 'src/assets/david-prudhomme.webp', width: 800 },
]

for (const j of jobs) {
  const src = resolve(root, j.in)
  const dst = resolve(root, j.out)
  const { size } = await sharp(src).resize({ width: j.width }).webp({ quality: 82 }).toFile(dst)
  console.log(`${j.out} — ${(size / 1024).toFixed(0)} KB`)
}
