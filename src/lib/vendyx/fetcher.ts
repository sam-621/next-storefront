import { type TypedDocumentString } from './codegen/graphql';

/**
 * A wrapper around the fetch API that makes graphql typed request and manage errors
 *
 * @usage
 * ```tsx
 * const result = await fetcher(TypedQuery);
 * ```
 */
export const fetcher = async <R, V>(
  query: TypedDocumentString<R, V>,
  variables?: V,
  tags?: string[]
): Promise<R> => {
  const result = await fetch(process.env.VENDYX_SHOP_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      x_vendyx_shop_api_key: process.env.VENDYX_SHOP_API_KEY,
      shop_id: process.env.VENDYX_SHOP_ID
    },
    body: JSON.stringify({
      query: query.toString(),
      variables
    }),
    cache: 'no-store',
    next: { tags }
  });

  const { data, errors } = await result.json();

  // TODO: Handle errors - reference: https://github.com/vercel/commerce/blob/d1d9e8c4343e70d72df6e00ec95f6ea4efbb7c54/packages/shopify/src/utils/handle-fetch-response.ts
  if (errors?.length) {
    console.log({
      errors
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    throw new ApiError(errors?.[0]?.message, errors?.[0]?.code);
  }

  return data;
};

export class ApiError extends Error {
  constructor(
    public message: string,
    public code: number
  ) {
    super(message);
  }
}
