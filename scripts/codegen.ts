import { type CodegenConfig } from '@graphql-codegen/cli';

const GQL_SCHEMA_URL = process.env.EBLOC_STOREFRONT_API_URL;

const config: CodegenConfig = {
  schema: GQL_SCHEMA_URL,
  documents: ['./src/lib/shared/ebloc/**/*.ts'],
  generates: {
    './src/lib/shared/ebloc/codegen/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' }
      },
      config: {
        documentMode: 'string'
      }
    }
  }
};

export default config;
