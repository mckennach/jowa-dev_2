import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support'
import { cookies, draftMode } from 'next/headers'

export const { getClient } = registerApolloClient(() => {
  const { isEnabled: preview } = draftMode()
  let authHeader = ''
  if (preview) {
    const auth = cookies().get('wp_jwt')?.value
    if (auth) {
      authHeader = `Bearer ${auth}`
    }
  }
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
    }),
    headers: {
      'Content-Type': 'application/json',
      ...(authHeader && { Authorization: authHeader }),
    },
  })
})
