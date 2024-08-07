import React from 'react'
import { NewsPage } from '@/app/components/templates/NewsPage'

export default async function page({ params }: { params: any }) {
  return <NewsPage locale={params.locale} />
}
