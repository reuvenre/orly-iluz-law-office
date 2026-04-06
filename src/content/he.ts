import {
  Building2,
  FileSignature,
  KeyRound,
  Route,
  Scale,
  ScanSearch,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: "buyers" | "sellers" | "urban_renewal";
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
};

export type Testimonial = {
  name: string;
  text: string;
};

export type Content = {
  brand: {
    name: string;
    subtitle: string;
  };
  nav: { id: string; label: string }[];
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustBadges: string[];
  };
  services: {
    title: string;
    subtitle: string;
    items: Service[];
  };
  about: {
    title: string;
    subtitle: string;
    body: string[];
    highlights: { title: string; description: string; icon: LucideIcon }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    formNote: string;
    calendlyLabel: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
  };
  links: {
    calendlyUrl: string;
    whatsappNumberE164: string;
    whatsappPrefill: string;
    phoneTel: string;
    email: string;
    address: string;
  };
};

export const contentHe: Content = {
  brand: {
    name: "אורלי אילוז משרד עורכי דין",
    subtitle: "משרד בוטיק המתמחה בדיני מקרקעין, מיסוי מקרקעין וליטיגציה מסחרית",
  },
  nav: [
    { id: "services", label: "שירותים" },
    { id: "about", label: "אודות" },
    { id: "testimonials", label: "המלצות" },
    { id: "contact", label: "צור קשר" },
  ],
  hero: {
    headline: "ליווי משפטי — ללא פשרות.",
    subheadline:
      "רכישה, מכירה והתחדשות עירונית — עם אסטרטגיה משפטית חכמה, זמינות גבוהה, ותשומת לב לפרטים שמגנים עליכם באמת.",
    ctaPrimary: "הצטרפו לרשימת הלקוחות שלנו",
    ctaSecondary: "WhatsApp לשיחה מהירה",
    trustBadges: ["נדל״ן", "התחדשות עירונית", "ליווי אישי"],
  },
  services: {
    title: "תחומי התמחות",
    subtitle:
      "שירות משפטי ממוקד-תוצאה — עם תהליך ברור, שקיפות מלאה ומינימום הפתעות.",
    items: [
      {
        id: "buyers",
        title: "ליווי רוכשים",
        description:
          "בדיקות מקיפות, ניהול משא ומתן והגנה מלאה על האינטרסים שלכם — עד לקבלת המפתח.",
        bullets: [
          "בדיקת נסח, הערות אזהרה, חריגות ותכניות",
          "ניהול מו״מ והסכם רכישה",
          "ליווי עד רישום זכויות",
        ],
        icon: ScanSearch,
      },
      {
        id: "sellers",
        title: "ליווי מוכרים",
        description:
          "תמחור משפטי נכון, חוזה שמקטין סיכונים, ותיאום בין כל הגורמים — כדי לסגור עסקה בביטחון.",
        bullets: ["טיוטות והסכם מכר", "מנגנוני בטוחות ותשלומים", "ליווי עד מסירה"],
        icon: FileSignature,
      },
      {
        id: "urban_renewal",
        title: "התחדשות עירונית",
        description:
          "ייצוג דיירים מול יזמים — שמירה על זכויות, ליווי קבוצתי ומקצועיות ללא פשרות.",
        bullets: [
          "הסכמי התחדשות עירונית ובדיקת היזם",
          "הבטחת תמורות ובטוחות",
          "ליווי עד חתימות ומימוש",
        ],
        icon: Building2,
      },
    ],
  },
  about: {
    title: "קצת עלינו",
    subtitle:
      "משרד עורכי הדין אורלי אילוז מספק ייעוץ ושירות בתחום המקרקעין, מיסוי, משפט מסחרי, צוואות וירושות, הסכמי ממון ויפוי כח מתמשך.",
    body: [
      "ניסיון מקצועי ועשיר ורזומה של אלפי עסקאות והתדיינויות משפטיות בכל הערכאות בארץ — החל בהסכמי שכירות, הסכמי מכר יד שנייה, הסכמי קבלן יד ראשונה, עסקאות קומבינציה, מסחרי ופינוי בינוי.",
      "המקצועיות המשפטית, ביחד עם הידע והניסיון המסחרי הרב שצברה עו\"ד אילוז עם צוות משרדה, משתלבים יחדיו — החל מראשית ניהול המשא-ומתן ועד לשלב חתימת חוזה המכר וליווי צמוד עד השלמת הפרויקט.",
      "לעו\"ד אילוז ניסיון רב בתחום מיסוי מקרקעין, בעסקאות מורכבות ובמציאת פתרונות אפקטיביים ללקוחות פרטיים ועסקיים, תוך תכנון מס מקדים במטרה לחיסכון כלכלי. צוות משרדנו מיומן במיוחד בזיהוי מורכבויות משפטיות ובמציאת פתרונות לקידום יעדי לקוחותינו.",
    ],
    highlights: [
      {
        title: "דיוק ובקרה",
        description: "בדיקות עומק ותיעוד מסודר — בלי קיצורי דרך.",
        icon: ScanSearch,
      },
      {
        title: "תהליך ברור",
        description: "אבן דרך בכל שלב — עם שקיפות מלאה ותקשורת רציפה.",
        icon: Route,
      },
      {
        title: "ייצוג נחוש",
        description: "משא ומתן חכם שמגן עליכם ומקדם את העסקה.",
        icon: Scale,
      },
    ],
  },
  testimonials: {
    title: "לקוחות מספרים",
    subtitle: "הוכחה חברתית אמיתית — מהשטח.",
    items: [
      {
        name: "א׳, רכישת דירה",
        text: "ליווי צמוד, סבלנות, והרגשה שיש מי ששומר עלינו בכל רגע. הכל הוסבר בצורה ברורה ורגועה.",
      },
      {
        name: "מ׳, מכירת נכס",
        text: "ניהול מו״מ מקצועי והסכם שהחזיק מצוין מול כל האתגרים. התהליך היה מהיר ויעיל.",
      },
      {
        name: "נ׳, התחדשות עירונית",
        text: "ייצוג דיירים ברמה גבוהה, ירידה לפרטים ושמירה על הזכויות שלנו מול היזם. מומלץ בחום.",
      },
    ],
  },
  contact: {
    title: "צור קשר",
    subtitle: "השאירו פרטים ונחזור אליכם בהקדם, או תאמו פגישה בלחיצה.",
    formTitle: "השאירו פרטים",
    formNote:
      "לאחר השליחה תקבלו אישור מיידי. במקרי דחיפות מומלץ לפנות גם ב-WhatsApp.",
    calendlyLabel: "תיאום פגישה (Calendly)",
    phoneLabel: "טלפון",
    emailLabel: "מייל",
    addressLabel: "כתובת",
  },
  links: {
    calendlyUrl: "https://calendly.com/",
    whatsappNumberE164: "972528155531",
    whatsappPrefill: "שלום, אשמח לייעוץ בנושא עסקת נדל״ן.",
    phoneTel: "052-8155531",
    email: "orly@iluz-law.com",
    address: "רחוב הרוקמים 23, חולון (מגדל B-GREEN קומה 2)",
  },
};

