import React from 'react'
import initTranslations from '@/app/i18n/i18n'
import TranslationsProvider from '@/app/components/TranslationProvider'
import { getSortedExpertise } from '@/../lib/get-expertise'
import Link from 'next/link'

const i18nNamespaces = ['expertise']

export default async function page({ params }: { params: any }) {
  const { t, resources } = await initTranslations(params.locale, i18nNamespaces)
  let { dispute, protect, regulatory } = getSortedExpertise(params.locale)

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={params.locale}
      resources={resources}
    >
      <main>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h2>{t('dispute', { ns: 'expertise' })}</h2>
            <ul>
              {dispute.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={`/expertise/${item.slug}`}>
                      {item.metadata.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h2>{t('protect', { ns: 'expertise' })}</h2>
            <ul>
              {protect.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={`/expertise/${item.slug}`}>
                      {item.metadata.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div>
            <h2>{t('regulatory', { ns: 'expertise' })}</h2>
            <ul>
              {regulatory.map((item, index) => {
                return (
                  <li key={index}>
                    <Link href={`/expertise/${item.slug}`}>
                      {item.metadata.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </main>
    </TranslationsProvider>
  )
}
