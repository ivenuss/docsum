import React, { useMemo } from 'react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarSearch,
  KBarAnimator,
  KBarResults,
  useMatches,
  Action,
} from 'kbar'
import { allDocs } from 'contentlayer/generated'
import { IoMdMoon, IoMdSunny } from 'react-icons/io'
import { SearchCard } from './SearchCard'
import { createSidebar } from '@/config/sidebar'
import { createPageList } from '@/utils/createPageList'
import { FaDiscord, FaGithub, FaSearch, FaYoutube } from 'react-icons/fa'
import { useTheme } from 'next-themes'

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter()
  const { setTheme } = useTheme()

  const data = createPageList(allDocs, 'docs')
  const nav = createSidebar(data)

  const actions = useMemo(() => {
    let actions: Action[] = [
      {
        id: 'home',
        name: 'Homepage',
        keywords: 'Contentlayer Home Start Index Overview Features Intro',
        section: 'Home',
        perform: () => router.push('/'),
      },
      {
        id: 'theme',
        name: 'Change Theme',
        keywords: 'Contentlayer Home Start Index Overview Features Intro',
        section: 'General',
      },
      {
        id: 'light-theme',
        name: 'Light',
        keywords: 'Contentlayer Home Start Index Overview Features Intro',
        parent: 'theme',
        icon: <IoMdSunny />,
        perform: () => setTheme('light'),
      },
      {
        id: 'dark-theme',
        name: 'Dark',
        keywords: 'Contentlayer Home Start Index Overview Features Intro',
        parent: 'theme',
        icon: <IoMdMoon />,
        perform: () => setTheme('dark'),
      },
      {
        id: 'github',
        name: 'GitHub',
        keywords: 'Contentlayer Github Git Repository Repo Code Examples',
        section: 'External',
        icon: <FaGithub />,
        perform: () => window.open('https://github.com/', '_ blank'),
      },
      {
        id: 'discord',
        name: 'Discord Community',
        keywords: 'Discord Community Channel Contact',
        section: 'External',
        icon: <FaDiscord />,
        perform: () => window.open('https://discord.com/', '_ blank'),
      },
      {
        id: 'youtube',
        name: 'Youtube Channel',
        keywords: 'Youtube Videos',
        icon: <FaYoutube />,
        section: 'External',
        perform: () => window.open('https://youtube.com', '_ blank'),
      },
    ]

    const mapDocs = () => {
      Object.values(nav).map((section, i) => {
        const sectionTitle = Object.keys(nav)[i]

        section.map((doc) => {
          actions.push({
            id: doc.slug,
            name: doc.title,
            keywords: doc.description,
            subtitle: doc.description,
            section: sectionTitle,
            perform: () => router.push(doc.slug),
          })
        })
      })
    }

    mapDocs()
    return actions
  }, [router])

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className='w-full z-50 p-4 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80'>
          <KBarAnimator className='w-full md:max-w-2xl'>
            <SearchCard>
              <div className='flex items-center space-x-4 p-4 border-b border-slate-100 dark:border-slate-700/30'>
                <FaSearch className='text-lg text-slate-600 dark:text-slate-300' />

                <KBarSearch className='w-full bg-transparent focus:outline-none py-1.5 placeholder-slate-400 dark:placeholder-slate-400' />
              </div>
              <RenderResults />
            </SearchCard>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  )
}

const RenderResults = () => {
  const { results } = useMatches()

  if (results.length) {
    return (
      <KBarResults
        items={results}
        onRender={({ item, active }) => (
          <div>
            {typeof item === 'string' ? (
              <div className='text-sm px-4 pt-4 pb-2 text-slate-900 dark:text-slate-200'>
                {item}
              </div>
            ) : (
              <div
                className={clsx(
                  'flex items-center cursor-pointer space-x-3 mx-4 p-3 rounded-md',
                  { 'bg-sky-400 dark:bg-sky-400': active },
                )}
              >
                {item.icon && (
                  <div
                    className={clsx('text-xl', {
                      'text-slate-100 dark:text-white': active,
                      'text-slate-700 dark:text-slate-300': !active,
                    })}
                  >
                    {item.icon}
                  </div>
                )}
                <div className='overflow-hidden'>
                  <div
                    className={clsx({
                      'text-white dark:text-white': active,
                      'text-slate-700 dark:text-slate-200': !active,
                    })}
                  >
                    {item.name}
                  </div>
                  {item.subtitle && (
                    <div
                      className={clsx('truncate text-xs', {
                        'text-white dark:text-slate-200': active,
                        'text-slate-600 dark:text-slate-400': !active,
                      })}
                    >
                      {item.subtitle}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      />
    )
  } else {
    return (
      <div className='px-4 py-6 text-center text-slate-600 dark:text-slate-500'>
        No results for your search...
      </div>
    )
  }
}
