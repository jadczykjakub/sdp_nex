import React from 'react'
import initTranslations from '@/app/i18n/i18n'
import TranslationsProvider from '@/app/components/TranslationProvider'
import { getSortedExpertise } from '@/../lib/get-expertise'
import Link from 'next/link'
import DecorationWrapper from '@/app/components/DecorationWrapper'

const i18nNamespaces = ['expertise']
type TExpertisePage = { 
    locale: string
}

export  async function ExpertisePage({locale}: TExpertisePage) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces)
    let { dispute, protect, regulatory } = getSortedExpertise(locale)
  
    return (
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <main className='grid gap-12 md:gap-20'>
            <DecorationWrapper theme='dark' type='single'>
              <h1 className='font-bold text-3xl'>{t('title')}</h1>
            </DecorationWrapper>
          <div className="grid md:grid-cols-3 gap-8 ">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-extralight text-primary">
                {t('dispute', { ns: 'expertise' })}
              </h2>
              <ul className="grid">
                {dispute.map((item, index) => {
                  return (
                    <li key={index} className=' group border-t-2 border-t-primary rounded-xl hover:bg-primary py-3'>
                      <Link href={`/expertise/${item.slug}`} className='block group-hover:translate-x-1 transition-transform' >
                        <span className='text-xl font-extralight '>{item.metadata.title}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-extralight text-primary">
                {t('protect', { ns: 'expertise' })}
              </h2>
              <ul className="grid">
                {protect.map((item, index) => {
                  return (
                    <li key={index} className=' group border-t-2 border-t-primary rounded-xl hover:bg-primary py-3'>
                      <Link href={`/expertise/${item.slug}`} className='block group-hover:translate-x-1 transition-transform' >
                        <span className='text-xl font-extralight '>{item.metadata.title}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-extralight text-primary">
                {t('regulatory', { ns: 'expertise' })}
              </h2>
              <ul className="grid">
                {regulatory.map((item, index) => {
                  return (
                    <li key={index} className=' group border-t-2 border-t-primary rounded-xl hover:bg-primary py-3'>
                      <Link href={`/expertise/${item.slug}`} className='block group-hover:translate-x-1 transition-transform' >
                        <span className='text-xl font-extralight '>{item.metadata.title}</span>
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
  