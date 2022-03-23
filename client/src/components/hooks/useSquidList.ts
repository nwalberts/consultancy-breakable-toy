import { useQuery, UseQueryResult } from "react-query";
import { AxiosError } from "axios";

import { ApiClient } from "../../backend/ApiClient";
interface Squid {
  name: string;
  species: string;
  experiencePoints?: number;
  specialPower?: string;
  imageUrl?: string;
}

export const useSquidList = (pageNumber): UseQueryResult<Squid[], AxiosError> =>
  useQuery(["squids", { pageNumber }], () =>
    ApiClient.get(`/squids?pageNumber=${pageNumber}`).then(
      (response) => response.data.squidsQueryResults,
      {
        keepPreviousData: true,
      }
    )
  );
