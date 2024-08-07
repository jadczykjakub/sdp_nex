import { ContactPage } from '@/app/components/templates/ContactPage'
import Layout from '@/app/components/templates/Layout'

export default async function Contact() {
  return (
    <Layout>
      <ContactPage locale={'en'} />
    </Layout>
  )
}
