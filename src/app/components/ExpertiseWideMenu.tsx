import React from 'react'
import { getSortedExpertise } from '@/../lib/get-expertise'
import initTranslations from '@/app/i18n/i18n'
import Link from 'next/link'
import Chevron from '@/../public/images/svg/chevron.svg'

const i18nNamespaces = ['expertise']

export default async function ExpertiseWideMenu({ lang }: { lang: string }) {
  const { t, resources } = await initTranslations(lang, i18nNamespaces)
  let { dispute, protect, regulatory } = getSortedExpertise(lang)

  return (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <h2 className='text-2xl mb-2'>{t('dispute', { ns: 'expertise' })}</h2>
        <ul className='grid gap-1 text-white'>
          {dispute?.map((item, index) => {
            return (
              <li key={index} className='flex  border-primary group/link   hover:border-l hover:pl-2 transition-all relative overflow-hidden'>
                <Link href={`/expertise/${item.slug}`} key={index}>
                  {item.metadata.title}
                  <Chevron className="fill-primary absolute scale-0 group-hover/link:scale-100 -right-4 top-1/2 -translate-y-1/2 transition-transform" />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h2 className='text-2xl mb-2'>{t('protect', { ns: 'expertise' })}</h2>
        <ul className='grid gap-1 text-white'>
          {protect?.map((item, index) => {
            return (
              <li key={index} className='flex  border-primary group/link   hover:border-l hover:pl-2 transition-all relative overflow-hidden'>
                <Link href={`/expertise/${item.slug}`} key={index}>
                  {item.metadata.title}
                  <Chevron className="fill-primary absolute scale-0 group-hover/link:scale-100 -right-4 top-1/2 -translate-y-1/2 transition-transform" />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h2 className='text-2xl mb-2'>{t('regulatory', { ns: 'expertise' })}</h2>
        <ul className='grid gap-1 text-white'>
          {regulatory?.map((item, index) => {
            return (
              <li key={index} className='flex  border-primary group/link   hover:border-l hover:pl-2 transition-all relative'>
                <Link href={`/expertise/${item.slug}`} key={index}>
                  {item.metadata.title}
                  <Chevron className="fill-primary absolute scale-0 group-hover/link:scale-100 -right-4 top-1/2 -translate-y-1/2 transition-transform" />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
