import React, { ReactNode } from 'react'
import ListIcon from '@/../public/images/svg/li_logo.svg'
import classNames from 'classnames'

type TListElement = {
    children?: ReactNode,
    classNames?: classNames.Argument
}

export default function ListElement({ children, classNames} : TListElement) {
  return (
    <li className={`relative ${classNames}`} ><ListIcon className={'absolute -top-[4px]'} /> <div className='pl-8 font-extralight'>{children}</div></li>
  )
}
