import type { CountryContent } from "@/content/countries/types";
import { pick } from "@/lib/content-merge";

/** Shape returned by `contactPageQuery` — every field optional since Studio editors may leave fields blank. */
export interface SanityContactDoc {
  country?: "au" | "co";
  hero?: {
    eyebrow?: string;
    title?: string;
    subtitle?: string;
  };
  form?: {
    name?: string;
    company?: string;
    email?: string;
    message?: string;
    submit?: string;
    success?: string;
  };
  detailsTitle?: string;
  channelsTitle?: string;
  contactInfo?: {
    region?: string;
    phone?: string;
    email?: string;
    address?: string;
  };
}

/** Layers Studio-edited Contact copy over the static per-country defaults. */
export function mergeContactContent(base: CountryContent, override?: SanityContactDoc | null): CountryContent {
  if (!override) return base;
  const { contactPage, contact } = base;

  return {
    ...base,
    contactPage: {
      eyebrow: pick(override.hero?.eyebrow, contactPage.eyebrow),
      title: pick(override.hero?.title, contactPage.title),
      subtitle: pick(override.hero?.subtitle, contactPage.subtitle),
      form: {
        name: pick(override.form?.name, contactPage.form.name),
        company: pick(override.form?.company, contactPage.form.company),
        email: pick(override.form?.email, contactPage.form.email),
        message: pick(override.form?.message, contactPage.form.message),
        submit: pick(override.form?.submit, contactPage.form.submit),
        success: pick(override.form?.success, contactPage.form.success),
      },
      detailsTitle: pick(override.detailsTitle, contactPage.detailsTitle),
      channelsTitle: pick(override.channelsTitle, contactPage.channelsTitle),
    },
    contact: {
      region: pick(override.contactInfo?.region, contact.region),
      phone: pick(override.contactInfo?.phone, contact.phone),
      email: pick(override.contactInfo?.email, contact.email),
      address: pick(override.contactInfo?.address, contact.address),
    },
  };
}
