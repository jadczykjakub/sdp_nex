import React from 'react'
import ListElement from './ListElement'
import RecommendatoinIcon from '@/../public/images/svg/reccomend.svg'
import DecorationWrapper from './DecorationWrapper'

export default function Recommendation({ data }: any) {


  return (
    <div className="grid gap-8 justify-items-center">
      <DecorationWrapper
        theme="dark"
        type="single"
        classFromProps="grid gap-2 justify-items-center"
      >
        <RecommendatoinIcon />
        <h3 className="text-3xl font-bold">Reccomendation</h3>
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
