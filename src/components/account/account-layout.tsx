import { type PropsWithChildren } from 'react';

const Root = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col gap-10 py-10 px-4 lg:gap-16 lg:py-24 w-full max-w-5xl mx-auto">
      {children}
    </div>
  );
};

const Card = ({
  children,
  title,
  subtitle
}: PropsWithChildren & { title: string; subtitle: string }) => {
  return (
    <div className="flex flex-col gap-8 lg:grid grid-cols-2">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold">{title}</h2>
        <p className="font-normal text-sm text-gray-600">{subtitle}</p>
      </div>
      {children}
    </div>
  );
};

export const AccountLayout = Object.assign(Root, { Card });
