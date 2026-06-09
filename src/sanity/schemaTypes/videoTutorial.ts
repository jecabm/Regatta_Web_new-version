import { PlayIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const videoTutorial = defineType({
  name: 'videoTutorial',
  title: 'Video Tutorial',
  type: 'document',
  icon: PlayIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Short description shown on the tutorial card.',
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube or Vimeo URL (e.g. https://www.youtube.com/watch?v=...).',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: { hotspot: true },
      description: 'Custom thumbnail. Leave blank to use the auto-generated video thumbnail.',
      fields: [
        defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
      ],
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Display duration, e.g. "4:32" or "5 min".',
    }),
    defineField({
      name: 'startTime',
      title: 'Start Time (seconds)',
      type: 'number',
      description: 'Clip start in seconds — leave blank to play from the beginning.',
    }),
    defineField({
      name: 'endTime',
      title: 'End Time (seconds)',
      type: 'number',
      description: 'Clip end in seconds — leave blank to play to the end.',
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
      title: 'Featured Tutorial',
      type: 'boolean',
      initialValue: false,
      description: 'Show on the Learning Centre homepage section.',
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
    select: { title: 'title', subtitle: 'category', media: 'thumbnail' },
  },
})
