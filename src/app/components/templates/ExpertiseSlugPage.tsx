'use client'

import React from 'react'
import { notFound } from 'next/navigation'
import { getExpertise } from '@/../lib/get-expertise'
import { getTeam } from '@/../lib/get-team'
import type { Metadata } from 'next'
import initTranslations from '@/app/i18n/i18n'
import TranslationsProvider from '@/app/components/TranslationProvider'
import { CustomMDX } from '@/app/components/mdx/mdx'
import DecorationWrapper from '@/app/components/DecorationWrapper'
import Image from 'next/image'
import Link from 'next/link'
import ArrowIcon from '@/../public/images/svg/arrow.svg'
import { redirect } from 'next/navigation'
import i18nConfig from '@/app/i18n/i18n.config'

type TExpertiseSlugPage = {
    locale: string;
    slug: string;
}

const i18nNamespaces = ['expertise']

export async function ExpertiseSlugPage({locale, slug}: TExpertiseSlugPage) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces)
    const expertise = getExpertise(locale).find(
      (item) => item.slug === slug
    )
  
    const nextExpertise = await getExpertise(locale).find(
      (item) => item.slug === expertise?.metadata.nextExpertise
    )
  
    const prevExpertise = await getExpertise(locale).find(
      (item) => item.slug === expertise?.metadata.prevExpertise
    )
  
    const contactPerson = await getTeam(locale).find(
      (item) => item.slug === expertise?.metadata.keyContact
    )
  
    if (!expertise) {
      return redirect('/')
    }
  
    return (
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <main className="grid gap-12 md:gap-20">
          <h1 className="text-4xl font-bold">{expertise.metadata.title}</h1>
          <div className="grid  xl:grid-cols-[4fr_1fr] gap-8">
            <article>
              <CustomMDX>{expertise.content}</CustomMDX>
            </article>
  
            <div>
              <div className="flex justify-center mb-8 font-bold text-3xl">
                <DecorationWrapper theme="dark" type="single">
                  <h4 className="text-center">{t('contactTitle')}</h4>
                </DecorationWrapper>
              </div>
              <Link
                href={`/team/${contactPerson?.slug}`}
                className="group grid gap-2 justify-items-center px-7 py-5 rounded-xl border-2 border-secondary"
              >
                <Image
                  src={`./${contactPerson?.metadata.imageProfileSource}`}
                  width="140"
                  height="140"
                  alt={`${contactPerson?.metadata.title}`}
                  className="w-36 h-36 object-cover object-top rounded-full"
                />
                <p className="font-bold text-xl text-center">
                  {contactPerson?.metadata.title}
                </p>
                <p className="font-extralight">
                  {contactPerson?.metadata.profession1}
                </p>
                <p className=" group-hover:opacity-100  opacity-90 bg-primary rounded-lg  p-2 font-extralight">
                  {t('contactButton')}
                </p>
              </Link>
            </div>
          </div>
          <div className="hidden md:justify-between md:flex ">
            <div>
              <DecorationWrapper
                theme="bright"
                type="singleTop"
                classFromProps="pt-2"
              >
                {prevExpertise && (
                  <Link
                    href={prevExpertise?.slug}
                    className="group flex gap-8 items-center"
                  >
                    <ArrowIcon className="group-hover:translate-x-2 transition-transform rotate-180" />
  
                    {prevExpertise?.metadata.title}
                  </Link>
                )}
              </DecorationWrapper>
            </div>
            <div>
              <DecorationWrapper
                theme="bright"
                type="singleTop"
                classFromProps="pt-2"
              >
                {nextExpertise && (
                  <Link
                    href={nextExpertise?.slug}
                    className="group flex gap-8 items-center"
                  >
                    {nextExpertise?.metadata.title}
                    <ArrowIcon className="group-hover:translate-x-2 transition-transform " />
                  </Link>
                )}
              </DecorationWrapper>
            </div>
          </div>
        </main>
      </TranslationsProvider>
    )
}
