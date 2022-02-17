import { useQuery } from "react-query";

import { ApiClient } from "../../backend/ApiClient.js";

export const useSquidList = () =>
  useQuery(["squids"], () => ApiClient.get("/squids").then((response) => response.data.squids), {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
