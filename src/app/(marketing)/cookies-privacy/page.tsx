import type { Metadata } from "next";
import { LegalPage } from "@/components/marketing/legal-page";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy for Regatta Registers — how we use cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookies Policy"
      lastRevised="April 27, 2025"
      intro={
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
      }
      sections={[
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
