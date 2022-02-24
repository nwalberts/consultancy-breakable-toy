import { useQuery } from "react-query";

import { ApiClient } from "../../backend/ApiClient";

export const useSquidList = () =>
  useQuery(["squids"], () => ApiClient.get("/squids").then((response) => response.data.squids), {
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
