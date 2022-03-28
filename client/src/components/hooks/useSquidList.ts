import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "react-query";

import { ApiClient } from "../../backend/ApiClient";
import { Squid } from "../../models/Squid.d";

interface useSquidResponseInterface {
  squidsData: Squid[];
  pages: number;
}
interface ResponseInterface {
  data: { squidsQueryResults: Squid[] };
}

export const useSquidList = (
  pageNumber: number
): UseQueryResult<useSquidResponseInterface, AxiosError> =>
  useQuery(["squids", { pageNumber }], () =>
    ApiClient.get(`/squids?pageNumber=${pageNumber}`).then(
      (response: ResponseInterface) => response.data.squidsQueryResults,
      {
        keepPreviousData: true,
      }
    )
  );
