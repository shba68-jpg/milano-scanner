# Milano Prototype - Setup Instructions for First Agent

> פרומפט ראשוני לסוכן שיתחיל לבנות את ה-prototype.
> העתק את זה כולו לסוכן חדש (Claude Code או אחר).

---

## המשימה

אתה בונה **design prototype** לאפליקציות של POMO Group (קבוצת מסעדות איטלקיות בישראל). 
זה לא מוצר אמיתי - זה target עיצובי שישמש כמודל ל-milano-os ו-milano-bakery הקיימים.

## לפני שאתה מתחיל

**חובה לקרוא:**
1. `C:\milano-design-system\docs\DESIGN_PRINCIPLES.md` - עקרונות עיצוב
2. `C:\milano-design-system\docs\INSPIRATION.md` - מקור השראה ופרטים

**אם הקבצים לא קיימים, בקש מהמשתמש להעלות אותם לפני שממשיכים.**

---

## Setup - שלב 1

```bash
cd C:\
npm create vite@latest milano-prototype -- --template react-ts
cd milano-prototype

# Install dependencies
npm install tailwindcss postcss autoprefixer
npm install -D @types/node

# Install RTL support
npm install tailwindcss-rtl

# Install shadcn/ui
npx shadcn@latest init
# When prompted:
# - Style: Default
# - Base color: Slate
# - CSS variables: Yes

# Install additional
npm install lucide-react date-fns recharts zustand @tanstack/react-query

# Install shadcn components (we'll need these)
npx shadcn@latest add button card table dialog sheet badge input select tabs separator
```

## תצורה בסיסית

### `index.html` - RTL
```html
<!DOCTYPE html>
<html lang="he" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Milano OS</title>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### `tailwind.config.js`
```javascript
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Heebo', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        milano: {
          green: '#2E7D32',
          orange: '#F57C00',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
```

### `src/index.css` - Global
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply font-sans text-gray-900 bg-gray-50;
    direction: rtl;
  }
  
  /* Numbers in Hebrew context should be LTR */
  .num {
    direction: ltr;
    display: inline-block;
    unicode-bidi: embed;
  }
}
```

---

## מבנה תיקיות

```
milano-prototype/
├── src/
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── Invoices.tsx
│   │   ├── InvoiceDetail.tsx       (side drawer)
│   │   ├── Pricelist.tsx
│   │   ├── Recipes.tsx
│   │   ├── Suppliers.tsx
│   │   └── MonthClose.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── TopBar.tsx
│   │   │   └── Layout.tsx
│   │   ├── common/
│   │   │   ├── KPICard.tsx
│   │   │   ├── StatusBadge.tsx
│   │   │   ├── DataTable.tsx
│   │   │   └── EmptyState.tsx
│   │   └── ui/                     (shadcn/ui)
│   ├── mock-data/
│   │   ├── invoices.ts
│   │   ├── products.ts
│   │   ├── recipes.ts
│   │   └── suppliers.ts
│   ├── lib/
│   │   ├── utils.ts               (shadcn utils)
│   │   └── format.ts              (formatting helpers)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
└── package.json
```

---

## Mock Data Guidelines

**ריאליסטי, לא דמה:**

### Suppliers:
```typescript
export const suppliers = [
  { id: 'SUP001', name: 'ד.י.ט.ב. מזון ומסחר בע"מ', category: 'בשר ודגים' },
  { id: 'SUP002', name: 'עלה עלה בע"מ', category: 'ירקות ופירות' },
  { id: 'SUP003', name: 'דיטן מזון ומסחר בע"מ', category: 'מוצרי יבש' },
  { id: 'SUP004', name: 'מר קייק בע"מ', category: 'מוצרי אפייה' },
  { id: 'SUP005', name: 'ריסטרטו יבוא ושיווק בע"מ', category: 'מוצרי איטלקים' },
  // ... עוד 20-25
];
```

### Products:
```typescript
export const products = [
  { sku: 'INT_AVOCADO', name: 'אבוקדו', supplier: 'עלה עלה', price_per_kg: 40, used_in: 3 },
  { sku: 'INT_AMARENA', name: 'אמרנה (דובדבני אמרנה בסירופ)', supplier: '-', price_per_kg: 60, used_in: 1 },
  { sku: '1895', name: 'אבוקדו מארז זוג בשל', supplier: 'עלה עלה', price_per_kg: 52.75, used_in: 5 },
  { sku: '282029', name: 'קמח PETRA VIVA HP 0103 10 ק״ג', supplier: 'ריסטרטו יבוא', price_per_kg: 22.1, used_in: 8 },
  // ... עוד 30-50
];
```

### Invoices:
```typescript
export const invoices = [
  {
    id: 'INV-001',
    invoice_ref: '2037840068',
    supplier: 'ד.י.ט.ב. מזון ומסחר בע"מ',
    customer_name: 'CAFE_NAPO',
    total: 1234.56,
    date: '2026-04-23',
    status: 'pending',  // pending | review | approved | posted
    items_count: 12,
  },
  // ... עוד 40-50
];
```

### Recipes:
```typescript
export const recipes = [
  {
    id: 'VITRINE_TARTLET_LIMONCELLO',
    name: 'טארט לימונצ'לו',
    category: 'קינוחי ויטרינה',
    cost: 12.45,
    price: 34,
    margin_percent: 63.4,
    ingredients_count: 7,
  },
  // ... עוד 20-30
];
```

---

## שלב 2: בניית Layout בסיסי

### Sidebar (`src/components/layout/Sidebar.tsx`)

```
┌──────────────┐
│              │
│   POMO       │  ← Logo
│              │
│ ─────────    │
│              │
│ 🏠 דשבורד    │
│ 📧 חשבוניות  │
│ 💰 מחירון    │
│ 📋 מתכונים   │
│ 👥 ספקים     │
│ 📊 סגירת חודש│
│              │
│ ─────────    │
│              │
│ ⚙️ הגדרות    │
│              │
└──────────────┘
```

- Sidebar בצד **ימין** (RTL)
- רוחב 240px קבוע, ניתן לקפל ל-60px (רק אייקונים)
- Active route מודגש (רקע אפור בהיר + קו מלא)
- Hover - רקע אפור עוד יותר בהיר

### TopBar

```
┌─────────────────────────────────────────────────────────┐
│ [Dashboard]                    🔍   🔔    @שהר ברנע ▼   │
└─────────────────────────────────────────────────────────┘
```

- גובה 56px
- Breadcrumb/Title בצד ימין
- Search + Notifications + User menu בצד שמאל

---

## שלב 3: בניית העמוד הראשון - Dashboard

**זה העמוד הראשון שתבנה.**

### Sections:

#### 3.1 Hero - KPI Cards (4 cards בשורה)

```tsx
<div className="grid grid-cols-4 gap-4 mb-6">
  <KPICard
    title="עלות מזון השבוע"
    value="₪34,521.50"
    change={+12.4}
    changeLabel="מהשבוע שעבר"
    target="30%"
    targetProgress={28.5}
  />
  <KPICard
    title="מכירות היום"
    value="₪124,000"
    change={-2.1}
    changeLabel="מאתמול"
  />
  <KPICard
    title="חשבוניות ממתינות"
    value="7"
    changeLabel="צריכות אישור"
    action="לבדוק עכשיו"
  />
  <KPICard
    title="התראות מחיר"
    value="3"
    changeLabel="עליות חריגות"
    variant="warning"
  />
</div>
```

#### 3.2 Recent Activity

```
פעילות אחרונה
─────────────
🟢 חשבונית אושרה - ד.י.ט.ב. ₪1,234.56                לפני 15 דקות
📈 מחיר "עגבנייה חי" עלה ב-12%                         לפני שעה
📧 3 חשבוניות חדשות הגיעו                              לפני שעתיים
🔵 התחלת סגירת חודש אפריל                              היום בבוקר
```

#### 3.3 Quick Actions

```
[📤 העלה חשבונית]  [📊 דוח עלויות]  [📋 מתכון חדש]  [📈 סגירת חודש]
```

#### 3.4 Charts Row

```
┌───────────────────────────────┬──────────────────────────────┐
│ עלויות חודשיות - 6 חודשים     │ 5 ספקים מובילים השבוע        │
│ [Line chart]                  │ [Bar chart horizontal]       │
└───────────────────────────────┴──────────────────────────────┘
```

---

## שלב 4: תהליך עבודה

אחרי הdashboard:

1. Build Invoices.tsx (list view + filters)
2. Build Pricelist.tsx (עם features 1-4 שמוגדרים ב-PRICELIST_ROADMAP.md)
3. Build RecipeBuilder.tsx
4. Build SupplierView.tsx
5. Build MonthClose.tsx

**אחרי כל עמוד:**
- Screenshot ל-user
- קבל feedback
- Iterate
- Commit

---

## דוגמאות ספציפיות לבקש

**כשאתה מציג עמוד למשתמש:**

- "כאן Dashboard. אני השתמשתי בנתונים ריאליסטיים של 4 מסעדות ו-27 ספקים. תראה לי screenshot ותגיד מה לשנות."

**אל תגיד:**

- "סיימתי, תבדוק"
- "זה פרייקט נקי"
- "הכל עובד"

**כן תגיד:**

- "Dashboard מוכן עם X components. אני מצרף screenshot. מה תרצה לשנות?"
- "יש פה 3 החלטות עיצוב שאני לא בטוח בהן: [1] [2] [3]. איזו מעדיפה?"

---

## Commit Strategy

```bash
# אחרי כל עמוד שעובד + אישור:
git add .
git commit -m "feat(prototype): <page name> with mock data"

# דוגמאות:
# "feat(prototype): Dashboard with KPIs, activity feed, charts"
# "feat(prototype): Invoices inbox with workflow columns"
# "feat(prototype): Pricelist with usage column and catalog linking"
```

---

## שאלות שתבקש מהמשתמש

לפני שאתה מתחיל לקודד:

1. **האם יש לך screenshots של MarginEdge/Apicbase/Linear שתרצה שאחקה?**
2. **איזה פרויקט ל-clone ל-starter?**
   - Option A: Clean Vite + shadcn
   - Option B: github.com/satnaing/shadcn-admin (יש template מוכן)
3. **Dark mode - מיד, בעתיד, או בכלל לא?**
4. **איזה עמוד להתחיל בו?** המלצה: Dashboard

---

## הטון של הסוכן

- ענה בעברית אם המשתמש כתב בעברית
- **אל תסביר יתר על המידה** - עשה ותראה
- השתמש בתיאורים ויזואליים (ASCII art, emojis) לwireframes
- שאל לפני שאתה מתחיל - "זה מה שרצית?"
- אם לא בטוח - תעלה 2-3 אופציות למשתמש לבחור

---

**עכשיו תתחיל. קרא את DESIGN_PRINCIPLES.md ו-INSPIRATION.md, ואז שאל את השאלות שלמעלה.**
