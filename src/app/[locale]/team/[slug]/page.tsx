import { notFound } from 'next/navigation'
import { getTeam } from '@/../lib/get-team'
import type { Metadata } from 'next'
import i18nConfig from '@/app/i18n/i18n.config'
import { TeamSlugPage } from '@/app/components/templates/TeamSlugPage'

export function generateStaticParams() {
  let team: { locale: string; slug: string }[] = []

  i18nConfig.locales.map((item) => {
    team = [...getTeam(item)]
  })

  return team.map((item) => ({ locale: item.locale, slug: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: any
}): Promise<Metadata | undefined> {
  const profile = getTeam(params.locale).find(
    (post) => post.slug === params.slug
  )

  if (!profile) {
    return notFound()
  }
}

export default async function page({ params }: { params: any }) {
  return <TeamSlugPage locale={params.locale} slug={params.slug} />
}
