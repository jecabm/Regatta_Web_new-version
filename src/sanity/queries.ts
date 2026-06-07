import { defineQuery } from 'next-sanity'

export const postsListQuery = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    coverImage
  }
`)

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    coverImage,
    body,
    seoTitle,
    seoDescription
  }
`)

export const featuredTestimonialsQuery = defineQuery(`
  *[_type == "testimonial" && featured == true] | order(_createdAt asc) {
    _id,
    quote,
    authorName,
    authorRole,
    company,
    industry,
    avatar
  }
`)

export const allTestimonialsQuery = defineQuery(`
  *[_type == "testimonial"] | order(_createdAt asc) {
    _id,
    quote,
    authorName,
    authorRole,
    company,
    industry,
    avatar
  }
`)

export const teamMembersQuery = defineQuery(`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    photo,
    linkedIn
  }
`)

export const learningItemsQuery = defineQuery(`
  *[_type == "learningItem"] | order(category asc, order asc) {
    _id,
    question,
    answer,
    videoUrl,
    category,
    order,
    featured
  }
`)

export const featuredLearningQuery = defineQuery(`
  *[_type == "learningItem" && featured == true] | order(order asc) {
    _id,
    question,
    answer,
    category
  }
`)

export const videoTutorialsQuery = defineQuery(`
  *[_type == "videoTutorial"] | order(category asc, order asc) {
    _id,
    title,
    description,
    videoUrl,
    thumbnail,
    duration,
    category,
    order,
    featured
  }
`)

export const featuredVideoTutorialsQuery = defineQuery(`
  *[_type == "videoTutorial" && featured == true] | order(order asc) {
    _id,
    title,
    description,
    videoUrl,
    thumbnail,
    duration,
    category
  }
`)

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

export const postsListQueryFull = defineQuery(`
  *[_type == "post"] | order(featured desc, publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    coverImage,
    author,
    readTime,
    tags,
    featured
  }
`)
