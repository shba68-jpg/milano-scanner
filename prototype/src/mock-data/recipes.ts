export interface Recipe {
  id: string
  name: string
  category: string
  cost: number
  price: number
  marginPercent: number
  ingredientsCount: number
}

export const recipes: Recipe[] = [
  { id: 'VITRINE_TARTLET_LIMONCELLO', name: 'טארט לימונצ\'לו', category: 'קינוחי ויטרינה', cost: 12.45, price: 34, marginPercent: 63.4, ingredientsCount: 7 },
  { id: 'VITRINE_TIRAMISU_CLASSIC', name: 'טירמיסו קלאסי', category: 'קינוחי ויטרינה', cost: 14.2, price: 42, marginPercent: 66.2, ingredientsCount: 8 },
  { id: 'VITRINE_CHEESECAKE_NY', name: 'צ\'יזקייק ניו יורק', category: 'קינוחי ויטרינה', cost: 11.8, price: 38, marginPercent: 68.9, ingredientsCount: 6 },
  { id: 'VITRINE_PANNA_COTTA', name: 'פאנה קוטה עם פירות יער', category: 'קינוחי ויטרינה', cost: 9.6, price: 32, marginPercent: 70.0, ingredientsCount: 5 },
  { id: 'VITRINE_CANNOLI', name: 'קנולי סיציליאני', category: 'קינוחי ויטרינה', cost: 8.9, price: 28, marginPercent: 68.2, ingredientsCount: 7 },
  { id: 'BREAD_CHALLAH', name: 'חלה אמתית', category: 'לחמים', cost: 6.4, price: 22, marginPercent: 70.9, ingredientsCount: 6 },
  { id: 'BREAD_FOCACCIA_OLIVES', name: 'פוקצ\'ה זיתים ורוזמרין', category: 'לחמים', cost: 4.8, price: 18, marginPercent: 73.3, ingredientsCount: 6 },
  { id: 'BREAD_CIABATTA', name: 'צ\'יאבטה איטלקית', category: 'לחמים', cost: 3.2, price: 14, marginPercent: 77.1, ingredientsCount: 4 },
  { id: 'MAIN_SPAGHETTI_CARBONARA', name: 'ספגטי קרבונרה', category: 'מנות עיקריות', cost: 18.5, price: 62, marginPercent: 70.2, ingredientsCount: 6 },
  { id: 'MAIN_PENNE_ARRABBIATA', name: 'פנה אל\'ארביאטה', category: 'מנות עיקריות', cost: 12.4, price: 52, marginPercent: 76.2, ingredientsCount: 7 },
  { id: 'MAIN_RISOTTO_MUSHROOM', name: 'ריזוטו פטריות ופרמז\'ן', category: 'מנות עיקריות', cost: 22.1, price: 68, marginPercent: 67.5, ingredientsCount: 8 },
  { id: 'MAIN_PIZZA_MARGHERITA', name: 'פיצה מרגריטה', category: 'פיצות', cost: 14.8, price: 54, marginPercent: 72.6, ingredientsCount: 6 },
  { id: 'MAIN_PIZZA_PROSCIUTTO', name: 'פיצה פרושוטו ורוקט', category: 'פיצות', cost: 21.5, price: 68, marginPercent: 68.4, ingredientsCount: 7 },
  { id: 'APP_BRUSCHETTA', name: 'ברוסקטה עגבניות ובזיליקום', category: 'ראשונים', cost: 6.8, price: 32, marginPercent: 78.8, ingredientsCount: 6 },
  { id: 'APP_BURRATA', name: 'בוראטה עם פרושוטו', category: 'ראשונים', cost: 28.4, price: 72, marginPercent: 60.6, ingredientsCount: 5 },
  { id: 'APP_CARPACCIO', name: 'קרפצ\'יו בקר', category: 'ראשונים', cost: 32.6, price: 78, marginPercent: 58.2, ingredientsCount: 6 },
  { id: 'PREP_CHANTILLY_YOGURT', name: 'קצפת יוגורט הבית', category: 'הכנות מטבח', cost: 4.2, price: 0, marginPercent: 0, ingredientsCount: 3 },
  { id: 'PREP_TOMATO_SAUCE', name: 'רוטב עגבניות הבית', category: 'הכנות מטבח', cost: 3.8, price: 0, marginPercent: 0, ingredientsCount: 5 },
  { id: 'PREP_PESTO_GENOVESE', name: 'פסטו ג\'נובזה', category: 'הכנות מטבח', cost: 8.5, price: 0, marginPercent: 0, ingredientsCount: 5 },
  { id: 'PREP_PIZZA_DOUGH', name: 'בצק פיצה 48 שעות', category: 'הכנות מטבח', cost: 2.1, price: 0, marginPercent: 0, ingredientsCount: 4 },
]
