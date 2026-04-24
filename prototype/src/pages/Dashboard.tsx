import { useNavigate } from 'react-router-dom'
import {
  DollarSign,
  TrendingUp,
  Clock,
  AlertTriangle,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { KPICard } from '@/components/common/KPICard'
import { ActivityRow } from '@/components/common/ActivityRow'
import { QuickActions } from '@/components/dashboard/QuickActions'
import { CostsChart } from '@/components/dashboard/CostsChart'
import { TopSuppliersChart } from '@/components/dashboard/TopSuppliersChart'
import { recentActivity, dashboardKpis } from '@/mock-data'
import { formatCurrency } from '@/lib/format'

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="mx-auto flex max-w-[1440px] flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">דשבורד</h2>
        <p className="mt-0.5 text-sm text-slate-500">
          תמונת מצב תפעולית וכספית · שבוע 17, אפריל 2026
        </p>
      </div>

      {/* Section 1: KPI Cards */}
      <div
        data-testid="section-kpis"
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        <KPICard
          icon={DollarSign}
          title="עלות מזון השבוע"
          value={formatCurrency(dashboardKpis.weekFoodCost)}
          change={dashboardKpis.weekFoodCostChange}
          changeLabel="מהשבוע שעבר"
          changePositiveIsBad
          progress={dashboardKpis.weekFoodCostActualPercent}
          progressTarget={`יעד ${dashboardKpis.weekFoodCostTargetPercent}%`}
          variant="danger"
        />
        <KPICard
          icon={TrendingUp}
          title="מכירות היום"
          value={formatCurrency(dashboardKpis.salesToday)}
          change={dashboardKpis.salesTodayChange}
          changeLabel="מאתמול"
          sub={`ממוצע יומי: ${formatCurrency(dashboardKpis.salesMonthDailyAvg)}`}
          variant="neutral"
        />
        <KPICard
          icon={Clock}
          title="חשבוניות ממתינות"
          value={String(dashboardKpis.pendingInvoices)}
          sub="צריכות אישור"
          actionLabel="לעבור ל-Inbox"
          onAction={() => navigate('/invoices')}
          variant="warning"
        />
        <KPICard
          icon={AlertTriangle}
          title="התראות מחיר השבוע"
          value={String(dashboardKpis.priceAlerts)}
          sub={`${dashboardKpis.priceAlerts} פריטים עלו מעל 10%`}
          actionLabel="לראות פרטים"
          onAction={() => navigate('/pricelist')}
          variant="danger"
        />
      </div>

      {/* Section 2: Activity Feed */}
      <Card data-testid="section-activity">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-base font-semibold text-slate-900">
            פעילות אחרונה
          </CardTitle>
          <button
            type="button"
            className="text-xs font-medium text-milano-green hover:underline"
          >
            לראות הכל
          </button>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-x-4">
            {recentActivity.map((item) => (
              <ActivityRow
                key={item.id}
                icon={item.icon}
                iconColor={item.iconColor}
                title={item.title}
                meta={item.meta}
                timestamp={item.timestamp}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Section 3: Quick Actions */}
      <div data-testid="section-actions">
        <QuickActions />
      </div>

      {/* Section 4: Charts Row */}
      <div
        data-testid="section-charts"
        className="grid grid-cols-1 gap-4 lg:grid-cols-2"
      >
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold text-slate-900">
              עלויות חודשיות
            </CardTitle>
            <p className="text-xs text-slate-500">6 חודשים אחרונים</p>
          </CardHeader>
          <CardContent className="pt-0">
            <CostsChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold text-slate-900">
              5 ספקים מובילים השבוע
            </CardTitle>
            <p className="text-xs text-slate-500">מבוסס על חשבוניות פעילות</p>
          </CardHeader>
          <CardContent className="pt-0">
            <TopSuppliersChart />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
