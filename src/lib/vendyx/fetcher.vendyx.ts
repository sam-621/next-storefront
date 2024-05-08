import { type TypedDocumentString } from './codegen/graphql';

export const vendyxFetcher = async <R, V>(
  query: TypedDocumentString<R, V>,
  variables?: V,
  tags?: string[]
): Promise<R> => {
  const result = await fetch(process.env.VENDYX_STOREFRONT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: query.toString(),
      variables
    }),
    next: { tags },
    cache: 'no-cache'
  });

  const { data, errors } = await result.json();
  if (errors?.length) {
    // throw new ApiError(ApiErrorMessages.UnexpectedError, errors);
    console.log('Error', errors);
  }

  return data;
};
