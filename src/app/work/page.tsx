import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { print } from 'graphql/language/printer'

import { setSeoData } from '@/src/lib/api/seoData'

import { fetchGraphQL } from '@/src/lib/api/fetchGraphQL'
import { ContentNode } from '@/gql/graphql'
import { nextSlugToWpSlug } from '@/src/lib/api/nextSlugToWpSlug'
import { SEO_QUERY, CONTENT_INFO_QUERY } from '@/src/lib/queries'
import WorkTemplate from '@/src/components/templates/work/work-template'

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = nextSlugToWpSlug('work')
  const isPreview = slug.includes('preview')

  const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
    print(SEO_QUERY),
    {
      slug: isPreview ? slug.split('preview/')[1] : slug,
      idType: isPreview ? 'DATABASE_ID' : 'URI',
    }
  )

  if (!contentNode) {
    return notFound()
  }

  const metadata = setSeoData({ seo: contentNode.seo })

  return {
    ...metadata,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${slug}`,
    },
  } as Metadata
}

export function generateStaticParams() {
  return []
}

export default async function Page({ params }: Props) {
  const slug = nextSlugToWpSlug('work')
  const isPreview = slug.includes('preview')
  const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
    print(CONTENT_INFO_QUERY),
    {
      slug: isPreview ? slug.split('preview/')[1] : slug,
      idType: isPreview ? 'DATABASE_ID' : 'URI',
    }
  )

  if (!contentNode) return notFound()

  return <WorkTemplate node={contentNode} />
}
