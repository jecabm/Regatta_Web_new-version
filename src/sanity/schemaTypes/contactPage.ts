import { EnvelopeIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact page',
  type: 'document',
  icon: EnvelopeIcon,
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
      ],
    }),

    defineField({
      name: 'form',
      title: 'Form labels',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'name', title: '"Name" field label', type: 'string' }),
        defineField({ name: 'company', title: '"Company" field label', type: 'string' }),
        defineField({ name: 'email', title: '"Email" field label', type: 'string' }),
        defineField({ name: 'message', title: '"Message" field label', type: 'string' }),
        defineField({ name: 'submit', title: 'Submit button label', type: 'string' }),
        defineField({ name: 'success', title: 'Success message', type: 'string' }),
      ],
    }),

    defineField({ name: 'detailsTitle', title: '"Company details" section title', type: 'string' }),
    defineField({ name: 'channelsTitle', title: '"Support channels" section title', type: 'string' }),

    defineField({
      name: 'contactInfo',
      title: 'Contact details',
      type: 'object',
      options: { collapsible: true, collapsed: false },
      fields: [
        defineField({ name: 'region', title: 'Region label', type: 'string' }),
        defineField({ name: 'phone', title: 'Phone', type: 'string' }),
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'address', title: 'Address', type: 'string' }),
      ],
    }),
  ],
  preview: {
    select: { country: 'country' },
    prepare({ country }) {
      return { title: `Contact — ${country === 'au' ? 'Australia' : country === 'co' ? 'Colombia' : country}` }
    },
  },
})
