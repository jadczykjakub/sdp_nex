import { ExpertisePage } from '@/app/components/templates/ExpertisePage'


export default async function page({ params }: { params: any }) {
  return <ExpertisePage locale={params.locale} />
}
