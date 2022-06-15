import type { SidebarCollection } from '@/types'
import type { Doc } from 'contentlayer/generated'

export function createPageList(files: any[], base: string): SidebarCollection {
  return files.reduce((acc: SidebarCollection, cur: Doc) => {
    let slug = cur.slug

    return {
      ...acc,
      [slug]: {
        slug,
        title: cur.title,
        description: cur.description,
        href: `/${base}/${slug}`,
      },
    }
  }, {})
}
