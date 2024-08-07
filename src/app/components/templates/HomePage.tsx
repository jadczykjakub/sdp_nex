import initTranslations from '@/app/i18n/i18n'
import TranslationsProvider from '@/app/components/TranslationProvider'
import Hero from '@/app/components/Hero'
import Recommendation from '@/app/components/Recommendation'
import WeHelpClients from '@/app/components/WeHelpClients'
import { getLatestBlogs } from '@/../lib/get-blogs'
import SingleNews from '@/app/components/SingleNews'
import DecorationWrapper from '@/app/components/DecorationWrapper'
import Link from 'next/link'

const i18nNamespaces = ['common', 'home', 'news']

type THomePage = {
  locale: string
}

export async function HomePage({ locale }: THomePage) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)

  const lastBlogs = getLatestBlogs(locale)

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="grid gap-16 md:gap-20">
        <Hero lang={locale} />
        <Recommendation lang={locale} />
        <WeHelpClients lang={locale} />
        <DecorationWrapper theme="bright" type="single">
          <h3 className="text-2xl font-bold">{t('title', { ns: 'news' })}</h3>
        </DecorationWrapper>
        <div className="grid md:grid-cols-3 gap-16 md:gap-4">
          {lastBlogs.map((item, index) => {
            return (
              <SingleNews
                imgSource={`${item.metadata.imageSource}`}
                slug={item.slug}
                title={item.metadata.title as string}
                key={index}
              />
            )
          })}
        </div>
        <div className="flex justify-center">
          <Link href={'/news'} className="button">
            {' '}
            {t('button', { ns: 'news' })}{' '}
          </Link>
        </div>
      </main>
    </TranslationsProvider>
  )
}
