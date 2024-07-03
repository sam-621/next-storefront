declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    EBLOC_STOREFRONT_API_URL: string;
  }
}
