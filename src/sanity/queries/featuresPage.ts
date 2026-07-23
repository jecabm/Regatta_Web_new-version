import { defineQuery } from 'next-sanity'

export const featuresPageQuery = defineQuery(
  `*[_type == "featuresPage" && country == $country][0]`
)
