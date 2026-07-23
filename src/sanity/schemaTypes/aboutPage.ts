import { UsersIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

const statItem = defineArrayMember({
  type: 'object',
  name: 'statItem',
  fields: [
    defineField({ name: 'value', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
  ],
  preview: { select: { title: 'value', subtitle: 'label' } },
})

const valueItem = defineArrayMember({
  type: 'object',
  name: 'valueItem',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'description', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'title', subtitle: 'description' } },
})

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About page',
  type: 'document',
  icon: UsersIcon,
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
        defineField({ name: 'intro', title: 'Intro paragraph', type: 'text', rows: 3 }),
        defineField({
          name: 'secondaryIntro',
          title: 'Secondary intro paragraphs',
          type: 'text',
          rows: 5,
          description: 'Separate paragraphs with a blank line.',
        }),
      ],
    }),

    defineField({
      name: 'stats',
      title: 'Stats bar',
      type: 'array',
      of: [statItem],
      description: 'Leave empty to hide the stats bar.',
    }),

    defineField({
      name: 'mission',
      title: 'Mission',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({
          name: 'body',
          title: 'Body',
          type: 'text',
          rows: 5,
          description: 'Separate paragraphs with a blank line.',
        }),
      ],
    }),

    defineField({
      name: 'values',
      title: 'Values section',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'title', title: 'Section title', type: 'string' }),
        defineField({ name: 'items', title: 'Value cards', type: 'array', of: [valueItem] }),
      ],
    }),

    defineField({
      name: 'cta',
      title: 'Closing CTA band',
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
      return { title: `About — ${country === 'au' ? 'Australia' : country === 'co' ? 'Colombia' : country}` }
    },
  },
})
