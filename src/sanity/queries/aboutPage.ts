import { defineQuery } from 'next-sanity'

export const aboutPageQuery = defineQuery(
  `*[_type == "aboutPage" && country == $country][0]`
)
