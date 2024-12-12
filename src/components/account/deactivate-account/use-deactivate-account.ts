import { useEffect, useState, useTransition } from 'react';

import { useDialog } from '@/components/ui';
import { disableCustomer } from '@/lib/customer/actions';
import { notification } from '@/lib/shared/notification';

export const useDeactivateAccount = () => {
  const { setIsOpen } = useDialog();
  const [isLoading, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setIsOpen(false);
    }

    return () => {
      if (!isLoading && isSuccess) {
        notification.info('Your account has been deactivated');
      }
    };
  }, [isSuccess, isLoading]);

  const exec = () => {
    startTransition(async () => {
      const result = await disableCustomer();

      if (result.error) {
        notification.error(result.error);
        return;
      }

      setIsSuccess(true);
    });
  };

  return {
    isLoading,
    deactivateAccount: exec
  };
};
