import { EmptyState } from '@/components/common/EmptyState'
import { Truck } from 'lucide-react'

export default function Suppliers() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">ספקים</h2>
        <p className="text-sm text-slate-500">קטלוג ספקים, היסטוריה ומחירים</p>
      </div>
      <EmptyState
        icon={Truck}
        title="העמוד בבנייה"
        description="לכל ספק: פרטי קשר, היסטוריית חשבוניות, Top products, שינויי מחיר."
      />
    </div>
  )
}
