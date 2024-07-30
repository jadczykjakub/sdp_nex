import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { cn } from '../../../lib/utils'

interface IButton {
    linkTo: string,
    text: string,
}

const Button = ({text, linkTo}: IButton) => {
    return <Link href={linkTo} className={cn(`button`)} >{text}</Link>
}

export default Button;