import React, { useState } from "react";
import { RouteComponentProps, useParams } from "react-router-dom";

import { useGetSearchParams } from "../hooks/useGetSearchParams";
import { useSquidList } from "../hooks/useSquidList";
import { SquidResetButton } from "./SquidResetButton";
import { SquidForm } from "./SquidForm";
import { SquidListTile } from "./SquidListTile";
import { SquidPagination } from "./SquidPagination";

import "../../style/squids/squidList.pcss";

// need to import https://stackoverflow.com/questions/48138111/what-typescript-type-should-i-use-to-reference-the-match-object-in-my-props

// Im pretty lost here on typing for React router I gotta admint. Below is an attempt (commented out) but I couldnt get it to work

// interface LocationParams {
//   search: string;
// }

// interface SquidListProps extends RouteComponentProps<LocationParams> {}

export const SquidList: React.FC<RouteComponentProps> = ({ location: { search } }) => {
  const pageNumber = useGetSearchParams(search, "pageNumber");

  const { data, isLoading, isFetching, isError, error } = useSquidList(pageNumber);

  const squids = data?.squidsData || [];
  const pages = data?.pages || 1;

  const squidTiles = squids.map((squid) => <SquidListTile key={squid.id} {...squid} />);

  const [refreshMessage, setRefreshMessage] = useState<boolean>(false);

  const [formSuccess, setFormSuccess] = useState<boolean>(false);

  // eslint-disable-next-line no-nested-ternary
  return isLoading ? (
    "Loading..."
  ) : isError ? (
    error.message
  ) : (
    <div className="squid-page page-body">
      <SquidForm
        setRefreshMessage={setRefreshMessage}
        setFormSuccess={setFormSuccess}
        formSuccess={formSuccess}
      />

      {refreshMessage ? (
        <SquidResetButton setRefreshMessage={setRefreshMessage} setFormSuccess={setFormSuccess} />
      ) : null}

      <div className="squid-list"> {squidTiles} </div>
      {isFetching ? "Updating..." : null}
      <SquidPagination currentPageNumber={pageNumber} numberOfPages={pages} />
    </div>
  );
};
