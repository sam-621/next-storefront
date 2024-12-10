import { type FC } from 'react';

import { PencilSquareIcon } from '@heroicons/react/24/outline';

import { cn } from '@/lib/shared/utils';

export const DefaultCustomerInfoCard: FC<Props> = ({ title, details, onClick, className }) => {
  return (
    <div
      className={cn(
        'bg-gray-50 border rounded-lg p-4 flex items-start justify-between w-full',
        className
      )}
    >
      <div>
        <p className="font-medium">{title}</p>
        {details.filter(Boolean).map(detail => (
          <p key={detail} className="text-gray-500 font-light">
            {detail}
          </p>
        ))}
      </div>
      {onClick && (
        <div>
          <button type="button" onClick={onClick}>
            <PencilSquareIcon className="h-6 w-6 text-indigo-600" />
          </button>
        </div>
      )}
    </div>
  );
};

type Props = {
  title: string;
  details: string[];
  onClick?: () => void;
  className?: string;
};
