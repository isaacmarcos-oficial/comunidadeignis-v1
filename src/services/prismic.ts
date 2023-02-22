import Prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
    const prismic = Prismic.client(
      import.meta.env.VITE_PRISMIC_ENDPOINT,
        {
            req,
            accessToken: import.meta.env.VITE_PRISMIC_ACCESS_TOKEN
        }
    )
    return prismic
}