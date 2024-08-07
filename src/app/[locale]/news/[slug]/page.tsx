import React from 'react'
import { notFound } from 'next/navigation'
import { getBlogs } from '../../../../../lib/get-blogs'
import type { Metadata } from 'next'
import i18nConfig from '@/app/i18n/i18n.config'
import { NewsSlugPage } from '@/app/components/templates/NewsSlugPage'

export function generateStaticParams() {
  let blogs: { locale: string; slug: string }[] = []

  i18nConfig.locales.map((item) => {
    blogs = [...getBlogs(item)]
  })

  return blogs.map((item) => ({ locale: item.locale, slug: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: any
}): Promise<Metadata | undefined> {
  const blog = getBlogs(params.locale).find((post) => post.slug === params.slug)

  if (!blog) {
    return notFound()
  }
}

export default async function page({ params }: { params: any }) {
  return <NewsSlugPage locale={params.locale} slug={params.slug} />
}
