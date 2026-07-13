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
    <p>Postal Address: Unit 3, 12 Scott St, West End QLD</p>
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
    <p>Dirección postal: Unit 3, 12 Scott St, West End QLD</p>
  </>
);

const sectionsEn = [
  {
    heading: "1. Introduction",
    content: (
      <p>
        Regatta Registers Pty Ltd operates a cloud-based SaaS platform helping industrial
        businesses manage inspections, standards, compliance workflows, and preventive
        maintenance tasks. These Terms establish a legally binding agreement between users
        and the company.
      </p>
    ),
  },
  {
    heading: "2. Eligibility",
    content: (
      <p>
        Users must be at least 18 years old with legal authority to enter agreements. By
        accessing the Services, you represent meeting these requirements.
      </p>
    ),
  },
  {
    heading: "3. Account Registration and Use",
    content: (
      <>
        <p>Account creation requires:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Accurate and complete registration information</li>
          <li>Secure credential management</li>
          <li>User responsibility for all account activities</li>
          <li>Immediate notification of unauthorized access</li>
        </ul>
      </>
    ),
  },
  {
    heading: "4. Customer Responsibilities",
    content: (
      <>
        <p>Users must:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Configure their environment (standards, inspectors, employees, maintenance schedules)</li>
          <li>Ensure compliance with applicable laws</li>
          <li>
            Maintain their own critical business data copies, as the platform performs
            system-wide backups but doesn&apos;t guarantee individual customer data recovery
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "5. Fees and Payment",
    content: (
      <p>
        Subscription fees apply to certain features. All fees are non-refundable unless
        required by law. Payment processing occurs through Stripe or authorized processors,
        with user authorization to charge selected payment methods.
      </p>
    ),
  },
  {
    heading: "6. License and Acceptable Use",
    content: (
      <p>
        Users receive a limited, non-exclusive, non-transferable license for internal
        business purposes. Prohibited activities include reverse engineering, reselling,
        sublicensing, or storing unlawful content.
      </p>
    ),
  },
  {
    heading: "7. Prohibited Conduct",
    content: (
      <>
        <p>Users cannot:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Violate laws using the Services</li>
          <li>Interfere with or disrupt operations</li>
          <li>Attempt unauthorized system access</li>
          <li>Upload viruses or malware</li>
        </ul>
      </>
    ),
  },
  {
    heading: "8. Intellectual Property",
    content: (
      <p>
        Regatta Registers retains all rights to the Services, software, trademarks, and
        content. Users retain ownership of their data but grant the company a license for
        service provision and improvement.
      </p>
    ),
  },
  {
    heading: "9. Privacy",
    content: (
      <p>
        Data collection and use are governed by the Privacy Policy and Cookie Policy,
        incorporated into these Terms.
      </p>
    ),
  },
  {
    heading: "10. Data and Content",
    content: (
      <p>
        Users bear responsibility for submitted content and data accuracy. The platform may
        anonymize or aggregate data for analytics without identifying users.
      </p>
    ),
  },
  {
    heading: "11. Platform Scope and Limitations",
    content: (
      <>
        <p className="font-medium text-ink-800">11.1 Data Backup and Recovery</p>
        <p className="mt-2">
          Regular daily and weekly system-wide backups support continuity, but individual
          customer data restoration isn&apos;t guaranteed unless specifically agreed in writing.
        </p>
        <p className="font-medium text-ink-800 mt-4">11.2 Third-Party Services</p>
        <p className="mt-2">
          The platform may interoperate with third-party services, but Regatta Registers
          disclaims liability for external products.
        </p>
        <p className="font-medium text-ink-800 mt-4">11.3 No Responsibility for Operations</p>
        <p className="mt-2">
          Regatta Registers provides a software platform. We do not assume responsibility
          for the conduct, results, or legal compliance of any inspections, maintenance, or
          business operations. Users remain solely responsible for team training,
          qualification, and regulatory compliance.
        </p>
      </>
    ),
  },
  {
    heading: "12. Termination",
    content: (
      <p>
        The company may suspend or terminate access for Term violations or legal
        requirements. Upon termination, user rights end immediately, and accounts and
        content may be deleted per data retention policies.
      </p>
    ),
  },
  {
    heading: "13. Disclaimers and Limitation of Liability",
    content: (
      <p>
        Services are provided &quot;as is&quot; and &quot;as available&quot; without warranties. We disclaim
        all warranties and limit our liability for any indirect, incidental, or consequential
        damages, loss of data, business interruption, or loss of profits.
      </p>
    ),
  },
  {
    heading: "14. Indemnification",
    content: (
      <p>
        Users agree to indemnify Regatta Registers and its affiliates from claims, damages,
        or expenses arising from Service use or Term violations.
      </p>
    ),
  },
  {
    heading: "15. Governing Law",
    content: (
      <p>
        These Terms are governed by New South Wales, Australia law. Users consent to
        exclusive jurisdiction of NSW courts for dispute resolution.
      </p>
    ),
  },
  {
    heading: "16. Changes to These Terms",
    content: (
      <p>
        The company may update Terms with notification of material changes. Continued use
        constitutes acceptance.
      </p>
    ),
  },
];

const sectionsEs = [
  {
    heading: "1. Introducción",
    content: (
      <p>
        Regatta Registers Pty Ltd opera una plataforma SaaS en la nube que ayuda a empresas
        industriales a gestionar inspecciones, normas, flujos de cumplimiento y tareas de
        mantenimiento preventivo. Estos Términos establecen un acuerdo legalmente vinculante
        entre los usuarios y la empresa.
      </p>
    ),
  },
  {
    heading: "2. Elegibilidad",
    content: (
      <p>
        Los usuarios deben tener al menos 18 años y contar con autoridad legal para celebrar
        acuerdos. Al acceder a los Servicios, usted declara cumplir con estos requisitos.
      </p>
    ),
  },
  {
    heading: "3. Registro y uso de la cuenta",
    content: (
      <>
        <p>La creación de una cuenta requiere:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Información de registro precisa y completa</li>
          <li>Gestión segura de credenciales</li>
          <li>Responsabilidad del usuario por todas las actividades de la cuenta</li>
          <li>Notificación inmediata de acceso no autorizado</li>
        </ul>
      </>
    ),
  },
  {
    heading: "4. Responsabilidades del cliente",
    content: (
      <>
        <p>Los usuarios deben:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Configurar su entorno (normas, inspectores, empleados, calendarios de mantenimiento)</li>
          <li>Garantizar el cumplimiento de las leyes aplicables</li>
          <li>
            Mantener sus propias copias de datos críticos del negocio, ya que la plataforma
            realiza copias de seguridad a nivel de sistema pero no garantiza la recuperación
            individual de los datos de cada cliente
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "5. Tarifas y pago",
    content: (
      <p>
        Se aplican tarifas de suscripción a ciertas funciones. Todas las tarifas son
        no reembolsables salvo que la ley lo exija. El procesamiento de pagos se realiza a
        través de Stripe u otros procesadores autorizados, con autorización del usuario para
        cargar los métodos de pago seleccionados.
      </p>
    ),
  },
  {
    heading: "6. Licencia y uso aceptable",
    content: (
      <p>
        Los usuarios reciben una licencia limitada, no exclusiva e intransferible para fines
        comerciales internos. Las actividades prohibidas incluyen la ingeniería inversa, la
        reventa, la sublicencia o el almacenamiento de contenido ilícito.
      </p>
    ),
  },
  {
    heading: "7. Conducta prohibida",
    content: (
      <>
        <p>Los usuarios no pueden:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Infringir leyes utilizando los Servicios</li>
          <li>Interferir o interrumpir las operaciones</li>
          <li>Intentar acceder al sistema sin autorización</li>
          <li>Subir virus o malware</li>
        </ul>
      </>
    ),
  },
  {
    heading: "8. Propiedad intelectual",
    content: (
      <p>
        Regatta Registers conserva todos los derechos sobre los Servicios, el software, las
        marcas y el contenido. Los usuarios conservan la propiedad de sus datos, pero otorgan
        a la empresa una licencia para la prestación y mejora del servicio.
      </p>
    ),
  },
  {
    heading: "9. Privacidad",
    content: (
      <p>
        La recopilación y el uso de datos se rigen por la Política de Privacidad y la
        Política de Cookies, incorporadas a estos Términos.
      </p>
    ),
  },
  {
    heading: "10. Datos y contenido",
    content: (
      <p>
        Los usuarios son responsables del contenido enviado y de la exactitud de los datos.
        La plataforma puede anonimizar o agregar datos con fines analíticos sin identificar a
        los usuarios.
      </p>
    ),
  },
  {
    heading: "11. Alcance y limitaciones de la plataforma",
    content: (
      <>
        <p className="font-medium text-ink-800">11.1 Copia de seguridad y recuperación de datos</p>
        <p className="mt-2">
          Las copias de seguridad diarias y semanales a nivel de sistema respaldan la
          continuidad, pero la restauración de datos individuales del cliente no está
          garantizada a menos que se acuerde específicamente por escrito.
        </p>
        <p className="font-medium text-ink-800 mt-4">11.2 Servicios de terceros</p>
        <p className="mt-2">
          La plataforma puede interoperar con servicios de terceros, pero Regatta Registers
          renuncia a toda responsabilidad por productos externos.
        </p>
        <p className="font-medium text-ink-800 mt-4">11.3 Sin responsabilidad sobre las operaciones</p>
        <p className="mt-2">
          Regatta Registers ofrece una plataforma de software. No asumimos responsabilidad
          por la conducta, los resultados ni el cumplimiento legal de ninguna inspección,
          mantenimiento u operación comercial. Los usuarios son los únicos responsables de la
          formación, calificación y cumplimiento normativo de su equipo.
        </p>
      </>
    ),
  },
  {
    heading: "12. Terminación",
    content: (
      <p>
        La empresa puede suspender o cancelar el acceso por infracciones de estos Términos o
        por requisitos legales. Al finalizar, los derechos del usuario cesan de inmediato, y
        las cuentas y el contenido pueden eliminarse conforme a las políticas de retención de
        datos.
      </p>
    ),
  },
  {
    heading: "13. Renuncias y limitación de responsabilidad",
    content: (
      <p>
        Los Servicios se proporcionan &quot;tal cual&quot; y &quot;según disponibilidad&quot;, sin garantías.
        Renunciamos a todas las garantías y limitamos nuestra responsabilidad por cualquier
        daño indirecto, incidental o consecuente, pérdida de datos, interrupción del negocio
        o pérdida de beneficios.
      </p>
    ),
  },
  {
    heading: "14. Indemnización",
    content: (
      <p>
        Los usuarios se comprometen a indemnizar a Regatta Registers y sus afiliados por
        reclamos, daños o gastos derivados del uso del Servicio o de infracciones a estos
        Términos.
      </p>
    ),
  },
  {
    heading: "15. Ley aplicable",
    content: (
      <p>
        Estos Términos se rigen por las leyes de Nueva Gales del Sur, Australia. Los usuarios
        consienten la jurisdicción exclusiva de los tribunales de NSW para la resolución de
        disputas.
      </p>
    ),
  },
  {
    heading: "16. Cambios a estos Términos",
    content: (
      <p>
        La empresa puede actualizar estos Términos, notificando los cambios materiales. El
        uso continuado constituye la aceptación de dichos cambios.
      </p>
    ),
  },
];

export function TermsOfServiceContent() {
  const { code } = useCountry();
  const isEs = code === "co";

  return (
    <LegalPage
      title={isEs ? "Términos de Servicio" : "Terms of Service"}
      lastRevised={isEs ? "15 de mayo de 2025" : "May 15, 2025"}
      sections={isEs ? sectionsEs : sectionsEn}
      contact={isEs ? contactEs : contactEn}
    />
  );
}
