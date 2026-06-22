'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `\src\app\studio\[[...tool]]\page.tsx` route
 */

import {dashboardTool} from '@sanity/dashboard'
import {EyeOpenIcon} from '@sanity/icons'
import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {AnalyticsDashboard} from './src/sanity/plugins/analytics/AnalyticsDashboard'
import {TopPagesWidget} from './src/sanity/plugins/analytics/TopPagesWidget'
import {ClarityDashboard} from './src/sanity/plugins/clarity/ClarityDashboard'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  tools: (prev) => [
    ...prev,
    {
      name: 'user-behavior',
      title: 'User Behavior',
      icon: EyeOpenIcon,
      component: ClarityDashboard,
    },
  ],
  plugins: [
    dashboardTool({
      widgets: [
        {
          name: 'analytics',
          component: AnalyticsDashboard,
          layout: {width: 'full'},
        },
        {
          name: 'top-pages',
          component: TopPagesWidget,
          layout: {width: 'full'},
        },
      ],
    }),
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
  ],
})
