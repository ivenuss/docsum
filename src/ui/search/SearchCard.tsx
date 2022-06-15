import React from 'react'
import clsx from 'clsx'

interface SearchCardProps {
  children: React.ReactNode
  className?: string
}

export const SearchCard: React.FC<SearchCardProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        'overflow-hidden shadow-2xl rounded-2xl pb-4 border border-slate-100 bg-slate-50 dark:border-slate-700/30 dark:bg-slate-800',
        className,
      )}
    >
      {children}
    </div>
  )
}
