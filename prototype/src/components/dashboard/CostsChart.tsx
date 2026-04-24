import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { monthlyCosts } from '@/mock-data'
import { formatCurrency } from '@/lib/format'

const data = [...monthlyCosts].reverse()

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

export function CostsChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
      >
        <CartesianGrid stroke="#f1f5f9" strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="month"
          reversed
          tick={{ fontSize: 11, fill: '#64748b' }}
          axisLine={{ stroke: '#e2e8f0' }}
          tickLine={false}
          tickMargin={8}
        />
        <YAxis
          orientation="right"
          tickFormatter={(v) => `₪${(v / 1000).toFixed(0)}K`}
          tick={{ fontSize: 11, fill: '#64748b' }}
          axisLine={false}
          tickLine={false}
          width={60}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="amount"
          stroke="#2E7D32"
          strokeWidth={2.5}
          dot={{ r: 3, fill: '#2E7D32' }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
