export type InvoiceStatus = 'pending' | 'review' | 'approved' | 'posted' | 'rejected'

export interface Invoice {
  id: string
  invoiceRef: string
  supplier: string
  customer: 'CAFE_NAPO' | 'CAPRI_ITALIA' | 'MILANO_BAKERY' | 'BAR_ITALIA_LAGOON'
  total: number
  date: string
  status: InvoiceStatus
  itemsCount: number
}

export const invoices: Invoice[] = [
  { id: 'INV-001', invoiceRef: '2037840068', supplier: 'ד.י.ט.ב. מזון ומסחר בע"מ', customer: 'CAFE_NAPO', total: 1234.56, date: '2026-04-23', status: 'pending', itemsCount: 12 },
  { id: 'INV-002', invoiceRef: '2037840069', supplier: 'עלה עלה בע"מ', customer: 'MILANO_BAKERY', total: 842.3, date: '2026-04-23', status: 'pending', itemsCount: 18 },
  { id: 'INV-003', invoiceRef: '5504129', supplier: 'ריסטרטו יבוא ושיווק בע"מ', customer: 'CAPRI_ITALIA', total: 4520.8, date: '2026-04-22', status: 'review', itemsCount: 24 },
  { id: 'INV-004', invoiceRef: '5504130', supplier: 'ריסטרטו יבוא ושיווק בע"מ', customer: 'BAR_ITALIA_LAGOON', total: 3180.45, date: '2026-04-22', status: 'review', itemsCount: 19 },
  { id: 'INV-005', invoiceRef: '881023', supplier: 'מר קייק בע"מ', customer: 'MILANO_BAKERY', total: 2145.0, date: '2026-04-21', status: 'approved', itemsCount: 8 },
  { id: 'INV-006', invoiceRef: '881024', supplier: 'דיטן מזון ומסחר בע"מ', customer: 'CAFE_NAPO', total: 1680.2, date: '2026-04-21', status: 'approved', itemsCount: 14 },
  { id: 'INV-007', invoiceRef: '7720199', supplier: 'דגי לכיש בע"מ', customer: 'CAPRI_ITALIA', total: 2890.6, date: '2026-04-20', status: 'posted', itemsCount: 6 },
  { id: 'INV-008', invoiceRef: '7720200', supplier: 'עוף טוב בע"מ', customer: 'BAR_ITALIA_LAGOON', total: 1425.3, date: '2026-04-20', status: 'posted', itemsCount: 9 },
  { id: 'INV-009', invoiceRef: '9980412', supplier: 'שטראוס מחלבות בע"מ', customer: 'MILANO_BAKERY', total: 960.15, date: '2026-04-19', status: 'posted', itemsCount: 11 },
  { id: 'INV-010', invoiceRef: '9980413', supplier: 'מחלבת גד', customer: 'CAPRI_ITALIA', total: 1845.9, date: '2026-04-19', status: 'posted', itemsCount: 7 },
  { id: 'INV-011', invoiceRef: '2037840070', supplier: 'ד.י.ט.ב. מזון ומסחר בע"מ', customer: 'CAFE_NAPO', total: 2210.44, date: '2026-04-18', status: 'posted', itemsCount: 15 },
  { id: 'INV-012', invoiceRef: '6612348', supplier: 'יקב ברקן', customer: 'BAR_ITALIA_LAGOON', total: 3420.0, date: '2026-04-18', status: 'posted', itemsCount: 10 },
  { id: 'INV-013', invoiceRef: '2037840071', supplier: 'ד.י.ט.ב. מזון ומסחר בע"מ', customer: 'MILANO_BAKERY', total: 1380.25, date: '2026-04-17', status: 'posted', itemsCount: 8 },
  { id: 'INV-014', invoiceRef: '5504131', supplier: 'ריסטרטו יבוא ושיווק בע"מ', customer: 'CAPRI_ITALIA', total: 5280.7, date: '2026-04-17', status: 'posted', itemsCount: 28 },
  { id: 'INV-015', invoiceRef: '4410078', supplier: 'זיתים דלתא', customer: 'BAR_ITALIA_LAGOON', total: 890.5, date: '2026-04-16', status: 'posted', itemsCount: 5 },
  { id: 'INV-016', invoiceRef: '4410079', supplier: 'סן בננו ירקות', customer: 'CAFE_NAPO', total: 640.8, date: '2026-04-16', status: 'posted', itemsCount: 12 },
  { id: 'INV-017', invoiceRef: '2037840072', supplier: 'ד.י.ט.ב. מזון ומסחר בע"מ', customer: 'CAPRI_ITALIA', total: 1920.35, date: '2026-04-15', status: 'posted', itemsCount: 13 },
  { id: 'INV-018', invoiceRef: '881025', supplier: 'מר קייק בע"מ', customer: 'MILANO_BAKERY', total: 1240.0, date: '2026-04-15', status: 'posted', itemsCount: 6 },
  { id: 'INV-019', invoiceRef: '7720201', supplier: 'עוף טוב בע"מ', customer: 'CAFE_NAPO', total: 1085.6, date: '2026-04-14', status: 'posted', itemsCount: 4 },
  { id: 'INV-020', invoiceRef: '9980414', supplier: 'מחלבות תנובה', customer: 'MILANO_BAKERY', total: 720.4, date: '2026-04-14', status: 'posted', itemsCount: 9 },
  { id: 'INV-021', invoiceRef: '3340556', supplier: 'אסם השקעות בע"מ', customer: 'CAPRI_ITALIA', total: 2340.8, date: '2026-04-13', status: 'posted', itemsCount: 22 },
  { id: 'INV-022', invoiceRef: '3340557', supplier: 'סוגת בע"מ', customer: 'BAR_ITALIA_LAGOON', total: 415.6, date: '2026-04-13', status: 'posted', itemsCount: 3 },
  { id: 'INV-023', invoiceRef: '8820011', supplier: 'טמפו משקאות בע"מ', customer: 'CAFE_NAPO', total: 1680.0, date: '2026-04-12', status: 'posted', itemsCount: 14 },
  { id: 'INV-024', invoiceRef: '8820012', supplier: 'קוקה קולה ישראל', customer: 'MILANO_BAKERY', total: 950.25, date: '2026-04-12', status: 'posted', itemsCount: 7 },
  { id: 'INV-025', invoiceRef: '5504132', supplier: 'ריסטרטו יבוא ושיווק בע"מ', customer: 'BAR_ITALIA_LAGOON', total: 4120.15, date: '2026-04-11', status: 'posted', itemsCount: 21 },
  { id: 'INV-026', invoiceRef: '2037840073', supplier: 'ד.י.ט.ב. מזון ומסחר בע"מ', customer: 'BAR_ITALIA_LAGOON', total: 2840.9, date: '2026-04-10', status: 'posted', itemsCount: 16 },
  { id: 'INV-027', invoiceRef: '881026', supplier: 'מר קייק בע"מ', customer: 'CAPRI_ITALIA', total: 1560.0, date: '2026-04-10', status: 'posted', itemsCount: 8 },
  { id: 'INV-028', invoiceRef: '7720202', supplier: 'דגי לכיש בע"מ', customer: 'MILANO_BAKERY', total: 3240.5, date: '2026-04-09', status: 'posted', itemsCount: 5 },
  { id: 'INV-029', invoiceRef: '9980415', supplier: 'שטראוס מחלבות בע"מ', customer: 'CAFE_NAPO', total: 1095.8, date: '2026-04-09', status: 'posted', itemsCount: 12 },
  { id: 'INV-030', invoiceRef: '4410080', supplier: 'זיתים דלתא', customer: 'CAPRI_ITALIA', total: 1240.4, date: '2026-04-08', status: 'posted', itemsCount: 7 },
  { id: 'INV-031', invoiceRef: '6612349', supplier: 'יקב ברקן', customer: 'MILANO_BAKERY', total: 2180.0, date: '2026-04-08', status: 'posted', itemsCount: 6 },
  { id: 'INV-032', invoiceRef: '3340558', supplier: 'אסם השקעות בע"מ', customer: 'CAFE_NAPO', total: 1840.2, date: '2026-04-07', status: 'posted', itemsCount: 18 },
  { id: 'INV-033', invoiceRef: '2037840074', supplier: 'ד.י.ט.ב. מזון ומסחר בע"מ', customer: 'MILANO_BAKERY', total: 1645.3, date: '2026-04-07', status: 'posted', itemsCount: 11 },
  { id: 'INV-034', invoiceRef: '8820013', supplier: 'טמפו משקאות בע"מ', customer: 'CAPRI_ITALIA', total: 2220.8, date: '2026-04-06', status: 'posted', itemsCount: 19 },
  { id: 'INV-035', invoiceRef: '5504133', supplier: 'ריסטרטו יבוא ושיווק בע"מ', customer: 'CAFE_NAPO', total: 3860.45, date: '2026-04-06', status: 'posted', itemsCount: 23 },
  { id: 'INV-036', invoiceRef: '7720203', supplier: 'עוף טוב בע"מ', customer: 'CAPRI_ITALIA', total: 2140.9, date: '2026-04-05', status: 'posted', itemsCount: 9 },
  { id: 'INV-037', invoiceRef: '9980416', supplier: 'מחלבות תנובה', customer: 'CAFE_NAPO', total: 895.7, date: '2026-04-05', status: 'posted', itemsCount: 10 },
  { id: 'INV-038', invoiceRef: '2037840075', supplier: 'ד.י.ט.ב. מזון ומסחר בע"מ', customer: 'CAFE_NAPO', total: 1520.6, date: '2026-04-04', status: 'posted', itemsCount: 12 },
  { id: 'INV-039', invoiceRef: '881027', supplier: 'מר קייק בע"מ', customer: 'MILANO_BAKERY', total: 1820.0, date: '2026-04-04', status: 'posted', itemsCount: 9 },
  { id: 'INV-040', invoiceRef: '5504134', supplier: 'ריסטרטו יבוא ושיווק בע"מ', customer: 'BAR_ITALIA_LAGOON', total: 2950.3, date: '2026-04-03', status: 'posted', itemsCount: 17 },
]
