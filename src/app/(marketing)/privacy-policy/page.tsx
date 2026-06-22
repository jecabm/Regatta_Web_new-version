import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Regatta Registers — how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastRevised="May 13, 2025"
      intro={
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
      }
      sections={[
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
      ]}
      contact={
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
      }
    />
  );
}
