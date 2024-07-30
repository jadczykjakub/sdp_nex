'use client'

import React from 'react'
import DecorationWrapper from '@/app/components/DecorationWrapper'
import Image from 'next/image'
import { getTeam } from '@/../lib/get-team'
import { useTranslation } from "react-i18next";

export default function ContactPerson({name}: {name: string}) {

    const { i18n } = useTranslation()
    const currentLocale = i18n.language

    const profile = getTeam(currentLocale).find(
        (profile) => true
      )

      console.log(profile)
  return (
    <div>
                  <div>
            <DecorationWrapper theme="dark" type="single">
              <h4>osoba kontaktowa</h4>
            </DecorationWrapper>
            <div>
              {/* <Image
                src={`/${expertise.metadata.imageProfileSource}`}
                width="350"
                height="240"
                alt="dupa"
                objectFit="contain"
              /> */}

              <p>Daiwd S</p>
              <p>radca prawny</p>
            </div>
          </div>
      
    </div>
  )
}
