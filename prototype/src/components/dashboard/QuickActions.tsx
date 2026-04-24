import type { LucideIcon } from 'lucide-react'
import { Upload, FileText, BookOpen, CalendarCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Action {
  key: string
  label: string
  icon: LucideIcon
  variant: 'primary' | 'secondary' | 'outline'
  onClick?: () => void
}

const ACTIONS: Action[] = [
  {
    key: 'upload',
    label: 'העלה חשבונית',
    icon: Upload,
    variant: 'primary',
    onClick: () => console.log('upload invoice'),
  },
  {
    key: 'report',
    label: 'דוח עלויות',
    icon: FileText,
    variant: 'secondary',
    onClick: () => console.log('costs report'),
  },
  {
    key: 'recipe',
    label: 'מתכון חדש',
    icon: BookOpen,
    variant: 'secondary',
    onClick: () => console.log('new recipe'),
  },
  {
    key: 'month-close',
    label: 'סגירת חודש',
    icon: CalendarCheck,
    variant: 'outline',
    onClick: () => console.log('month close'),
  },
]

const VARIANT_CLASS: Record<Action['variant'], string> = {
  primary:
    'bg-milano-green text-white hover:bg-milano-green/90 border-transparent',
  secondary:
    'bg-white text-slate-800 hover:bg-slate-50 border-slate-200 shadow-card',
  outline:
    'bg-transparent text-slate-700 hover:bg-slate-50 border-slate-200 border-dashed',
}

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {ACTIONS.map(({ key, label, icon: Icon, variant, onClick }) => (
        <button
          key={key}
          type="button"
          onClick={onClick}
          className={cn(
            'flex items-center justify-start gap-3 rounded-xl border px-4 py-3.5 text-sm font-medium transition-colors',
            VARIANT_CLASS[variant],
          )}
        >
          <span
            className={cn(
              'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
              variant === 'primary' ? 'bg-white/15' : 'bg-slate-100',
            )}
          >
            <Icon className="h-4 w-4" />
          </span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  )
}
