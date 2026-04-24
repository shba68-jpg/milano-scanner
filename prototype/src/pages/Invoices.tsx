import { EmptyState } from '@/components/common/EmptyState'
import { Inbox } from 'lucide-react'

export default function Invoices() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">חשבוניות</h2>
        <p className="text-sm text-slate-500">תיבת נכנסות עם workflow</p>
      </div>
      <EmptyState
        icon={Inbox}
        title="העמוד בבנייה"
        description="Inbox עם טורים: ממתין → בבדיקה → אושר → נרשם. מגיע בשלב הבא."
      />
    </div>
  )
}
