/**
 * Parse order code to get the raw order code
 *
 * @example
 * const orderCode = '#0001'
 * const rawOrderCode = parseOrderCode(orderCode)
 * console.log(rawOrderCode) // 1
 */
export const parseOrderCode = (code: string) => {
  // if 0, or is NaN, return undefined, useful for filters, if there is not valid code, don't filter by it
  return Number(code.replace('#', '')) || undefined;
};
