import { type ExternalToast, toast } from 'sonner';

/**
 * Notification module
 *
 * @example
 * import { notification } from '@lib/notification';
 *
 * // Display a success notification
 * notification.success('Hello World');
 *
 * // Display an error notification
 * notification.error('Hello World');
 *
 * // Dismiss a notification after 5 seconds
 * const id = notification.success('Hello World');
 *
 * setTimeout(() => {
 *  notification.dismiss(id);
 * }, 5000);
 *
 */
export const notification = {
  /**
   * Renders a check mark icon in front of the message.
   * @param msg message to display
   * @param description description to display
   * @param id notification id, useful if you want to update the state of one notification
   * @returns notification id
   */
  success: (msg: string, options?: NotificationOptions) => {
    return toast.success(msg, options);
  },

  /**
   * Renders an error icon in front of the message.
   * @param msg message to display
   * @returns notification id
   */
  error: (msg: string, options?: NotificationOptions) => {
    return toast.error(msg, options);
  },

  /**
   * Renders an info icon in front of the message.
   * @param msg message to display
   * @returns notification id
   */
  info: (msg: string, options?: NotificationOptions) => {
    return toast.info(msg, options);
  },

  /**
   * Renders a toast with a loading spinner. Useful when you want to handle various states yourself instead of using a promise toast.
   * @param msg message to display
   * @returns notification id
   */
  loading: (msg: string, options?: NotificationOptions) => {
    return toast.loading(msg, options);
  },

  /**
   *  Dismiss a notification by the notification id provided
   * @param id notification id returned from other notification methods
   *
   * @example
   * const id = notification.success('Hello World');
   *
   * // Dismiss the notification after 5 seconds
   * setTimeout(() => {
   *  notification.dismiss(id);
   * }, 5000);
   *
   */
  dismiss: (id: string) => {
    return toast.dismiss(id);
  }
};

type NotificationOptions = {
  id?: string | number;
  description?: string;
} & ExternalToast;
