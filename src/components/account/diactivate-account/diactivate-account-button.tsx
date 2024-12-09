'use client';

import { DocumentPlusIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

import { Dialog } from '@/components/ui';

export const CreateAddressButton = () => {
  return (
    <Dialog>
      <Dialog.Trigger className="w-full h-28 border-2 border-dashed rounded-lg hover:border-gray-300 hover:bg-gray-50">
        <DocumentPlusIcon className="w-6 h-6 mx-auto text-gray-500" />
        <p className="text-sm text-gray-500">Add new address</p>
      </Dialog.Trigger>
      <Dialog.Content>
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
              <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <Dialog.Title>Deactivate account</Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Are you sure you want to deactivate your account? All of your data will be
                  permanently removed. This action cannot be undone.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <Dialog.Close className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
            Deactivate
          </Dialog.Close>
          <Dialog.Close className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
            Cancel
          </Dialog.Close>
        </div>
      </Dialog.Content>
    </Dialog>
  );
};
