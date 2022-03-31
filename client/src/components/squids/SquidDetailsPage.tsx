import React from "react";

import { useParams } from "react-router-dom";
import { format, parseISO, getMonth, getDay } from "date-fns";

import { useSquidDetails } from "../hooks/useSquidDetails";
import { getZodiac } from "./services/getZodiac";

import "../../style/squids/squidDetailsPage.pcss";

export const SquidDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data: squid, isLoading, isError, error } = useSquidDetails(id);

  const zodiac: string = squid ? getZodiac(squid.birthday) : undefined;

  return isLoading ? (
    "Loading..."
  ) : isError ? (
    error.message
  ) : (
    <div className="squid-details-page">
      <h1 className="squid-details-page__title">
        Featuring <span className="rainbow-text">{squid.name}</span>
      </h1>

      <div className="squid-details">
        <p className="">Birthday: {format(parseISO(squid.birthday), " MMMM dd, yyyy ")}</p>

        <p className="">Zodiac: {zodiac}</p>

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
        <img
          className="squid-list-tile__image"
          src={squid.imageUrl || "https://icon-library.com/images/squid-icon/squid-icon-15.jpg"}
        />
      </div>
    </div>
  );
};
