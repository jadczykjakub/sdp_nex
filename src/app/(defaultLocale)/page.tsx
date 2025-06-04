import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/app/globals.css'

import Layout from '@/app/components/templates/Layout'
import { HomePage } from '@/app/components/templates/HomePage'

export const metadata: Metadata = {
  title: 'SDP Sierzant Dudzinski',
  description: 'Własność intelektualna w biznesie',
}

export default async function Home() {
  return (
    <Layout>
      <HomePage locale="en" />
    </Layout>
  )
}
