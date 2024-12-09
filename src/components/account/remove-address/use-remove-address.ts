import { useEffect, useState, useTransition } from 'react';

import { useDialog } from '@/components/ui';
import { removeAddress } from '@/lib/address/actions';
import { notification } from '@/lib/shared/notification';

export const useRemoveAddress = () => {
  const { setIsOpen } = useDialog();

  const [isLoading, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setIsOpen(false);
    }

    return () => {
      if (isSuccess) {
        notification.success('Address removed');
      }
    };
  }, [isSuccess, isLoading]);

  const exec = (addressId: string) => {
    startTransition(async () => {
      await removeAddress(addressId);
      setIsSuccess(true);
    });
  };

  return {
    isLoading,
    removeAddress: exec
  };
};
