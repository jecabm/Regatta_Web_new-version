import { TagIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  icon: TagIcon,
  groups: [
    { name: 'details', title: 'Details', default: true },
    { name: 'pricing', title: 'Pricing & Stock' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      group: 'details',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'details',
      options: { source: 'name', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      group: 'details',
      description: 'One or two lines shown on the product card.',
      validation: (rule) => rule.max(160),
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      group: 'details',
      of: [defineArrayMember({ type: 'block' })],
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      group: 'details',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
          ],
        }),
      ],
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'details',
      options: {
        list: [
          { title: 'Equipment Labels & Tags', value: 'labels' },
          { title: 'Inspection Tools', value: 'tools' },
          { title: 'Safety Accessories', value: 'accessories' },
          { title: 'Compliance Kits', value: 'kits' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      group: 'details',
      initialValue: false,
    }),
    defineField({
      name: 'price',
      title: 'Price (AUD)',
      type: 'number',
      group: 'pricing',
      description: 'In dollars — e.g. 49.95',
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: 'compareAtPrice',
      title: 'Compare-at Price (AUD)',
      type: 'number',
      group: 'pricing',
      description: 'Original price shown as struck-through. Leave blank if no sale.',
    }),
    defineField({
      name: 'stripePriceId',
      title: 'Stripe Price ID',
      type: 'string',
      group: 'pricing',
      description: 'e.g. price_1ABC123 — from your Stripe dashboard.',
    }),
    defineField({
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      group: 'pricing',
      initialValue: true,
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
      group: 'seo',
      validation: (rule) => rule.max(160),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'category', media: 'images.0' },
  },
})
