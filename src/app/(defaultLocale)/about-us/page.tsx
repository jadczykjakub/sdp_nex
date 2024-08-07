import { AboutUsPage } from '@/app/components/templates/AboutUsPage'
import Layout from '@/app/components/templates/Layout'

export default async function AboutUs() {
  return (
    <Layout>
      <AboutUsPage locale={'en'} />
    </Layout>
  )
}
