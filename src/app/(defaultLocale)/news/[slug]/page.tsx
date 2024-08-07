import { NewsSlugPage } from '@/app/components/templates/NewsSlugPage'
import Layout from '@/app/components/templates/Layout'
import { getBlogs } from '@/../lib/get-blogs'
import i18nConfig from '@/app/i18n/i18n.config'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  const blogs = getBlogs('en')

  return blogs.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: any
}): Promise<Metadata | undefined> {
  const blog = getBlogs('en').find((post) => post.slug === params.slug)

  if (!blog) {
    return notFound()
  }
}

export default async function ExpertiseSlug({ params }: { params: any }) {
  return (
    <Layout>
      <NewsSlugPage locale={'en'} slug={params.slug} />
    </Layout>
  )
}
