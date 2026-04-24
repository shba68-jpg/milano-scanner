# Milano Prototype

Design prototype לאפליקציות POMO Group (Milano OS, Milano Bakery).
**לא מוצר production** - mock עיצובי עם נתוני דמה ריאליסטיים.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + RTL plugin
- shadcn/ui-style components (button, card, badge, separator)
- React Router v6
- Recharts, Lucide icons, date-fns, Zustand, TanStack Query

## הרצה

```bash
cd prototype
npm install
npm run dev
# http://localhost:5173
```

## Build

```bash
npm run build
npm run preview
```

## מבנה

```
src/
├── pages/              Dashboard, Invoices, Pricelist, Recipes, Suppliers, MonthClose
├── components/
│   ├── layout/         Sidebar (RTL right), TopBar, Layout wrapper
│   ├── common/         KPICard, StatusBadge, EmptyState
│   └── ui/             shadcn-style primitives
├── mock-data/          suppliers, products, invoices, recipes
├── lib/                utils (cn), format (currency, date)
├── App.tsx             React Router routes
└── main.tsx            Entry
```

## תיעוד

ראה `../docs/`:
- `DESIGN_PRINCIPLES.md` - עקרונות עיצוב (Money-First, RTL, data density)
- `INSPIRATION.md` - מקורות השראה (MarginEdge, Linear, Stripe)
- `SETUP_INSTRUCTIONS.md` - הוראות הקמה מקוריות

## מצב נוכחי

שלב 1 - פלטפורמה בלבד:
- Layout (Sidebar + TopBar) RTL עברית
- Routing לכל הדפים (placeholders)
- Mock data ריאליסטי

השלבים הבאים: Dashboard, Invoices, Pricelist, Recipes וכו'.
