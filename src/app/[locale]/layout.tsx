import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/app/globals.css'
import i18nConfig from '@/app/i18n/i18n.config'
import { dir } from 'i18next'
import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'
import initTranslations from '@/app/i18n/i18n'
import TranslationsProvider from '@/app/components/TranslationProvider'
import ExpertiseWideMenu from '@/app/components/ExpertiseWideMenu'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SDP Sierzant Dudzinski',
  description: 'Polish Intellectual Property Law Firm. Comprehensive IP services for corporations and law firms.',
}

const i18nNamespaces = ['common', 'navigation', 'footer']

export function generateStaticParams() {
  return i18nConfig.locales.filter((item) => item !== i18nConfig.defaultLocale).map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale },
}: any) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={poppins.className}>
        <div className="mx-auto max-w-10xl ">
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
          >
            <Navigation >
              <ExpertiseWideMenu  lang={locale} />
            </Navigation>
            <div className="my-4 px-4 md:px8 max-w-7xl mx-auto">
              {children}
            </div>
            <Footer lang={locale} />
          </TranslationsProvider>
        </div>
      </body>
    </html>
  )
}
