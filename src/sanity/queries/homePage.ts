import { defineQuery } from 'next-sanity'

export const homePageQuery = defineQuery(
  `*[_type == "homePage" && country == $country][0]`
)
