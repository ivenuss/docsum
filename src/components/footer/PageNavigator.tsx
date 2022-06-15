import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { createSidebar } from '@/config/sidebar'
import { useRouter } from 'next/router'
import type { SidebarCollection, SidebarItem } from '@/types'

interface PageNavigatorProps {
  sidebar: SidebarCollection
}

export const PageNavigator: React.FC<PageNavigatorProps> = ({ sidebar }) => {
  const router = useRouter()

  const sections = createSidebar(sidebar)
  const arrayOfItems: SidebarItem[] = [].concat.apply(
    [],
    Object.values(sections),
  )

  const activeIndex = arrayOfItems.findIndex((item) => {
    return item?.href === router.asPath
  })

  const len = arrayOfItems.length

  // https://stackoverflow.com/a/14388333
  const prev = arrayOfItems[(activeIndex + len - 1) % len]
  const next = arrayOfItems[(activeIndex + 1) % len]

  const buttonCn =
    'w-full text-left p-3 border hover:border-sky-400 border-slate-200 dark:border-slate-800 dark:hover:border-sky-400 transition-colors rounded-md'

  return (
    <div className='flex justify-between gap-8 mt-8'>
      <Link href={prev.href}>
        <a className={buttonCn}>
          <div className='text-sm text-slate-600 mb-0.5'>Prev</div>
          <div className='font-medium text-sky-400'>{prev.title}</div>
        </a>
      </Link>

      <Link href={next.href}>
        <a className={clsx(buttonCn, 'text-right')}>
          <div className='text-sm text-slate-600 mb-0.5'>Next</div>
          <div className='font-medium text-sky-400'>{next.title}</div>
        </a>
      </Link>
    </div>
  )
}
