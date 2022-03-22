import { useQuery, UseQueryResult } from "react-query";
import {AxiosError} from "axios"

import { ApiClient } from "../../backend/ApiClient";

interface Squid {
firstname: string
}

export const useSquidList = (): UseQueryResult<Squid[], AxiosError> => 
  useQuery(["squids"], () => ApiClient.get("/squids").then((response) => response.data.squids));

  const yes = true
  const hi = () => yes ? "a string" : 2