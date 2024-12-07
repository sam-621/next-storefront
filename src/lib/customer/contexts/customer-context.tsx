'use client';

import { createContext, type PropsWithChildren, useContext } from 'react';

import { type CustomerDetailsFragment } from '@/lib/vendyx/types';

type Schema = {
  isAuth: boolean;
  customer: CustomerDetailsFragment | null;
};

const Context = createContext<Schema>({
  isAuth: false,
  customer: null
});

export const CustomerProvider = ({ children, value }: PropsWithChildren & { value: Schema }) => (
  <Context.Provider value={value}>{children}</Context.Provider>
);

export const useCustomerContext = (): Schema => useContext(Context);
