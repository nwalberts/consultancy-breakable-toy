import React from "react";

import "../../style/home/home.pcss";

export const Home: React.FC = () => (
  <div className="home page-body">
    <div className="home__box">
      <h1 className="home__header">
        Welcome to <span className="rainbow-text">Squid Central</span>
      </h1>
      <h2 className="home__sub-header">
        Home of the <span className="rainbow-text">dankest</span> of rubbery-folk
      </h2>
    </div>
  </div>
);
