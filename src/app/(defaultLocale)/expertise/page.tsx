import { ExpertisePage } from '@/app/components/templates/ExpertisePage'
import Layout from '@/app/components/templates/Layout'

export default async function Expertise() {
  return (
    <Layout>
      <ExpertisePage locale={'en'} />
    </Layout>
  )
}
