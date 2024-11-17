declare namespace NodeJS {
  export type ProcessEnv = {
    NODE_ENV: 'development' | 'production';
    VENDYX_SHOP_API_URL: string;
    VENDYX_SHOP_API_KEY: string;
    VENDYX_SHOP_ID: string;
  };
}
