import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div className='grid justify-items-center gap-4'>
      <h2 className='font-bold text-2xl'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='button'>Return Home</Link>
    </div>
  )
}
 