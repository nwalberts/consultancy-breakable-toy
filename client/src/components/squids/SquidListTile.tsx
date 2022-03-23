import React from "react";

import { Link } from "react-router-dom";
import "../../style/squids/squidListTile.pcss";

interface SquidListTileProps {
  id: number;
  name: string;
  species: string;
  experiencePoints?: number;
  specialPower?: string;
  imageUrl?: string;
}

export const SquidListTile: React.FC<SquidListTileProps> = ({
  id,
  name,
  species,
  experiencePoints,
  specialPower,
  imageUrl,
}) => (
  <div className="squid-list-tile">
    <div className="squid-attributes">
      <div className="squid-attribute">
        <h3 className="squid-attributes__name">
          <Link to={`/squids/${id}`}> {name}</Link>
        </h3>
      </div>
      <div className="squid-attribute">
        <span className="squid-attribute__key">Species:</span> {species}
      </div>

      <div className="squid-attribute">
        <span className="squid-attribute__key">Experience Points:</span> {experiencePoints}
      </div>
      <div className="squid-attribute">
        <span className="squid-attribute__key">Special Power:</span> {specialPower || "None"}
      </div>
    </div>
    <Link to={`/squids/${id}`}>
      <img
        className="squid-list-tile__image"
        src={imageUrl || "https://icon-library.com/images/squid-icon/squid-icon-15.jpg"}
        alt={`${name} ${species}`}
      />
    </Link>
  </div>
);
