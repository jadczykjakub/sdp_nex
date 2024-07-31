import React from 'react'
import initTranslations from '@/app/i18n/i18n'
import TranslationsProvider from '@/app/components/TranslationProvider'
import { getTeam } from '@/../lib/get-team'
import Image from 'next/image'
import Link from 'next/link'
import DecorationWrapper from '@/app/components/DecorationWrapper'
import { cn } from '@/app/helpers/cn'
import Person from '@/app/components/Person'

const i18nNamespaces = ['team']

export default async function page({ params }: { params: any }) {
  const { t, resources } = await initTranslations(params.locale, i18nNamespaces)
  let allTeam = getTeam(params.locale)

  let workerTeam = allTeam.filter(
    (item) => item.metadata.published && !item.metadata.isBoss
  )

  let bossTeam = allTeam.filter((item) => item.metadata.isBoss)

  bossTeam = bossTeam.sort((a, b) => {
    const dateA = new Date(a.metadata.publishedAt!)
    const dateB = new Date(b.metadata.publishedAt!)
    return dateB.getTime() - dateA.getTime()
  })

  workerTeam = workerTeam.sort((a, b) => {
    const dateA = new Date(a.metadata.publishedAt!)
    const dateB = new Date(b.metadata.publishedAt!)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={params.locale}
      resources={resources}
    >
      <main className="grid gap-12 md:gap-20">
        <div>
          <DecorationWrapper theme="dark" type="single">
            <h1 className="text-4xl font-bold">{t('title')}</h1>
          </DecorationWrapper>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          {bossTeam.map((item, index) => {
            return (
              <Person
                href={`/team/${item.slug}`}
                key={index}
                education={item.metadata.education}
                profession1={item.metadata.profession1}
                profession2={item.metadata.profession2}
                imgSrc={item.metadata.imageListSource}
                name={item.metadata.title}

              />
            )
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-y-16">
          {workerTeam.map((item, index) => {
            return (
              <Person
              href={`/team/${item.slug}`}
              key={index}
              education={item.metadata.education}
              profession1={item.metadata.profession1}
              profession2={item.metadata.profession2}
              imgSrc={item.metadata.imageListSource}
              name={item.metadata.title}

            />
            )
          })}
        </div>
      </main>
    </TranslationsProvider>
  )
}
