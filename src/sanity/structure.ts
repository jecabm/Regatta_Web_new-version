import { BookIcon, DocumentTextIcon, HelpCircleIcon, PlayIcon, StarIcon, TagIcon, UsersIcon } from '@sanity/icons'
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Regatta Registers')
    .items([
      S.listItem()
        .title('Blog / Resources')
        .icon(DocumentTextIcon)
        .child(S.documentTypeList('post').title('Blog / Resources')),

      S.divider(),

      S.listItem()
        .title('Learning Centre')
        .icon(BookIcon)
        .child(
          S.list()
            .title('Learning Centre')
            .items([
              S.listItem()
                .title('FAQ')
                .icon(HelpCircleIcon)
                .child(S.documentTypeList('learningItem').title('FAQ')),
              S.listItem()
                .title('Video Tutorials')
                .icon(PlayIcon)
                .child(S.documentTypeList('videoTutorial').title('Video Tutorials')),
            ])
        ),

      S.divider(),

      S.listItem()
        .title('Shop — Products')
        .icon(TagIcon)
        .child(S.documentTypeList('product').title('Products')),

      S.divider(),

      S.listItem()
        .title('Testimonials')
        .icon(StarIcon)
        .child(S.documentTypeList('testimonial').title('Testimonials')),
      S.listItem()
        .title('Team Members')
        .icon(UsersIcon)
        .child(S.documentTypeList('teamMember').title('Team Members')),
    ])
