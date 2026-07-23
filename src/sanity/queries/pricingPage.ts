import { defineQuery } from 'next-sanity'

export const pricingPageQuery = defineQuery(
  `*[_type == "pricingPage" && country == $country][0]`
)
