import { useQuery } from "react-query";

import { ApiClient } from "../../backend/ApiClient";

export const useSquidList = (pageNumber) =>
  useQuery(["squids", { pageNumber }], () =>
    ApiClient.get(`/squids?pageNumber=${pageNumber}`).then(
      (response) => response.data.squidsQueryResults,
      {
        keepPreviousData: true,
      }
    )
  );
