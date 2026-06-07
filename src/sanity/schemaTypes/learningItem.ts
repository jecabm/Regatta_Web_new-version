import { HelpCircleIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const learningItem = defineType({
  name: 'learningItem',
  title: 'FAQ',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [defineArrayMember({ type: 'block' })],
      description: 'Rich text answer displayed below the question.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Getting Started', value: 'getting-started' },
          { title: 'Inspections', value: 'inspections' },
          { title: 'Asset Register', value: 'asset-register' },
          { title: 'Compliance & Reporting', value: 'compliance' },
          { title: 'Account & Billing', value: 'account' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first within the category.',
      initialValue: 0,
    }),
    defineField({
      name: 'featured',
      title: 'Show on Homepage FAQ',
      type: 'boolean',
      initialValue: false,
      description: 'Pin this question to the homepage FAQ preview section.',
    }),
  ],
  orderings: [
    {
      title: 'Category then Order',
      name: 'categoryOrder',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: { title: 'question', subtitle: 'category' },
  },
})
