import React from 'react'
import initTranslations from '@/app/i18n/i18n'
import ListElement from './ListElement'
const i18nNamespaces = ['home']

export default async function WeHelpClients({ lang }: any) {
  const { t } = await initTranslations(lang, i18nNamespaces)

  const data = t('we_help_clients', { ns: 'hero', returnObjects: true })

  return (
    <div>
      <ul className='grid md:gap-x-16 gap-y-6 md:grid-cols-2'>
        {data?.map((item: any, index: any) => {
          return (
            <ListElement key={index}>
              <span className='font-bold'>{item.title}</span> <span className='font-extralight'>{item.text}</span>
            </ListElement>
          )
        })}
      </ul>
    </div>
  )
}
