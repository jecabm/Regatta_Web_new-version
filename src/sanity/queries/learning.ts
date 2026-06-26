import { defineQuery } from 'next-sanity'

export const learningItemsQuery = defineQuery(`
  *[_type == "learningItem"] | order(category asc, order asc) {
    _id,
    question,
    answer[] {
      ...,
      _type == "videoFile" => {
        ...,
        file {
          ...,
          asset-> { url }
        }
      }
    },
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
