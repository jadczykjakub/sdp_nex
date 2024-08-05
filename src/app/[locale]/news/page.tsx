import React from 'react'
import initTranslations from '@/app/i18n/i18n'
import TranslationsProvider from '@/app/components/TranslationProvider'
import { getBlogs } from '@/../lib/get-blogs'
import DecorationWrapper from '@/app/components/DecorationWrapper'
import SingleNews from '@/app/components/SingleNews'

const i18nNamespaces = ['news']

export default async function page({ params }: { params: any }) {
  const { t, resources } = await initTranslations(params.locale, i18nNamespaces)
  let allBlogs = getBlogs(params.locale)

  allBlogs = allBlogs.filter((blog) => blog.metadata.published)

  allBlogs = allBlogs.sort((a, b) => {
    const dateA = new Date(a.metadata.publishedAt!)
    const dateB = new Date(b.metadata.publishedAt!)
    return dateB.getTime() - dateA.getTime()
  })

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={params.locale}
      resources={resources}
    >
      <main className="grid justify-items-center gap-12 md:gap-20">
        <DecorationWrapper theme="dark" type="single">
          <h1 className="text-3xl font-bold">{t('title')}</h1>
        </DecorationWrapper>
        <div className="grid grid-cols-3 gap-20">
          {allBlogs.map((item, index) => {
            return (
              <SingleNews
                imgSource={item.metadata.imageSource as string}
                slug={item.slug}
                title={item.metadata.title as string}
                key={index}
              />
            )
          })}
        </div>
      </main>
    </TranslationsProvider>
  )
}
