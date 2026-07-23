import { TagIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

const tierItem = defineArrayMember({
  type: 'object',
  name: 'tierItem',
  fields: [
    defineField({ name: 'name', title: 'Plan name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'string' }),
    defineField({
      name: 'monthlyAmount',
      title: 'Monthly amount',
      type: 'number',
      description: 'Leave empty for "Custom" pricing (e.g. Enterprise).',
    }),
    defineField({
      name: 'annualAmount',
      title: 'Annual amount (billed annually)',
      type: 'number',
      description: 'Leave empty for "Custom" pricing (e.g. Enterprise).',
    }),
    defineField({ name: 'features', title: 'Feature bullets', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'cta', title: 'CTA label', type: 'string' }),
    defineField({ name: 'popular', title: 'Highlight as "Most popular"', type: 'boolean', initialValue: false }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'description' },
  },
})

const faqItem = defineArrayMember({
  type: 'object',
  name: 'faqItem',
  fields: [
    defineField({ name: 'q', title: 'Question', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'a', title: 'Answer', type: 'text', rows: 3 }),
  ],
  preview: { select: { title: 'q' } },
})

export const pricingPage = defineType({
  name: 'pricingPage',
  title: 'Pricing page',
  type: 'document',
  icon: TagIcon,
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

    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
        defineField({ name: 'note', title: 'Note below tiers', type: 'string' }),
      ],
    }),

    defineField({
      name: 'tiers',
      title: 'Pricing tiers',
      type: 'array',
      of: [tierItem],
      validation: (rule) => rule.min(1),
    }),

    defineField({
      name: 'labels',
      title: 'Labels',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'perMonth', title: '"/mo" suffix', type: 'string' }),
        defineField({ name: 'custom', title: '"Custom" price label', type: 'string' }),
        defineField({ name: 'mostPopular', title: '"Most popular" badge', type: 'string' }),
        defineField({ name: 'comparePlans', title: 'Comparison table title', type: 'string' }),
        defineField({ name: 'compareSubtitle', title: 'Comparison table subtitle', type: 'string' }),
        defineField({ name: 'featureColumn', title: '"Feature" column header', type: 'string' }),
        defineField({
          name: 'categories',
          title: 'Comparison table category labels',
          type: 'object',
          fields: [
            defineField({ name: 'core', title: 'Core', type: 'string' }),
            defineField({ name: 'compliance', title: 'Compliance', type: 'string' }),
            defineField({ name: 'teamLocations', title: 'Team & Locations', type: 'string' }),
            defineField({ name: 'enterprise', title: 'Enterprise', type: 'string' }),
            defineField({ name: 'support', title: 'Support', type: 'string' }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'title', title: 'FAQ section title', type: 'string' }),
        defineField({ name: 'items', title: 'Questions', type: 'array', of: [faqItem] }),
      ],
    }),

    defineField({
      name: 'closing',
      title: 'Closing "still have questions" band',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
      ],
    }),
  ],
  preview: {
    select: { country: 'country' },
    prepare({ country }) {
      return { title: `Pricing — ${country === 'au' ? 'Australia' : country === 'co' ? 'Colombia' : country}` }
    },
  },
})
