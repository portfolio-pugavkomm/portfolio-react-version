/**
 * Sleep helper
 * @param ms number of sleep ms
 */
export const sleep = (ms: number): Promise<unknown> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
