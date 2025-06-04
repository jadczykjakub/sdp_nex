import initTranslations from '@/app/i18n/i18n'
import ClientComponent from '@/app/components/clientComponent'
import TranslationsProvider from '@/app/components/TranslationProvider'
import DecorationWrapper from '@/app/components/DecorationWrapper'
import PhoneIcon from '@/../public/images/svg/phone.svg'
import EnvelopeIcon from '@/../public/images/svg/envelope.svg'
import bgImage from '@/../public/images/contact/bg-contact.png'
import Image from 'next/image'

type TContactPage = {
  locale: string
}

const i18nNamespaces = ['common', 'contact']

export async function ContactPage({ locale }: TContactPage) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="grid justify-items-center gap-12 md:gap-20">
        <DecorationWrapper theme="dark" type="single">
          <h1 className="text-4xl font-bold">
            {t('title', { ns: 'contact' })}
          </h1>
        </DecorationWrapper>
        <div className="grid gap-4 justify-items-center">
          <div className="flex items-center gap-4 group ">
            <EnvelopeIcon className="group-hover:fill-primary" />
            <a
              href={`mailto:${t('email.href', { ns: 'contact' })}`}
              className="group-hover:text-primary"
            >
              {t('email.text', { ns: 'contact' })}
            </a>
          </div>
          <div className="flex items-center gap-4 group">
            <PhoneIcon className="group-hover:fill-primary" />
            <a
              href={`tel:${t('phone.href', { ns: 'contact' })}`}
              className="group-hover:text-primary"
            >
              {t('phone.text', { ns: 'contact' })}
            </a>
          </div>
          <Image
            src={bgImage}
            alt="contact sdp legal"
            className="-mt-12 md:-mt-28 -z-10"
          />
        </div>
      </main>
    </TranslationsProvider>
  )
}
