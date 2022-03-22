export const useGetSearchParams = (searchParam, queryParamKey) => {
  const pageQueryParam = searchParam || `${queryParamKey}=1`;
  return parseInt(new URLSearchParams(pageQueryParam).get(queryParamKey), 10);
};
