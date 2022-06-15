import type { SidebarCollection } from '@/types'

export function createSidebar(pages: SidebarCollection) {
  return {
    Introduction: [pages['getting-started'], pages['testing']],
    'Api Routes': [
      pages['api-routes/api-middlewares'],
      pages['api-routes/dynamic-api-routes'],
      pages['api-routes/introduction'],
      pages['api-routes/response-helpers'],
    ],
    Guides: [pages['guides/building-forms']],
    Migrating: [
      pages['migrating/from-create-react-app'],
      pages['migrating/from-gatsby'],
      pages['migrating/from-react-router'],
      pages['migrating/incremental-adoption'],
    ],
    Routing: [
      pages['routing/dynamic-routes'],
      pages['routing/imperatively'],
      pages['routing/introduction'],
      pages['routing/shallow-routing'],
    ],
  }
}
