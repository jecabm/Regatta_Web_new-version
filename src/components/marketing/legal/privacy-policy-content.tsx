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
      Please read this Privacy Policy carefully. This Privacy Policy describes how Regatta
      Registers Pty Ltd (&quot;Regatta Registers&quot;, &quot;we&quot;, &quot;our&quot; or &quot;us&quot;) collects, uses,
      stores, and discloses personal data in connection with our products, services, and
      operations. If you have any questions or concerns, see Section 17: How to Contact Us.
    </p>
    <p className="mt-3">
      If you are a resident of the European Economic Area (EEA), the United Kingdom (UK),
      Switzerland, California, or certain countries in South America, please refer to the
      relevant sections for information on your additional rights and choices under local
      data protection laws.
    </p>
    <p className="mt-3 font-medium text-ink-800">
      BY USING ANY OF OUR SERVICES OR PROVIDING INFORMATION TO US, YOU ACKNOWLEDGE THAT
      YOU HAVE READ, UNDERSTOOD, AND AGREED TO THE TERMS OF THIS PRIVACY POLICY.
    </p>
  </>
);

const introEs = (
  <>
    <p>
      Lea atentamente esta Política de Privacidad. Esta Política de Privacidad describe cómo
      Regatta Registers Pty Ltd (&quot;Regatta Registers&quot;, &quot;nosotros&quot; o &quot;nuestro&quot;) recopila,
      utiliza, almacena y divulga datos personales en relación con nuestros productos,
      servicios y operaciones. Si tiene alguna pregunta o inquietud, consulte la Sección 17:
      Cómo contactarnos.
    </p>
    <p className="mt-3">
      Si usted reside en el Espacio Económico Europeo (EEE), el Reino Unido (UK), Suiza,
      California, o en determinados países de Sudamérica, consulte las secciones
      correspondientes para conocer sus derechos y opciones adicionales conforme a las leyes
      locales de protección de datos.
    </p>
    <p className="mt-3 font-medium text-ink-800">
      AL UTILIZAR CUALQUIERA DE NUESTROS SERVICIOS O PROPORCIONARNOS INFORMACIÓN, USTED
      RECONOCE QUE HA LEÍDO, COMPRENDIDO Y ACEPTADO LOS TÉRMINOS DE ESTA POLÍTICA DE
      PRIVACIDAD.
    </p>
  </>
);

const sectionsEn = [
  {
    heading: "1. Regatta Registers' Services and Scope of this Privacy Policy",
    content: (
      <>
        <p className="font-medium text-ink-800">Regatta Registers&apos; Services</p>
        <p className="mt-2">This Privacy Policy applies to:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>
            Our corporate website located at www.regattaregisters.com, including its
            subdomains and any site that links to this Privacy Policy (the &quot;Website&quot;); and
          </li>
          <li>
            Our cloud-based asset inspection and compliance software platform accessible via
            our Website and mobile applications (collectively, the &quot;Platform&quot; or &quot;Services&quot;).
          </li>
        </ul>
        <p className="mt-3">
          References to &quot;Services&quot; in this Privacy Policy include the Website, Platform,
          mobile apps, and any other digital services, features, tools, or communications
          provided by Regatta Registers.
        </p>
        <p className="mt-3">
          Personal data refers to information that identifies or could reasonably identify a
          natural person (e.g., name, email address, IP address, location). It excludes
          anonymous or de-identified data.
        </p>
        <p className="mt-3">
          Our Services are intended for commercial and professional use by organisations and
          their authorised representatives. We do not offer services directly for personal,
          household, or family use.
        </p>
        <p className="font-medium text-ink-800 mt-4">Scope of this Privacy Policy</p>
        <p className="mt-2">This Privacy Policy applies to personal data collected from:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Visitors to our Website or social media pages (e.g., LinkedIn)</li>
          <li>
            Customers who have signed up for Regatta Registers&apos; Services under an agreement
            with us
          </li>
          <li>
            Authorised Users, such as employees, contractors, or agents of Customers who
            access the Services on the Customer&apos;s behalf
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "2. Customer-Controlled Information",
    content: (
      <p>
        If you are an Authorised User of a Regatta Registers Customer, please note that your
        organisation is the &quot;data controller&quot; of your personal data submitted through the
        Platform. Regatta Registers acts as a &quot;data processor&quot; (or &quot;service provider&quot;) on
        their behalf. If you have questions about how your data is handled, or wish to make a
        data access or deletion request, please contact your organisation directly. If such a
        request is submitted to us, we may forward it to the relevant Customer.
      </p>
    ),
  },
  {
    heading: "3. Changes to this Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy periodically. Non-material changes take effect when
        published on our Website. For material updates, we&apos;ll notify you in advance by email
        (if available) and/or via an in-Service notice. Continued use of the Services after
        changes take effect indicates your agreement to the revised Privacy Policy.
      </p>
    ),
  },
  {
    heading: "4. Information We Collect",
    content: (
      <>
        <p className="font-medium text-ink-800">4a. Information You Provide to Us</p>
        <p className="mt-2">We collect personal data you provide directly, such as:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Contact Details: Full name, email, phone number, job title, company name.</li>
          <li>Account Information: User credentials (username, password), role/access level within the Customer organisation.</li>
          <li>Support Requests &amp; Feedback: Communications you send us, surveys you complete, or support tickets you submit.</li>
          <li>Payment Information: While Regatta Registers does not store payment details, our PCI-compliant payment providers collect relevant billing information (e.g., credit card or bank details).</li>
          <li>Promotions or Events: Information you submit when entering a promotion or registering for an event.</li>
        </ul>
        <p className="font-medium text-ink-800 mt-4">4b. Information We Collect Automatically</p>
        <p className="mt-2">We collect certain technical and usage data automatically through cookies and analytics tools, including:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>IP address, browser type, operating system, device identifiers</li>
          <li>Site navigation patterns, usage frequency, crash data</li>
          <li>Location data inferred from IP</li>
          <li>Referral sources (e.g., search engines or advertisements)</li>
        </ul>
        <p className="font-medium text-ink-800 mt-4">4c. Information from Third Parties</p>
        <p className="mt-2">We may receive personal data from:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Your employer or organisation (if you are an Authorised User)</li>
          <li>Service providers (e.g., cloud hosting, analytics platforms)</li>
          <li>Social media platforms (e.g., public profiles and interactions)</li>
          <li>Marketing providers or public data sources</li>
        </ul>
        <p className="font-medium text-ink-800 mt-4">4d. Cookies and Similar Technologies</p>
        <p className="mt-2">
          We use cookies and similar technologies to improve our Services and provide
          targeted advertising. You can manage cookie preferences in your browser settings.
          For more details, see our Cookie Policy.
        </p>
        <p className="font-medium text-ink-800 mt-4">4e. Aggregated &amp; De-Identified Data</p>
        <p className="mt-2">
          We may use and share de-identified or aggregated data for analytics, product
          development, and business insights, provided it cannot be used to identify
          individuals.
        </p>
      </>
    ),
  },
  {
    heading: "5. Children's Privacy",
    content: (
      <p>
        Regatta Registers does not knowingly collect or process personal data from
        individuals under the age of 18. Our services are not directed to individuals under
        16. We do not knowingly collect personal data from children without verifiable
        parental consent. If we become aware that we have collected such data, we will
        promptly delete it and may terminate the associated account.
      </p>
    ),
  },
  {
    heading: "6. Sensitive Data",
    content: (
      <p>
        We do not intentionally collect sensitive data such as health information, political
        views, or biometric data. Please do not submit such information unless specifically
        requested and legally justified.
      </p>
    ),
  },
  {
    heading: "7. Security of Personal Data",
    content: (
      <>
        <p>
          We implement appropriate technical and organizational security measures to protect
          your personal data from unauthorized access, disclosure, alteration, or
          destruction. These measures are designed to provide a level of security appropriate
          to the risk associated with the processing of your personal data.
        </p>
        <p className="mt-3">Our safeguards include:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Data encryption in transit and at rest</li>
          <li>Access controls to systems and infrastructure</li>
          <li>Regular security audits and risk assessments</li>
          <li>Secure development and testing environments</li>
          <li>Staff training in privacy and security best practices</li>
        </ul>
        <p className="mt-3">
          If you suspect any misuse or unauthorized access to your data, please contact us
          immediately at{" "}
          <a href="mailto:info@regattaregisters.com" className="text-brand-600 hover:underline">
            info@regattaregisters.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    heading: "8. Sharing of Personal Data",
    content: (
      <>
        <p>We do not sell your personal data. We may share personal data with:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Service Providers: Such as cloud hosting, data analytics, and communication tools, to support our operations.</li>
          <li>Affiliates: Within the Regatta Registers group (if applicable), for business and operational purposes.</li>
          <li>Authorities: When required by law, regulation, legal process, or governmental request.</li>
          <li>Professional Advisors: Including lawyers, auditors, and insurers, in the course of legitimate business operations.</li>
          <li>Corporate Transactions: In the event of a merger, sale, or reorganization, personal data may be transferred as part of the transaction.</li>
        </ul>
        <p className="mt-3">
          We require third parties to respect the security of your personal data and to
          process it in accordance with applicable law.
        </p>
      </>
    ),
  },
  {
    heading: "9. Cookies and Similar Technologies",
    content: (
      <>
        <p>
          We use cookies and similar tracking technologies to enhance your user experience,
          analyze website performance, and deliver targeted content.
        </p>
        <p className="mt-3">Types of cookies we use:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Strictly Necessary: For core functionality of our services.</li>
          <li>Performance: For analytics and site improvement.</li>
          <li>Functionality: To remember preferences.</li>
          <li>Targeting/Advertising: Where applicable and with your consent.</li>
        </ul>
        <p className="mt-3">
          You can manage or disable cookies through your browser settings. For more
          information, refer to our Cookie Policy.
        </p>
      </>
    ),
  },
  {
    heading: "10. International Data Transfers",
    content: (
      <>
        <p>
          We are based in Australia and may process your personal data in other countries
          where we or our third-party service providers operate, including the United States,
          South America (including Brazil and Argentina), the United Kingdom, and the
          European Economic Area (EEA). Where required, we use legal mechanisms such as:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
          <li>UK Addendum for transfers from the UK</li>
          <li>Data Transfer Agreements under Brazil&apos;s LGPD or Argentina&apos;s Data Protection Act</li>
          <li>Other recognized safeguards to ensure your data is protected regardless of where it is processed</li>
        </ul>
      </>
    ),
  },
  {
    heading: "11. Data Retention",
    content: (
      <>
        <p>
          We retain your personal data only for as long as necessary to fulfill the purposes
          for which we collected it, including to comply with legal, regulatory, tax,
          accounting, or reporting requirements.
        </p>
        <p className="mt-3">Retention periods may vary based on:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>The type of data</li>
          <li>The nature of our relationship with you</li>
          <li>Applicable legal requirements</li>
        </ul>
        <p className="mt-3">
          We securely delete or anonymize personal data when it is no longer required.
        </p>
      </>
    ),
  },
  {
    heading: "12. Your Rights and Choices",
    content: (
      <>
        <p>You may have the right to:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Access and correct your personal data</li>
          <li>Delete your personal data</li>
          <li>Object to or restrict data processing</li>
          <li>Withdraw consent where we rely on it</li>
          <li>Port your personal data (where applicable)</li>
          <li>Lodge a complaint with a supervisory authority</li>
        </ul>
        <p className="mt-3">
          If you are located in the EEA, UK, Brazil, Argentina, or other jurisdictions with
          data protection laws, additional rights may apply (see Section 13 below). To
          exercise your rights, please contact us at{" "}
          <a href="mailto:info@regattaregisters.com" className="text-brand-600 hover:underline">
            info@regattaregisters.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    heading: "13. Region-Specific Rights",
    content: (
      <>
        <p className="font-medium text-ink-800">For EEA and UK Residents</p>
        <p className="mt-2">
          You have rights under the GDPR and UK GDPR, including the right to lodge a
          complaint with a supervisory authority (e.g., ICO in the UK).
        </p>
        <p className="font-medium text-ink-800 mt-4">For Brazilian Residents</p>
        <p className="mt-2">Under LGPD, you may:</p>
        <ul className="list-disc pl-6 space-y-1 mt-1">
          <li>Confirm processing</li>
          <li>Access and correct your data</li>
          <li>Anonymize, block, or delete unnecessary/excessive data</li>
          <li>Request data portability</li>
          <li>Revoke consent</li>
        </ul>
        <p className="font-medium text-ink-800 mt-4">For Argentinian Residents</p>
        <p className="mt-2">Under Argentina&apos;s Law 25.326, you have rights to:</p>
        <ul className="list-disc pl-6 space-y-1 mt-1">
          <li>Access, rectify, update, and delete personal data</li>
          <li>File complaints with the Agencia de Acceso a la Información Pública</li>
        </ul>
      </>
    ),
  },
  {
    heading: "14. Third-Party Links and Services",
    content: (
      <p>
        Our website and services may contain links to third-party sites or services. We are
        not responsible for the privacy practices of those third parties. We encourage you to
        review their privacy policies before providing them with your personal data.
      </p>
    ),
  },
  {
    heading: "15. Updates to This Privacy Notice",
    content: (
      <p>
        We may update this Privacy Notice at any time without prior notice. Any changes will
        become effective upon posting the revised notice on this page, with the &quot;Last
        Updated&quot; date updated accordingly. If we make material changes, we will provide
        prominent notice on our website or platform. Your continued use of our services after
        any changes become effective constitutes your acceptance of the revised Privacy
        Notice. If you do not agree to the changes, you should discontinue use of our
        services.
      </p>
    ),
  },
  {
    heading: "16. Complaints and Supervisory Authorities",
    content: (
      <>
        <p>
          If you believe we have not handled your data in accordance with applicable privacy
          laws, you may contact:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Office of the Australian Information Commissioner (OAIC): www.oaic.gov.au</li>
          <li>Brazil&apos;s National Data Protection Authority (ANPD): www.gov.br/anpd</li>
          <li>UK Information Commissioner&apos;s Office (ICO): www.ico.org.uk</li>
          <li>European Data Protection Authorities: See the EU Commission site for a full list</li>
          <li>Argentina&apos;s Agency for Access to Public Information: www.argentina.gob.ar/aaip</li>
        </ul>
        <p className="mt-3">
          We encourage you to contact us first so we can try to resolve your concerns
          directly.
        </p>
      </>
    ),
  },
];

const sectionsEs = [
  {
    heading: "1. Servicios de Regatta Registers y alcance de esta Política de Privacidad",
    content: (
      <>
        <p className="font-medium text-ink-800">Servicios de Regatta Registers</p>
        <p className="mt-2">Esta Política de Privacidad se aplica a:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>
            Nuestro sitio web corporativo ubicado en www.regattaregisters.com, incluidos sus
            subdominios y cualquier sitio que enlace a esta Política de Privacidad (el &quot;Sitio
            Web&quot;); y
          </li>
          <li>
            Nuestra plataforma de software en la nube para inspección de activos y
            cumplimiento, accesible a través de nuestro Sitio Web y aplicaciones móviles
            (denominados en conjunto la &quot;Plataforma&quot; o los &quot;Servicios&quot;).
          </li>
        </ul>
        <p className="mt-3">
          Las referencias a &quot;Servicios&quot; en esta Política de Privacidad incluyen el Sitio Web,
          la Plataforma, las aplicaciones móviles y cualquier otro servicio digital,
          función, herramienta o comunicación proporcionados por Regatta Registers.
        </p>
        <p className="mt-3">
          Los datos personales se refieren a información que identifica o podría
          razonablemente identificar a una persona física (por ejemplo, nombre, correo
          electrónico, dirección IP, ubicación). Excluye datos anónimos o desidentificados.
        </p>
        <p className="mt-3">
          Nuestros Servicios están destinados al uso comercial y profesional por parte de
          organizaciones y sus representantes autorizados. No ofrecemos servicios
          directamente para uso personal, doméstico o familiar.
        </p>
        <p className="font-medium text-ink-800 mt-4">Alcance de esta Política de Privacidad</p>
        <p className="mt-2">Esta Política de Privacidad se aplica a los datos personales recopilados de:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Visitantes de nuestro Sitio Web o páginas de redes sociales (por ejemplo, LinkedIn)</li>
          <li>
            Clientes que se han registrado en los Servicios de Regatta Registers bajo un
            acuerdo con nosotros
          </li>
          <li>
            Usuarios Autorizados, como empleados, contratistas o agentes de los Clientes que
            acceden a los Servicios en nombre del Cliente
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "2. Información controlada por el cliente",
    content: (
      <p>
        Si usted es un Usuario Autorizado de un Cliente de Regatta Registers, tenga en cuenta
        que su organización es el &quot;responsable del tratamiento&quot; de sus datos personales
        enviados a través de la Plataforma. Regatta Registers actúa como &quot;encargado del
        tratamiento&quot; (o &quot;proveedor de servicios&quot;) en su nombre. Si tiene preguntas sobre cómo
        se gestionan sus datos, o desea solicitar el acceso o la eliminación de sus datos, por
        favor contacte directamente a su organización. Si dicha solicitud nos es enviada a
        nosotros, podremos remitirla al Cliente correspondiente.
      </p>
    ),
  },
  {
    heading: "3. Cambios a esta Política de Privacidad",
    content: (
      <p>
        Podemos actualizar esta Política de Privacidad periódicamente. Los cambios no
        materiales entran en vigor al publicarse en nuestro Sitio Web. Para actualizaciones
        materiales, le notificaremos con antelación por correo electrónico (si está
        disponible) y/o mediante un aviso dentro del Servicio. El uso continuado de los
        Servicios después de que los cambios entren en vigor indica su aceptación de la
        Política de Privacidad revisada.
      </p>
    ),
  },
  {
    heading: "4. Información que recopilamos",
    content: (
      <>
        <p className="font-medium text-ink-800">4a. Información que usted nos proporciona</p>
        <p className="mt-2">Recopilamos datos personales que usted nos proporciona directamente, tales como:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Datos de contacto: nombre completo, correo electrónico, número de teléfono, cargo, nombre de la empresa.</li>
          <li>Información de la cuenta: credenciales de usuario (nombre de usuario, contraseña), rol/nivel de acceso dentro de la organización del Cliente.</li>
          <li>Solicitudes de soporte y comentarios: comunicaciones que nos envía, encuestas que completa o tickets de soporte que envía.</li>
          <li>Información de pago: aunque Regatta Registers no almacena datos de pago, nuestros proveedores de pago cumplen con PCI y recopilan la información de facturación pertinente (por ejemplo, datos de tarjeta de crédito o cuenta bancaria).</li>
          <li>Promociones o eventos: información que envía al participar en una promoción o al registrarse en un evento.</li>
        </ul>
        <p className="font-medium text-ink-800 mt-4">4b. Información que recopilamos automáticamente</p>
        <p className="mt-2">Recopilamos ciertos datos técnicos y de uso automáticamente mediante cookies y herramientas de analítica, incluyendo:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Dirección IP, tipo de navegador, sistema operativo, identificadores del dispositivo</li>
          <li>Patrones de navegación del sitio, frecuencia de uso, datos de fallos</li>
          <li>Datos de ubicación inferidos de la IP</li>
          <li>Fuentes de referencia (por ejemplo, buscadores o anuncios)</li>
        </ul>
        <p className="font-medium text-ink-800 mt-4">4c. Información de terceros</p>
        <p className="mt-2">Podemos recibir datos personales de:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Su empleador u organización (si usted es un Usuario Autorizado)</li>
          <li>Proveedores de servicios (por ejemplo, hospedaje en la nube, plataformas de analítica)</li>
          <li>Plataformas de redes sociales (por ejemplo, perfiles públicos e interacciones)</li>
          <li>Proveedores de marketing o fuentes de datos públicas</li>
        </ul>
        <p className="font-medium text-ink-800 mt-4">4d. Cookies y tecnologías similares</p>
        <p className="mt-2">
          Utilizamos cookies y tecnologías similares para mejorar nuestros Servicios y
          ofrecer publicidad dirigida. Puede gestionar sus preferencias de cookies en la
          configuración de su navegador. Para más información, consulte nuestra Política de
          Cookies.
        </p>
        <p className="font-medium text-ink-800 mt-4">4e. Datos agregados y desidentificados</p>
        <p className="mt-2">
          Podemos usar y compartir datos desidentificados o agregados con fines analíticos,
          de desarrollo de productos y de negocio, siempre que no puedan usarse para
          identificar a personas.
        </p>
      </>
    ),
  },
  {
    heading: "5. Privacidad de los menores",
    content: (
      <p>
        Regatta Registers no recopila ni procesa a sabiendas datos personales de personas
        menores de 18 años. Nuestros servicios no están dirigidos a menores de 16 años. No
        recopilamos a sabiendas datos personales de menores sin el consentimiento verificable
        de sus padres. Si tomamos conocimiento de que hemos recopilado dichos datos, los
        eliminaremos con prontitud y podremos cancelar la cuenta asociada.
      </p>
    ),
  },
  {
    heading: "6. Datos sensibles",
    content: (
      <p>
        No recopilamos intencionalmente datos sensibles, como información de salud, opiniones
        políticas o datos biométricos. Por favor, no envíe dicha información a menos que se
        le solicite específicamente y esté legalmente justificado.
      </p>
    ),
  },
  {
    heading: "7. Seguridad de los datos personales",
    content: (
      <>
        <p>
          Implementamos medidas de seguridad técnicas y organizativas adecuadas para proteger
          sus datos personales frente al acceso, divulgación, alteración o destrucción no
          autorizados. Estas medidas están diseñadas para ofrecer un nivel de seguridad
          adecuado al riesgo asociado con el tratamiento de sus datos personales.
        </p>
        <p className="mt-3">Nuestras salvaguardas incluyen:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Cifrado de datos en tránsito y en reposo</li>
          <li>Controles de acceso a sistemas e infraestructura</li>
          <li>Auditorías de seguridad y evaluaciones de riesgo periódicas</li>
          <li>Entornos seguros de desarrollo y pruebas</li>
          <li>Capacitación del personal en mejores prácticas de privacidad y seguridad</li>
        </ul>
        <p className="mt-3">
          Si sospecha de un mal uso o acceso no autorizado a sus datos, contáctenos de
          inmediato a{" "}
          <a href="mailto:info@regattaregisters.com" className="text-brand-600 hover:underline">
            info@regattaregisters.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    heading: "8. Divulgación de datos personales",
    content: (
      <>
        <p>No vendemos sus datos personales. Podemos compartir datos personales con:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Proveedores de servicios: como hospedaje en la nube, analítica de datos y herramientas de comunicación, para respaldar nuestras operaciones.</li>
          <li>Afiliados: dentro del grupo Regatta Registers (si corresponde), con fines comerciales y operativos.</li>
          <li>Autoridades: cuando lo exija la ley, un reglamento, un proceso legal o una solicitud gubernamental.</li>
          <li>Asesores profesionales: incluidos abogados, auditores y aseguradoras, en el curso de operaciones comerciales legítimas.</li>
          <li>Transacciones corporativas: en caso de fusión, venta o reorganización, los datos personales pueden transferirse como parte de la transacción.</li>
        </ul>
        <p className="mt-3">
          Exigimos a los terceros que respeten la seguridad de sus datos personales y los
          procesen conforme a la ley aplicable.
        </p>
      </>
    ),
  },
  {
    heading: "9. Cookies y tecnologías similares",
    content: (
      <>
        <p>
          Utilizamos cookies y tecnologías de seguimiento similares para mejorar su
          experiencia de usuario, analizar el rendimiento del sitio web y ofrecer contenido
          personalizado.
        </p>
        <p className="mt-3">Tipos de cookies que utilizamos:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Estrictamente necesarias: para la funcionalidad básica de nuestros servicios.</li>
          <li>Rendimiento: para analítica y mejora del sitio.</li>
          <li>Funcionalidad: para recordar preferencias.</li>
          <li>Segmentación/publicidad: cuando corresponda y con su consentimiento.</li>
        </ul>
        <p className="mt-3">
          Puede gestionar o desactivar las cookies a través de la configuración de su
          navegador. Para más información, consulte nuestra Política de Cookies.
        </p>
      </>
    ),
  },
  {
    heading: "10. Transferencias internacionales de datos",
    content: (
      <>
        <p>
          Estamos ubicados en Australia y podemos procesar sus datos personales en otros
          países donde nosotros o nuestros proveedores de servicios operamos, incluidos
          Estados Unidos, Sudamérica (incluidos Brasil y Argentina), el Reino Unido y el
          Espacio Económico Europeo (EEE). Cuando sea necesario, utilizamos mecanismos legales
          como:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Cláusulas Contractuales Tipo (SCC) aprobadas por la Comisión Europea</li>
          <li>El Addendum del Reino Unido para transferencias desde el UK</li>
          <li>Acuerdos de transferencia de datos conforme a la LGPD de Brasil o la Ley de Protección de Datos de Argentina</li>
          <li>Otras salvaguardas reconocidas para garantizar que sus datos estén protegidos sin importar dónde se procesen</li>
        </ul>
      </>
    ),
  },
  {
    heading: "11. Conservación de datos",
    content: (
      <>
        <p>
          Conservamos sus datos personales solo durante el tiempo necesario para cumplir con
          los fines para los que fueron recopilados, incluido el cumplimiento de requisitos
          legales, regulatorios, fiscales, contables o de reporte.
        </p>
        <p className="mt-3">Los períodos de conservación pueden variar según:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>El tipo de dato</li>
          <li>La naturaleza de nuestra relación con usted</li>
          <li>Los requisitos legales aplicables</li>
        </ul>
        <p className="mt-3">
          Eliminamos o anonimizamos de forma segura los datos personales cuando ya no son
          necesarios.
        </p>
      </>
    ),
  },
  {
    heading: "12. Sus derechos y opciones",
    content: (
      <>
        <p>Usted puede tener derecho a:</p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Acceder y corregir sus datos personales</li>
          <li>Eliminar sus datos personales</li>
          <li>Oponerse o restringir el tratamiento de datos</li>
          <li>Retirar su consentimiento cuando nos basemos en él</li>
          <li>Portar sus datos personales (cuando corresponda)</li>
          <li>Presentar una queja ante una autoridad de supervisión</li>
        </ul>
        <p className="mt-3">
          Si se encuentra en el EEE, el Reino Unido, Brasil, Argentina u otras
          jurisdicciones con leyes de protección de datos, podrían aplicarse derechos
          adicionales (ver Sección 13). Para ejercer sus derechos, contáctenos en{" "}
          <a href="mailto:info@regattaregisters.com" className="text-brand-600 hover:underline">
            info@regattaregisters.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    heading: "13. Derechos específicos por región",
    content: (
      <>
        <p className="font-medium text-ink-800">Para residentes del EEE y el Reino Unido</p>
        <p className="mt-2">
          Usted tiene derechos conforme al RGPD y al RGPD del Reino Unido, incluido el derecho
          a presentar una queja ante una autoridad de supervisión (por ejemplo, la ICO en el
          Reino Unido).
        </p>
        <p className="font-medium text-ink-800 mt-4">Para residentes de Brasil</p>
        <p className="mt-2">Conforme a la LGPD, usted puede:</p>
        <ul className="list-disc pl-6 space-y-1 mt-1">
          <li>Confirmar el tratamiento</li>
          <li>Acceder y corregir sus datos</li>
          <li>Anonimizar, bloquear o eliminar datos innecesarios o excesivos</li>
          <li>Solicitar la portabilidad de los datos</li>
          <li>Revocar el consentimiento</li>
        </ul>
        <p className="font-medium text-ink-800 mt-4">Para residentes de Argentina</p>
        <p className="mt-2">Conforme a la Ley 25.326 de Argentina, usted tiene derecho a:</p>
        <ul className="list-disc pl-6 space-y-1 mt-1">
          <li>Acceder, rectificar, actualizar y eliminar datos personales</li>
          <li>Presentar reclamos ante la Agencia de Acceso a la Información Pública</li>
        </ul>
      </>
    ),
  },
  {
    heading: "14. Enlaces y servicios de terceros",
    content: (
      <p>
        Nuestro sitio web y servicios pueden contener enlaces a sitios o servicios de
        terceros. No somos responsables de las prácticas de privacidad de dichos terceros. Le
        recomendamos revisar sus políticas de privacidad antes de proporcionarles sus datos
        personales.
      </p>
    ),
  },
  {
    heading: "15. Actualizaciones de este Aviso de Privacidad",
    content: (
      <p>
        Podemos actualizar este Aviso de Privacidad en cualquier momento sin previo aviso.
        Cualquier cambio entrará en vigor al publicarse el aviso revisado en esta página,
        actualizando la fecha de &quot;Última actualización&quot; correspondiente. Si realizamos
        cambios materiales, proporcionaremos un aviso destacado en nuestro sitio web o
        plataforma. El uso continuado de nuestros servicios después de que los cambios entren
        en vigor constituye su aceptación del Aviso de Privacidad revisado. Si no está de
        acuerdo con los cambios, debe dejar de usar nuestros servicios.
      </p>
    ),
  },
  {
    heading: "16. Quejas y autoridades de supervisión",
    content: (
      <>
        <p>
          Si considera que no hemos tratado sus datos conforme a las leyes de privacidad
          aplicables, puede contactar a:
        </p>
        <ul className="list-disc pl-6 space-y-1 mt-2">
          <li>Oficina del Comisionado de Información de Australia (OAIC): www.oaic.gov.au</li>
          <li>Autoridad Nacional de Protección de Datos de Brasil (ANPD): www.gov.br/anpd</li>
          <li>Oficina del Comisionado de Información del Reino Unido (ICO): www.ico.org.uk</li>
          <li>Autoridades Europeas de Protección de Datos: consulte el sitio de la Comisión Europea para ver el listado completo</li>
          <li>Agencia de Acceso a la Información Pública de Argentina: www.argentina.gob.ar/aaip</li>
        </ul>
        <p className="mt-3">
          Le recomendamos que nos contacte primero para intentar resolver sus inquietudes
          directamente.
        </p>
      </>
    ),
  },
];

export function PrivacyPolicyContent() {
  const { code } = useCountry();
  const isEs = code === "co";

  return (
    <LegalPage
      title={isEs ? "Política de Privacidad" : "Privacy Policy"}
      lastRevised={isEs ? "13 de mayo de 2025" : "May 13, 2025"}
      intro={isEs ? introEs : introEn}
      sections={isEs ? sectionsEs : sectionsEn}
      contact={isEs ? contactEs : contactEn}
    />
  );
}
