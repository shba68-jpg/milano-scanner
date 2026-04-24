import { EmptyState } from '@/components/common/EmptyState'
import { Tag } from 'lucide-react'

export default function Pricelist() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">מחירון</h2>
        <p className="text-sm text-slate-500">קטלוג פריטים עם usage ושינויי מחיר</p>
      </div>
      <EmptyState
        icon={Tag}
        title="העמוד בבנייה"
        description="מחירון עם עמודת שימושים, קישור לקטלוג ספק ואיתור עליות מחיר."
      />
    </div>
  )
}
