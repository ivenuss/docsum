import React, { useEffect, useState } from 'react'
import slugger from 'github-slugger'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { TableOfContentHeading } from '@/types'

interface TableOfContentProps {
  headings: TableOfContentHeading[]
  className?: string
}

export const TableOfContent: React.FC<TableOfContentProps> = ({
  headings,
  className = '',
}) => {
  const router = useRouter()
  const [activeHeading, setActiveHeading] = useState('')

  // This scroll function is from: https://github.com/contentlayerdev/website
  useEffect(() => {
    const handleScroll = () => {
      let current = ''
      for (const heading of headings) {
        const slug = slugger.slug(heading.title)
        const element = document.getElementById(slug)

        if (element && element.getBoundingClientRect().top < 100) current = slug
      }
      setActiveHeading(current)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [headings, router])

  const headingsToRender = headings.filter((_) => _.level > 1)

  if ((headingsToRender ?? []).length === 0) return null

  // max-h-[calc(100vh-59px)] overflow-auto
  return (
    <ul className={clsx('flex flex-col text-sm leading-6', className)}>
      {headings.map((h: TableOfContentHeading) => {
        const slug = slugger.slug(h.title)
        const isHeading = h.level === 2
        const isActive = slug === activeHeading

        return (
          <li key={slug} className={clsx('flex mb-1', { 'ml-3': !isHeading })}>
            <Link href={`#${slugger.slug(h.title)}`}>
              <a
                className={clsx('flex-1 py-1 transition-colors duration-150', {
                  'text-slate-700 hover:text-slate-900 dark:text-slate-300 font-medium dark:hover:text-slate-200':
                    isHeading && !isActive,
                  'text-slate-500 hover:text-slate-700  dark:text-slate-400 dark:hover:text-slate-300':
                    !isHeading && !isActive,
                  'text-sky-400 font-medium': isHeading && isActive,
                  'text-sky-400': !isHeading && isActive,
                })}
              >
                {h.title}
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
