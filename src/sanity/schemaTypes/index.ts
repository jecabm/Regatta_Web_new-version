import { type SchemaTypeDefinition } from 'sanity'
import { learningItem } from './learningItem'
import { post } from './post'
import { product } from './product'
import { teamMember } from './teamMember'
import { testimonial } from './testimonial'
import { videoTutorial } from './videoTutorial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, testimonial, teamMember, learningItem, videoTutorial, product],
}
