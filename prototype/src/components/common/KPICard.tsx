import type { LucideIcon } from 'lucide-react'
import { TrendingDown, TrendingUp, ArrowLeft } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

type Variant = 'default' | 'warning' | 'danger' | 'neutral'

const VARIANT_STYLES: Record<
  Variant,
  { accentBar: string; valueColor: string }
> = {
  default: {
    accentBar: 'bg-milano-green',
    valueColor: 'text-slate-900',
  },
  warning: {
    accentBar: 'bg-status-warning',
    valueColor: 'text-slate-900',
  },
  danger: {
    accentBar: 'bg-status-danger',
    valueColor: 'text-slate-900',
  },
  neutral: {
    accentBar: 'bg-slate-300',
    valueColor: 'text-slate-900',
  },
}

interface KPICardProps {
  title: string
  value: string
  /** Signed percentage, e.g. +12.4 or -2.1. Use null for none. */
  change?: number | null
  changeLabel?: string
  /** Secondary metadata text below the value. */
  sub?: string
  /** Optional progress (0-100) — renders a thin bar under the value. */
  progress?: number
  progressTarget?: string
  /** Optional call-to-action link at the bottom. */
  actionLabel?: string
  onAction?: () => void
  /** Optional leading icon shown in the accent circle. */
  icon?: LucideIcon
  variant?: Variant
  /** If true, a positive change is styled as danger (for cost-style KPIs). */
  changePositiveIsBad?: boolean
}

export function KPICard({
  title,
  value,
  change = null,
  changeLabel,
  sub,
  progress,
  progressTarget,
  actionLabel,
  onAction,
  icon: Icon,
  variant = 'default',
  changePositiveIsBad = false,
}: KPICardProps) {
  const styles = VARIANT_STYLES[variant]

  const hasChange = typeof change === 'number'
  const isPositive = hasChange && change! > 0
  const isNegative = hasChange && change! < 0
  const isBadChange =
    (isPositive && changePositiveIsBad) || (isNegative && !changePositiveIsBad)
  const isGoodChange =
    (isPositive && !changePositiveIsBad) || (isNegative && changePositiveIsBad)

  const changeColor = !hasChange
    ? ''
    : isBadChange
      ? 'text-status-danger'
      : isGoodChange
        ? 'text-status-success'
        : 'text-slate-500'

  const ChangeIcon = !hasChange
    ? null
    : isPositive
      ? TrendingUp
      : isNegative
        ? TrendingDown
        : null

  return (
    <Card className="relative flex h-full flex-col overflow-hidden p-5">
      <div className={cn('absolute inset-y-0 start-0 w-1', styles.accentBar)} />

      <div className="flex items-start justify-between">
        <h3 className="text-[13px] font-medium text-slate-500">{title}</h3>
        {Icon && (
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500">
            <Icon className="h-4 w-4" />
          </div>
        )}
      </div>

      <div className="mt-3">
        <div
          dir="ltr"
          className={cn(
            'num text-[28px] font-bold leading-tight tracking-tight',
            styles.valueColor,
          )}
        >
          {value}
        </div>
      </div>

      {hasChange && (
        <div className={cn('mt-2 flex items-center gap-1.5 text-xs font-medium', changeColor)}>
          {ChangeIcon && <ChangeIcon className="h-3.5 w-3.5" />}
          <span dir="ltr" className="num">
            {change! > 0 ? '+' : ''}
            {change!.toFixed(1)}%
          </span>
          {changeLabel && (
            <span className="text-slate-500 font-normal">· {changeLabel}</span>
          )}
        </div>
      )}

      {sub && !hasChange && (
        <div className="mt-2 text-xs text-slate-500">{sub}</div>
      )}
      {sub && hasChange && (
        <div className="mt-1 text-xs text-slate-500">{sub}</div>
      )}

      {typeof progress === 'number' && (
        <div className="mt-3">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className={cn(
                'h-full rounded-full',
                progress > 100 ? 'bg-status-danger' : 'bg-milano-green',
              )}
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          {progressTarget && (
            <div className="mt-1 flex items-center justify-between text-[11px] text-slate-500">
              <span dir="ltr" className="num">
                {progress.toFixed(1)}%
              </span>
              <span>{progressTarget}</span>
            </div>
          )}
        </div>
      )}

      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-4 inline-flex items-center gap-1 self-start text-xs font-medium text-milano-green hover:underline"
        >
          {actionLabel}
          <ArrowLeft className="h-3 w-3" />
        </button>
      )}
    </Card>
  )
}
