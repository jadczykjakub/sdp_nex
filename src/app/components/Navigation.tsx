'use client'

import React, { useState } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import { cn } from '../helpers/cn'
import LanguageSwitcher from './LanguageSwitcher'
import Link from 'next/link'
import Chevron from '@/../public/images/svg/chevron.svg'
import headerLogoImage from '@/../public/images/layout/logo_nav.jpg'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function Navigation({
  children,
}: {
  children: React.ReactElement
}) {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const handleHamburger = (isToogled: boolean) => {
    setIsNavOpen(isToogled)
  }

  return (
    <>
      <div className="h-20 px-4 md:px8"></div>
      <div className="flex justify-between items-center bg-black border-b-2 border-secondary h-20 px-4 md:px8 fixed w-full top-0 z-50">
        <Link href={'/'}>
          <Image
            src={headerLogoImage}
            alt="sdp logo navigation"
            width={170}
            height={60}
          />
        </Link>
        <div className="max-md:hidden flex gap-16 h-full ">
          <nav className="hidden md:block h-full ">
            <ul className="flex gap-8 font-extralight h-full ">
              <li className="hover:text-primary relative  group">
                <Link
                  href={t('expertise.href', { ns: 'navigation' })}
                  className="flex gap-1 items-center h-full"
                >
                  {t('expertise.title', { ns: 'navigation' })}
                  <Chevron
                    className={` group-hover:-rotate-90 rotate-90 transition-transform`}
                  />{' '}
                </Link>
                <div className="hidden absolute top-full left-1/2 -translate-x-1/2 group-hover:grid w-[700px]  border border-primary bg-black rounded-3xl p-7  triangleprimary  ">
                  {children}
                </div>
              </li>
              <li className="hover:text-primary flex ">
                <Link
                  href={t('news.href', { ns: 'navigation' })}
                  className="h-full flex items-center"
                >
                  {t('news.title', { ns: 'navigation' })}
                </Link>
              </li>
              <li className="hover:text-primary flex">
                <Link
                  href={t('team.href', { ns: 'navigation' })}
                  className="h-full flex items-center"
                >
                  {t('team.title', { ns: 'navigation' })}
                </Link>
              </li>
              <li className="hover:text-primary flex">
                <Link
                  href={t('about-us.href', { ns: 'navigation' })}
                  className="h-full flex items-center"
                >
                  {t('about-us.title', { ns: 'navigation' })}
                </Link>
              </li>
              <li className="hover:text-primary flex">
                <Link
                  href={t('contact.href', { ns: 'navigation' })}
                  className="h-full flex items-center"
                >
                  {t('contact.title', { ns: 'navigation' })}
                </Link>
              </li>
            </ul>
          </nav>
          <LanguageSwitcher />
        </div>

        <div className="md:hidden ">
          <nav
            className={cn(
              'absolute -left-full top-20 bg-black w-full h-lvh flex flex-col items-center gap-4 p-4 transition-transform ',
              {
                'translate-x-full': isNavOpen,
              }
            )}
          >
            <ul className="flex flex-col gap-8 font-extralight h-full items-center ">
              <li className="hover:text-primary ">
                <Link
                  href={t('expertise.href', { ns: 'navigation' })}
                  className="flex gap-1 items-center h-full "
                >
                  {t('expertise.title', { ns: 'navigation' })}
                </Link>
                <div className="hidden absolute top-full left-1/2 -translate-x-1/2 group-hover:block w-80 h-80 bg-primary  "></div>
              </li>
              <li className="hover:text-primary flex ">
                <Link
                  href={t('news.href', { ns: 'navigation' })}
                  className="h-full flex items-center"
                >
                  {t('news.title', { ns: 'navigation' })}
                </Link>
              </li>
              <li className="hover:text-primary flex">
                <Link
                  href={t('team.href', { ns: 'navigation' })}
                  className="h-full flex items-center"
                >
                  {t('team.title', { ns: 'navigation' })}
                </Link>
              </li>
              <li className="hover:text-primary flex">
                <Link
                  href={t('about-us.href', { ns: 'navigation' })}
                  className="h-full flex items-center"
                >
                  {t('about-us.title', { ns: 'navigation' })}
                </Link>
              </li>
              <li className="hover:text-primary flex">
                <Link
                  href={t('contact.href', { ns: 'navigation' })}
                  className="h-full flex items-center"
                >
                  {t('contact.title', { ns: 'navigation' })}
                </Link>
              </li>
            </ul>
            <LanguageSwitcher />
          </nav>
          <Hamburger onToggle={handleHamburger} />
        </div>
      </div>
    </>
  )
}
