import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Clock, Eye, FileCheck, XCircle } from 'lucide-react'

type Status = 'pending' | 'review' | 'approved' | 'posted' | 'rejected'

const STATUS_MAP: Record<
  Status,
  { label: string; variant: 'success' | 'warning' | 'info' | 'neutral' | 'danger'; icon: typeof CheckCircle2 }
> = {
  pending: { label: 'ממתין', variant: 'warning', icon: Clock },
  review: { label: 'בבדיקה', variant: 'info', icon: Eye },
  approved: { label: 'אושר', variant: 'success', icon: CheckCircle2 },
  posted: { label: 'נרשם', variant: 'neutral', icon: FileCheck },
  rejected: { label: 'נדחה', variant: 'danger', icon: XCircle },
}

export function StatusBadge({ status }: { status: Status }) {
  const cfg = STATUS_MAP[status]
  const Icon = cfg.icon
  return (
    <Badge variant={cfg.variant} className="gap-1">
      <Icon className="h-3 w-3" />
      {cfg.label}
    </Badge>
  )
}
