import { print } from 'graphql/language/printer'
import { ContentNode, Project } from '@/src/gql/graphql'
import { fetchGraphQL } from '@/src/lib/api/fetchGraphQL'
import { WORK_DETAIL_QUERY } from '@/lib/queries'
import ProjectHero from './project-hero'
import { Container, Section } from '../../../craft'
import ProjectInfo from './project-info'

interface TemplateProps {
  node: ContentNode
}

export default async function WorkDetailTemplate({ node }: TemplateProps) {
  const { project } = await fetchGraphQL<{ project: Project }>(
    print(WORK_DETAIL_QUERY),
    {
      id: node?.uri,
    }
  ) // This is the only change in this file

  return (
    <>
      <ProjectHero project={project} />
      <ProjectInfo project={project} />
    </>
  )
}