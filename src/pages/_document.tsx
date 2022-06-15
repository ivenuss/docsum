import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

const FAVICON_VERSION = 3

function v(href) {
  return `${href}?v=${FAVICON_VERSION}`
}

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html
        lang='en'
        className='[--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]'
      >
        <Head>
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicons/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicons/favicon-16x16.png'
          />
          <link rel='manifest' href='/favicons/site.webmanifest' />
          <link
            rel='mask-icon'
            href='/favicons/safari-pinned-tab.svg'
            color='#5bbad5'
          />
          <meta name='msapplication-TileColor' content='#38BDF8' />
          <meta name='theme-color' content='#38BDF8' />
        </Head>
        <body className='bg-white dark:bg-slate-900'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
