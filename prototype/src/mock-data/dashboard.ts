import type { LucideIcon } from 'lucide-react'
import {
  CheckCircle2,
  TrendingUp,
  Mail,
  CalendarCheck,
  Clock,
  BookOpen,
  UserPlus,
  BarChart3,
} from 'lucide-react'

export interface ActivityItem {
  id: string
  icon: LucideIcon
  iconColor: string
  title: string
  meta?: string
  timestamp: string
}

export const recentActivity: ActivityItem[] = [
  {
    id: 'act-1',
    icon: CheckCircle2,
    iconColor: 'text-emerald-600',
    title: 'חשבונית אושרה · ד.י.ט.ב.',
    meta: '₪1,234.56',
    timestamp: 'לפני 15 דקות',
  },
  {
    id: 'act-2',
    icon: TrendingUp,
    iconColor: 'text-red-600',
    title: 'מחיר עגבנייה עלה 12%',
    meta: '₪8.50 → ₪9.52',
    timestamp: 'לפני שעה',
  },
  {
    id: 'act-3',
    icon: Mail,
    iconColor: 'text-blue-600',
    title: '3 חשבוניות חדשות · עלה עלה',
    timestamp: 'לפני שעתיים',
  },
  {
    id: 'act-4',
    icon: CalendarCheck,
    iconColor: 'text-blue-600',
    title: 'התחלת סגירת חודש אפריל',
    timestamp: 'היום בבוקר',
  },
  {
    id: 'act-5',
    icon: Clock,
    iconColor: 'text-amber-600',
    title: 'חשבונית 203784 ממתינה לאישור',
    meta: 'מר קייק',
    timestamp: 'אתמול',
  },
  {
    id: 'act-6',
    icon: BookOpen,
    iconColor: 'text-slate-600',
    title: 'מתכון טארט לימונצ׳לו עודכן',
    meta: 'עלות ₪12.45',
    timestamp: 'אתמול',
  },
  {
    id: 'act-7',
    icon: UserPlus,
    iconColor: 'text-emerald-600',
    title: 'ספק חדש נוסף · סוכרי הארץ',
    timestamp: 'לפני 2 ימים',
  },
  {
    id: 'act-8',
    icon: BarChart3,
    iconColor: 'text-slate-600',
    title: 'דוח שבועי זמין',
    meta: 'שבוע 16',
    timestamp: 'לפני 3 ימים',
  },
]

export interface MonthlyCost {
  month: string
  amount: number
}

export const monthlyCosts: MonthlyCost[] = [
  { month: 'נוב׳', amount: 245000 },
  { month: 'דצמ׳', amount: 267000 },
  { month: 'ינו׳', amount: 289000 },
  { month: 'פבר׳', amount: 312000 },
  { month: 'מרץ', amount: 298000 },
  { month: 'אפר׳', amount: 345000 },
]

export interface SupplierSpend {
  name: string
  amount: number
}

export const topSuppliersThisWeek: SupplierSpend[] = [
  { name: 'ריסטרטו יבוא', amount: 12961.3 },
  { name: 'ד.י.ט.ב. מזון', amount: 5285.25 },
  { name: 'מר קייק', amount: 4945.0 },
  { name: 'עלה עלה', amount: 3140.1 },
  { name: 'יקב ברקן', amount: 2180.0 },
]

export const dashboardKpis = {
  weekFoodCost: 34521.5,
  weekFoodCostChange: 12.4,
  weekFoodCostTargetPercent: 30,
  weekFoodCostActualPercent: 28.5,

  salesToday: 124000,
  salesTodayChange: -2.1,
  salesMonthDailyAvg: 127500,

  pendingInvoices: 7,
  priceAlerts: 3,
}
