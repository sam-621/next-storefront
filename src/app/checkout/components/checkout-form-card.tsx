import { type FC, type PropsWithChildren } from 'react';

export const CheckoutFormCard: FC<Props> = ({ children, title }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg text-gray-900 font-medium">{title}</h3>
      {children}
    </div>
  );
};

type Props = PropsWithChildren & {
  title: string;
};
