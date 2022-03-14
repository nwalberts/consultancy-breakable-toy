import { useMutation } from "react-query";

import { ApiClient } from "../../backend/ApiClient";

export const usePostSquidMutation = (postSquidCallbacks) =>
  useMutation(
    (formData) =>
      ApiClient.post("/squids", {
        squid: { ...formData, experiencePoints: parseInt(formData.experiencePoints, 10) },
      }).then((resp) => resp.data),
    {
      onSettled: () => {
        postSquidCallbacks.setRefreshMessage(true);
        postSquidCallbacks.reset();
      },
      onError: () => {
        // eslint-disable-next-line no-console
        console.log("Something went wrong. Please refresh.");
      },
    }
  );
