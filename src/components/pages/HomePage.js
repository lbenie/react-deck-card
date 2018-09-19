import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => (
  <header className="masthead">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">Welcome to Log Me In Deck Challenge</h1>
            <div className="d-flex flex-column justify-content-center">
              <NavLink to='/game' exact={true} className="btn btn-outline btn-xl mx-auto">Begin</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export { HomePage };
