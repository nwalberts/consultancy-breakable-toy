import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "react-query";

import { ApiClient } from "../../backend/ApiClient";
import { Squid } from "../../models/Squid.d";

interface ResponseInterface {
  data: { squid: Squid };
}

export const useSquidDetails = (id: string): UseQueryResult<Squid, AxiosError> =>
  useQuery(["squid", { id }], () =>
    ApiClient.get(`squids/${id}`).then((response: ResponseInterface) => response.data.squid, {
      keepPreviousData: true,
    })
  );
