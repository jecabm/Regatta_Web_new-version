import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '72locida',
  dataset: 'production',
  apiVersion: '2026-06-05',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
})

// ─── BLOG POSTS ──────────────────────────────────────────────────────────────

const posts = [
  {
    _type: 'post',
    title: 'How to Stay Compliant with AS/NZS Lifting Equipment Standards',
    slug: { _type: 'slug', current: 'how-to-stay-compliant-asnzs-lifting-equipment' },
    excerpt:
      'Lifting equipment compliance in Australia and New Zealand is governed by AS/NZS standards. Here\'s what every site manager needs to know about inspection intervals, record-keeping, and what to do when gear fails.',
    publishedAt: new Date('2026-05-15').toISOString(),
    author: 'Regatta Registers Team',
    readTime: 6,
    category: 'compliance',
    featured: true,
    tags: ['compliance', 'AS/NZS', 'lifting equipment', 'inspections'],
    body: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'intro-span',
            text: 'If your business uses lifting equipment — cranes, hoists, slings, shackles, or rigging gear — you are legally required to maintain a current register and ensure all assets are inspected at defined intervals. In Australia and New Zealand, this is governed primarily by AS/NZS 4991:2004 and the harmonised Work Health and Safety (WHS) regulations.',
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'h2-1',
        style: 'h2',
        children: [{ _type: 'span', _key: 'h2-1-span', text: 'What the standard requires' }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'para-1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'para-1-span',
            text: 'The standard mandates that all lifting equipment be inspected before first use, after any incident, and at regular intervals — typically every 3 or 6 months depending on the duty classification of the equipment. Each inspection must be documented with the inspector\'s name, date, condition rating, and any defects or remedial action taken.',
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'h2-2',
        style: 'h2',
        children: [{ _type: 'span', _key: 'h2-2-span', text: 'The role of a lifting register' }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'para-2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'para-2-span',
            text: 'A lifting register is a live record of every piece of equipment on your site — its identification number, rated capacity, test certificates, inspection history, and current status. Regulators and auditors expect this to be up to date and accessible on demand. Paper registers and spreadsheets work, but they create serious risk: records get lost, inspection dates get missed, and there is no audit trail when questions arise.',
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'h2-3',
        style: 'h2',
        children: [{ _type: 'span', _key: 'h2-3-span', text: 'How Regatta Registers helps' }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'para-3',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'para-3-span',
            text: 'Regatta Registers is built around the requirements of AS/NZS and WHS regulations from the ground up. Every asset gets a QR code. Inspectors scan it in the field and complete a structured inspection form — with or without internet access. Results sync automatically, the register updates instantly, and you have a full audit trail that\'s accessible from any device.',
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _type: 'post',
    title: '5 Signs Your Asset Management Process Is Putting You at Risk',
    slug: { _type: 'slug', current: '5-signs-asset-management-putting-you-at-risk' },
    excerpt:
      'Outdated spreadsheets, missed inspection dates, and no single source of truth are all warning signs. Here are five red flags that your current asset management process is a liability — and what to do about it.',
    publishedAt: new Date('2026-05-28').toISOString(),
    author: 'Regatta Registers Team',
    readTime: 5,
    category: 'asset-management',
    featured: false,
    tags: ['asset management', 'risk', 'compliance', 'lifting gear'],
    body: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'intro-span',
            text: 'Managing lifting equipment and industrial assets across multiple sites is genuinely complex. But complexity is not an excuse for a broken process. Here are five warning signs that your current approach is creating risk — for your workers, your business, and your compliance obligations.',
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'h2-1',
        style: 'h2',
        children: [{ _type: 'span', _key: 'h2-1-span', text: '1. You rely on spreadsheets or paper registers' }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'para-1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'para-1-span',
            text: 'Spreadsheets are not registers. They have no audit trail, no version control, and no way to enforce who updates what. When an inspector adds a row, there is no automatic notification, no linked certificate, and no way to see when the last inspection actually happened versus when it was recorded. If your register lives in a shared Google Sheet, that is a liability.',
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'h2-2',
        style: 'h2',
        children: [{ _type: 'span', _key: 'h2-2-span', text: '2. Inspection dates get missed regularly' }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'para-2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'para-2-span',
            text: 'If your team discovers overdue inspections only when someone asks, or when a client audit is looming, your process has already failed. A compliant system sends automated reminders before due dates, flags overdue assets immediately, and gives site managers a real-time view of what is cleared for use.',
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'h2-3',
        style: 'h2',
        children: [{ _type: 'span', _key: 'h2-3-span', text: '3. You cannot find the test certificate for a piece of gear' }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'para-3',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'para-3-span',
            text: 'Regulators and clients will ask for test certificates. If finding one takes more than a minute — or involves hunting through email attachments or filing cabinets — your process is not fit for purpose. Every certificate should be attached directly to the asset record and retrievable instantly from a mobile device.',
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'h2-4',
        style: 'h2',
        children: [{ _type: 'span', _key: 'h2-4-span', text: '4. Different sites use different systems' }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'para-4',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'para-4-span',
            text: 'When each depot or project site manages its own gear in its own way, there is no visibility across the business. Equipment moves between sites and its history disappears. Assets get duplicated in records, or worse, go unregistered entirely. A single platform covering all locations is not a luxury — it is a basic operational requirement.',
          },
        ],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'h2-5',
        style: 'h2',
        children: [{ _type: 'span', _key: 'h2-5-span', text: '5. Inspections happen in the office, not in the field' }],
        markDefs: [],
      },
      {
        _type: 'block',
        _key: 'para-5',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'para-5-span',
            text: 'If inspection results are recorded on paper and transcribed into a system later, you have introduced a delay and an error point. Field inspectors should complete digital forms at the asset — scanning its QR code, answering structured questions, and uploading photos — with data syncing the moment they are back online.',
          },
        ],
        markDefs: [],
      },
    ],
  },
]

// ─── FAQ ITEMS ────────────────────────────────────────────────────────────────

const faqItems = [
  {
    _type: 'learningItem',
    question: 'How do I add a new piece of equipment to my register?',
    category: 'getting-started',
    order: 1,
    featured: true,
    answer: [
      {
        _type: 'block',
        _key: 'a1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'a1s',
            text: 'Go to Assets → Add Asset. Fill in the asset name, type, serial number, rated capacity, and manufacturer. Once saved, Regatta Registers automatically generates a unique QR code for that asset. You can print the QR code label directly from the asset page and attach it to the equipment.',
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _type: 'learningItem',
    question: 'Can I complete inspections without internet access?',
    category: 'inspections',
    order: 1,
    featured: true,
    answer: [
      {
        _type: 'block',
        _key: 'a2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'a2s',
            text: 'Yes. The Regatta Registers mobile app works fully offline. Open the app before heading to site to cache your asset register. Once on site, scan QR codes and complete inspection forms as normal — all data is stored locally. As soon as your device reconnects to the internet, everything syncs automatically to the cloud.',
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _type: 'learningItem',
    question: 'How do inspection due dates and reminders work?',
    category: 'inspections',
    order: 2,
    featured: true,
    answer: [
      {
        _type: 'block',
        _key: 'a3',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'a3s',
            text: 'When you configure an asset, you set its inspection interval (e.g. every 3 months). Regatta Registers tracks the last inspection date and calculates when the next one is due. You receive email and in-app reminders 14 days before the due date, and overdue assets are flagged in red on your dashboard so nothing slips through.',
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _type: 'learningItem',
    question: 'How do I upload test certificates and attach them to assets?',
    category: 'asset-register',
    order: 1,
    featured: false,
    answer: [
      {
        _type: 'block',
        _key: 'a4',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'a4s',
            text: 'Open the asset record and click the Documents tab. You can drag and drop PDF certificates or take a photo directly from your mobile. Each document is stored against that specific asset and is retrievable instantly — both from the web app and by scanning the asset\'s QR code.',
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _type: 'learningItem',
    question: 'Can I manage assets across multiple sites from one account?',
    category: 'asset-register',
    order: 2,
    featured: false,
    answer: [
      {
        _type: 'block',
        _key: 'a5',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'a5s',
            text: 'Yes. Regatta Registers supports unlimited locations under a single account. Create a location for each site, depot, or project and assign assets to it. You can filter your register by location, run compliance reports per site, and reassign assets when equipment moves between locations.',
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _type: 'learningItem',
    question: 'What compliance reports can I generate?',
    category: 'compliance',
    order: 1,
    featured: false,
    answer: [
      {
        _type: 'block',
        _key: 'a6',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'a6s',
            text: 'Regatta Registers can generate a full Lifting Equipment Register report (PDF), an Inspection History report per asset, an Overdue Inspections report, and a Compliance Summary report suitable for client or regulator submissions. Reports include all asset details, inspection records, and certificate references.',
          },
        ],
        markDefs: [],
      },
    ],
  },
  {
    _type: 'learningItem',
    question: 'How do I add team members and control what they can access?',
    category: 'account',
    order: 1,
    featured: false,
    answer: [
      {
        _type: 'block',
        _key: 'a7',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'a7s',
            text: 'Go to Settings → Team and invite users by email. You can assign each user a role: Admin (full access), Inspector (can complete inspections, cannot edit asset details), or Viewer (read-only). Roles can be changed at any time, and you can restrict access to specific locations if needed.',
          },
        ],
        markDefs: [],
      },
    ],
  },
]

// ─── VIDEO TUTORIALS ──────────────────────────────────────────────────────────

const videoTutorials = [
  {
    _type: 'videoTutorial',
    title: 'Getting Started: Setting Up Your Asset Register',
    description: 'A complete walkthrough of creating your first location, adding assets, and printing QR code labels — from zero to a live register in under 10 minutes.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '9:42',
    category: 'getting-started',
    order: 1,
    featured: true,
  },
  {
    _type: 'videoTutorial',
    title: 'Completing Your First Field Inspection',
    description: 'Learn how to scan an asset QR code, complete a structured inspection form, add photos, and submit — with and without internet connection.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '6:15',
    category: 'inspections',
    order: 1,
    featured: true,
  },
  {
    _type: 'videoTutorial',
    title: 'Setting Inspection Intervals and Due Date Reminders',
    description: 'Configure inspection schedules for different equipment types, set reminder lead times, and understand how overdue flags appear on the dashboard.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '4:58',
    category: 'inspections',
    order: 2,
    featured: false,
  },
  {
    _type: 'videoTutorial',
    title: 'Uploading Test Certificates and Managing Documents',
    description: 'Attach test certificates, load test reports, and manufacturer documents directly to asset records — and retrieve them instantly from mobile.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '5:30',
    category: 'asset-register',
    order: 1,
    featured: false,
  },
  {
    _type: 'videoTutorial',
    title: 'Managing Multiple Sites and Locations',
    description: 'Create locations for each site or depot, assign assets, move equipment between locations, and filter your register view by site.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '7:03',
    category: 'asset-register',
    order: 2,
    featured: true,
  },
  {
    _type: 'videoTutorial',
    title: 'Generating Compliance Reports',
    description: 'Export a full Lifting Equipment Register PDF, run an overdue inspections report, and produce a compliance summary ready for client or regulator submission.',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    duration: '4:20',
    category: 'compliance',
    order: 1,
    featured: false,
  },
]

// ─── SEED ─────────────────────────────────────────────────────────────────────

async function seed() {
  console.log('Seeding Sanity dataset: production\n')

  for (const post of posts) {
    const doc = await client.create(post)
    console.log(`✓ Blog post: "${post.title}" (${doc._id})`)
  }

  for (const faq of faqItems) {
    const doc = await client.create(faq)
    console.log(`✓ FAQ: "${faq.question}" (${doc._id})`)
  }

  for (const video of videoTutorials) {
    const doc = await client.create(video)
    console.log(`✓ Video tutorial: "${video.title}" (${doc._id})`)
  }

  console.log('\nDone.')
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
