import React from 'react'
import { format } from 'date-fns'
import { FiEdit } from 'react-icons/fi'
import type { Doc } from 'contentlayer/generated'

interface DetailsProps {
  doc: Doc
}

export const Details: React.FC<DetailsProps> = ({ doc }) => {
  return (
    <div className='flex mt-16 justify-between text-sm'>
      <a
        href={`https://github.com/ivenuss/docsum/blob/main/content/docs/${doc.slug}.mdx`}
        target='_blank'
        rel='noreferrer noopener'
        className='flex items-center text-sky-400 hover:underline'
      >
        <FiEdit className='mr-2' />
        <span>Edit this page on GitHub</span>
      </a>
      <div className='text-slate-600 dark:text-slate-400'>
        Updated at{' '}
        <span>{format(new Date(doc.last_edited), 'E, MMM d, y')}</span>
      </div>
    </div>
  )
}
