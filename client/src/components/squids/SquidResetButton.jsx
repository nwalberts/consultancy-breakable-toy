import React from "react";

import { useQueryClient } from "react-query";

export const SquidResetButton = ({ setRefreshMessage, setFormSuccess }) => {
  const queryClient = useQueryClient();

  const handleRefreshButtonClick = () => {
    queryClient.invalidateQueries("squids");
    setRefreshMessage(false);
    setFormSuccess(false);
  };

  return (
    <div className="reset-squid-button">
      <p>Update the displayed squids?</p>
      <button type="button" className="button" onClick={handleRefreshButtonClick}>
        Refresh Squids
      </button>
    </div>
  );
};
