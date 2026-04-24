# Milano Design System - Inspiration Board

> מסמך זה משמש כבסיס ויזואלי וקונספטואלי לעיצוב האפליקציות של POMO Group.
> כל סוכן שעובד על UI של Milano חייב לקרוא מסמך זה לפני שהוא כותב קוד.

---

## המטרה של Milano OS

Milano OS הוא מוצר פיננסי למסעדות ישראליות. המשתמש העיקרי - מסעדן/מנהל מסעדה - רוצה לדעת בדיוק:

1. **כמה עולה לו כל פריט** (ועלה או ירד לאחרונה)
2. **כמה הוא מוציא על כל ספק** (ומה השינוי מחודש קודם)
3. **כמה עולה לייצר כל מנה** (ומה שולי הרווח)
4. **מה הסטטוס של סגירת החודש** (מה חסר, מה בעייתי)

**ההשראה הראשית:** MarginEdge - מוצר אמריקאי שפותר את אותה בעיה. 
**ההשראה העיצובית:** Linear (SaaS מודרני), Stripe Dashboard (נתונים פיננסיים).

---

## MarginEdge - המתחרה הישיר (ארה"ב)

### מה הם עושים היטב

**1. Dashboard מסוג "Manager's View"**
- KPIs גדולים בראש: Food Cost %, Labor %, Sales Today
- השוואה ליום/שבוע/חודש קודם (trend arrows)
- Alerts מרכזיים: "3 מחירים עלו מעל הסף שהגדרת"
- Quick actions: "העלה חשבונית", "אשר חשבוניות ממתינות"

**2. Invoice Inbox - Workflow מובנה**
- Columns: New → Review → Approved → Posted
- Status badges צבעוניים לכל שורה
- Drag & drop בין stages (או כפתור "Approve" מהיר)
- Bulk approve multiple invoices

**3. Price Movers**
- טבלה של "פריטים שעלו/ירדו בשבוע האחרון"
- Visual: ירוק/אדום, אחוז שינוי, sparkline
- Click → רואה היסטוריה מלאה של המחיר + חשבוניות שהשפיעו

**4. Recipe Costing**
- BOM עם עלות מחושבת אוטומטית מחומרי גלם
- Margin indicators (% רווח על המנה)
- "מה הכי רווחי?" dashboard

**5. Mobile App**
- צילום חשבונית מהטלפון → אוטומטית נכנסת לreview
- Approve/reject מהטלפון

### מה להעתיק ב-Milano

- ✅ Dashboard KPI cards בראש
- ✅ Invoice workflow columns (pending/review/approved)
- ✅ Price alerts + thresholds
- ✅ Recipe costing עם margin
- ✅ Side drawer לcontact details במקום modal

### מה לא להעתיק

- ❌ UI שלהם לא מספיק חדש (המשתמשים שלהם מתלוננים על זה ב-reviews)
- ❌ הם אנגלית בלבד, אנחנו עברית/RTL
- ❌ הם מחוברים ל-POS אמריקאי, אנחנו לא

---

## Apicbase - Recipe Management (אירופה)

### מה הם עושים היטב

**1. Recipe Builder ויזואלי**
- Drag & drop של ingredients
- תמונות לכל מרכיב
- Yield calculator (אם יש 100g בחשבונית, כמה נטו אחרי בישול?)
- Allergens + nutrition labels אוטומטיים

**2. Cost Breakdown Visualization**
- Pie chart של עלויות לפי מרכיב
- Waste tracking (כמה אובדן בפועל)
- Price sensitivity (אם עגבנייה תעלה 10%, המנה תעלה X%)

**3. Multi-location Support**
- אותה מתכון, מחירים שונים לפי מיקום
- Central kitchen → distribution locations

### מה להעתיק ב-Milano

- ✅ תמונות למרכיבים
- ✅ Cost breakdown visualization
- ✅ Multi-location (אצלך יש 4-5 מסעדות)

### מה לא

- ❌ Nutrition labels (לא רלוונטי לקונדיטוריה ב-MVP)
- ❌ המידה נפרד של UI (אנחנו יותר קרובים ל-MarginEdge)

---

## Linear - סטנדרט של SaaS מודרני

זה לא restaurant management אבל זה הרף העיצובי שכל SaaS ב-2026 שואף אליו.

### מה הם עושים היטב

**1. Navigation קומפקטית**
- Sidebar צר עם אייקונים + labels
- Collapsible per אזור
- Top bar פשוט עם search + notifications

**2. Command Palette (Cmd+K)**
- פתיחה של כל פעולה דרך keyboard
- חיפוש גלובלי (files, items, users)
- Fast actions (createinvoice, approve, וכו')

**3. Keyboard Shortcuts**
- G+I = Go to Invoices
- G+R = Go to Recipes
- C = Create new
- / = Search

**4. Empty States**
- לא "אין נתונים"
- כן "העלה את החשבונית הראשונה שלך" + CTA button

**5. Loading States**
- Skeleton loaders (לא spinners)
- Optimistic updates (UI מעדכן מיד, מתקן אם failed)

### מה להעתיק ב-Milano

- ✅ Sidebar navigation כמוהם
- ✅ Command palette (Cmd+K)
- ✅ Keyboard shortcuts
- ✅ Empty states עם CTAs
- ✅ Skeleton loading

---

## Stripe Dashboard - נתונים פיננסיים

### מה הם עושים היטב

**1. Number Formatting**
- סכומים גדולים ברורים (₪1,245.50 לא ₪1245.5)
- Alignment של מספרים תמיד ימין
- Hierarchy: סכום גדול > טקסט > פרטים

**2. Status Badges**
- Succeeded (ירוק)
- Pending (צהוב)
- Failed (אדום)
- Refunded (אפור)

**3. Timeline Views**
- חשבונית spans לאורך זמן
- אירועים על timeline (created → processed → approved → paid)

**4. Drill-down**
- Click על שורה בטבלה → side drawer
- drawer מציג detail + actions
- לא יציאה מהעמוד הנוכחי

### מה להעתיק

- ✅ Number formatting (עם שקל)
- ✅ Status badges אחידים
- ✅ Timeline view של חשבוניות
- ✅ Side drawers במקום navigation

---

## דוגמאות מ-Dribbble / Behance

**Sedap Modern Restaurant Admin Dashboard** (dribbble/figma)
- עיצוב dashboard עם pink/orange accent
- Cards יפים
- Charts נקיים

**Restaurant Inventory Management** (dribbble)
- Stock levels visualization
- Supplier management
- Order tracking

**כללי:** לא להעתיק 1:1, אבל לאמץ patterns ולסגנון.

---

## עקרונות עיצוב Milano (השתקפות)

### 1. Money-First
כסף הוא המידע הכי חשוב בכל עמוד. תמיד:
- בצד שמאל של שורה (RTL = attention spot)
- בגודל גדול יותר
- עם סימון + או - אם יש שינוי
- עם צבע: ירוק לרווח, אדום להפסד, אפור לניטרלי

### 2. RTL-Native
לא "תרגום לעברית" - עיצוב עבור עברית:
- פונט עברי: **Heebo** (Google Fonts)
- מספרים LTR בתוך RTL
- טבלאות: עמודות מספרים בצד שמאל
- Navigation: sidebar בצד ימין
- אייקונים שמורים על כיוונם (חץ →ל→)

### 3. Data Density
מסעדנים עוברים על הרבה נתונים. לא להרגיע את העמוד:
- 15-20 שורות בטבלה בלי scroll
- Spacing: py-2, px-3 (דחוס)
- Font: 14px לcontent, 12px לsecondary
- Compact mode אופציונלי

### 4. Fast Scanning
העיניים קולטות מידע תוך שניות. עזור להן:
- Status badges בצבעים ברורים
- Icons כקיצורים (🟢 = OK, 🟡 = attention, 🔴 = problem)
- Bold על מספרים חשובים
- Hover states לspecifics

### 5. Zero-State Guidance
כשאין נתונים, אל תכתוב "אין נתונים":
- "עדיין לא העלית חשבוניות החודש. [העלה חשבונית →]"
- "כל המתכונים שלך כאן יופיעו. [צור מתכון →]"

### 6. Progressive Disclosure
אל תציג הכל בבת אחת:
- טבלה → summary info בלבד
- Click → side drawer עם פרטים
- Click on drawer → full detail page

---

## דוגמאות ל-UI Patterns ספציפיים

### Pattern 1: KPI Card (Dashboard)

```
┌─────────────────────────────┐
│ עלות מזון השבוע              │
│                              │
│        ₪34,521.50            │
│                              │
│ 📈 +12.4% מהשבוע שעבר        │
│ [▓▓▓▓▓▓░░░░] יעד: 30%        │
└─────────────────────────────┘
```

מה חשוב:
- כותרת ברורה למעלה
- מספר גדול במרכז (24px+)
- השוואה למחזור קודם
- Progress bar אם יש יעד
- צבע: ירוק/אדום/ניטרלי

### Pattern 2: Invoice Row (Inbox)

```
┌─────────────────────────────────────────────────────────────┐
│ [🟢 Approved] | ד.י.ט.ב.  | ₪1,234.56 | 23/04 | [פרטים >]  │
└─────────────────────────────────────────────────────────────┘
```

מה חשוב:
- Status badge בצד ימין (התחלה של שורה RTL)
- Vendor name bold
- Amount צד שמאל (ltr number in rtl layout)
- Date קצר
- Click → side drawer

### Pattern 3: Data Table Header

```
┌──────┬────────┬──────────┬──────────┬────────┬─────────┐
│ ▼ SKU │ שם פריט │ ▲ ספק    │ מחיר/ק"ג │ 📊 שינוי │ [פעולה]│
└──────┴────────┴──────────┴──────────┴────────┴─────────┘
```

מה חשוב:
- Sort arrows (▲▼) על כותרות
- אפשרות לסנן/לחפש בראש טבלה
- Sticky header על scroll
- Bulk select checkbox בצד ימין

### Pattern 4: Side Drawer

```
┌─────────────────────────────────────┐
│ [X] פרטי חשבונית 2037840068         │
├─────────────────────────────────────┤
│ ספק: ד.י.ט.ב. מזון ומסחר בע"מ       │
│ תאריך: 20/04/2026                   │
│ סכום: ₪1,234.56                     │
│                                     │
│ [סקירה] [פריטים] [היסטוריה] [מסמכים]│
│                                     │
│ ...                                 │
│                                     │
├─────────────────────────────────────┤
│ [ביטול]           [אשר ושמור]       │
└─────────────────────────────────────┘
```

מה חשוב:
- נפתח מצד שמאל (ב-RTL זה right slide-out)
- X למעלה לסגירה
- כותרת ברורה
- Tabs לחלוקה
- Actions בתחתית, sticky

---

## שפת הצבעים של Milano

```
Primary (Milano Green):  #2E7D32  (לbrand, CTAs ראשיים)
Secondary:               #F57C00  (אקסנט, פעולות משניות)

Status:
- Success (ירוק):  #16A34A
- Warning (כתום):  #EA580C
- Danger (אדום):   #DC2626
- Info (כחול):     #2563EB
- Neutral (אפור):  #6B7280

Background:
- Page:     #F9FAFB (אפור בהיר מאוד)
- Card:     #FFFFFF
- Hover:    #F3F4F6
- Selected: #EEF2FF

Text:
- Primary:   #111827
- Secondary: #6B7280
- Disabled:  #9CA3AF
```

---

## Typography

```
Font: Heebo (Google Fonts)
Weights: 300, 400, 500, 600, 700

Scale:
- h1: 32px, weight 700 (כותרות עמוד)
- h2: 24px, weight 600 (sections)
- h3: 20px, weight 600 (KPI numbers גדולים)
- body: 14px, weight 400 (טקסט רגיל)
- small: 12px, weight 400 (תיאורים, timestamps)
- mono: 13px, Roboto Mono (לSKUs, numbers ב-tables)
```

---

## Spacing System

```
Base unit: 4px

XS: 4px   (gap בין labels לinputs)
SM: 8px   (gap בין אלמנטים קטנים)
MD: 16px  (gap בין sections בdisplay)
LG: 24px  (gap בין sections גדולים)
XL: 32px  (gap בין blocks מרכזיים)
2XL: 48px (page padding)
```

---

## שלב מומלץ לפיתוח

### Phase 1: Prototype (שבוע-שבועיים)
- פרויקט חדש: `C:\milano-prototype`
- React + Vite + TypeScript + Tailwind + shadcn/ui
- Mock data
- 5-7 דפים עיקריים

### Phase 2: Component Library (שבוע)
- חילוץ components מהprototype
- Storybook או similar
- תיעוד

### Phase 3: Migration (שבועות)
- milano-os וmilano-bakery מייבאים מהlibrary
- עמוד-עמוד החלפת UI

---

## דפים שצריך לבנות ב-Prototype

### 1. Manager Dashboard
```
┌──────┬──────────────────────────────────────────────┐
│      │ [🏠 דשבורד]                  🔔 @שהר ▼       │
│ POMO │                                              │
│      │ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ │
│ 🏠   │ │ עלות   │ │ מכירות │ │סגירת חודש│ │התראות│ │
│ 📧   │ │₪34,521 │ │₪124,000│ │  82%    │ │   3   │ │
│ 📊   │ └────────┘ └────────┘ └────────┘ └────────┘ │
│ 🏷️   │                                              │
│ 👤   │ Recent Activity:                             │
│ ⚙️   │ - 3 חשבוניות חדשות ממתינות                  │
│      │ - ₪234 עליה במחיר של דלעת (12% יותר)       │
│      │                                              │
└──────┴──────────────────────────────────────────────┘
```

### 2. Invoice Inbox
Workflow columns: Pending (חדש) → Review (בבדיקה) → Approved (מאושר)

### 3. Invoice Detail (Side Drawer)
פתיחה מטבלה, מראה line items, היסטוריית מחירים, documents.

### 4. Pricelist / Catalog
הפיצ'רים שכבר תכננת: usage_count, linking, delete, add.

### 5. Recipe Builder
BOM עם עלויות חיות, drag & drop מרכיבים, margin calc.

### 6. Supplier View
לכל ספק: contact, היסטוריית חשבוניות, מחירים משתנים, top products.

### 7. Month Close
Workflow של סגירת חודש: ready / pending / issues / approved.

### 8. Price Movers / Alerts
רשימת פריטים שעלו/ירדו, עם sparklines, triggers.

---

## הוראות לסוכן קוד

כשאתה מקבל משימה לבנות UI עבור Milano:

1. **קרא מסמך זה במלואו**
2. **התבונן ב-screenshots** של MarginEdge/Apicbase/Linear (תיקייה assets/inspiration/)
3. **השתמש בpatterns שתועדו** (KPI Card, Invoice Row, Side Drawer, וכו')
4. **שמור על design system** (צבעים, fonts, spacing)
5. **תבדוק RTL** - כל עמוד חייב לעבוד נכון בעברית
6. **Mock data ריאליסטי** - לא "Lorem ipsum" אלא שמות ספקים אמיתיים, מספרי חשבוניות, מחירים הגיוניים
7. **בדיקה ויזואלית** לפני commit - דרוש מהמשתמש לראות screenshot ולאשר

### אסור

- ❌ Bootstrap, Material UI, או framework אחר. רק shadcn/ui + Tailwind.
- ❌ חריגה מהcolor palette
- ❌ פונטים אחרים
- ❌ Hardcoded RTL hacks - השתמש ב-Tailwind RTL plugin
- ❌ Modal popups (השתמש ב-Side Drawer)
