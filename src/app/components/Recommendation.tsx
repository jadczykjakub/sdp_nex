import React from 'react'
import ListElement from './ListElement'
import RecommendatoinIcon from '@/../public/images/svg/reccomend.svg'
import DecorationWrapper from './DecorationWrapper'
import initTranslations from '@/app/i18n/i18n'

const i18nNamespaces = ['home']

export default async function Recommendation({ lang }: any) {
  const { t } = await initTranslations(lang, i18nNamespaces)

  const data = t('recommendations', { ns: 'hero', returnObjects: true })

  return (
    <div className="grid gap-8 justify-items-center">
      <DecorationWrapper
        theme="dark"
        type="single"
        classFromProps="grid gap-2 justify-items-center"
      >
        <RecommendatoinIcon />
        <h3 className="text-3xl font-bold text-center">{t("recommendationTitle" )}</h3>
      </DecorationWrapper>
      <ul className="flex gap-4">
        {data.map((item: any, index: any) => {
          return (
            <ListElement key={index}>
              <a href={item.href} className="hover:text-primary font-light ">
                {item.title}
              </a>
            </ListElement>
          )
        })}
      </ul>
    </div>
  )
}
