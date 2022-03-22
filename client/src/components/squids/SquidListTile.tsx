import { string } from "prop-types";
import React from "react";

import "../../style/squids/squidTile.pcss";

interface Props {
  name: string;
  species: string;
  experiencePoints?: number;
  specialPower?: string;
  imageUrl?: string;
}

// interface Person {
//   firstName: string;
//   lastName: string;
// }

// interface Props {
//   text: string;
//   ok: boolean;
//   i: number;
//   fn: (name: string) => string;
//   obj: {
//     f1: string;
//   };
//   person: Person
// }

export const SquidListTile: React.FC<Props> = ({ name }) => <h3 className="squid-tile">{name}</h3>;
