'use client';

import { type FC } from 'react';

import { ExclamationTriangleIcon, TrashIcon } from '@heroicons/react/24/outline';

import { Button, Dialog } from '@/components/ui';
import { type CustomerDetailsFragment } from '@/lib/vendyx/types';

import { useRemoveAddress } from './use-remove-address';

export const RemoveAddressButton: FC<Props> = ({ address }) => {
  return (
    <Dialog>
      <Dialog.Trigger>
        <TrashIcon className="h-6 w-6 text-red-500" />
      </Dialog.Trigger>
      <Dialog.Content>
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
              <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <Dialog.Title>Remove address {address.postalCode}</Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Are you sure you want to remove this address? This action cannot be undone.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 flex items-center justify-end gap-3">
          <Dialog.Close className="w-fit rounded-md bg-white px-6 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
            Cancel
          </Dialog.Close>
          <ActionButton id={address.id} />
        </div>
      </Dialog.Content>
    </Dialog>
  );
};

const ActionButton = ({ id }: { id: string }) => {
  const { isLoading, removeAddress } = useRemoveAddress();

  return (
    <Button onClick={() => removeAddress(id)} isLoading={isLoading}>
      Remove
    </Button>
  );
};

type Props = {
  address: CustomerDetailsFragment['addresses']['items'][0];
};
