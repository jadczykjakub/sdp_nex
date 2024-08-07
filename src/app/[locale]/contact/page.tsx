import { ContactPage } from '@/app/components/templates/ContactPage'

export default async function Contact({ params: { locale } }: any) {
  return <ContactPage locale={locale} />
}
