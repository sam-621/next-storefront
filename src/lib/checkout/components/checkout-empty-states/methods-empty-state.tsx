import { type FC } from 'react';

import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

export const MethodsEmptyState: FC<Props> = ({ text }) => {
  return (
    <div className="w-full flex flex-col items-center p-5 rounded-md bg-gray-50 border">
      <ExclamationCircleIcon className="h-12 w-12 text-gray-400" />
      <p className="mt-2 text-base text-gray-600 text-center">{text}</p>
    </div>
  );
};

type Props = {
  text: string;
};
