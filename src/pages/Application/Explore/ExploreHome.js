import React from 'react';
import { Link } from 'react-router-dom';

function ExploreHome() {
  return (
    <>
      <Link to="/explorar/bebidas" data-testid="explore-drinks">
        Explorar Bebidas
      </Link>
      <Link to="/explorar/comidas" data-testid="explore-food">

        Explorar Comidas
      </Link>
    </>
  );
}

export default ExploreHome;
