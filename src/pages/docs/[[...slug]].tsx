import { useMDXComponent } from 'next-contentlayer/hooks'
import { allDocs } from 'contentlayer/generated'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import type { GetStaticPaths, InferGetStaticPropsType } from 'next'

// Custom components
import CustomLink from '@/ui/mdx/CustomLink'
import { createPageList } from '@/utils/createPageList'

export default function Page({
  doc,
  sidebar,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const MDXComponent = useMDXComponent(doc.body.code)

  return (
    <DocumentationLayout doc={doc} sidebar={sidebar}>
      <MDXComponent components={{ a: CustomLink }} />
    </DocumentationLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = allDocs
    .map((t) => t._id.replace('docs/', '').replace('.mdx', ''))
    .map((id) => ({ params: { slug: id.split('/') } }))

  return { paths: docs, fallback: false }
}

export const getStaticProps = async (ctx) => {
  const params = Array.isArray(ctx.params.slug)
    ? ctx.params.slug
    : [ctx.params.slug]
  const doc = allDocs.find((doc) => doc._id.endsWith(`${params.join('/')}.mdx`))
  return { props: { doc, sidebar: createPageList(allDocs, 'docs') } }
}
