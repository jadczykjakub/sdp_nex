'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import i18nConfig from '@/app/i18n/i18n.config'
import { useState } from 'react'
import PL from '@/../public/images/svg/PL.svg'
import EN from '@/../public/images/svg/GB.svg'


export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const currentLocale = i18n.language
  const router = useRouter()
  const currentPathname = usePathname()

  const handleChange = (newLocale: string) => {
    // set cookie for next-i18n-router
    const days = 30
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = date.toUTCString()
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale) {
      router.push('/' + newLocale + currentPathname)
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
    }

    router.refresh()
  }

  return (
    <>
      <div className="flex items-center">
        {currentLocale == 'pl' && (
          <button
            onClick={() => handleChange('en')}
            className="w-6 flex  items-center"
          >
            <EN />
          </button>
        )}
        {currentLocale == 'en' && (
          <button
            onClick={() => handleChange('pl')}
            className="w-6 flex  items-center"
          >
            <PL />
          </button>
        )}
      </div>
    </>
  )
}
