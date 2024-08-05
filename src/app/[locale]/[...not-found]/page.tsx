import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogs } from '@/../lib/get-blogs'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: any
}): Promise<any> {
  const blog = getBlogs(params.locale).find((post) => post.slug === params.slug)
}

export default function page({ params: { locale } }: any) {
  return (
    <div className='grid justify-items-center gap-4'>
      <h2 className='font-bold text-2xl'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='button'>Return Home</Link>
    </div>
  )
}
 