import { TeamPage } from '@/app/components/templates/TeamPage'
import Layout from '@/app/components/templates/Layout'

export default async function Team() {
  return (
    <Layout>
      <TeamPage locale="en" />
    </Layout>
  )
}
