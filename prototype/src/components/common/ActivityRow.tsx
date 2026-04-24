import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ActivityRowProps {
  icon: LucideIcon
  iconColor: string
  title: string
  meta?: string
  timestamp: string
  onClick?: () => void
}

export function ActivityRow({
  icon: Icon,
  iconColor,
  title,
  meta,
  timestamp,
  onClick,
}: ActivityRowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-right transition-colors hover:bg-slate-50"
    >
      <div
        className={cn(
          'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100',
          iconColor,
        )}
      >
        <Icon className="h-4 w-4" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-medium text-slate-800">
          {title}
        </div>
        {meta && (
          <div dir="ltr" className="num mt-0.5 text-start text-xs text-slate-500">
            {meta}
          </div>
        )}
      </div>

      <div className="shrink-0 text-xs text-slate-400">{timestamp}</div>
    </button>
  )
}
