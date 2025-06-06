import initTranslations from '@/app/i18n/i18n'
import ClientComponent from '@/app/components/clientComponent'
import TranslationsProvider from '@/app/components/TranslationProvider'
import DecorationWrapper from '@/app/components/DecorationWrapper'
import LawScienceIcon from '@/../public/images/svg/science.svg'
import HighestStandardsIcon from '@/../public/images/svg/questions.svg'
import EffectiveWorkIcon from '@/../public/images/svg/accept-price.svg'
import BusinessOrientationIcon from '@/../public/images/svg/handshake.svg'
import aboutUsImage from '@/../public/images/about-us/about-us.jpg'
import Image from 'next/image'

const i18nNamespaces = ['about-us']

const iconEnum: { [key: number]: JSX.Element } = {
  0: <LawScienceIcon className={'max-md:w-11 max-md:h-11'} />,
  1: <HighestStandardsIcon className={'max-md:w-11 max-md:h-11'} />,
  2: <EffectiveWorkIcon className={'max-md:w-11 max-md:h-11'} />,
  3: <BusinessOrientationIcon className={'max-md:w-11 max-md:h-11'} />,
}
type TAboutUs = {
    locale: string
}

export async function AboutUsPage({locale}: TAboutUs ) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces)

  const dataDescription = t('description', {
    ns: 'about-us',
    returnObjects: true,
  })
  const dataPrinciples = t('principles', {
    ns: 'about-us',
    returnObjects: true,
  })

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="grid gap-12 md:gap-20">
        <DecorationWrapper theme="dark" type="single">
          <h1 className="text-4xl font-bold">
            {t('title', { ns: 'about-us' })}
          </h1>
        </DecorationWrapper>
        <div className="grid md:grid-cols-[3fr_2fr]  gap-12">
          <div>
            {dataDescription.map((item: any, index: any) => {
              return (
                <p className="mb-4 font-extralight" key={index}>
                  {item.paragraph}
                </p>
              )
            })}
          </div>
          <Image
            src={aboutUsImage}
            alt="about us image"
            className="h-full object-cover rounded-lg"
          />
        </div>
        <DecorationWrapper theme="dark" type="single">
          <h2 className="text-3xl font-bold">{t('principlesTitle')}</h2>
        </DecorationWrapper>
        <div className="grid gap-4 justify-items-center">
          <div className="grid gap-12  md:grid-cols-2 md:gap-24">
            {dataPrinciples.map((item: any, index: number) => {
              return (
                <div key={index} className="grid gap-4">
                  <div className="flex items-center gap-4 md:gap-8">
                    <div className="bg-primary p-2 rounded-md">
                      {iconEnum[index]}
                    </div>
                    <p className="font-bold text-xl md:text-2xl">
                      {item.title}
                    </p>
                  </div>
                  <p className="font-extralight">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </TranslationsProvider>
  )
}
