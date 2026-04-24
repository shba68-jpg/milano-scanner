import type { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface EmptyStateProps {
  icon?: LucideIcon
  title: string
  description?: string
  ctaLabel?: string
  onCta?: () => void
}

export function EmptyState({ icon: Icon, title, description, ctaLabel, onCta }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 bg-white p-10 text-center">
      {Icon && (
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-500">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <h3 className="mb-1 text-base font-semibold text-slate-800">{title}</h3>
      {description && (
        <p className="mb-4 max-w-sm text-sm text-slate-500">{description}</p>
      )}
      {ctaLabel && onCta && (
        <Button onClick={onCta} size="sm">
          {ctaLabel}
        </Button>
      )}
    </div>
  )
}
