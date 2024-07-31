'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from "react-i18next";

type TPerson = {
  name?: string
  education?: string
  profession1?: string
  profession2?: string
  href: string
  imgSrc?: string
}

export default function Person({
  name,
  education,
  profession1,
  profession2,
  href,
  imgSrc,
}: TPerson) {

    const { t } = useTranslation();
  return (
    <Link href={`${href}`} className="group">
      <div className="text-center relative overflow-hidden flex justify-center">
        <Image
          src={`/${imgSrc}`}
          width={400}
          height={400}
          alt=""
          className="group-hover:opacity-40 transition-opacity"
        />
        <div className="absolute top-[50%] w-full group-hover:top-[20%]  transition-all">
          <p className="font-bold text-sm md:text-3xl bg-black/55 py-8">
            {name}
          </p>
        </div>
        <div className="absolute top-full w-full group-hover:top-[60%] touchScr:top-[85%] transition-all grid gap-2 justify-items-center">
          <div className="grid  touchScr:hidden">
            {education && <p className="font-extralight">{education}</p>}
            {profession1 && <p className="font-extralight ">{profession1}</p>}
            {profession2 && <p className="font-extralight">{profession2}</p>}
          </div>
          <span className="group-hover:opacity-100  opacity-90 bg-primary rounded-lg  p-2 font-extralight text-xs">
            {t('contactButton')}
          </span>
        </div>
      </div>
    </Link>
  )
}
