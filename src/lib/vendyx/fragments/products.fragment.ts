import { graphql } from '../codegen';

export const CommonProduct = graphql(`
  fragment CommonProduct on Product {
    id
    name
    slug
    description
    onlineOnly
  }
`);

export const CommonVariant = graphql(`
  fragment CommonVariant on Variant {
    id
    stock
    price
  }
`);

export const CommonAsset = graphql(`
  fragment CommonAsset on Asset {
    id
    name
    source
  }
`);
