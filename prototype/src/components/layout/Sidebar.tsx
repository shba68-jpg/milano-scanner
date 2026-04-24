import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Inbox,
  Tag,
  BookOpen,
  Truck,
  CalendarCheck,
  Settings,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { to: '/', label: 'דשבורד', icon: LayoutDashboard, end: true },
  { to: '/invoices', label: 'חשבוניות', icon: Inbox },
  { to: '/pricelist', label: 'מחירון', icon: Tag },
  { to: '/recipes', label: 'מתכונים', icon: BookOpen },
  { to: '/suppliers', label: 'ספקים', icon: Truck },
  { to: '/month-close', label: 'סגירת חודש', icon: CalendarCheck },
]

export function Sidebar() {
  return (
    <aside className="flex h-full w-60 shrink-0 flex-col border-l border-slate-200 bg-white">
      <div className="flex h-14 items-center gap-2 px-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-milano-green text-sm font-bold text-white">
          P
        </div>
        <div className="leading-tight">
          <div className="text-sm font-bold text-slate-900">POMO</div>
          <div className="text-[11px] text-slate-500">Milano OS</div>
        </div>
      </div>

      <nav className="flex-1 space-y-0.5 px-3 py-4">
        {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-emerald-50 text-milano-green'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
              )
            }
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-slate-200 px-3 py-3">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            cn(
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
              isActive
                ? 'bg-slate-100 text-slate-900'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
            )
          }
        >
          <Settings className="h-4 w-4" />
          <span>הגדרות</span>
        </NavLink>
      </div>
    </aside>
  )
}
