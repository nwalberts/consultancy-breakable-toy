import React from "react";

import { useSquidList } from "../hooks/useSquidList";
import { SquidListTile } from "./SquidListTile";

import "../../style/squids/squidList.pcss";

export const SquidList = () => {
  const squidListQuery = useSquidList();
  const squids = squidListQuery.data || [];

  const squidTiles = squids.map((squid) => <SquidListTile key={squid.id} {...squid} />);

  // eslint-disable-next-line no-nested-ternary
  return squidListQuery.isLoading ? (
    "Loading..."
  ) : squidListQuery.isError ? (
    squidListQuery.error.message
  ) : (
    <div className="squid-list">
      {squidTiles}

      {squidListQuery.isFetching ? "Updating..." : null}
    </div>
  );
};
