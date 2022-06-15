import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SearchProvider } from '@/ui/search/SearchContext'

export const Container: React.FC<any> = ({ children, ...customMeta }) => {
  const router = useRouter()
  const DOMAIN = process.env.SITE_URL

  const meta = {
    title: 'Docsum',
    description: 'Responsive documentation layout for your future project.',
    image: DOMAIN + `/static/images/banner.png`,
    type: 'website',
    ...customMeta,
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta property='og:url' content={`${DOMAIN}${router.asPath}`} />
        <link rel='canonical' href={`${DOMAIN}${router.asPath}`} />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='DocSum' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta property='og:image:alt' content='DocSum Banner' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
      </Head>

      <SearchProvider>
        <main className='relative min-h-screen'>{children}</main>
      </SearchProvider>
    </>
  )
}
