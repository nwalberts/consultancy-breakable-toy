import React from "react";

import { useParams } from "react-router-dom";

import { useSquidDetails } from "../hooks/useSquidDetails";

import "../../style/squids/squidDetailsPage.pcss";

export const SquidDetailsPage = () => {
  const { id } = useParams();
  debugger;

  const { data: squid, isLoading, isFetching, isSuccess, isError, error } = useSquidDetails(id);

  return isLoading ? (
    "Loading..."
  ) : isError ? (
    error.message
  ) : (
    <div className="squid-details-page">
      <h1 className="squid-details-page__title">Ink-redible Squid Details for {squid.name}</h1>

      <div className="squid-details">
        <p className="">Birthday: 1/1/11</p>

        <p className="">
          Species:
          <span className=""> {squid.species} </span>
        </p>

        <p className="">
          Experience Points:
          <span className=""> {squid.experiencePoints} </span>
        </p>

        <p className="">
          Special Power:
          <span className=""> {squid.specialPower} </span>
        </p>
      </div>
    </div>
  );
};
