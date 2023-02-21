
import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

export function getPrismicClient(req?: unknown): DefaultClient {
  const prismic = Prismic.client(import.meta.env.PRISMIC_API_ENDPOINT, {
    req,
    accessToken: import.meta.env.PRISMIC_ACCESS_TOKEN
  });

  return prismic;
}