import { HomePage } from '@/app/components/templates/HomePage'

export default async function Home({ params: { locale } }: any) {
  return <HomePage locale={locale} />
}
