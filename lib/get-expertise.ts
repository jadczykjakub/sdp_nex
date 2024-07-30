import fs from 'fs'
import path from 'path'
import { cache } from 'react'
import matter from 'gray-matter'

function getExpertiseFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

type Metadata = {
  title: string
  publishedAt: string
  keyContact: string
  nextExpertise: string
  prevExpertise: string
  tag: 'dispute' | 'protect' | 'regulatory'
  published: true
}

export const getExpertise = (locale: string) => {
  const EXPERTISE_FOLDER = path.join(
    process.cwd(),
    'content',
    'expertise',
    locale
  )

  const expertise = getExpertiseFiles(EXPERTISE_FOLDER)

  return expertise.map((item) => {
    const filePath = path.join(EXPERTISE_FOLDER, item)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    return {
      metadata: data as Partial<Metadata>,
      content,
      slug: item.replace(/\.mdx?$/, ''),
    }
  })
}

export const getSortedExpertise = (locale: string) => {
  let expertise = getExpertise(locale)

  expertise = expertise.filter((item) => item.metadata.published)

  expertise = expertise.sort((a, b) => {
    const dateA = new Date(a.metadata.publishedAt!)
    const dateB = new Date(b.metadata.publishedAt!)
    return dateB.getTime() - dateA.getTime()
  })

  const expertiseDispute = expertise.filter(
    (item) => item.metadata.tag === 'dispute'
  )
  const expertiseProtect = expertise.filter(
    (item) => item.metadata.tag === 'protect'
  )
  const expertiseRegulatory = expertise.filter(
    (item) => item.metadata.tag === 'regulatory'
  )

  return {
    dispute: expertiseDispute,
    protect: expertiseProtect,
    regulatory: expertiseRegulatory,
  }
}
