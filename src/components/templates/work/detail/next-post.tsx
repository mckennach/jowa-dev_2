'use client'

import { Post, Category, Project, RootQueryToProjectConnection } from '@/src/gql/graphql'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from '@/components/ui/carousel'
import { Section, Container } from '../../../craft'
import { Text } from '../../../ui/text'
import Image from 'next/image'
import { cn, imageLoader, zeroPad } from '@/src/lib/utils'
import CustomIcons from '@/src/components/custom-icons'
import { useRouter } from 'next/navigation'
export default function NextPost({
  projects,
  currentId,
}: {
  projects: RootQueryToProjectConnection
  currentId: string
}) {
  const router = useRouter();

  return (
    <Section className="py-32 bg-foreground">
      <Container className="">
        <Text tag="h3" className="text-[48px] leading-8 text-background">
          NEXT PROJECT
        </Text>
        <Carousel
          className="w-full"
          opts={{
            align: 'start',
          }}
        >
          <CarouselContent>
            {projects.nodes.filter((project: Project) => project.id !== currentId).map((project: Project, index: number) => {
              return (
                <CarouselItem key={index}>
                  <div className="lg:flex space-y-8 lg:px-4">
                    <div className="flex lg:basis-1/2 items-end">
                      <div
                        className="max-w-[700px] cursor-pointer space-y-12"
                        onClick={() => {
                          router.push(`/work/${project.slug}`)
                        }}
                      >
                        <div className="space-y-6">
                          <Text
                            type="heading"
                            tag="h4"
                            className="text-[48px] uppercase text-accent"
                          >
                            {project.title}
                          </Text>
													<div>
														{project &&
															project.categories &&
															project.categories.nodes.map((category: Category) => {
																if (category.parentId === 'dGVybToxMzcw') {
																	return (
																		<p key={category.id} className="uppercase text-accent text-[16px] leading-[30px]">
																			{category.name}
																		</p>
																	)
																}
															})}
													</div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:basis-1/2">
                      <div
                        className="relative aspect-[800/624] cursor-pointer"
                        onClick={() => {
                          router.push(`/work/${project.slug}`)
                        }}
                      >
                        <Image
                          src={
                            project.featuredImage?.node.mediaItemUrl ??
                            ''
                          }
                          alt={project.featuredImage?.node.altText ?? ''}
                          fill={true}
                          style={{
                            objectFit: 'cover',
                          }}
                          className="brightness-75 filter"
                          loader={imageLoader}
                          priority={true}
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </Section>
  )
}

const CarouselPrevious = () => {
  const { scrollPrev, canScrollPrev } = useCarousel()
  return (
    <button
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      className={cn(
        'absolute left-12 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100',
        !canScrollPrev && 'hidden'
      )}
    >
      <CustomIcons name="arrow-left" />
    </button>
  )
}

const CarouselNext = () => {
  const { scrollNext, canScrollNext } = useCarousel()
  return (
    <button
      disabled={!canScrollNext}
      onClick={scrollNext}
      className={cn(
        'absolute right-12 top-1/2 -translate-y-1/2 opacity-30 hover:opacity-100',
        !canScrollNext && 'hidden'
      )}
    >
      <CustomIcons name="arrow-right" />
    </button>
  )
}