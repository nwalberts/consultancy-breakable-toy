import React from "react";

import { Link } from "react-router-dom";

import "../../style/layouts/topBar.pcss";

export const TopBar = () => (
  <div className="top-bar">
    <ul className="menu">
      <li className="menu__app-name">
        <Link to="/">Squid Central</Link>
      </li>
      <div className="menu__right">
        <li className="menu__item">
          <Link to="/squids">Squids</Link>
        </li>
      </div>
    </ul>
  </div>
);
