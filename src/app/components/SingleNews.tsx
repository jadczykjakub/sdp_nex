"use client";
import React from 'react'
import ChevronIcon from '@/../public/images/svg/chevron.svg'
import Image from 'next/image'
import Link from 'next/link'


import { useTranslation } from "react-i18next";

type TSingleNews = {
    slug: string,
    imgSource: string,
    title: string,

}

export default function SingleNews({slug, imgSource, title}: TSingleNews ) {
    const { t } = useTranslation();
  return (
    <Link href={`${slug}`}  className="group grid gap-4">
      <div className="overflow-hidden">
        <Image
          src={`/${imgSource}`}
          width="400"
          height="320"
          alt={`${title}`}
          className="group-hover:scale-110 transition-transform max-h-64 object-contain"
        />
      </div>
      <div className="grid">
        <p className="font-bold text-xl">{title}</p>
        <p className="flex gap-2 items-center">
          {t('button', {ns: 'news'})}
          <span>
            <ChevronIcon
              className={
                'fill-primary group-hover:translate-x-2 transition-transform'
              }
            />
          </span>
        </p>
      </div>
    </Link>
  )
}
