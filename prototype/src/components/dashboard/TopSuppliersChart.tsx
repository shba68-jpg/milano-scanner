import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { topSuppliersThisWeek } from '@/mock-data'
import { formatCurrency } from '@/lib/format'

const data = [...topSuppliersThisWeek].reverse()

function CustomTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-md border border-slate-200 bg-white px-3 py-2 text-xs shadow-lg">
      <div className="font-medium text-slate-700">{label}</div>
      <div dir="ltr" className="num mt-0.5 font-semibold text-milano-green">
        {formatCurrency(payload[0].value)}
      </div>
    </div>
  )
}

export function TopSuppliersChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 5, right: 16, left: 8, bottom: 5 }}
      >
        <CartesianGrid stroke="#f1f5f9" strokeDasharray="3 3" horizontal={false} />
        <XAxis
          type="number"
          domain={[0, (dataMax: number) => dataMax * 1.25]}
          tickFormatter={(v) => `₪${(v / 1000).toFixed(0)}K`}
          tick={{ fontSize: 11, fill: '#64748b' }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          type="category"
          dataKey="name"
          orientation="right"
          tick={{ fontSize: 11, fill: '#334155' }}
          axisLine={false}
          tickLine={false}
          width={110}
          tickMargin={8}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: '#f8fafc' }} />
        <Bar dataKey="amount" fill="#2E7D32" radius={[4, 4, 4, 4]} barSize={16} />
      </BarChart>
    </ResponsiveContainer>
  )
}
