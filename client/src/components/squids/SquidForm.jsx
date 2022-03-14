/* eslint-disable no-nested-ternary */
import React, { useState } from "react";

import { useMutation, queryCache } from "react-query";

import { ApiClient } from "../../backend/ApiClient";

import "../../style/squids/squidForm.pcss";

import { useForm } from "react-hook-form";

import { FormError } from "../common/FormError";
import { usePostSquidMutation } from "../hooks/usePostSquidMutation";

export const SquidForm = ({ setRefreshMessage, setFormSuccess, formSuccess }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      experiencePoints: 0,
    },
  });
  const postSquidMutation = usePostSquidMutation({ setRefreshMessage, reset });

  const onSubmit = async (data) => {
    postSquidMutation.mutate(data);
    setFormSuccess(true);
  };

  const specialPowerSelectOptions = [
    { value: null, label: "" },
    { value: "ink", label: "ink" },
    { value: "camouflage", label: "camouflage" },
    { value: "bioluminescence", label: "bioluminescence" },
    { value: "flight", label: "flight" },
  ];

  const optionsForSpecialPowerSelect = specialPowerSelectOptions.map(
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
              name="name"
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
              name="species"
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
              name="experiencePoints"
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
              name="specialPower"
              id="specialPower"
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
              name="imageUrl"
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
