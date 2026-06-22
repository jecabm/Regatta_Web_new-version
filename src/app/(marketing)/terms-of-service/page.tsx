import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Regatta Registers — the legal agreement governing your use of our platform.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastRevised="May 15, 2025"
      sections={[
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
          <p>Postal Address: Unit 3, 12 Scott St, West End QLD</p>
        </>
      }
    />
  );
}
