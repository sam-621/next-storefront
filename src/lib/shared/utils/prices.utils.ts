/**
 * Utility function to convert a price in cents to dollars, this is useful for displaying prices in the frontend
 * @param price Price in cents
 * @returns Price in dollars
 *
 * @example
 * ```ts
 * const priceInCents = 1099;
 * const priceInDollars = convertToDollar(priceInCents);
 * // priceInDollars = 10.99
 * ```
 */
export const convertToDollar = (price: number) => {
  return price / 100;
};

/**
 * Utility function to format a price in cents to a string with the currency symbol
 * @param price Price in cents
 * @returns Price formatted
 *
 * @example
 * ```ts
 * const priceInCents = 1099;
 * const priceFormatted = formatPrice(priceInCents);
 * // priceFormatted = $10.99
 * ```
 */
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(convertToDollar(price));
};
