import React from "react";

import { useQueryClient } from "react-query";

interface SquidPaginationProps {
  setRefreshMessage: React.Dispatch<React.SetStateAction<boolean>>;
  setFormSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SquidResetButton: React.FC<SquidPaginationProps> = ({
  setRefreshMessage,
  setFormSuccess,
}) => {
  const queryClient = useQueryClient();

  const handleRefreshButtonClick: () => void = () => {
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
