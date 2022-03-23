import { useQuery, UseQueryResult } from "react-query";
import { AxiosError } from "axios";

import { ApiClient } from "../../backend/ApiClient";

// DRY and re-use for multiple interfaces
interface Squid {
  name: string;
  species: string;
  experiencePoints?: number;
  specialPower?: string;
  imageUrl?: string;
}

export const useSquidDetails = (id): UseQueryResult<Squid, AxiosError> =>
  useQuery(["squid", { id }], () =>
    ApiClient.get(`/squids/${id}`).then((response) => response.data.squid, {
      keepPreviousData: true,
    })
  );
