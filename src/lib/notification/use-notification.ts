import { useEffect } from 'react';

import { notification } from './notification';

/**
 * Hook to show a notification message based on the type.
 * Useful when you want to show a notification returned from a server action
 *
 * @example
 * ```tsx
 * const [{ message }, action] = useFormState(someAction, FORM_INITIAL_STATE);
 *
 * useNotification(message, type);
 *
 * return (
 *    // ...
 * )
 * ```
 */
export const useNotification = (message: string, type: keyof typeof notification) => {
  useEffect(() => {
    if (message) {
      notification[type](message);
    }
  }, [message, type]);
};
