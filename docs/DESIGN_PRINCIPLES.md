# Milano Design Principles

> עקרונות עיצוב מרכזיים לכל אפליקציות של POMO Group (Milano OS, Milano Bakery, Napo Kitchen, Milano Orders, Milano Scanner).

---

## 1. העיקרון המוביל: Money-First

המשתמש הוא **מסעדן** שמסתכל על הנתונים כדי לקבל החלטות כספיות.
**כל** דבר במערכת צריך להדגיש את ההיבט הכספי:

- סכום כסף תמיד בולט (גודל, צבע, מיקום)
- שינויים במחיר תמיד מוצגים (אחוז, כיוון, היסטוריה)
- "כמה זה עולה לי" = השאלה שצריך לענות עליה בכל עמוד

### דוגמה טובה:
```
פריט: עגבנייה
מחיר: ₪12.50/ק"ג  🔺 +8% מהחודש שעבר
היסטוריה: [sparkline chart]
```

### דוגמה רעה:
```
פריט: עגבנייה
SKU: VEG-123
Added: 12/04/2026
Description: Fresh tomatoes from supplier
Price: 12.50
```

---

## 2. עברית ו-RTL native

זה **לא תרגום** לעברית. זה עיצוב **עבור** עברית.

### Font
- **Heebo** (Google Fonts) - weights 400, 500, 600, 700
- Roboto Mono ל-SKUs, מספרים טכניים

### כיוון
- `dir="rtl"` על ה-html
- Tailwind RTL plugin
- אייקונים של חיצים: → הופך ל-← (Tailwind: `rtl:rotate-180`)

### מספרים
- מספרים LTR בתוך RTL: `<span dir="ltr">₪1,234.56</span>`
- טבלאות: עמודת מספרים תמיד בצד שמאל (LTR-aligned)
- תאריכים: 23/04/2026 (dd/mm/yyyy, לא ISO)

---

## 3. Data Density

מסעדנים רואים הרבה נתונים. אל תעשה את העמוד אוורירי מדי.

### Guidelines
- טבלה: 15-20 שורות בלי scroll
- Padding בתאים: `py-2 px-3` (לא `py-4 px-6`)
- Font size: 14px לcontent, 13px ל-mono (SKUs), 12px לsecondary
- Line height: 1.4 (לא 1.6)
- Gap בין sections: 16-24px (לא 48px)

### Compact mode (אופציונלי)
אפשר כפתור "מצב דחוס" שמקטין spacing עוד יותר ל-power users.

---

## 4. Fast Scanning - עיניים של מסעדן

מסעדן מסתכל על המסך לשניות, לא דקות. עזור לו לקלוט מיד.

### Status Colors
- 🟢 ירוק: OK, approved, on track
- 🟡 צהוב: attention, pending, warning
- 🔴 אדום: problem, rejected, over budget
- 🔵 כחול: info, draft
- ⚪ אפור: neutral, archived

### Visual Weight Hierarchy
1. **כסף** - גודל גדול, bold
2. **שם עיקרי** - bold, גודל regular
3. **מידע משני** - regular, אפור
4. **Metadata** - קטן, אפור בהיר

### דוגמה:
```
[🟢 אושר]  ד.י.ט.ב.                          ₪1,234.56
          מזון ומסחר בע"מ                     23/04/2026
                                              12 פריטים
```

---

## 5. Zero States כהזדמנות

כשאין נתונים, אל תכתוב "אין נתונים" או "Empty".
זו הזדמנות להוביל את המשתמש לפעולה.

### דוגמאות טובות:

**אין חשבוניות בinbox:**
```
📭 אין חשבוניות חדשות
   כל הכבוד! כל החשבוניות שלך מטופלות.
   
   [העלה חשבונית חדשה →]
```

**אין מתכונים:**
```
📋 עוד אין מתכונים בקטלוג
   בוא נבנה את הראשון - 5 דקות עבודה.
   
   [צור מתכון חדש →]
```

**אין התראות מחיר:**
```
🎯 אין התראות מחיר כרגע
   המערכת עוקבת אחר 23 פריטים שהגדרת.
   
   [הגדר התראות נוספות →]
```

---

## 6. Progressive Disclosure

אל תציג הכל בבת אחת. תן למשתמש להעמיק כשהוא רוצה.

### רמות:
1. **List view** - summary בלבד (5-6 עמודות עיקריות)
2. **Side drawer** - פרטים + actions (לא יציאה מהעמוד)
3. **Detail page** - הכל על הפריט (navigation חדשה)

### דוגמה - Invoice:
1. **List**: סטטוס, ספק, סכום, תאריך, [פרטים]
2. **Drawer**: + פריטים, שיוך מסעדה, notes, documents
3. **Page**: + היסטוריית שינויים, line-item changes, related invoices

---

## 7. Actions מותאמות למצב

לא כל כפתור צריך להיות זמין תמיד.

### Patterns:

**Disable** אם action לא הגיוני:
- "אשר חשבונית" disabled אם status != pending
- "מחק פריט" disabled אם יש usage > 0 + tooltip הסבר

**Hide** אם לא רלוונטי:
- "Revert" לא מופיע על item חדש
- "Close month" לא מופיע אם החודש כבר סגור

**Confirm** לactions destructive:
- מחיקה → "האם אתה בטוח? זה לא יחזור."
- Bulk operations → "מחק 15 פריטים?"

---

## 8. Keyboard Shortcuts

כוח משתמשים שוחקים הרבה שעות במערכת. קיצורי מקשים חוסכים זמן.

### Global Shortcuts:
- `Cmd/Ctrl + K` - Command palette (חיפוש + פעולות)
- `Cmd/Ctrl + /` - קיצורי מקשים זמינים
- `G` + letter - Navigation (G+I = Invoices, G+R = Recipes)
- `?` - Help
- `Esc` - סגור modal/drawer

### Context Shortcuts (בתוך עמוד):
- `N` - New (item, invoice, וכו')
- `E` - Edit selected
- `D` - Delete selected (עם confirm)
- `A` - Approve
- `R` - Reject
- `J/K` - הבא/קודם בטבלה

---

## 9. Loading States - Skeleton, לא Spinners

Spinners אומרים "חכה, אין לי מושג כמה זמן".
Skeletons אומרים "זה בא".

### דוגמה:

**רע:**
```
[Spinner 🔄 Loading...]
```

**טוב:**
```
┌──────────────────────────┐
│ ░░░░░░░░░  ░░░░░  ░░░░  │
│ ░░░░░░░  ░░░░░░░░  ░░░░ │
│ ░░░░░░░░░░░  ░░░░░  ░░░ │
└──────────────────────────┘
```

(גישות: shadcn/ui יש skeleton components)

---

## 10. Optimistic Updates

אל תיתן למשתמש לחכות. עדכן את ה-UI מיד, ואם הbackend נכשל - תחזיר.

### דוגמה:
```javascript
// Click "Approve" on invoice
setInvoiceStatus(id, 'approved');  // UI updates instantly

try {
  await api.approveInvoice(id);
} catch (err) {
  setInvoiceStatus(id, 'pending');  // revert
  showToast('אישור נכשל, נסה שוב');
}
```

---

## הbase stack של Milano

### חובה:
- **React 18+** (functional components, hooks)
- **TypeScript** (strict mode)
- **Vite** (build)
- **Tailwind CSS** (styling, utility-first)
- **shadcn/ui** (components base)

### רכיבים אופציונליים:
- **TanStack Query** (data fetching + cache)
- **Zustand** (state management - פשוט יותר מ-Redux)
- **Recharts** (charts)
- **date-fns** (תאריכים בעברית)
- **Lucide Icons** (אייקונים עקביים)

### אסור:
- ❌ Bootstrap
- ❌ Material UI / Ant Design
- ❌ jQuery
- ❌ CSS-in-JS (styled-components וכו')

---

## תהליך עבודה של סוכן

כשאתה בונה דף חדש:

1. **קרא את INSPIRATION.md ו-DESIGN_PRINCIPLES.md** (ואם יש - screenshots בassets/inspiration/)
2. **שאל על mock data** - איזה שמות ספקים, פריטים, סכומים?
3. **תכן מבנה** - רשום מה יהיה בעמוד (title, sidebar, cards, table...)
4. **הצג למשתמש wireframe** (ASCII art או תיאור) - קבל אישור
5. **בנה עמוד אחד במלואו** (לא חלקים)
6. **בדוק RTL** - טעין בעברית, ודא שהכל נראה נכון
7. **screenshot למשתמש** - הוא יגיד אם אוהב
8. **iteration** - עדיין לפידבק
9. **commit**

### מה לא לעשות:
- ❌ אל תתחיל לקודד בלי תכנון
- ❌ אל תבנה 5 דפים בבת אחת
- ❌ אל תתעלם מ-RTL
- ❌ אל תשתמש ב-Lorem ipsum (השתמש בנתונים ריאליסטיים)
- ❌ אל תמציא סגנון אישי - דבק ב-design system
