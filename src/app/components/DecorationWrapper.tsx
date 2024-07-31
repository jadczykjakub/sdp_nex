import { ReactNode } from 'react'
import classNames from 'classnames'
import { cn } from '../helpers/cn'

interface IDecorationWrapper {
  children: ReactNode
  theme: 'bright' | 'dark'
  type: 'single' | 'double' | 'singleTop'
  classFromProps?: classNames.Argument
}

const DecorationWrapper = ({
  children,
  type,
  theme,
  classFromProps,
}: IDecorationWrapper) => {
  return (
    <div className='grid justify-items-center'>
      <div
        className={cn(`relative w-fit py-4 my-1   ${classFromProps}`, {
          bottomDecoration: type === 'single',
          'topDecoration bottomDecoration': type === 'double',
          topDecoration: type === 'singleTop',
          'after:via-secondary before:via-secondary': theme === 'dark',
        })}
      >
        {children}
      </div>
    </div>
  )
}

export default DecorationWrapper
