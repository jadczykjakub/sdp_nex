import Layout from '@/app/components/templates/Layout'
import { notFound } from 'next/navigation'
import { getTeam } from '@/../lib/get-team'
import type { Metadata } from 'next'
import i18nConfig from '@/app/i18n/i18n.config'
import { TeamSlugPage } from '@/app/components/templates/TeamSlugPage'

export function generateStaticParams() {
  const team = getTeam('en')

  return team.map((item) => ({ locale: item.locale, slug: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: any
}): Promise<Metadata | undefined> {
  const profile = getTeam('en').find(
    (post) => post.slug === params.slug
  )

  if (!profile) {
    return notFound()
  }
}

export default async function TeamSlug({ params }: { params: any }) {
  return (
    <Layout>
      <TeamSlugPage locale={'en'} slug={params.slug} />
    </Layout>
  )
}
