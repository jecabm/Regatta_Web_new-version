import { defineQuery } from 'next-sanity'

export const videoTutorialsQuery = defineQuery(`
  *[_type == "videoTutorial"] | order(category asc, order asc) {
    _id,
    title,
    description,
    videoUrl,
    thumbnail { ..., asset-> },
    duration,
    startTime,
    endTime,
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
