import { UseMutationResult, useMutation } from "react-query";
import { AxiosError } from "axios";

import { ApiClient } from "../../backend/ApiClient";

interface FormDataInterface {
  name: string;
  species: string;
  experiencePoints?: string;
  specialPower?: string;
  imageUrl?: string;
}

export const usePostSquidMutation = (): UseMutationResult<{}, AxiosError> =>
  useMutation<Response, AxiosError, FormDataInterface, () => void>((formData) =>
    ApiClient.post("/squids", {
      squid: { ...formData, experiencePoints: parseInt(formData.experiencePoints, 10) },
    }).then((resp) => resp.data)
  );
