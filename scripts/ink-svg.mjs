#!/usr/bin/env node
/* Post-process Recraft SVGs into the brand's ink-on-paper treatment:
 * strips the full-canvas background path, maps blacks -> ink and
 * whites -> porcelain so the art reads as printed on the page.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const INK = '#141B19'
const PAPER = '#F4F2EC'
const root = resolve(import.meta.dirname, '..', 'src', 'assets', 'art')

for (const name of process.argv.slice(2)) {
  const file = resolve(root, name)
  let svg = readFileSync(file, 'utf8')
  // Drop the first full-canvas rect-path (background)
  svg = svg.replace(/<path d="M 0 0 L \d+ 0 L \d+ \d+ L 0 \d+ L 0 0 z"[^>]*><\/path>\s*/, '')
  // Map colors: blacks -> ink, whites/near-whites -> porcelain
  svg = svg.replace(/rgb\((\d+),(\d+),(\d+)\)/g, (m, r, g, b) => {
    const lum = (+r + +g + +b) / 3
    if (lum < 80) return INK
    if (lum > 215) return PAPER
    return m
  })
  writeFileSync(file, svg)
  console.log(`inked ${name} (${(svg.length / 1024).toFixed(1)} KB)`)
}
