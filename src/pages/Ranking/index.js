import React from 'react';
import { Link } from 'react-router-dom';
import LowerRanking from './LowerRanking';
import TopRanking from './TopRanking';

export default function Ranking() {
  return (
    <div>
      <h1 data-testid="ranking-title">Ranking</h1>
      {/* <TopRanking />
      <LowerRanking />
      <Link to="/login">
        <input
          value="Go Home"
          data-testid="btn-go-home"
          type="button"
        />
      </Link> */}
    </div>
  );
}
