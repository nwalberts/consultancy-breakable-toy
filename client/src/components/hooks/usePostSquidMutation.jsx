import { useMutation } from "react-query";

import { ApiClient } from "../../backend/ApiClient";

export const usePostSquidMutation = () =>
  useMutation((formData) =>
    ApiClient.post("/squids", {
      squid: { ...formData, experiencePoints: parseInt(formData.experiencePoints, 10) },
    }).then((resp) => resp.data)
  );
