import React from 'react'
import { notFound } from 'next/navigation'
import { getBlogs } from '../../../../../lib/get-blogs'
import type { Metadata } from 'next'
import initTranslations from '@/app/i18n/i18n'
import TranslationsProvider from '@/app/components/TranslationProvider'
import { CustomMDX } from '@/app/components/mdx/mdx'
import Image from 'next/image'
import DecorationWrapper from '@/app/components/DecorationWrapper'
import LinkedinIcon from '@/../public/images/svg/linkedin.svg'

export async function generateMetadata({
  params,
}: {
  params: any
}): Promise<Metadata | undefined> {
  const blog = getBlogs(params.locale).find((post) => post.slug === params.slug)

  if (!blog) {
    return notFound()
  }
}

const i18nNamespaces = ['common']

export default async function page({ params }: { params: any }) {
  const { t, resources } = await initTranslations(params.locale, i18nNamespaces)
  const blog = getBlogs(params.locale).find((post) => post.slug === params.slug)


  if (!blog) {
    return notFound()
  }


  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={params.locale}
      resources={resources}
    >
      <main className='grid justify-items-center gap-8'>

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
            alt="dupa"
            objectFit="contain"
          />
        </div>
        <a href={blog.metadata.linkedinSource} target='_blank' className='button flex justify-center items-center gap-4'><span><p>{t('button.linkedin')}</p></span> <LinkedinIcon /></a>
      </main>
    </TranslationsProvider>
  )
}
