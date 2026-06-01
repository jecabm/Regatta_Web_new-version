import type { CountryContent } from "@/content/countries/types";

/** Colombia — Español, COP. */
export const coContent: CountryContent = {
  code: "co",
  locale: "es-CO",
  currency: "COP",
  dictionary: {
    nav: { home: "Inicio", about: "Nosotros", pricing: "Precios", contact: "Contacto" },
    actions: {
      login: "Iniciar sesión",
      freeTrial: "Prueba gratis",
      startFreeTrial: "Comenzar prueba gratis",
      viewPricing: "Ver precios",
    },
    hero: {
      badge: "Activos · Inspecciones · Cumplimiento",
      titleLead: "Gestiona tus activos, inspecciones y",
      titleHighlight: "cumplimiento",
      titleTrail: "en un solo lugar seguro",
      subtitle:
        "Una plataforma en la nube para la gestión de equipos de izaje, activos e inspecciones de flotas en minería, construcción y cumplimiento industrial.",
    },
    pricing: {
      eyebrow: "Precios",
      title: "Precios simples y transparentes que crecen contigo",
      subtitle:
        "Desde inspectores individuales hasta despliegues en toda la organización con personalización completa.",
      perMonth: "/mes",
      custom: "Personalizado",
      mostPopular: "Más popular",
      note: "Todos los precios en COP. Sin costos de instalación. Cancela cuando quieras.",
    },
    footer: {
      tagline:
        "Gestión de activos, inspecciones y cumplimiento para entornos de minería, construcción e industria.",
      groups: { product: "Producto", company: "Compañía", account: "Cuenta" },
      links: {
        overview: "Resumen",
        pricing: "Precios",
        freeTrial: "Prueba gratis",
        about: "Nosotros",
        contact: "Contacto",
        login: "Iniciar sesión",
      },
      rights: "Todos los derechos reservados.",
      builtFor: "Hecho para el cumplimiento industrial.",
    },
    selector: { label: "Seleccionar país" },
  },
  pricing: {
    tiers: [
      {
        id: "standard",
        name: "Estándar",
        description: "Para inspectores individuales que comienzan.",
        amount: 129000,
        features: [
          "1 usuario",
          "Registro de activos",
          "Programación de inspecciones",
          "Importación CSV",
        ],
        cta: "Comenzar prueba gratis",
      },
      {
        id: "pro",
        name: "Pro",
        description: "Para equipos de inspección en crecimiento.",
        amount: 529000,
        features: [
          "6 usuarios",
          "Todo lo de Estándar",
          "Formularios personalizados",
          "Alertas de cumplimiento automáticas",
          "Soporte prioritario",
        ],
        cta: "Comenzar prueba gratis",
        popular: true,
      },
      {
        id: "enterprise",
        name: "Empresarial",
        description: "Para despliegues en toda la organización.",
        amount: null,
        features: [
          "Usuarios ilimitados",
          "Todo lo de Pro",
          "Personalización completa",
          "SSO y seguridad avanzada",
          "Gerente de éxito dedicado",
        ],
        cta: "Contactar ventas",
      },
    ],
  },
  contact: {
    region: "Colombia",
    phone: "+57 1 000 0000",
    email: "soporte@regattaregisters.com",
    address: "Bogotá, Colombia",
  },
  home: {
    why: {
      eyebrow: "Por qué Regatta Registers",
      title: "Todo lo que tu equipo de cumplimiento necesita",
      subtitle:
        "Centraliza activos, automatiza inspecciones y mantente listo para auditorías en cada sitio.",
      items: [
        {
          title: "Gestión centralizada",
          description:
            "Administra todos los activos, registros y registros de inspección en un sistema seguro.",
        },
        {
          title: "Visibilidad en tiempo real",
          description:
            "Conoce el estado en vivo de cada activo e inspección de un vistazo.",
        },
        {
          title: "Gestión de activos y flotas",
          description:
            "Controla equipos, flotas y componentes en múltiples sitios.",
        },
        {
          title: "Cumplimiento automatizado",
          description:
            "Nunca pierdas una inspección con programación y alertas automáticas.",
        },
      ],
    },
    how: {
      eyebrow: "Cómo funciona",
      title: "En marcha en seis pasos",
      subtitle:
        "Sin costos de instalación. Importa tus registros existentes y crece a tu ritmo.",
      steps: [
        { title: "Sin costos de instalación", description: "Empieza gratis, sin cuotas iniciales ni hardware." },
        { title: "Configura tu estructura", description: "Configura tus sitios, tipos de activos y equipos." },
        { title: "Formularios personalizados", description: "Crea formularios de inspección según tus procedimientos." },
        { title: "Escala tus activos", description: "Agrega activos de forma individual o masiva a medida que creces." },
        { title: "Controla e inspecciona", description: "Programa, asigna y completa inspecciones en cualquier dispositivo." },
        { title: "Importa tus datos", description: "Trae tus registros actuales mediante importación CSV." },
      ],
    },
    industries: {
      eyebrow: "Industrias",
      title: "Hecho para entornos pesados y regulados",
      subtitle: "Con la confianza de las industrias donde el cumplimiento no puede fallar.",
      items: [
        { title: "Minería", description: "Registros de activos e inspecciones para minas exigentes." },
        { title: "Construcción", description: "Mantén la maquinaria y los equipos en cumplimiento en cada proyecto." },
        { title: "Equipos de izaje", description: "Gestiona grúas, eslingas y aparejos con trazabilidad completa." },
        { title: "Cumplimiento industrial", description: "Estandariza registros y mantente listo para auditorías." },
      ],
    },
    cta: {
      title: "¿Listo para tomar el control de tu cumplimiento?",
      subtitle: "Comienza tu prueba gratis hoy, sin tarjeta de crédito.",
      primary: "Comenzar prueba gratis",
      secondary: "Solicitar demo",
    },
  },
  about: {
    eyebrow: "Nosotros",
    title: "Hecho para la realidad del cumplimiento industrial",
    intro:
      "Regatta Registers ayuda a las operaciones con muchos activos a reemplazar el papel y las hojas de cálculo con un único sistema, listo para auditorías, de activos, inspecciones y cumplimiento.",
    mission: {
      title: "Nuestra misión",
      body:
        "Hacer que el cumplimiento sea sencillo para las industrias que mueven el mundo, para que los equipos dediquen menos tiempo a tareas administrativas y más a un trabajo seguro y productivo.",
    },
    stats: [
      { value: "10k+", label: "Activos gestionados" },
      { value: "98%", label: "Inspecciones a tiempo" },
      { value: "4", label: "Industrias atendidas" },
      { value: "24/7", label: "Acceso seguro" },
    ],
    values: {
      title: "Lo que defendemos",
      items: [
        { title: "Cumplimiento primero", description: "Cada función está diseñada para mantenerte listo para auditorías." },
        { title: "Hecho para el campo", description: "Rápido, simple y confiable en cualquier dispositivo, donde sea." },
        { title: "Seguro por diseño", description: "Tus registros están protegidos con seguridad de nivel empresarial." },
      ],
    },
    cta: {
      title: "Hablemos de tu operación",
      subtitle: "Descubre cómo Regatta Registers se adapta a tu flujo de cumplimiento.",
      primary: "Solicitar demo",
      secondary: "Ver precios",
    },
  },
  contactPage: {
    eyebrow: "Contacto",
    title: "Habla con el equipo de Regatta Registers",
    subtitle:
      "¿Preguntas sobre implementación, flujos de cumplimiento o precios? Estamos para ayudarte.",
    form: {
      name: "Nombre completo",
      company: "Empresa",
      email: "Correo corporativo",
      message: "¿Cómo podemos ayudarte?",
      submit: "Enviar mensaje",
      success: "Gracias, nos pondremos en contacto pronto.",
    },
    detailsTitle: "Datos de la empresa",
    channelsTitle: "Canales de soporte",
  },
  auth: {
    login: {
      title: "Bienvenido de nuevo",
      subtitle: "Inicia sesión para gestionar tus activos e inspecciones.",
      email: "Correo electrónico",
      password: "Contraseña",
      submit: "Iniciar sesión",
      forgot: "¿Olvidaste tu contraseña?",
      noAccount: "¿Nuevo en Regatta Registers?",
      signUp: "Comienza una prueba gratis",
    },
    freeTrial: {
      eyebrow: "Prueba gratis",
      title: "Comienza en minutos",
      subtitle:
        "Crea tu espacio de trabajo, importa tus datos y ve el seguimiento de cumplimiento funcionar de principio a fin.",
      perks: [
        "Sin costos de instalación",
        "Importa tus registros existentes",
        "Acceso completo durante la prueba",
      ],
      formTitle: "Crea tu cuenta",
      email: "Correo corporativo",
      company: "Nombre de la empresa",
      password: "Contraseña",
      submit: "Comenzar prueba gratis",
      noCard: "No se requiere tarjeta de crédito.",
      haveAccount: "¿Ya tienes una cuenta?",
      login: "Iniciar sesión",
    },
  },
};
