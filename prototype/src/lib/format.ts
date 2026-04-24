import { format, formatDistanceToNow } from 'date-fns'
import { he } from 'date-fns/locale'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const compactCurrencyFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
})

/** Format as ₪1,234.56 — shekel sign leads the number (Israeli UX convention). */
export function formatCurrency(value: number, compact = false): string {
  const formatter = compact ? compactCurrencyFormatter : currencyFormatter
  return `₪${formatter.format(value)}`
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('he-IL').format(value)
}

export function formatPercent(value: number, signed = true): string {
  const sign = signed && value > 0 ? '+' : ''
  return `${sign}${value.toFixed(1)}%`
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return format(d, 'dd/MM/yyyy')
}

export function formatShortDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return format(d, 'dd/MM')
}

export function formatRelative(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return formatDistanceToNow(d, { addSuffix: true, locale: he })
}
