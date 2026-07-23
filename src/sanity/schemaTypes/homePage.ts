import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

const featureItem = defineArrayMember({
  type: 'object',
  name: 'featureItem',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'title', subtitle: 'description' } },
})

const stepItem = defineArrayMember({
  type: 'object',
  name: 'stepItem',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'title', subtitle: 'description' } },
})

export const homePage = defineType({
  name: 'homePage',
  title: 'Homepage',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      options: {
        list: [
          { title: 'Australia', value: 'au' },
          { title: 'Colombia', value: 'co' },
        ],
      },
      validation: (rule) => rule.required(),
      readOnly: true,
    }),

    // Hero (mercury-hero.tsx)
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'titleLine1', title: 'Title — line 1', type: 'string' }),
        defineField({ name: 'titleHighlight', title: 'Title — highlighted word', type: 'string' }),
        defineField({ name: 'titleLine2', title: 'Title — line 2', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
        defineField({ name: 'scrollHint', title: 'Scroll hint label', type: 'string' }),
      ],
    }),

    // TrustBar
    defineField({
      name: 'trustBar',
      title: 'Trust bar',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'usedIn', title: '"Used in" label', type: 'string' }),
        defineField({ name: 'industries', title: 'Industry names', type: 'array', of: [{ type: 'string' }] }),
      ],
    }),

    // WhySection
    defineField({
      name: 'why',
      title: 'Why section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
        defineField({ name: 'items', title: 'Feature cards', type: 'array', of: [featureItem] }),
      ],
    }),

    // LiftingEquipmentSection
    defineField({
      name: 'liftingEquipment',
      title: 'Lifting equipment section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'titleHighlight', title: 'Title — highlighted word', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
        defineField({ name: 'features', title: 'Features', type: 'array', of: [featureItem] }),
        defineField({ name: 'ctaPrimary', title: 'Primary CTA label', type: 'string' }),
        defineField({ name: 'ctaSecondary', title: 'Secondary CTA label', type: 'string' }),
      ],
    }),

    // HowItWorks
    defineField({
      name: 'howItWorks',
      title: 'How it works section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
        defineField({ name: 'steps', title: 'Steps', type: 'array', of: [stepItem] }),
      ],
    }),

    // IndustriesSection
    defineField({
      name: 'industries',
      title: 'Industries section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
        defineField({ name: 'badge', title: 'Badge label', type: 'string' }),
        defineField({ name: 'items', title: 'Industry cards', type: 'array', of: [featureItem] }),
      ],
    }),

    // CtaBand
    defineField({
      name: 'cta',
      title: 'CTA band',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
        defineField({ name: 'primary', title: 'Primary CTA label', type: 'string' }),
        defineField({ name: 'secondary', title: 'Secondary CTA label', type: 'string' }),
      ],
    }),
  ],
  preview: {
    select: { country: 'country' },
    prepare({ country }) {
      return { title: `Homepage — ${country === 'au' ? 'Australia' : country === 'co' ? 'Colombia' : country}` }
    },
  },
})
