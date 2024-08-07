import React from 'react'
import { getExpertise } from '@/../lib/get-expertise'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import i18nConfig from '@/app/i18n/i18n.config'
import { ExpertiseSlugPage } from '@/app/components/templates/ExpertiseSlugPage'

export function generateStaticParams() {
  let expertises: { locale: string; slug: string }[] = []

  i18nConfig.locales.filter((item) => item !== i18nConfig.defaultLocale).map((item) => {
    expertises = [ ...expertises ,...getExpertise(item)]
  })

  return expertises.map((item) => ({ locale: item.locale, slug: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: any
}): Promise<Metadata | undefined> {
  const expertise = getExpertise(params.locale).find(
    (item) => item.slug === params.slug
  )

  if (!expertise) {
    return redirect('/')
  }
}

export default async function page({ params }: { params: any }) {
  return <ExpertiseSlugPage locale={params.locale} slug={params.slug} />
}
