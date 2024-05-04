declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    VENDYX_STOREFRONT_API_URL: string;
  }
}
