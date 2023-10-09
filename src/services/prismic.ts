import Prismic from '@prismicio/client'

const endpoint = import.meta.env.VITE_PRISMIC_ENDPOINT
const accessToken = import.meta.env.VITE_PRISMIC_ACCESS_TOKEN

export function getPrismicClient(req?: unknown) {
    const prismic = Prismic.client(
        `${endpoint}`,
        {
            req,
            accessToken:
            `${accessToken}`
            //
        }
    )
    return prismic
}