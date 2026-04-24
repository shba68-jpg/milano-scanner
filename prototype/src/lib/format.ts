import { format, formatDistanceToNow } from 'date-fns'
import { he } from 'date-fns/locale'

const currencyFormatter = new Intl.NumberFormat('he-IL', {
  style: 'currency',
  currency: 'ILS',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})

const compactCurrencyFormatter = new Intl.NumberFormat('he-IL', {
  style: 'currency',
  currency: 'ILS',
  maximumFractionDigits: 0,
})

export function formatCurrency(value: number, compact = false): string {
  return (compact ? compactCurrencyFormatter : currencyFormatter).format(value)
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
