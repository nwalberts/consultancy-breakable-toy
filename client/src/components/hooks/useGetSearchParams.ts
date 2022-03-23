export const useGetSearchParams = (searchParam: string, queryParamKey: string): number => {
  const pageQueryParam: string = searchParam || `${queryParamKey}=1`;
  return parseInt(new URLSearchParams(pageQueryParam).get(queryParamKey), 10);
};
