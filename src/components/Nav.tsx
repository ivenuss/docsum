import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { FaGithub, FaDiscord, FaYoutube, FaSearch } from 'react-icons/fa'
import { HiOutlineChevronRight } from 'react-icons/hi'
import { TableOfContent } from './TableOfContent'
import { ThemeSwitcher } from './ThemeSwitcher'
import { useRouter } from 'next/router'
import { FiMenu } from 'react-icons/fi'
import { userOverlay } from '@/global-stores/useOverlayStore'
import { useKBar } from 'kbar'
import type { TableOfContentHeading } from '@/types'
import Link from 'next/link'

interface NavProps {
  headings?: TableOfContentHeading[]
}

const links = [
  {
    icon: FaGithub,
    label: 'GitHub',
    href: process.env.GITHUB_URL,
  },
  {
    icon: FaDiscord,
    label: 'Discord',
    href: process.env.GITHUB_URL,
  },
  {
    icon: FaYoutube,
    label: 'YouTube',
    href: process.env.GITHUB_URL,
  },
]

export const SearchButton: React.FC<{ showShortcut?: boolean }> = ({
  showShortcut = true,
}) => {
  const { query } = useKBar()

  return (
    <button
      aria-label='Search'
      onClick={query.toggle}
      className='w-full mx-4 max-w-xl flex items-center bg-slate-200/50 dark:bg-slate-800 p-1.5 px-5 rounded-lg'
    >
      <FaSearch className='mr-3 text-slate-600 dark:text-slate-400' />
      <span className='mr-8 text-slate-500 dark:text-slate-500'>Search</span>
      {showShortcut && (
        <kbd className='ml-auto p-1 px-1.5 rounded bg-slate-200 dark:bg-slate-900 text-xs'>
          ⌘K
        </kbd>
      )}
    </button>
  )
}

export const Nav: React.FC<NavProps> = ({ headings }) => {
  const router = useRouter()
  const { set } = userOverlay()
  const [isTOCOpened, setIsTOCOpened] = useState(false)

  useEffect(() => {
    if (isTOCOpened) setIsTOCOpened(false) // Close menu on router change
  }, [router])

  return (
    <nav className='sticky z-50 top-0 md:h-[60px] flex flex-col md:flex-row md:items-center border-b bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 bg-opacity-90 dark:bg-opacity-90 backdrop-saturate-150 dark:backdrop-saturate-150 backdrop-blur-xl dark:backdrop-blur-xl'>
      <div className='w-full flex items-center py-3 md:py-0'>
        <div className='px-4 sm:px-6 w-full max-w-7xl justify-between mx-auto flex items-center'>
          <button
            onClick={() =>
              set((state) => ({ isSidebarOpen: !state.isSidebarOpen }))
            }
            className='tblock md:hidden text-2xl'
          >
            <FiMenu />
          </button>

          <div className='pr-3 hidden md:block font-bold text-2xl'>
            <Link href='/'>
              <a>
                <svg
                  viewBox='0 0 221 65'
                  fill='none'
                  className='h-8 mr-4 md:h-9 lg:mr-0'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g className='text-slate-900 dark:text-white'>
                    <path
                      fill='currentColor'
                      d='M69.8743 46.6935V18.302H78.6084C81.1038 18.302 83.3342 18.8642 85.304 19.9885C87.2739 21.1128 88.8096 22.7125 89.9156 24.7874C91.0216 26.8624 91.5747 29.2162 91.5747 31.8533V33.1605C91.5747 35.7976 91.0308 38.1468 89.9476 40.1989C88.8644 42.2511 87.3333 43.8461 85.3543 44.975C83.3799 46.1039 81.1495 46.6798 78.6678 46.6889H69.8743V46.6935ZM75.7244 23.0415V41.9951H78.5535C80.8387 41.9951 82.5892 41.2456 83.8004 39.751C85.0115 38.2565 85.6285 36.1175 85.6514 33.3341V31.8305C85.6514 28.9465 85.0527 26.7573 83.8598 25.2673C82.6623 23.7774 80.9164 23.037 78.6129 23.037H75.729L75.7244 23.0415Z'
                    />
                    <path
                      fill='currentColor'
                      d='M94.582 35.9483C94.582 33.855 94.9842 31.9903 95.7932 30.3541C96.5976 28.7179 97.7585 27.4473 99.2759 26.5515C100.789 25.6557 102.548 25.2078 104.55 25.2078C107.398 25.2078 109.719 26.0807 111.52 27.822C113.321 29.5634 114.326 31.9309 114.532 34.9199L114.573 36.3642C114.573 39.6 113.668 42.1961 111.863 44.1522C110.058 46.1083 107.631 47.0864 104.591 47.0864C101.552 47.0864 99.1205 46.1129 97.3106 44.1613C95.4961 42.2098 94.5912 39.5589 94.5912 36.2042V35.9528L94.582 35.9483ZM100.217 36.3505C100.217 38.3569 100.592 39.888 101.346 40.9483C102.1 42.0087 103.179 42.5388 104.582 42.5388C105.985 42.5388 107.014 42.0132 107.781 40.9666C108.549 39.92 108.933 38.2426 108.933 35.9391C108.933 33.9738 108.549 32.4519 107.781 31.3687C107.014 30.2901 105.935 29.7462 104.546 29.7462C103.156 29.7462 102.1 30.2809 101.346 31.355C100.592 32.429 100.217 34.0927 100.217 36.3459V36.3505Z'
                    />
                    <path
                      fill='currentColor'
                      d='M126.812 42.5388C127.855 42.5388 128.696 42.2555 129.349 41.6796C129.998 41.1083 130.336 40.345 130.364 39.399H135.647C135.633 40.8295 135.245 42.1366 134.477 43.3295C133.709 44.5178 132.658 45.4411 131.328 46.0992C129.994 46.7573 128.522 47.0818 126.913 47.0818C123.897 47.0818 121.52 46.1221 119.779 44.207C118.037 42.292 117.164 39.6412 117.164 36.2636V35.8934C117.164 32.6439 118.028 30.0524 119.756 28.1146C121.483 26.1767 123.855 25.2078 126.872 25.2078C129.509 25.2078 131.625 25.9573 133.22 27.461C134.811 28.9601 135.62 30.9619 135.647 33.4574H130.364C130.336 32.3605 129.998 31.4693 129.349 30.7837C128.7 30.0981 127.841 29.7553 126.776 29.7553C125.464 29.7553 124.472 30.2352 123.801 31.1905C123.133 32.1457 122.795 33.6996 122.795 35.8477V36.4327C122.795 38.6083 123.124 40.1714 123.791 41.1174C124.454 42.0681 125.46 42.5434 126.812 42.5434V42.5388Z'
                    />
                    <path
                      fill='currentColor'
                      d='M153.952 39.2436C153.952 38.1376 153.563 37.2921 152.782 36.6979C152 36.1083 150.597 35.4822 148.572 34.824C146.543 34.1659 144.939 33.5215 143.755 32.8816C140.533 31.1403 138.92 28.7956 138.92 25.8431C138.92 24.3075 139.354 22.9409 140.218 21.7389C141.081 20.5369 142.324 19.5954 143.942 18.9189C145.56 18.2425 147.379 17.9043 149.39 17.9043C151.401 17.9043 153.225 18.2699 154.811 19.0058C156.397 19.7416 157.631 20.7791 158.504 22.1137C159.381 23.4528 159.82 24.9748 159.82 26.675H153.97C153.97 25.377 153.559 24.3623 152.74 23.6448C151.922 22.9226 150.771 22.5616 149.29 22.5616C147.809 22.5616 146.749 22.8632 145.958 23.4665C145.163 24.0698 144.77 24.8651 144.77 25.8568C144.77 26.7801 145.236 27.5525 146.164 28.1786C147.091 28.8048 148.463 29.3852 150.268 29.9337C153.595 30.9346 156.017 32.1778 157.539 33.6586C159.061 35.1394 159.82 36.9858 159.82 39.1979C159.82 41.6568 158.892 43.581 157.032 44.9795C155.172 46.3781 152.672 47.0774 149.523 47.0774C147.338 47.0774 145.35 46.6752 143.559 45.8799C141.762 45.0801 140.396 43.9877 139.454 42.5938C138.513 41.2044 138.042 39.591 138.042 37.7582H143.91C143.91 40.889 145.784 42.4566 149.527 42.4566C150.917 42.4566 152.005 42.1733 152.782 41.6065C153.563 41.0398 153.952 40.2537 153.952 39.2391V39.2436Z'
                    />
                    <path
                      fill='currentColor'
                      d='M176.045 44.55C174.656 46.2411 172.732 47.0866 170.273 47.0866C168.011 47.0866 166.287 46.4376 165.095 45.135C163.906 43.837 163.298 41.9312 163.271 39.422V25.5964H168.906V39.2437C168.906 41.4421 169.907 42.5436 171.909 42.5436C173.911 42.5436 175.131 41.8809 175.849 40.5509V25.5964H181.502V46.6935H176.201L176.045 44.55Z'
                    />
                    <path
                      fill='currentColor'
                      d='M191.041 25.5962L191.215 27.9545C192.709 26.1218 194.729 25.2031 197.28 25.2031C199.994 25.2031 201.864 26.2772 202.874 28.4207C204.355 26.2772 206.466 25.2031 209.213 25.2031C211.498 25.2031 213.203 25.8704 214.323 27.2004C215.442 28.5304 216 30.5368 216 33.2151V46.6887H210.346V33.2334C210.346 32.0359 210.113 31.163 209.643 30.6099C209.176 30.0569 208.349 29.7827 207.165 29.7827C205.474 29.7827 204.304 30.5871 203.655 32.2005L203.674 46.6887H198.038V33.2562C198.038 32.0359 197.796 31.1493 197.316 30.6054C196.836 30.0615 196.018 29.7873 194.857 29.7873C193.258 29.7873 192.101 30.45 191.388 31.7754V46.6933H185.753V25.5962H191.036H191.041Z'
                    />
                  </g>
                  <path
                    d='M37.4044 20.8806C35.6906 17.7398 33.3076 15.309 30.2554 13.5836C27.2031 11.8627 23.7665 11 19.9409 11H6V54H20.2394C23.9835 53.982 27.3794 53.0879 30.4181 51.3265C33.4614 49.5652 35.8173 47.1254 37.4904 44.0026C39.1635 40.8843 40 37.3527 40 33.4166V31.4396C39.9819 27.5395 39.1137 24.0213 37.3999 20.8806H37.4044Z'
                    fill='#38BDF8'
                  />
                  <path
                    d='M43.0618 11C40.5436 11 38.1927 11.3864 36.009 12.1368C38.1656 13.9565 39.9649 16.1582 41.3755 18.7373C43.4415 22.5206 44.4995 26.7891 44.5221 31.4171V33.4166C44.5221 38.0806 43.5003 42.3536 41.4794 46.1189C40.0644 48.7564 38.2243 51.012 36 52.8767C38.1113 53.6091 40.3628 53.9865 42.7634 54H57V11H43.0618Z'
                    fill='#8EDAEF'
                  />
                </svg>
              </a>
            </Link>
          </div>

          <SearchButton />

          <div className='flex items-center gap-4'>
            <ThemeSwitcher />
            {links.map(({ href, icon: Icon, label }, i) => (
              <a
                key={i}
                href={href}
                className='hidden md:block'
                target='_blank'
                rel='noreferrer noopener'
              >
                <Icon className='transition-colors duration-150 text-slate-400 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 text-xl' />
              </a>
            ))}
          </div>
        </div>
      </div>

      {headings && (
        <div className='px-4 sm:px-6 block md:hidden'>
          <button
            className='flex items-center w-full py-4'
            onClick={() => setIsTOCOpened(!isTOCOpened)}
          >
            <span className='text-sm text-slate-900 dark:text-slate-200 font-semibold mr-2.5'>
              On this page
            </span>
            <HiOutlineChevronRight
              className={clsx('transition-transform', {
                'rotate-90': isTOCOpened,
              })}
            />
          </button>
          {isTOCOpened && (
            <TableOfContent className='pb-4' headings={headings} />
          )}
        </div>
      )}
    </nav>
  )
}
