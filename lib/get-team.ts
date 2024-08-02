import fs from 'fs'
import path from 'path'
import { cache } from 'react'
import matter from 'gray-matter'

function getTeamFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

type Metadata = {
  title: string
  publishedAt: string
  imageListSource: string
  imageProfileSource: string
  linkedin?: string
  email?: string
  education?: string
  profession1?: string
  profession2?: string
  published: boolean
  isBoss: boolean
}

export const getTeam = (locale: string) => {
  const TEAM_FOLDER = path.join(process.cwd(), 'content', 'team', locale)

  const team = getTeamFiles(TEAM_FOLDER);

  return team.map((post) => {
    const filePath = path.join(TEAM_FOLDER, post)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)


    return {
      metadata: data as Partial<Metadata>,
      content,
      slug: post.replace(/\.mdx?$/, ''),
    }
  })
}
