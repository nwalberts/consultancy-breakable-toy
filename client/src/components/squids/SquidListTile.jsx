import React from "react";

import "../../style/squids/squidListTile.pcss";

export const SquidListTile = ({ name, species, experiencePoints, specialPower, imageUrl }) => (
  <div className="squid-list-tile">
    <div className="squid-attributes">
      <div className="squid-attribute">
        <h3 className="squid_attributes__name">{name}</h3>
      </div>
      <div className="squid-attribute">
        <span className="squid-attribute__key">Species:</span> {species}
      </div>

      <div className="squid-attribute">
        <span className="squid-attribute__key">Experience Points:</span> {experiencePoints}
      </div>
      <div className="squid-attribute">
        <span className="squid-attribute__key">Special Power:</span> {specialPower}
      </div>
    </div>
    <img className="squid-list-tile__image" src={imageUrl} alt={`${name} ${species}`} />
  </div>
);
