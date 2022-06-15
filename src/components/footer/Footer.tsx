import React from 'react'
import { FaDiscord, FaGithub } from 'react-icons/fa'
import { Feedback } from './Feedback'
import { PageNavigator } from './PageNavigator'
import { Details } from './Details'
import type { SidebarCollection } from '@/types'
import type { Doc } from 'contentlayer/generated'

interface FooterProps {
  sidebar: SidebarCollection
  doc: Doc
}

export const Footer: React.FC<FooterProps> = ({ sidebar, doc }) => {
  return (
    <>
      <Details doc={doc} />
      <PageNavigator sidebar={sidebar} />
      <Feedback />

      <footer className='text-sm leading-6'>
        <div className='pt-10 pb-28 sm:flex justify-between text-slate-500 dark:text-slate-400'>
          <div className='mb-6 sm:mb-0 sm:flex'>
            <span>
              This website was made by{' '}
              <a
                href='https://jakubh.com/'
                className='text-sky-400 hover:underline'
              >
                venus
              </a>
            </span>
          </div>
          <div className='flex space-x-10 text-slate-400 dark:text-slate-400'>
            <a
              target='_blank'
              rel='noreferrer noopener'
              href={process.env.GITHUB_URL}
              className='hover:text-slate-500 dark:hover:text-slate-400'
            >
              <span className='sr-only'>GitHub</span>
              <FaGithub className='text-2xl' />
            </a>
            <a
              target='_blank'
              rel='noreferrer noopener'
              href={process.env.GITHUB_URL}
              className='hover:text-slate-500 dark:hover:text-slate-300'
            >
              <FaDiscord className='text-2xl' />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
