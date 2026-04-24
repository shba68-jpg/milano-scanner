import { EmptyState } from '@/components/common/EmptyState'
import { CalendarCheck } from 'lucide-react'

export default function MonthClose() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">סגירת חודש</h2>
        <p className="text-sm text-slate-500">Workflow של סגירת חודש</p>
      </div>
      <EmptyState
        icon={CalendarCheck}
        title="העמוד בבנייה"
        description="שלבי סגירה: ready / pending / issues / approved - מגיע בשלב הבא."
      />
    </div>
  )
}
