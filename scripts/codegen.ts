import { type CodegenConfig } from '@graphql-codegen/cli';

const GQL_SCHEMA_URL = process.env.VENDYX_SHOP_API_URL;

const config: CodegenConfig = {
  schema: GQL_SCHEMA_URL,
  documents: ['./src/lib/vendyx/**/*.ts'],
  generates: {
    './src/lib/vendyx/codegen/': {
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
