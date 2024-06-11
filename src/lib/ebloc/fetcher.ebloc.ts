import { ApiError } from '../errors';
import { type TypedDocumentString } from './codegen/graphql';

export const eblocFetcher = async <R, V>(
  query: TypedDocumentString<R, V>,
  variables?: V,
  tags?: string[]
): Promise<R> => {
  const result = await fetch(process.env.EBLOC_STOREFRONT_API_URL, {
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
    // console.log('Error', errors);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    throw new ApiError(errors[0].message ?? '');
  }

  return data;
};
