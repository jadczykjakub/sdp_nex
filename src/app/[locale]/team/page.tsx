import React from 'react'
import initTranslations from '@/app/i18n/i18n'
import TranslationsProvider from '@/app/components/TranslationProvider'
import { getTeam } from '@/../lib/get-team'
import Image from 'next/image'
import Link from 'next/link'
import DecorationWrapper from '@/app/components/DecorationWrapper'

const i18nNamespaces = ['team']

export default async function page({ params }: { params: any }) {
  const { t, resources } = await initTranslations(params.locale, i18nNamespaces)
  let allTeam = getTeam(params.locale)

  allTeam = allTeam.filter((item) => item.metadata.published)

  allTeam = allTeam.sort((a, b) => {
    const dateA = new Date(a.metadata.publishedAt!)
    const dateB = new Date(b.metadata.publishedAt!)
    return dateB.getTime() - dateA.getTime()
  });


  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={params.locale}
      resources={resources}
    >
      <main>
        <div>
          <DecorationWrapper theme="dark" type="single">
            <h1 className="text-3xl font-bold">{t('title')}</h1>
          </DecorationWrapper>
        </div>
        <div>
          {allTeam.map((item, index) => {
            return (
              <Link href={`/team/${item.slug}`} key={index}>
                {item.metadata.title}
              </Link>
            )
          })}
        </div>
      </main>
    </TranslationsProvider>
  )
}
