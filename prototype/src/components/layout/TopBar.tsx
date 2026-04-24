import { useLocation } from 'react-router-dom'
import { Bell, ChevronDown, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

const TITLES: Record<string, string> = {
  '/': 'דשבורד',
  '/invoices': 'חשבוניות',
  '/pricelist': 'מחירון',
  '/recipes': 'מתכונים',
  '/suppliers': 'ספקים',
  '/month-close': 'סגירת חודש',
  '/settings': 'הגדרות',
}

export function TopBar() {
  const { pathname } = useLocation()
  const title = TITLES[pathname] ?? 'Milano OS'

  return (
    <header className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="flex items-center gap-3">
        <h1 className="text-base font-semibold text-slate-900">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative w-72">
          <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input
            placeholder="חיפוש גלובלי - ⌘K"
            className="ps-9 text-sm"
          />
        </div>

        <button
          type="button"
          className="relative flex h-9 w-9 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100"
          aria-label="התראות"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute top-2 end-2 h-1.5 w-1.5 rounded-full bg-status-danger" />
        </button>

        <button
          type="button"
          className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-slate-100"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-milano-green text-xs font-semibold text-white">
            שב
          </div>
          <span className="text-slate-700">שהר ברנע</span>
          <ChevronDown className="h-4 w-4 text-slate-400" />
        </button>
      </div>
    </header>
  )
}
