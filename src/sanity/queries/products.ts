import { defineQuery } from 'next-sanity'

export const productsQuery = defineQuery(`
  *[_type == "product"] | order(featured desc, _createdAt asc) {
    _id,
    name,
    slug,
    shortDescription,
    images,
    category,
    price,
    compareAtPrice,
    stripePriceId,
    inStock,
    featured
  }
`)

export const productBySlugQuery = defineQuery(`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    shortDescription,
    description,
    images,
    category,
    price,
    compareAtPrice,
    stripePriceId,
    inStock,
    featured,
    seoTitle,
    seoDescription
  }
`)
