import { defineQuery } from 'next-sanity'

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
