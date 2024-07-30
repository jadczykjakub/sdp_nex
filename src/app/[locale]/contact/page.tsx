import initTranslations from '@/app/i18n/i18n'
import ClientComponent from '@/app/components/clientComponent'
import TranslationsProvider from '@/app/components/TranslationProvider'
import DecorationWrapper from '@/app/components/DecorationWrapper'
import PhoneIcon from '@/../public/images/svg/phone.svg'
import EnvelopeIcon from '@/../public/images/svg/envelope.svg'

const i18nNamespaces = ['common', 'contact']

export default async function Contact({ params: { locale } }: any) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="grid justify-items-center gap-8">
        <DecorationWrapper theme="dark" type="single">
          <h1 className="text-2xl font-bold">
            {t('title', { ns: 'contact' })}
          </h1>
        </DecorationWrapper>
        <div className="flex items-center gap-4 group">
          <EnvelopeIcon className="group-hover:fill-primary" />
          <a
            href={t('email.href', { ns: 'contact' })}
            className="group-hover:text-primary"
          >
            {t('email.text', { ns: 'contact' })}
          </a>
        </div>
        <div className="flex items-center gap-4 group">
          <PhoneIcon className="group-hover:fill-primary" />
          <a
            href={t('phone.href', { ns: 'contact' })}
            className="group-hover:text-primary"
          >
            {t('phone.text', { ns: 'contact' })}
          </a>
        </div>
      </main>
    </TranslationsProvider>
  )
}
