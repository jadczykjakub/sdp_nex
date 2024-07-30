import React from 'react'
import initTranslations from '@/app/i18n/i18n'
import TranslationsProvider from '@/app/components/TranslationProvider'
import { getBlogs } from '@/../lib/get-blogs'
import Image from 'next/image'
import Link from 'next/link'
import DecorationWrapper from '@/app/components/DecorationWrapper'
import ChevronIcon from '@/../public/images/svg/chevron.svg'

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
      <main className="grid justify-items-center">
        <DecorationWrapper theme="dark" type="single">
          <h1 className="text-3xl font-bold">{t('title')}</h1>
        </DecorationWrapper>
        <div className="grid grid-cols-3 gap-20">
          {allBlogs.map((item, index) => {
            return (
              <Link
                href={`/news/${item.slug}`}
                key={index}
                className="group grid gap-4"
              >
                <div className="overflow-hidden">
                  <Image
                    src={`/${item.metadata.imageSource}`}
                    width="400"
                    height="320"
                    alt="dupa"
                    className="group-hover:scale-110 transition-transform "
                  />
                </div>
                <div className="grid">
                  <p className="font-bold text-xl">{item.metadata.title}</p>
                  <p className="flex gap-2 items-center">
                  {t('button')}
                    <span>
                      <ChevronIcon
                        className={
                          'fill-primary group-hover:translate-x-2 transition-transform'
                        }
                      />
                    </span>
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </main>
    </TranslationsProvider>
  )
}
