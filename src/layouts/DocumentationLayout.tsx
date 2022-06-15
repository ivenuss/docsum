import React from 'react'
import { Nav } from '@/components/Nav'
import { Sidebar } from '@/components/Sidebar'
import { TableOfContent } from '@/components/TableOfContent'
import { Footer } from '@/components/footer/Footer'
import { Container } from '@/components/Container'
import type { SidebarCollection } from '@/types'
import type { Doc } from 'contentlayer/generated'

interface DocumentationLayoutProps {
  doc: Doc
  sidebar: SidebarCollection
  children?: any
}

export const DocumentationLayout: React.FC<DocumentationLayoutProps> = ({
  doc,
  sidebar,
  children,
}) => {
  return (
    <>
      <Container title={doc.title + ' – DocSum'} description={doc.description}>
        <Nav headings={doc.headings} />

        <div className='relative w-full h-full max-w-7xl mx-auto'>
          <div className='flex'>
            <Sidebar sidebar={sidebar} />
            <div className='px-4 sm:px-6 h-full w-full min-w-0 flex-auto md:static md:overflow-visible'>
              <article>
                <header className='space-y-2 py-6 border-b border-slate-200 dark:border-slate-800 mb-6 lg:max-w-full'>
                  <h1 className='text-2xl font-semibold text-slate-800 dark:text-slate-100 md:text-3xl lg:text-4xl'>
                    {doc.title}
                  </h1>
                  <p className='lg:text-lg font-medium text-slate-500 dark:text-slate-400 mt-4'>
                    {doc.description}
                  </p>
                </header>

                <div className='w-full max-w-none prose prose-slate prose-a:text-sky-400 prose-headings:font-semibold prose-a:font-normal prose-code:font-normal prose-code:before:content-none prose-code:after:content-none dark:prose-invert dark:prose-hr:border-slate-800'>
                  {children}
                </div>

                <Footer sidebar={sidebar} doc={doc} />
              </article>
            </div>

            <div className='hidden xl:block sticky top-[3.6875rem] pt-0 xl:pt-10 mr-8 pl-6 h-full w-60 flex-none text-sm'>
              <h5 className='text-slate-900 dark:text-slate-200 font-semibold mb-4 text-sm'>
                On this page
              </h5>
              <TableOfContent headings={doc.headings} />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
