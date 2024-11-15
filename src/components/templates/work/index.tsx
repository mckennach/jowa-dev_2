import { Section, Container, cn } from '../../craft'
import { print } from 'graphql/language/printer'
import { ContentNode, Project, TagConnection } from '@/gql/graphql'
import { fetchGraphQL } from '@/src/lib/api/fetchGraphQL'
import { WORK_QUERY } from '@/lib/queries'
import ProjectItem from './project-item'
import { Filter } from '../../ui/filter'
import { TAGS_QUERY } from '@/src/lib/queries/general/tags'
interface TemplateProps {
  node: ContentNode
}

export default async function WorkTemplate({ node }: TemplateProps) {
  const {
    projects: { nodes },
  } = await fetchGraphQL<{ projects: { nodes: Array<Project> } }>(
    print(WORK_QUERY)
  )

  const { tags } = await fetchGraphQL<{ tags: TagConnection }>(
    print(TAGS_QUERY),
    {
      caches: false,
    }
  )

  const filterItems = tags.nodes.filter(
    (tag) => tag?.projects && tag?.projects?.nodes?.length > 0
  )

  return (
    <Section
      className={cn(
        'filter-section relative bg-background',
        'before:fixed before:left-0 before:top-0 before:z-50 before:h-[250px] before:w-full before:bg-gradient-to-b before:from-background before:from-50% before:to-transparent'
      )}
    >
      <Container className="pt-36">
        <Filter
          label="View by"
          className="fixed left-0 top-24 z-50 w-full px-4 lg:px-12"
          items={filterItems}
          columns={false}
        />
        {nodes.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </Container>
    </Section>
  )
}
