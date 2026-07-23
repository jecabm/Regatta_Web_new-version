import { defineQuery } from 'next-sanity'

export const contactPageQuery = defineQuery(
  `*[_type == "contactPage" && country == $country][0]`
)
