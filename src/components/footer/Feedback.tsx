import React, { useState } from 'react'

interface FeedbackProps {}

export const Feedback: React.FC<FeedbackProps> = ({}) => {
  const [reacted, setReacted] = useState(false)

  return (
    <div className='flex flex-col mt-8 py-8 border-t border-b border-slate-200 dark:border-slate-800'>
      <h5 className='text-slate-600 dark:text-slate-300 text-lg font-semibold text-center'>
        {reacted ? 'Thanks for letting us know!' : 'Was this page helpful?'}
      </h5>

      {!reacted && (
        <div className='flex gap-4 mx-auto mt-4'>
          {['😭', '😕', '😃', '🤩'].map((emoji, i) => (
            <button
              key={i}
              onClick={() => setReacted(true)}
              className='p-2 text-xl grayscale hover:grayscale-0 hover:scale-125 duration-150 ease-in-out transition-all'
            >
              {emoji}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
