import { AboutUsPage } from "@/app/components/templates/AboutUsPage"

export default async function AboutUs({ params: { locale } }: any) {
  

  return (
      <AboutUsPage  locale={locale}/>
  )
}
