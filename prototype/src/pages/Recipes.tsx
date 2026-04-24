import { EmptyState } from '@/components/common/EmptyState'
import { BookOpen } from 'lucide-react'

export default function Recipes() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">מתכונים</h2>
        <p className="text-sm text-slate-500">BOM עם עלויות ומרג'ין</p>
      </div>
      <EmptyState
        icon={BookOpen}
        title="העמוד בבנייה"
        description="Recipe Builder עם חומרי גלם, עלות חיה ומרג'ין לכל מנה."
      />
    </div>
  )
}
