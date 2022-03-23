import { useQuery, UseQueryResult } from "react-query";
import { AxiosError } from "axios";

import { ApiClient } from "../../backend/ApiClient";
interface SquidInterface {
  id: number;
  name: string;
  species: string;
  experiencePoints?: number;
  specialPower?: string;
  imageUrl?: string;
}

interface useSquidResponseInterface {
  squidsData: SquidInterface[];
  pages: number;
}
interface ResponseInterface {
  data: { squidsQueryResults: SquidInterface[] };
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
