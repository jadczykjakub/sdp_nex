import React from 'react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import initTranslations from '@/app/i18n/i18n'
import TranslationsProvider from '@/app/components/TranslationProvider'
import { CustomMDX } from '@/app/components/mdx/mdx'
import Image from 'next/image'
import DecorationWrapper from '@/app/components/DecorationWrapper'
import LinkedinIcon from '@/../public/images/svg/linkedin.svg'
import { getBlogs } from '../../../../lib/get-blogs'

const i18nNamespaces = ['common']

type TNewsSlugPage = {
  locale: string
  slug: string
}

export async function NewsSlugPage({ locale, slug }: TNewsSlugPage) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  const blog = getBlogs(locale).find((post) => post.slug === slug)

  if (!blog) {
    return notFound()
  }

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="grid justify-items-center gap-12 md:gap-20">
        <DecorationWrapper type="single" theme="dark">
          <h1 className="text-3xl font-bold">{blog.metadata.title}</h1>
        </DecorationWrapper>
        <div className="grid md:grid-cols-[2fr_1fr]  gap-4">
          <article className="">
            <CustomMDX>{blog.content}</CustomMDX>
          </article>
          <Image
            src={`/${blog.metadata.imageSource}`}
            width="800"
            height="200"
            alt={`${blog?.metadata.title}`}
            objectFit="contain"
          />
        </div>
        <a
          href={blog.metadata.linkedinSource}
          target="_blank"
          className="button flex justify-center items-center gap-4"
        >
          <span>
            <p>{t('button.linkedin')}</p>
          </span>{' '}
          <LinkedinIcon />
        </a>
      </main>
    </TranslationsProvider>
  )
}
