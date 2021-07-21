import React from 'react';
import { Link } from 'react-router-dom';
import { ExploreOptionsContainer, ExploreOption } from '../../../styles/exploreStyles';

function ExploreHome() {
  return (
    <ExploreOptionsContainer>
      <Link to="/explorar/bebidas" data-testid="explore-drinks">
        <ExploreOption>
          <ExploreOption.Label>
            Explorar Bebidas
          </ExploreOption.Label>
        </ExploreOption>
      </Link>
      <Link to="/explorar/comidas" data-testid="explore-food">
        <ExploreOption>
          <ExploreOption.Label>
            Explorar Comidas
          </ExploreOption.Label>
        </ExploreOption>
      </Link>
    </ExploreOptionsContainer>
  );
}

export default ExploreHome;
