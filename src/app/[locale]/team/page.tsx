import { TeamPage } from '@/app/components/templates/TeamPage'

export default async function page({ params }: { params: any }) {
  return <TeamPage locale={params.locale} />
}
