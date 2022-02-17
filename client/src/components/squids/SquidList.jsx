import React from "react";

import { useSquidList } from "../hooks/useSquidList";
import { SquidListTile } from "./SquidListTile";

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
    <div>
      <h1>All Hail the Rubbery Folk, in All of Their Tentacled Glory</h1>
      <div>{squidTiles}</div>

      {squidListQuery.isFetching ? "Updating..." : null}
    </div>
  );
};
