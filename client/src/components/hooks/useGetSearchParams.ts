import { useLocation } from "react-router-dom";

export const useGetSearchParams = (queryParamKey: string): number => {
  const { search } = useLocation();
  const pageQueryParam = search || `${queryParamKey}=1`;
  return parseInt(new URLSearchParams(pageQueryParam).get(queryParamKey), 10);
};
