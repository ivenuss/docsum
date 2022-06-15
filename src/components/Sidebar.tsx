import React, { useEffect } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { createSidebar } from '@/config/sidebar'
import { CgClose } from 'react-icons/cg'
import { userOverlay } from '@/global-stores/useOverlayStore'
import { ThemeSwitcher } from './ThemeSwitcher'
import type { SidebarCollection, SidebarItem } from '@/types'

interface SidebarProps {
  sidebar: SidebarCollection
}

interface SidebarSectionProps {
  title: string
  items: SidebarItem[]
}

export const Sidebar: React.FC<SidebarProps> = ({ sidebar }) => {
  const router = useRouter()
  const sections = createSidebar(sidebar)
  const { set, isSidebarOpen } = userOverlay()

  const closeSibdar = () => set((state) => ({ ...state, isSidebarOpen: false }))

  useEffect(() => {
    document.body.style.overflowY = isSidebarOpen ? 'hidden' : 'auto'
  }, [isSidebarOpen])

  useEffect(() => {
    if (isSidebarOpen) closeSibdar()
  }, [router])

  const content = Object.entries(sections).map(([title, items], i) => {
    return (
      <SidebarSection
        key={`${i}-${title}`}
        title={title}
        items={items.filter((i) => !!i)}
      />
    )
  })

  return (
    <>
      {isSidebarOpen && (
        <div className='fixed z-50 inset-0 md:hidden'>
          <div className='fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80' />
          <div className='fixed top-0 h-full w-80 z-[200] overflow-y-auto border-r border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'>
            <div className='flex items-center justify-between p-8 pb-4'>
              <div className='flex items-center'>
                <ThemeSwitcher />
              </div>
              <button
                onClick={closeSibdar}
                className='p-2 text-xl rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-slate-700'
              >
                <CgClose />
              </button>
            </div>

            <ul className='p-8 pt-4'>{content}</ul>
          </div>
        </div>
      )}

      <aside className='top-[3.6875rem] bottom-0 w-60 max-w-[24rem] left-[max(0px,calc(50%-45rem))] h-full flex-shrink-0 md:sticky md:overflow-y-visible hidden md:block'>
        <div className='h-full overflow-y-auto md:sticky md:overflow-hidden'>
          <div className='border-b border-athens-gray md:max-h-[calc(100vh-59px)] md:overflow-y-auto md:border-b-0 md:p-8 pt-0 xl:pt-10 md:pr-0'>
            <ul>{content}</ul>
          </div>
        </div>
      </aside>
    </>
  )
}

export const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  items,
}) => {
  const router = useRouter()

  return (
    <li>
      <h3 className='text-lg md:text-base font-bold text-slate-900 dark:text-slate-200 py-2'>
        {title}
      </h3>
      <ul className='flex flex-col mb-2 ml-2'>
        {items?.map((item, i) => {
          let isActive = item?.href === router.asPath

          return (
            <Link key={i} href={item.href}>
              <a className='md:text-sm'>
                <li
                  key={item.slug}
                  className={clsx(
                    'inline-flex px-2 py-1 font-medium rounded-md transition-colors duration-75',
                    {
                      'bg-sky-100/40 dark:bg-slate-800 text-sky-400': isActive,
                      'text-slate-500 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-300':
                        !isActive,
                    },
                  )}
                >
                  <span>{item.title}</span>
                </li>
              </a>
            </Link>
          )
        })}
      </ul>
    </li>
  )
}
