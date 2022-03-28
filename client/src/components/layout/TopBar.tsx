import React from "react";

import { Link } from "react-router-dom";

import "../../style/layouts/topBar.pcss";
import "../common/styles/button.pcss";

export const TopBar: React.FC = () => (
  <div className="top-bar">
    <ul className="menu">
      <div className="menu__left">
        <li className="menu__title">Squid Central</li>
        <li className="menu__logo">
          <Link to="/">
            <i className="fa-brands fa-octopus-deploy" />
          </Link>
        </li>
      </div>

      <div className="menu__right">
        <li className="menu__item button">
          <Link to="/squids">Squids</Link>
        </li>
      </div>
    </ul>
  </div>
);
