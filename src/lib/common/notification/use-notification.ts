'use client';

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
export const useNotification = (
  message: string,
  type: keyof typeof notification,
  /**
   * When you are working with server actions and forms, showing a notification could be difficult because only will show the first time the form is submitted and return a message.
   * After that, the message will be the same until the form is submitted again and useEffect will not trigger.
   * To solve this, you can pass a loading dependency to the hook to show the notification only when the form is submitted.
   */
  loadingDep?: boolean
) => {
  useEffect(() => {
    if (message && !loadingDep) {
      notification[type](message);
    }
  }, [message, type, loadingDep]);
};
