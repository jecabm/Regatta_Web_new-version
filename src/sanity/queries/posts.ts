import { defineQuery } from 'next-sanity'

export const postsListQuery = defineQuery(`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    coverImage { ..., asset-> }
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

export const postBySlugQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    coverImage { ..., asset-> },
    body[] {
      ...,
      _type == "image" => { ..., asset-> }
    },
    seoTitle,
    seoDescription
  }
`)
