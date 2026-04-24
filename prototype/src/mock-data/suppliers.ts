export interface Supplier {
  id: string
  name: string
  category: string
  contact?: string
  phone?: string
}

export const suppliers: Supplier[] = [
  { id: 'SUP001', name: 'ד.י.ט.ב. מזון ומסחר בע"מ', category: 'בשר ודגים', phone: '03-5551001' },
  { id: 'SUP002', name: 'עלה עלה בע"מ', category: 'ירקות ופירות', phone: '04-5551002' },
  { id: 'SUP003', name: 'דיטן מזון ומסחר בע"מ', category: 'מוצרי יבש', phone: '09-5551003' },
  { id: 'SUP004', name: 'מר קייק בע"מ', category: 'מוצרי אפייה', phone: '03-5551004' },
  { id: 'SUP005', name: 'ריסטרטו יבוא ושיווק בע"מ', category: 'מוצרים איטלקיים', phone: '03-5551005' },
  { id: 'SUP006', name: 'טמפו משקאות בע"מ', category: 'משקאות', phone: '03-5551006' },
  { id: 'SUP007', name: 'שטראוס מחלבות בע"מ', category: 'מוצרי חלב', phone: '03-5551007' },
  { id: 'SUP008', name: 'אסם השקעות בע"מ', category: 'מוצרי יבש', phone: '03-5551008' },
  { id: 'SUP009', name: 'דגי לכיש בע"מ', category: 'דגים', phone: '08-5551009' },
  { id: 'SUP010', name: 'מאפיית אנג\'ל', category: 'מאפים', phone: '03-5551010' },
  { id: 'SUP011', name: 'יקב ברקן', category: 'יינות', phone: '04-5551011' },
  { id: 'SUP012', name: 'מחלבות תנובה', category: 'מוצרי חלב', phone: '03-5551012' },
  { id: 'SUP013', name: 'פז גז ואנרגיה', category: 'גז וציוד', phone: '03-5551013' },
  { id: 'SUP014', name: 'ניאופרם תעשיות', category: 'חומרי ניקוי', phone: '09-5551014' },
  { id: 'SUP015', name: 'סנו מוצרי צריכה', category: 'חומרי ניקוי', phone: '09-5551015' },
  { id: 'SUP016', name: 'זיתים דלתא', category: 'זיתים ושמנים', phone: '04-5551016' },
  { id: 'SUP017', name: 'פיצרה דה לוצ\'ה בע"מ', category: 'מוצרים איטלקיים', phone: '03-5551017' },
  { id: 'SUP018', name: 'אורז סוגת בע"מ', category: 'דגנים', phone: '08-5551018' },
  { id: 'SUP019', name: 'יבוא יבוא ים תיכון', category: 'תבלינים', phone: '03-5551019' },
  { id: 'SUP020', name: 'עוף טוב בע"מ', category: 'עופות', phone: '04-5551020' },
  { id: 'SUP021', name: 'מחלבת גד', category: 'גבינות מיוחדות', phone: '04-5551021' },
  { id: 'SUP022', name: 'פלפל ים מלח', category: 'תבלינים', phone: '08-5551022' },
  { id: 'SUP023', name: 'ביס תעשיות בשר', category: 'בשר', phone: '04-5551023' },
  { id: 'SUP024', name: 'סן בננו ירקות', category: 'ירקות אורגניים', phone: '04-5551024' },
  { id: 'SUP025', name: 'קוקה קולה ישראל', category: 'משקאות', phone: '03-5551025' },
]
