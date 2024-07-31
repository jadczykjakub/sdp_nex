import React from 'react'
import Image from 'next/image'
import heroImage from '@/../public/images/hero.png'
import DecorationWrapper from './DecorationWrapper'
// import { useTranslation } from 'react-i18next'
import initTranslations from '@/app/i18n/i18n'
import Button from '@/app/components/Button'

const i18nNamespaces = ['home']

export default async function Hero({ lang }: any) {
  const { t, resources } = await initTranslations(lang, i18nNamespaces)

  return (
    <DecorationWrapper type="single" theme="bright" classFromProps={'pb-0'}>
      <div className="grid md:grid-cols-[2fr_3fr] gap-4 relative ">
        <div className="grid  gap-2 md:gap-8 pb-4 md:pb-10 z-10 max-md:justify-items-center max-md:text-center ">
          <h1 className="text-3xl font-bold ">
            {t('hero.title1', { ns: 'hero' })}
          </h1>
          <h2 className="text-3xl ">{t('hero.title2', { ns: 'hero' })}</h2>
          <p className="font-extralight md:text-xl  max-md:pt-36">
            {t('hero.title3', { ns: 'hero' })}
          </p>
          <div>
            <Button
              linkTo={t('hero.button.href', { ns: 'hero' })}
              text={t('hero.button.title', { ns: 'hero' })}
            />
          </div>
        </div>
        <Image
          src={heroImage}
          alt="sdp owners"
          className="self-end max-md:absolute max-sm:bottom-10 max-md:opacity-60 "
          placeholder='blur'

        />
      </div>
    </DecorationWrapper>
  )
}
