import { defineQuery } from 'next-sanity'

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
