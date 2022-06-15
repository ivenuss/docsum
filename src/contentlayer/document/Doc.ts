import { defineDocumentType } from 'contentlayer/source-files'

import type * as unified from 'unified'

import { bundleMDX } from 'mdx-bundler'
import { mdxToMarkdown } from 'mdast-util-mdx'
import { toMarkdown } from 'mdast-util-to-markdown'
import { getLastEditedDate } from '../utils'

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: `docs/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => {
        return doc._raw.flattenedPath.replace(/^.+?[/]/, '')
       },
    },
    last_edited: { type: 'date', resolve: getLastEditedDate },
    headings: {
      type: 'json',
      resolve: async (doc) => {
        return await getHeadings(doc.body.raw)
      },
    },
  },
  extensions: {},
}))

// Credits: https://github.com/contentlayerdev/website
const getHeadings = async (body: string) => {
  const headings = []

  await bundleMDX({
    source: body,
    mdxOptions(options, frontmatter) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        tocPlugin(headings),
      ]
      return options
    },
  })

  return headings
}

// Credits: https://github.com/contentlayerdev/website
const tocPlugin =
  (headings: any[]): unified.Plugin =>
  () => {
    return (node: any) => {
      node.children
        .filter((_: any) => _.type === 'heading')
        .forEach((heading: any) => {
          const title = toMarkdown(
            { type: 'paragraph', children: heading.children },
            { extensions: [mdxToMarkdown()] },
          )
            .trim()
            // removes MDX in headlines
            .replace(/<.*$/g, '')
            // remove backslashes (e.g. from list items)
            .replace(/\\/g, '')
            .trim()

          return headings.push({ level: heading.depth, title })
        })
    }
  }
