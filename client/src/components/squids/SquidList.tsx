import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { useGetSearchParams } from "../hooks/useGetSearchParams";
import { useSquidList } from "../hooks/useSquidList";
import { SquidResetButton } from "./SquidResetButton";
import { SquidForm } from "./SquidForm";
import { SquidListTile } from "./SquidListTile";
import { SquidPagination } from "./SquidPagination";

import "../../style/squids/squidList.pcss";

export const SquidList = () => {
  const pageNumber = useGetSearchParams("pageNumber");

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
