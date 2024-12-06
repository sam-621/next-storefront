'use client';

import {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
  useMemo,
  useState
} from 'react';

import { getVariantByOptions, type ProductDetailsFragment, useUrlState } from '@/lib/shared';

type Schema = {
  variant: ProductDetailsFragment['variants']['items'][0] | null;
  options: Record<string, string>;
  changeVariant: (option: string, value: string) => void;
};

const Context = createContext<Schema>({
  variant: null,
  options: {},
  changeVariant: () => {}
});

export const VariantProvider: FC<Props> = ({ children, variants, searchParams }) => {
  const { set } = useUrlState();
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(searchParams);

  const selectedVariant = useMemo(
    () => getVariantByOptions(variants, selectedOptions),
    [variants, selectedOptions]
  );

  const changeVariant = (option: string, value: string) => {
    setSelectedOptions(prevOptions => ({
      ...prevOptions,
      [option]: value
    }));

    set(option, value);
  };

  return (
    <Context.Provider
      value={{ variant: selectedVariant ?? null, options: selectedOptions, changeVariant }}
    >
      {children}
    </Context.Provider>
  );
};

export const useVariantContext = () => useContext(Context);

type Props = PropsWithChildren & {
  searchParams: Record<string, string>;
  variants: ProductDetailsFragment['variants']['items'];
};
