import { useQuery, UseQueryResult } from "react-query";
import { AxiosError } from "axios";

import { ApiClient } from "../../backend/ApiClient";

interface SquidInterface {
  birthday: string;
  name: string;
  species: string;
  experiencePoints?: number;
  specialPower?: string;
  imageUrl?: string;
}

interface ResponseInterface {
  data: { squid: SquidInterface };
}

export const useSquidDetails = (id: string): UseQueryResult<SquidInterface, AxiosError> =>
  useQuery(["squid", { id }], () =>
    ApiClient.get(`squids/${id}`).then((response: ResponseInterface) => response.data.squid, {
      keepPreviousData: true,
    })
  );
