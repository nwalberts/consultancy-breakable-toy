/* eslint-disable no-nested-ternary */
import React, { useState } from "react";

import { useMutation, queryCache } from "react-query";

import { ApiClient } from "../../backend/ApiClient";

import "../../style/squids/squidForm.pcss";

import { useForm } from "react-hook-form";

import { FormError } from "../common/FormError";
import { usePostSquidMutation } from "../hooks/usePostSquidMutation";
import { SquidFormDataInterface } from "../../models/SquidFormDataInterface";

interface SquidFormProps {
  setRefreshMessage: React.Dispatch<React.SetStateAction<boolean>>;
  setFormSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  formSuccess: boolean;
}

export const SquidForm: React.FC<SquidFormProps> = ({
  setRefreshMessage,
  setFormSuccess,
  formSuccess,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<SquidFormDataInterface>({
    defaultValues: {
      experiencePoints: "0",
    },
  });

  const postSquidMutation = usePostSquidMutation();

  const onSubmit = async (data: SquidFormDataInterface) => {
    postSquidMutation.mutate(data, {
      onSettled: () => {
        setRefreshMessage(true);
        reset();
      },
      onError: () => {
        // eslint-disable-next-line no-console
        console.log("Something went wrong. Please refresh.");
      },
    });
    setFormSuccess(true);
  };

  const specialPowers: string[] = ["ink", "camouflage", "bioluminescence", "flight"];
  const specialPowerSelectOptions: { value: string | null; label: string }[] = [
    { value: null, label: "" },
    ...specialPowers.map((power) => ({
      value: power,
      label: power,
    })),
  ];

  const optionsForSpecialPowerSelect: JSX.Element[] = specialPowerSelectOptions.map(
    (specialPowerOptionData, index) => (
      <option key={index} value={specialPowerOptionData.value}>
        {specialPowerOptionData.label}
      </option>
    )
  );

  const buttonText = postSquidMutation.isLoading
    ? "Recruiting..."
    : postSquidMutation.isError
    ? "Error!"
    : formSuccess
    ? "Recruited!"
    : "Recruit Squid";

  return (
    <div className="squid-form">
      <form className="squid-form__main" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">
            <input
              type="text"
              className="input-area__field"
              placeholder="Squid Name"
              {...register("name", {
                required: "Make sure your squid friend's name is provided!",
              })}
            />
          </label>
          <FormError errors={errors} name="name" />
        </div>
        <div>
          <label htmlFor="species">
            <input
              type="text"
              className="input-area__field"
              placeholder="Species"
              {...register("species", {
                required: "Add your squid's species",
              })}
            />
          </label>
          <FormError errors={errors} name="species" />
        </div>

        <div>
          <label htmlFor="experiencePoints">
            <input
              type="number"
              className="input-area__field"
              min="0"
              placeholder="Experience Points"
              {...register("experiencePoints")}
            />
          </label>
        </div>
        <div>
          <label htmlFor="specialPower">
            <select
              {...register("specialPower")}
              className="input-area__field"
              placeholder="Special Power"
            >
              {optionsForSpecialPowerSelect}
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="imageUrl">
            <input
              type="text"
              className="input-area__field"
              placeholder="Image URL"
              {...register("imageUrl")}
            />
          </label>
        </div>
        <div>
          <input className="button button--pink" type="submit" value={buttonText} />
        </div>
      </form>
    </div>
  );
};
