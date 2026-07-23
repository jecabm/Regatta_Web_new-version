/** Static Features-page copy (EN/AU + ES/CO), kept as plain data so it can be
 * imported both by the client component and by non-JSX tooling (seed scripts). */

export const subNavEn = [
  { href: "#overview", label: "Overview" },
  { href: "#asset-management", label: "Asset Management" },
  { href: "#inspection-management", label: "Inspection Management" },
  { href: "#multi-locations", label: "Multi Locations" },
  { href: "#reports", label: "Reports" },
  { href: "#mobile-app", label: "Offline Inspections" },
];

export const subNavEs = [
  { href: "#overview", label: "Resumen" },
  { href: "#asset-management", label: "Gestión de activos" },
  { href: "#inspection-management", label: "Gestión de inspecciones" },
  { href: "#multi-locations", label: "Múltiples ubicaciones" },
  { href: "#reports", label: "Informes" },
  { href: "#mobile-app", label: "Inspecciones sin conexión" },
];

export const heroEn = {
  badge: "Asset Management & Inspection Platform",
  title: "Powerful tools to simplify asset management.",
  subtitle:
    "Centralise your asset register, digitise inspections, and stay audit-ready across every site — one platform for construction, mining, transport and plant hire teams.",
  ctaPrimary: "Book a Demo",
  ctaSecondary: "View Features",
  trust:
    "Trusted by inspection and compliance teams across Australian construction, mining and logistics sites.",
};

export const heroEs = {
  badge: "Plataforma de Gestión de Activos e Inspecciones",
  title: "Herramientas potentes para simplificar la gestión de activos.",
  subtitle:
    "Centraliza tu registro de activos, digitaliza las inspecciones y mantente listo para auditorías en cada sitio — una sola plataforma para equipos de construcción, minería, transporte y arriendo de maquinaria.",
  ctaPrimary: "Solicitar demo",
  ctaSecondary: "Ver funciones",
  trust:
    "La confianza de equipos de inspección y cumplimiento en obras de construcción, minería y logística en toda Australia.",
};

export const closingCtaEn = {
  badge: "Get Started",
  title: "See it in action for your fleet.",
  subtitle:
    "Book a personalised walkthrough with our team and find out how Regatta Registers can simplify compliance across every site.",
  ctaPrimary: "Book a Demo",
  ctaSecondary: "View Features",
};

export const closingCtaEs = {
  badge: "Comenzar",
  title: "Míralo en acción con tu flota.",
  subtitle:
    "Reserva una demostración personalizada con nuestro equipo y descubre cómo Regatta Registers puede simplificar el cumplimiento en cada sitio.",
  ctaPrimary: "Solicitar demo",
  ctaSecondary: "Ver funciones",
};

export type TextSection = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  ctaLabel: string;
  reverse?: boolean;
};

export const sectionsEn: TextSection[] = [
  {
    id: "asset-management",
    eyebrow: "Asset Management",
    title: "Organise every asset from one central platform.",
    description:
      "Create, manage and monitor your equipment throughout its entire lifecycle. Keep inspection records, maintenance history and compliance status organised in a single, always-current register.",
    bullets: [
      "Centralised asset register across every site",
      "Custom inspection & maintenance templates",
      "Full asset history and audit trail",
      "Automatic compliance and renewal tracking",
      "Multi-site visibility from one dashboard",
    ],
    ctaLabel: "Explore Asset Management",
  },
  {
    id: "inspection-management",
    eyebrow: "Inspection Management",
    title: "Digitise every inspection, from pre-start to sign-off.",
    description:
      "Replace paper checklists with structured digital forms tailored to each asset type. Capture evidence on the spot and get an instant, auditable record every time.",
    bullets: [
      "Daily, monthly and annual inspection scheduling",
      "Digital checklists tailored to equipment type",
      "Photo evidence attached to every record",
      "Instant pass, fail or flag outcomes",
      "Automatic reminders before due dates",
      "Fully digital, paperless records",
    ],
    ctaLabel: "Explore Inspections",
    reverse: true,
  },
  {
    id: "multi-locations",
    eyebrow: "Multi Locations",
    title: "Manage every site from one platform.",
    description:
      "One platform to manage compliance across every site in your operation — from a single depot to a national enterprise fleet.",
    bullets: [
      "Switch between sites in seconds",
      "Consolidated compliance view across all locations",
      "Location-specific asset and inspection records",
      "Centralised reporting across your whole fleet",
      "Scales from a single depot to national operations",
    ],
    ctaLabel: "Explore Multi Locations",
  },
  {
    id: "reports",
    eyebrow: "Reports",
    title: "Turn inspection data into audit-ready reporting.",
    description:
      "Real-time dashboards surface compliance status across sites, while exportable reports give clients, auditors and regulators the evidence they need — without the spreadsheet chase.",
    bullets: [
      "Real-time compliance dashboards",
      "Exportable reports for audits and clients",
      "Inspection trends across sites and teams",
      "Overdue and upcoming inspection alerts",
      "Custom report templates",
    ],
    ctaLabel: "Explore Reports",
    reverse: true,
  },
  {
    id: "mobile-app",
    eyebrow: "Offline Inspections",
    title: "Built for the field, not just the office.",
    description:
      "Complete inspections from a job site, warehouse floor or mine pit — online or off. Designed for gloved hands, bright sunlight and patchy signal, with everything syncing automatically once you're back online.",
    bullets: [
      "Complete inspections online or offline",
      "Capture photos and notes on site",
      "Scan QR and barcode tags from your phone",
      "Syncs automatically when back online",
      "Built for gloved hands and outdoor conditions",
    ],
    ctaLabel: "Explore Offline Inspections",
  },
];

export const sectionsEs: TextSection[] = [
  {
    id: "asset-management",
    eyebrow: "Gestión de activos",
    title: "Organiza todos tus activos desde una sola plataforma.",
    description:
      "Crea, gestiona y supervisa tus equipos durante todo su ciclo de vida. Mantén los registros de inspección, el historial de mantenimiento y el estado de cumplimiento organizados en un único registro siempre actualizado.",
    bullets: [
      "Registro de activos centralizado en todos los sitios",
      "Plantillas personalizadas de inspección y mantenimiento",
      "Historial completo de activos y trazabilidad para auditorías",
      "Seguimiento automático de cumplimiento y renovaciones",
      "Visibilidad multi-sitio desde un solo panel",
    ],
    ctaLabel: "Explorar gestión de activos",
  },
  {
    id: "inspection-management",
    eyebrow: "Gestión de inspecciones",
    title: "Digitaliza cada inspección, desde el pre-uso hasta la firma final.",
    description:
      "Reemplaza los checklists en papel con formularios digitales estructurados y adaptados a cada tipo de activo. Captura evidencia en el momento y obtén un registro instantáneo y auditable cada vez.",
    bullets: [
      "Programación de inspecciones diarias, mensuales y anuales",
      "Checklists digitales adaptados al tipo de equipo",
      "Evidencia fotográfica adjunta a cada registro",
      "Resultados instantáneos de aprobado, rechazado o alerta",
      "Recordatorios automáticos antes de las fechas límite",
      "Registros totalmente digitales, sin papel",
    ],
    ctaLabel: "Explorar inspecciones",
    reverse: true,
  },
  {
    id: "multi-locations",
    eyebrow: "Múltiples ubicaciones",
    title: "Gestiona cada sitio desde una sola plataforma.",
    description:
      "Una plataforma para gestionar el cumplimiento en cada sitio de tu operación — desde un solo depósito hasta una flota empresarial a nivel nacional.",
    bullets: [
      "Cambia entre sitios en segundos",
      "Vista consolidada de cumplimiento en todas las ubicaciones",
      "Registros de activos e inspecciones específicos por ubicación",
      "Informes centralizados de toda tu flota",
      "Escala desde un solo depósito hasta operaciones nacionales",
    ],
    ctaLabel: "Explorar múltiples ubicaciones",
  },
  {
    id: "reports",
    eyebrow: "Informes",
    title: "Convierte los datos de inspección en informes listos para auditorías.",
    description:
      "Los paneles en tiempo real muestran el estado de cumplimiento en todos los sitios, mientras que los informes exportables brindan a clientes, auditores y reguladores la evidencia que necesitan, sin perseguir hojas de cálculo.",
    bullets: [
      "Paneles de cumplimiento en tiempo real",
      "Informes exportables para auditorías y clientes",
      "Tendencias de inspección por sitio y equipo",
      "Alertas de inspecciones vencidas y próximas",
      "Plantillas de informes personalizadas",
    ],
    ctaLabel: "Explorar informes",
    reverse: true,
  },
  {
    id: "mobile-app",
    eyebrow: "Inspecciones sin conexión",
    title: "Diseñado para el terreno, no solo para la oficina.",
    description:
      "Completa inspecciones desde una obra, una bodega o un rajo minero — con o sin conexión. Diseñado para manos con guantes, luz solar intensa y señal intermitente, con sincronización automática al volver a conectarte.",
    bullets: [
      "Completa inspecciones con o sin conexión",
      "Captura fotos y notas en terreno",
      "Escanea etiquetas QR y de código de barras desde tu teléfono",
      "Se sincroniza automáticamente al reconectarte",
      "Diseñado para manos con guantes y condiciones exteriores",
    ],
    ctaLabel: "Explorar inspecciones sin conexión",
  },
];
