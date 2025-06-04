import React from 'react'
import initTranslations from '@/app/i18n/i18n'
import TranslationsProvider from '@/app/components/TranslationProvider'
import { getTeam } from '@/../lib/get-team'
import DecorationWrapper from '@/app/components/DecorationWrapper'
import Person from '@/app/components/Person'

type TTeamPage = {
  locale: string
}

const i18nNamespaces = ['team']

export async function TeamPage({ locale }: TTeamPage) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  let allTeam = getTeam(locale)

  let workerTeam = allTeam.filter(
    (item) => item.metadata.published && !item.metadata.isBoss
  )

  let bossTeam = allTeam.filter((item) => item.metadata.isBoss)

  bossTeam = bossTeam.sort((a, b) => {
    const dateA = new Date(b.metadata.publishedAt!)
    const dateB = new Date(a.metadata.publishedAt!)
    return dateB.getTime() - dateA.getTime()
  })

  workerTeam = workerTeam.sort((a, b) => {
    const dateA = new Date(b.metadata.publishedAt!)
    const dateB = new Date(a.metadata.publishedAt!)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="grid gap-12 md:gap-20">
        <div>
          <DecorationWrapper theme="dark" type="single">
            <h1 className="text-4xl font-bold">{t('title')}</h1>
          </DecorationWrapper>
        </div>
        <div className="grid gap-y-16">
          <div className="flex flex-col md:flex-row justify-center gap-8 flex-wrap">
            {bossTeam.map((item, index) => {
              return (
                <Person
                  href={`${item.slug}`}
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
                  href={`${item.slug}`}
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
        </div>
      </main>
    </TranslationsProvider>
  )
}
