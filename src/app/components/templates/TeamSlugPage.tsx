import React from 'react'
import { notFound } from 'next/navigation'
import { getTeam } from '@/../lib/get-team'
import type { Metadata } from 'next'
import initTranslations from '@/app/i18n/i18n'
import TranslationsProvider from '@/app/components/TranslationProvider'
import { CustomMDX } from '@/app/components/mdx/mdx'
import Image from 'next/image'
import DecorationWrapper from '@/app/components/DecorationWrapper'
import LinkedinIcon from '@/../public/images/svg/linkedin.svg'
import EmailIcon from '@/../public/images/svg/envelope.svg'
import i18nConfig from '@/app/i18n/i18n.config'

type TTeamSlugPage = {
  locale: string
  slug: string
}

const i18nNamespaces = ['common']

export async function TeamSlugPage({ locale, slug }: TTeamSlugPage) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  const profile = getTeam(locale).find((post) => post.slug === slug)

  if (!profile) {
    return notFound()
  }

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="grid gap-12">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          <DecorationWrapper
            theme="bright"
            type="single"
            classFromProps={'pb-0'}
          >
            <Image
              src={`/${profile.metadata.imageProfileSource}`}
              width="350"
              height="240"
              alt={`${profile?.metadata.title}`}
              objectFit="contain"
              className="h-80 w-64 object-contain"
            />
          </DecorationWrapper>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">{profile.metadata.title}</h1>
            {profile.metadata.education && (
              <p className="font-extralight text-2xl">
                {profile.metadata.education}
              </p>
            )}
            {profile.metadata.profession1 && (
              <p className="font-extralight text-2xl">
                {profile.metadata.profession1}
              </p>
            )}
            {profile.metadata.profession2 && (
              <p className="font-extralight text-2xl">
                {profile.metadata.profession2}
              </p>
            )}
            <div className="flex gap-2">
              {profile.metadata.linkedin && (
                <a
                  href={`${profile.metadata.linkedin}`}
                  target="_blank"
                  className="bg-primary p-2 rounded-full"
                >
                  <LinkedinIcon className="w-6 h-6 fill-black" />
                </a>
              )}
              {profile.metadata.email && (
                <a
                  href={`mailto:${profile.metadata.email}`}
                  className="bg-primary p-2 rounded-full"
                >
                  <EmailIcon className="w-6 h-6 fill-black" />
                </a>
              )}
            </div>
          </div>
        </div>
        <article className="">
          <CustomMDX>{profile.content}</CustomMDX>
        </article>
      </main>
    </TranslationsProvider>
  )
}
