export interface Product {
  sku: string
  name: string
  supplier: string
  category: string
  unit: 'ק"ג' | 'ליטר' | 'יחידה' | 'מארז'
  price: number
  usedIn: number
  lastChange?: number
}

export const products: Product[] = [
  { sku: 'INT_AVOCADO', name: 'אבוקדו', supplier: 'עלה עלה בע"מ', category: 'ירקות', unit: 'ק"ג', price: 40, usedIn: 3, lastChange: 8.2 },
  { sku: 'INT_AMARENA', name: 'אמרנה (דובדבני אמרנה בסירופ)', supplier: 'ריסטרטו יבוא ושיווק בע"מ', category: 'מוצרים איטלקיים', unit: 'ק"ג', price: 60, usedIn: 1 },
  { sku: '1895', name: 'אבוקדו מארז זוג בשל', supplier: 'עלה עלה בע"מ', category: 'ירקות', unit: 'מארז', price: 52.75, usedIn: 5, lastChange: 12.4 },
  { sku: '282029', name: 'קמח PETRA VIVA HP 0103 10 ק״ג', supplier: 'ריסטרטו יבוא ושיווק בע"מ', category: 'מוצרי יבש', unit: 'ק"ג', price: 22.1, usedIn: 8, lastChange: -1.5 },
  { sku: 'INT_TOMATO', name: 'עגבנייה חי', supplier: 'עלה עלה בע"מ', category: 'ירקות', unit: 'ק"ג', price: 14.2, usedIn: 12, lastChange: 12.0 },
  { sku: 'INT_CUCUMBER', name: 'מלפפון חלק', supplier: 'סן בננו ירקות', category: 'ירקות', unit: 'ק"ג', price: 9.5, usedIn: 6 },
  { sku: 'INT_ONION_RED', name: 'בצל אדום', supplier: 'עלה עלה בע"מ', category: 'ירקות', unit: 'ק"ג', price: 7.8, usedIn: 9, lastChange: -3.1 },
  { sku: 'INT_ONION_YELLOW', name: 'בצל צהוב', supplier: 'עלה עלה בע"מ', category: 'ירקות', unit: 'ק"ג', price: 5.2, usedIn: 11 },
  { sku: 'INT_GARLIC', name: 'שום טרי', supplier: 'סן בננו ירקות', category: 'ירקות', unit: 'ק"ג', price: 28, usedIn: 15 },
  { sku: 'INT_BASIL', name: 'בזיליקום טרי', supplier: 'סן בננו ירקות', category: 'עשבי תיבול', unit: 'ק"ג', price: 85, usedIn: 7 },
  { sku: 'INT_PARMESAN', name: 'פרמז\'ן רג\'אנו 24 חודש', supplier: 'מחלבת גד', category: 'גבינות', unit: 'ק"ג', price: 185, usedIn: 14, lastChange: 5.4 },
  { sku: 'INT_MOZZARELLA', name: 'מוצרלה דה באלה טרייה', supplier: 'ריסטרטו יבוא ושיווק בע"מ', category: 'גבינות', unit: 'ק"ג', price: 78, usedIn: 9 },
  { sku: 'INT_OLIVE_OIL', name: 'שמן זית כתית מעולה 5L', supplier: 'זיתים דלתא', category: 'שמנים', unit: 'ליטר', price: 48, usedIn: 20, lastChange: 15.2 },
  { sku: 'INT_FLOUR_00', name: 'קמח 00 איטלקי', supplier: 'ריסטרטו יבוא ושיווק בע"מ', category: 'מוצרי יבש', unit: 'ק"ג', price: 11.5, usedIn: 18 },
  { sku: 'INT_FLOUR_WHOLE', name: 'קמח מלא אורגני', supplier: 'אסם השקעות בע"מ', category: 'מוצרי יבש', unit: 'ק"ג', price: 14.8, usedIn: 4 },
  { sku: 'INT_SUGAR', name: 'סוכר לבן', supplier: 'סוגת בע"מ', category: 'מוצרי יבש', unit: 'ק"ג', price: 4.2, usedIn: 12 },
  { sku: 'INT_SALT_SEA', name: 'מלח ים', supplier: 'פלפל ים מלח', category: 'תבלינים', unit: 'ק"ג', price: 6.8, usedIn: 22 },
  { sku: 'INT_BUTTER', name: 'חמאה 82%', supplier: 'שטראוס מחלבות בע"מ', category: 'מוצרי חלב', unit: 'ק"ג', price: 42, usedIn: 11 },
  { sku: 'INT_EGGS', name: 'ביצים L גודל', supplier: 'מאפיית אנג\'ל', category: 'מוצרי חלב', unit: 'יחידה', price: 1.4, usedIn: 17 },
  { sku: 'INT_MILK', name: 'חלב 3% דל לקטוז', supplier: 'מחלבות תנובה', category: 'מוצרי חלב', unit: 'ליטר', price: 6.9, usedIn: 8 },
  { sku: 'INT_CREAM', name: 'שמנת מתוקה 38%', supplier: 'שטראוס מחלבות בע"מ', category: 'מוצרי חלב', unit: 'ליטר', price: 18.5, usedIn: 13 },
  { sku: 'INT_YOGURT', name: 'יוגורט יווני 10%', supplier: 'מחלבות תנובה', category: 'מוצרי חלב', unit: 'ק"ג', price: 12.4, usedIn: 5 },
  { sku: 'INT_CHICKEN', name: 'חזה עוף טרי ללא עצם', supplier: 'עוף טוב בע"מ', category: 'עופות', unit: 'ק"ג', price: 58, usedIn: 7, lastChange: -2.0 },
  { sku: 'INT_BEEF_ENTRECOTE', name: 'אנטריקוט בקר מיושן', supplier: 'ביס תעשיות בשר', category: 'בשר', unit: 'ק"ג', price: 145, usedIn: 3, lastChange: 6.8 },
  { sku: 'INT_BEEF_GROUND', name: 'בשר טחון 15%', supplier: 'ד.י.ט.ב. מזון ומסחר בע"מ', category: 'בשר', unit: 'ק"ג', price: 62, usedIn: 6 },
  { sku: 'INT_SALMON', name: 'סלמון נורווגי פילה', supplier: 'דגי לכיש בע"מ', category: 'דגים', unit: 'ק"ג', price: 118, usedIn: 4, lastChange: 9.5 },
  { sku: 'INT_TUNA', name: 'טונה אדומה דרגה סושי', supplier: 'דגי לכיש בע"מ', category: 'דגים', unit: 'ק"ג', price: 220, usedIn: 2 },
  { sku: 'INT_LEMON', name: 'לימון', supplier: 'עלה עלה בע"מ', category: 'פירות', unit: 'ק"ג', price: 11, usedIn: 16 },
  { sku: 'INT_ORANGE', name: 'תפוז ולנסיה', supplier: 'עלה עלה בע"מ', category: 'פירות', unit: 'ק"ג', price: 6.5, usedIn: 5 },
  { sku: 'INT_STRAWBERRY', name: 'תותים', supplier: 'סן בננו ירקות', category: 'פירות', unit: 'ק"ג', price: 32, usedIn: 3, lastChange: -8.2 },
  { sku: 'INT_VANILLA', name: 'תמצית וניל טהורה', supplier: 'מר קייק בע"מ', category: 'מוצרי אפייה', unit: 'ליטר', price: 240, usedIn: 9 },
  { sku: 'INT_CHOCOLATE_70', name: 'שוקולד מריר 70%', supplier: 'מר קייק בע"מ', category: 'מוצרי אפייה', unit: 'ק"ג', price: 72, usedIn: 8 },
  { sku: 'INT_COFFEE', name: 'פולי קפה אספרסו בלנד', supplier: 'ריסטרטו יבוא ושיווק בע"מ', category: 'משקאות', unit: 'ק"ג', price: 128, usedIn: 10 },
  { sku: 'INT_WINE_RED', name: 'יין אדום הבית', supplier: 'יקב ברקן', category: 'יינות', unit: 'ליטר', price: 42, usedIn: 6 },
  { sku: 'INT_WINE_WHITE', name: 'יין לבן הבית', supplier: 'יקב ברקן', category: 'יינות', unit: 'ליטר', price: 42, usedIn: 4 },
  { sku: 'INT_OLIVES_GREEN', name: 'זיתים ירוקים מגולענים', supplier: 'זיתים דלתא', category: 'זיתים', unit: 'ק"ג', price: 26, usedIn: 7 },
  { sku: 'INT_CAPERS', name: 'צלף במלח', supplier: 'ריסטרטו יבוא ושיווק בע"מ', category: 'תבלינים', unit: 'ק"ג', price: 68, usedIn: 5 },
  { sku: 'INT_ARUGULA', name: 'רוקט (ארוגולה)', supplier: 'סן בננו ירקות', category: 'עלים', unit: 'ק"ג', price: 38, usedIn: 8 },
  { sku: 'INT_RICE_ARBORIO', name: 'אורז ארבוריו לריזוטו', supplier: 'סוגת בע"מ', category: 'דגנים', unit: 'ק"ג', price: 18, usedIn: 4 },
  { sku: 'INT_PASTA_SPAGHETTI', name: 'ספגטי ברונזה', supplier: 'ריסטרטו יבוא ושיווק בע"מ', category: 'פסטה', unit: 'ק"ג', price: 14.5, usedIn: 9 },
  { sku: 'INT_PASTA_PENNE', name: 'פנה רגטה', supplier: 'ריסטרטו יבוא ושיווק בע"מ', category: 'פסטה', unit: 'ק"ג', price: 14.5, usedIn: 6 },
  { sku: 'INT_TOMATO_SAN', name: 'עגבניות סן מרצאנו משומרות', supplier: 'ריסטרטו יבוא ושיווק בע"מ', category: 'שימורים', unit: 'ק"ג', price: 22, usedIn: 11 },
  { sku: 'INT_PROSCIUTTO', name: 'פרושוטו די פרמה 24 חודש', supplier: 'ריסטרטו יבוא ושיווק בע"מ', category: 'נקניקים', unit: 'ק"ג', price: 220, usedIn: 5 },
  { sku: 'INT_GORGONZOLA', name: 'גורגונזולה DOP', supplier: 'מחלבת גד', category: 'גבינות', unit: 'ק"ג', price: 142, usedIn: 3 },
  { sku: 'INT_RICOTTA', name: 'ריקוטה טרייה', supplier: 'מחלבת גד', category: 'גבינות', unit: 'ק"ג', price: 48, usedIn: 7 },
  { sku: 'INT_MASCARPONE', name: 'מסקרפונה', supplier: 'מחלבת גד', category: 'גבינות', unit: 'ק"ג', price: 68, usedIn: 4 },
  { sku: 'INT_TRUFFLE', name: 'שמן כמהין לבן', supplier: 'ריסטרטו יבוא ושיווק בע"מ', category: 'שמנים', unit: 'ליטר', price: 420, usedIn: 3 },
  { sku: 'INT_PINE_NUTS', name: 'צנוברים', supplier: 'יבוא יבוא ים תיכון', category: 'אגוזים', unit: 'ק"ג', price: 295, usedIn: 4, lastChange: 11.8 },
  { sku: 'INT_PEPPER_BLACK', name: 'פלפל שחור גרגרים', supplier: 'פלפל ים מלח', category: 'תבלינים', unit: 'ק"ג', price: 98, usedIn: 24 },
  { sku: 'INT_OREGANO', name: 'אורגנו יבש', supplier: 'יבוא יבוא ים תיכון', category: 'תבלינים', unit: 'ק"ג', price: 88, usedIn: 12 },
]
