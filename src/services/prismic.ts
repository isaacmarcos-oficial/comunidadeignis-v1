import Prismic from '@prismicio/client'

const endpoint = "https://comunidadeignis.cdn.prismic.io/api/v2"
const accessToken = "MC5ZcXlhdFJFQUFDY0F1Tzgz.77-9KHrvv71JRgU677-977-977-9GC0kY--_ve-_vT8ZBiXvv71aTe-_ve-_vSbvv73vv73vv71E77-9"

export function getPrismicClient(req?: unknown) {
    const prismic = Prismic.client(
        `${endpoint}`,
      //import.meta.env.VITE_PRISMIC_ENDPOINT,
        {
            req,
            accessToken:
            `${accessToken}`
            //import.meta.env.VITE_PRISMIC_ACCESS_TOKEN
        }
    )
    return prismic
}