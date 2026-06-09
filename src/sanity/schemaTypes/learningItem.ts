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
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
            defineField({ name: 'caption', type: 'string', title: 'Caption' }),
          ],
        }),
        defineArrayMember({
          type: 'object',
          name: 'videoFile',
          title: 'Video / GIF',
          fields: [
            defineField({
              name: 'file',
              title: 'Video or GIF file',
              type: 'file',
              options: { accept: 'video/*,image/gif' },
              validation: (rule) => rule.required(),
            }),
            defineField({ name: 'caption', type: 'string', title: 'Caption (optional)' }),
          ],
          preview: {
            select: { title: 'caption' },
            prepare({ title }: { title?: string }) {
              return { title: title ?? 'Video / GIF' }
            },
          },
        }),
      ],
      description: 'Rich text answer — supports text, bullet lists, screenshots, and videos/GIFs.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Getting Started', value: 'getting-started' },
          { title: 'Create Company', value: 'create-company' },
          { title: 'Registers', value: 'registers' },
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
