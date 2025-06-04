import i18nConfig from '@/app/i18n/i18n.config'
import initTranslations from '@/app/i18n/i18n'
import TranslationsProvider from '@/app/components/TranslationProvider'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import ExpertiseWideMenu from '../ExpertiseWideMenu'
import { Poppins } from 'next/font/google'
import { dir } from 'i18next'


type TLayout = {
  locale?: string
  children: JSX.Element | JSX.Element[]
}

const i18nNamespaces = ['common', 'navigation', 'footer']

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '700'],
    display: 'swap',
  })

export default async function Layout({
  locale = i18nConfig.defaultLocale,
  children,
}: TLayout) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)

  return (
    <html lang={locale} dir={dir('rtl')}>
      <body className={poppins.className}>
        <div className="mx-auto max-w-10xl ">
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
          >
            <Navigation>
              <ExpertiseWideMenu lang={locale} />
            </Navigation>
            <div className="my-4 px-4 md:px8 max-w-7xl mx-auto">{children}</div>
            <Footer lang={locale}/>
          </TranslationsProvider>
        </div>
      </body>
    </html>
  )
}
