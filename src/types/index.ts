export interface SidebarCollection {
  [key: string]: SidebarItem
}

export interface SidebarItem {
  slug: string
  title: string
  description: string
  href: string
}

export type TableOfContent = TableOfContentHeading[]

export interface TableOfContentHeading {
  level: number
  title: string
}
