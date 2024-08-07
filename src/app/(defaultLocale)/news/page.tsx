import { NewsPage } from '@/app/components/templates/NewsPage'
import Layout from '@/app/components/templates/Layout'

export default async function News() {
  return (
    <Layout>
      <NewsPage locale='en' />
    </Layout>
  )
}
