import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import Dashboard from '@/pages/Dashboard'
import Invoices from '@/pages/Invoices'
import Pricelist from '@/pages/Pricelist'
import Recipes from '@/pages/Recipes'
import Suppliers from '@/pages/Suppliers'
import MonthClose from '@/pages/MonthClose'
import Settings from '@/pages/Settings'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/pricelist" element={<Pricelist />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/month-close" element={<MonthClose />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
