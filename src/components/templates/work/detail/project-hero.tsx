'use client'

import Image from 'next/image'
import { imageLoader, zeroPad } from '@/src/lib/utils'
import { Project } from '@/src/gql/graphql'
import { Text } from '@/src/components/ui/text'
export default function ProjectHero({ project }: { project: Project }) {
  return (
    <header className="relative h-auto overflow-hidden lg:max-h-screen lg:min-h-screen">
      <div className="relative aspect-square">
        <Image
          src={project.projectFields?.heroImage?.node.sourceUrl ?? ''}
          alt="alt"
          fill={true}
          style={{
            objectFit: 'cover',
          }}
          className="brightness-75 filter"
          loader={imageLoader}
          priority={true}
        />
      </div>
      <div className="absolute bottom-5 left-4 w-full text-cream lg:left-12">
        <Text tag="h1" type="title1" className="text-cream">
          {project.title}
        </Text>
      </div>
    </header>
  )
}
