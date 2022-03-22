import React, { useState } from "react";

import { useSquidList } from "../hooks/useSquidList";
import { SquidListTile } from "./SquidListTile";

import "../../style/squids/squidList.pcss"; 

export const SquidList: React.FC = () => {
  const [numberOfCats, setNumberOfCats] = useState<number>(null)
  const { data, isLoading, isFetching, isError, error } = useSquidList();
  const squids = data || [];

  const squidTiles = squids.map((squid) => <SquidListTile key={squid.id} {...squid} />);

  let foo = "bar";

  // eslint-disable-next-line no-nested-ternary
  return isLoading ? (
    "Loading..."
  ) : isError ? (
    error.message
  ) : (
    <div className="squid-page">
      <div className="squid-list">{squidTiles}</div>

      {isFetching ? "Updating..." : null}
    </div>
  );
};
