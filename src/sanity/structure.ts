import { BookIcon, DocumentTextIcon, EnvelopeIcon, HelpCircleIcon, HomeIcon, PlayIcon, RocketIcon, StarIcon, TagIcon, UsersIcon } from '@sanity/icons'
import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Regatta Registers')
    .items([
      S.listItem()
        .title('Homepage')
        .icon(HomeIcon)
        .child(
          S.list()
            .title('Homepage')
            .items([
              S.listItem()
                .title('Australia')
                .child(S.document().schemaType('homePage').documentId('homePage-au')),
              S.listItem()
                .title('Colombia')
                .child(S.document().schemaType('homePage').documentId('homePage-co')),
            ])
        ),

      S.listItem()
        .title('Features Page')
        .icon(RocketIcon)
        .child(
          S.list()
            .title('Features Page')
            .items([
              S.listItem()
                .title('Australia')
                .child(S.document().schemaType('featuresPage').documentId('featuresPage-au')),
              S.listItem()
                .title('Colombia')
                .child(S.document().schemaType('featuresPage').documentId('featuresPage-co')),
            ])
        ),

      S.listItem()
        .title('Pricing Page')
        .icon(TagIcon)
        .child(
          S.list()
            .title('Pricing Page')
            .items([
              S.listItem()
                .title('Australia')
                .child(S.document().schemaType('pricingPage').documentId('pricingPage-au')),
              S.listItem()
                .title('Colombia')
                .child(S.document().schemaType('pricingPage').documentId('pricingPage-co')),
            ])
        ),

      S.listItem()
        .title('About Page')
        .icon(UsersIcon)
        .child(
          S.list()
            .title('About Page')
            .items([
              S.listItem()
                .title('Australia')
                .child(S.document().schemaType('aboutPage').documentId('aboutPage-au')),
              S.listItem()
                .title('Colombia')
                .child(S.document().schemaType('aboutPage').documentId('aboutPage-co')),
            ])
        ),

      S.listItem()
        .title('Contact Page')
        .icon(EnvelopeIcon)
        .child(
          S.list()
            .title('Contact Page')
            .items([
              S.listItem()
                .title('Australia')
                .child(S.document().schemaType('contactPage').documentId('contactPage-au')),
              S.listItem()
                .title('Colombia')
                .child(S.document().schemaType('contactPage').documentId('contactPage-co')),
            ])
        ),

      S.divider(),

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
