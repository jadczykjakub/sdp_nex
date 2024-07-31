import initTranslations from '@/app/i18n/i18n'
import ClientComponent from '@/app/components/clientComponent'
import TranslationsProvider from '../components/TranslationProvider'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { cn } from '../helpers/cn'
import Hero from '../components/Hero'
import Recommendation from '../components/Recommendation'
import WeHelpClients from '../components/WeHelpClients'

const i18nNamespaces = ['common', 'home']

export default async function Home({ params: { locale } }: any) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)

  // console.log(resources?.[locale].home.recommendations);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className='grid gap-16 md:gap-20'>
        <Hero lang={locale} />
        <Recommendation  lang={locale} />
        <WeHelpClients lang={locale} />
      </main>
    </TranslationsProvider>
  )
}
