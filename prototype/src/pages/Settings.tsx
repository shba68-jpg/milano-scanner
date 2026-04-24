import { EmptyState } from '@/components/common/EmptyState'
import { Settings as SettingsIcon } from 'lucide-react'

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">הגדרות</h2>
        <p className="text-sm text-slate-500">הגדרות מערכת וחשבון</p>
      </div>
      <EmptyState
        icon={SettingsIcon}
        title="העמוד בבנייה"
        description="הגדרות ארגון, משתמשים, מסעדות, התראות - מגיע בשלב הבא."
      />
    </div>
  )
}
