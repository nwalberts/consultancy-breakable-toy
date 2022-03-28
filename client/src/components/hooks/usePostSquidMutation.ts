import { AxiosError } from "axios";
import { UseMutationResult, useMutation } from "react-query";

import { ApiClient } from "../../backend/ApiClient";
import { SquidFormDataInterface } from "../../models/SquidFormDataInterface.d";

export const usePostSquidMutation = (): UseMutationResult<Record<string, never>, AxiosError> =>
  useMutation<Record<string, never>, AxiosError, SquidFormDataInterface>((formData) =>
    ApiClient.post("/squids", {
      squid: { ...formData, experiencePoints: parseInt(formData.experiencePoints, 10) },
    }).then((resp) => resp.data)
  );
