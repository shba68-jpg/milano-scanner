import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

const OUT = resolve('screenshots')
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch()
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  locale: 'he-IL',
})
const page = await ctx.newPage()

await page.goto('http://localhost:5173/', { waitUntil: 'networkidle' })
await page.waitForTimeout(1200)

// 1. Above-the-fold (viewport)
await page.screenshot({
  path: `${OUT}/01-full-dashboard.png`,
  fullPage: false,
})

async function shoot(testId, filename) {
  const el = page.locator(`[data-testid="${testId}"]`)
  await el.waitFor({ state: 'visible', timeout: 5000 })
  await el.scrollIntoViewIfNeeded()
  await page.waitForTimeout(300)
  await el.screenshot({ path: `${OUT}/${filename}` })
}

await shoot('section-kpis', '03-kpi-cards.png')
await shoot('section-activity', '04-activity-feed.png')
await shoot('section-actions', '05-quick-actions.png')
await shoot('section-charts', '06-charts.png')

// 2. Scrolled viewport (shows charts in context)
await page.locator('main').evaluate((el) => {
  el.scrollTop = el.scrollHeight
})
await page.waitForTimeout(500)
await page.screenshot({
  path: `${OUT}/02-scrolled-bottom.png`,
  fullPage: false,
})

await browser.close()
console.log('✅ screenshots written to', OUT)
