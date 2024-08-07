import { ExpertiseSlugPage } from '@/app/components/templates/ExpertiseSlugPage'
import Layout from '@/app/components/templates/Layout'
import { getExpertise } from '@/../lib/get-expertise'


export function generateStaticParams() {

    const expertises = getExpertise('en');

    return expertises.map((item) => ({ locale: item.locale, slug: item.slug }))
  }

export default async function ExpertiseSlug({ params }: { params: any }) {
  return (
    <Layout>
      <ExpertiseSlugPage locale={'en'} slug={params.slug} />
    </Layout>
  )
}
