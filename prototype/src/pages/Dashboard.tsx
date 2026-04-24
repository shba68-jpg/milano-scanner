import { EmptyState } from '@/components/common/EmptyState'
import { LayoutDashboard } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">דשבורד</h2>
        <p className="text-sm text-slate-500">תמונת מצב תפעולית וכספית</p>
      </div>
      <EmptyState
        icon={LayoutDashboard}
        title="העמוד בבנייה"
        description="Dashboard עם KPIs, פעילות אחרונה, פעולות מהירות וגרפים יגיע בשלב הבא."
      />
    </div>
  )
}
