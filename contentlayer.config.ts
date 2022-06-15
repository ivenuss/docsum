// eslint-disable-next-line import/no-unresolved

import { makeSource } from 'contentlayer/source-files'
import { contentDirPath } from './src/contentlayer/utils'

import * as documentTypes from './src/contentlayer'

import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'

export default makeSource({
  contentDirPath,
  documentTypes,
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeStringify,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: { class: 'anchor' },
        },
      ],
    ],
  },
})
