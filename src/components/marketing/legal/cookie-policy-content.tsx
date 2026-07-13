"use client";

import { LegalPage } from "@/components/marketing/legal-page";
import { useCountry } from "@/hooks/use-country";

const contactEn = (
  <>
    <p className="font-semibold text-ink-800">Regatta Registers Pty Ltd</p>
    <p>
      Email:{" "}
      <a href="mailto:info@regattaregisters.com" className="text-brand-600 hover:underline">
        info@regattaregisters.com
      </a>
    </p>
    <p>Postal Address: Unit 3 12 Scott St, West End QLD</p>
  </>
);

const contactEs = (
  <>
    <p className="font-semibold text-ink-800">Regatta Registers Pty Ltd</p>
    <p>
      Correo electrónico:{" "}
      <a href="mailto:info@regattaregisters.com" className="text-brand-600 hover:underline">
        info@regattaregisters.com
      </a>
    </p>
    <p>Dirección postal: Unit 3 12 Scott St, West End QLD</p>
  </>
);

const introEn = (
  <>
    <p>
      This Cookie Policy explains how Regatta Registers uses cookies and similar
      technologies when you access or use our services, including our website and any
      related platforms (&quot;Services&quot;). It supplements our Privacy Notice and is intended to
      help you understand what these technologies are and why we use them.
    </p>
    <p className="mt-3">
      Capitalized terms not defined in this Cookie Policy have the meanings assigned to them
      in our Privacy Notice.
    </p>
  </>
);

const introEs = (
  <>
    <p>
      Esta Política de Cookies explica cómo Regatta Registers utiliza cookies y tecnologías
      similares cuando usted accede o utiliza nuestros servicios, incluyendo nuestro sitio
      web y cualquier plataforma relacionada (los &quot;Servicios&quot;). Complementa nuestro Aviso de
      Privacidad y tiene como objetivo ayudarle a comprender qué son estas tecnologías y por
      qué las utilizamos.
    </p>
    <p className="mt-3">
      Los términos en mayúscula no definidos en esta Política de Cookies tienen el
      significado que se les asigna en nuestro Aviso de Privacidad.
    </p>
  </>
);

const sectionsEn = [
  {
    heading: "1. What Are Cookies?",
    content: (
      <>
        <p>
          Cookies are small text files placed on your device by websites you visit. They are
          widely used to make websites work more efficiently and to provide information to
          site owners. Similar technologies include pixel tags (also known as web beacons),
          local storage, and embedded scripts — all of which serve similar functions and are
          collectively referred to in this policy as &quot;Cookies.&quot; We use Cookies to:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Improve our Services and user experience</li>
          <li>Remember your preferences</li>
          <li>Enable certain functionality</li>
          <li>Analyze traffic and usage</li>
          <li>Deliver tailored advertisements</li>
        </ul>
        <p className="mt-3">
          You can learn more at{" "}
          <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
            www.allaboutcookies.org
          </a>{" "}
          or{" "}
          <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
            www.youronlinechoices.eu
          </a>
          .
        </p>
      </>
    ),
  },
  {
    heading: "2. Types of Cookies We Use",
    content: (
      <>
        <p className="font-medium text-ink-800">By Duration</p>
        <p className="mt-2">
          <span className="font-medium">Session Cookies:</span> These are temporary and
          deleted once you close your browser.
        </p>
        <p className="mt-2">
          <span className="font-medium">Persistent Cookies:</span> These remain on your
          device for a set period or until you delete them.
        </p>
        <p className="font-medium text-ink-800 mt-4">By Source</p>
        <p className="mt-2">
          <span className="font-medium">First-party Cookies:</span> Set by Regatta
          Registers.
        </p>
        <p className="mt-2">
          <span className="font-medium">Third-party Cookies:</span> Set by others, such as
          analytics providers or advertisers.
        </p>
      </>
    ),
  },
  {
    heading: "3. What Information is Collected?",
    content: (
      <>
        <p>Cookies may collect:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Pages visited and links clicked</li>
          <li>Time spent on pages</li>
          <li>Device and browser type</li>
          <li>IP address</li>
          <li>Your preferences and interactions with our Services</li>
        </ul>
      </>
    ),
  },
  {
    heading: "4. Categories of Cookies",
    content: (
      <>
        <p className="font-medium text-ink-800">Strictly Necessary Cookies</p>
        <p className="mt-2">
          These are essential to use our Services and cannot be disabled. They support
          security, authentication, and service functionality.
        </p>
        <p className="font-medium text-ink-800 mt-4">Functional Cookies</p>
        <p className="mt-2">
          These remember your settings and choices (e.g., language, region, form inputs) to
          provide a more personalized experience.
        </p>
        <p className="font-medium text-ink-800 mt-4">Performance and Analytics Cookies</p>
        <p className="mt-2">
          These help us understand how users engage with our Services, measure traffic, and
          identify areas for improvement.
        </p>
        <p className="font-medium text-ink-800 mt-4">Targeting and Advertising Cookies</p>
        <p className="mt-2">
          Used by third-party advertising networks to show you relevant ads, limit ad
          frequency, and measure campaign effectiveness.
        </p>
      </>
    ),
  },
  {
    heading: "5. Third-Party Services We Use",
    content: (
      <>
        <p>
          We partner with service providers who may place cookies on our behalf. These
          include:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Google Analytics</li>
          <li>Meta (Facebook/Instagram Ads)</li>
          <li>LinkedIn/Bing (Microsoft)</li>
          <li>Stripe</li>
          <li>Intercom, Segment, OneSignal, Okta, HubSpot, G2, ZoomInfo, among others</li>
        </ul>
        <p className="mt-3">
          Each of these services has its own privacy practices and, where applicable,
          provides mechanisms for opting out of tracking or targeted advertising. If we begin
          using interest-based advertising tools, you may manage your preferences through
          third-party opt-out tools such as the Digital Advertising Alliance (DAA) and the
          Network Advertising Initiative (NAI).
        </p>
      </>
    ),
  },
  {
    heading: "6. Managing Your Cookie Preferences",
    content: (
      <>
        <p>You have the right to control the use of Cookies:</p>
        <p className="mt-3">
          <span className="font-medium">Browser Settings:</span> You can block or delete
          Cookies through your browser settings.
        </p>
        <p className="mt-3">
          <span className="font-medium">Opt-Out Tools:</span> Google Ads Settings, Facebook
          Ads Preferences, LinkedIn Ads Preferences, DAA Opt-Out, NAI Opt-Out.
        </p>
        <p className="mt-3 text-ink-500 text-sm">
          Note: Disabling Cookies may impact functionality of the Services.
        </p>
      </>
    ),
  },
  {
    heading: "7. Updates to This Cookie Policy",
    content: (
      <p>
        We may update this Cookie Policy from time to time. The latest version will always
        be available on our website with the effective date. We will notify you of any
        significant changes as required by law.
      </p>
    ),
  },
];

const sectionsEs = [
  {
    heading: "1. ¿Qué son las cookies?",
    content: (
      <>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web que usted visita
          colocan en su dispositivo. Se utilizan ampliamente para que los sitios web funcionen
          de manera más eficiente y para proporcionar información a sus propietarios. Las
          tecnologías similares incluyen etiquetas de píxel (también llamadas web beacons),
          almacenamiento local y scripts incorporados, todas las cuales cumplen funciones
          similares y se denominan colectivamente &quot;Cookies&quot; en esta política. Utilizamos
          Cookies para:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Mejorar nuestros Servicios y la experiencia del usuario</li>
          <li>Recordar sus preferencias</li>
          <li>Habilitar ciertas funcionalidades</li>
          <li>Analizar el tráfico y el uso</li>
          <li>Ofrecer publicidad personalizada</li>
        </ul>
        <p className="mt-3">
          Puede obtener más información en{" "}
          <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
            www.allaboutcookies.org
          </a>{" "}
          o{" "}
          <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">
            www.youronlinechoices.eu
          </a>
          .
        </p>
      </>
    ),
  },
  {
    heading: "2. Tipos de cookies que utilizamos",
    content: (
      <>
        <p className="font-medium text-ink-800">Según su duración</p>
        <p className="mt-2">
          <span className="font-medium">Cookies de sesión:</span> Son temporales y se
          eliminan al cerrar el navegador.
        </p>
        <p className="mt-2">
          <span className="font-medium">Cookies persistentes:</span> Permanecen en su
          dispositivo durante un período determinado o hasta que usted las elimine.
        </p>
        <p className="font-medium text-ink-800 mt-4">Según su origen</p>
        <p className="mt-2">
          <span className="font-medium">Cookies propias:</span> Configuradas por Regatta
          Registers.
        </p>
        <p className="mt-2">
          <span className="font-medium">Cookies de terceros:</span> Configuradas por otros,
          como proveedores de analítica o anunciantes.
        </p>
      </>
    ),
  },
  {
    heading: "3. ¿Qué información se recopila?",
    content: (
      <>
        <p>Las cookies pueden recopilar:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Páginas visitadas y enlaces en los que hizo clic</li>
          <li>Tiempo dedicado en las páginas</li>
          <li>Tipo de dispositivo y navegador</li>
          <li>Dirección IP</li>
          <li>Sus preferencias e interacciones con nuestros Servicios</li>
        </ul>
      </>
    ),
  },
  {
    heading: "4. Categorías de cookies",
    content: (
      <>
        <p className="font-medium text-ink-800">Cookies estrictamente necesarias</p>
        <p className="mt-2">
          Son esenciales para utilizar nuestros Servicios y no se pueden desactivar. Respaldan
          la seguridad, la autenticación y la funcionalidad del servicio.
        </p>
        <p className="font-medium text-ink-800 mt-4">Cookies funcionales</p>
        <p className="mt-2">
          Recuerdan su configuración y elecciones (por ejemplo, idioma, región, campos de
          formulario) para ofrecer una experiencia más personalizada.
        </p>
        <p className="font-medium text-ink-800 mt-4">Cookies de rendimiento y analítica</p>
        <p className="mt-2">
          Nos ayudan a comprender cómo interactúan los usuarios con nuestros Servicios, medir
          el tráfico e identificar áreas de mejora.
        </p>
        <p className="font-medium text-ink-800 mt-4">Cookies de segmentación y publicidad</p>
        <p className="mt-2">
          Utilizadas por redes publicitarias de terceros para mostrarle anuncios relevantes,
          limitar la frecuencia de los anuncios y medir la efectividad de las campañas.
        </p>
      </>
    ),
  },
  {
    heading: "5. Servicios de terceros que utilizamos",
    content: (
      <>
        <p>
          Colaboramos con proveedores de servicios que pueden colocar cookies en nuestro
          nombre. Estos incluyen:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Google Analytics</li>
          <li>Meta (anuncios de Facebook/Instagram)</li>
          <li>LinkedIn/Bing (Microsoft)</li>
          <li>Stripe</li>
          <li>Intercom, Segment, OneSignal, Okta, HubSpot, G2, ZoomInfo, entre otros</li>
        </ul>
        <p className="mt-3">
          Cada uno de estos servicios tiene sus propias prácticas de privacidad y, cuando
          corresponda, ofrece mecanismos para excluirse del seguimiento o de la publicidad
          personalizada. Si comenzamos a utilizar herramientas de publicidad basada en
          intereses, usted podrá gestionar sus preferencias a través de herramientas de
          exclusión de terceros, como la Digital Advertising Alliance (DAA) y la Network
          Advertising Initiative (NAI).
        </p>
      </>
    ),
  },
  {
    heading: "6. Cómo gestionar sus preferencias de cookies",
    content: (
      <>
        <p>Usted tiene derecho a controlar el uso de las Cookies:</p>
        <p className="mt-3">
          <span className="font-medium">Configuración del navegador:</span> Puede bloquear o
          eliminar las Cookies a través de la configuración de su navegador.
        </p>
        <p className="mt-3">
          <span className="font-medium">Herramientas de exclusión:</span> Configuración de
          anuncios de Google, preferencias de anuncios de Facebook, preferencias de anuncios
          de LinkedIn, exclusión de DAA, exclusión de NAI.
        </p>
        <p className="mt-3 text-ink-500 text-sm">
          Nota: Desactivar las Cookies puede afectar la funcionalidad de los Servicios.
        </p>
      </>
    ),
  },
  {
    heading: "7. Actualizaciones de esta Política de Cookies",
    content: (
      <p>
        Es posible que actualicemos esta Política de Cookies periódicamente. La versión más
        reciente siempre estará disponible en nuestro sitio web con su fecha de vigencia. Le
        notificaremos sobre cualquier cambio significativo según lo exija la ley.
      </p>
    ),
  },
];

export function CookiePolicyContent() {
  const { code } = useCountry();
  const isEs = code === "co";

  return (
    <LegalPage
      title={isEs ? "Política de Cookies" : "Cookies Policy"}
      lastRevised={isEs ? "27 de abril de 2025" : "April 27, 2025"}
      intro={isEs ? introEs : introEn}
      sections={isEs ? sectionsEs : sectionsEn}
      contact={isEs ? contactEs : contactEn}
    />
  );
}
