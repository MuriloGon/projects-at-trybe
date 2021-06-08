import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import RatingForm from './RatingForm';
import { RootState } from '../../../store';
import RatingCard from './RatingCard';

const RatingsContainer = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 2fr;

  .rating-form {
    grid-column: 1;
    padding: 0.5rem;
    position: sticky;
    top: 55px;
    height: min-content;
  }

  .comments {
    grid-column: 2;
    padding: 0 0.5rem;
  }

  @media screen and (max-width: 1024px) {
    & {
      grid-template-columns: unset;
      grid-template-rows: auto auto;
    }

    .rating-form {
      grid-column: 1;
      position: static;
    }

    .comments { grid-column: 1; }
  }
`;

const Ratings: FC<{ id: string }> = ({ id }) => {
  const comments = useSelector((st: RootState) => st.comments.comments)
    .find(({ id: idStore }) => idStore === id);

  return (
    <RatingsContainer>
      <RatingForm className="rating-form" id={id} />
      <div className="comments">
        {comments !== undefined
          ? comments.comments.map(({
            date, email, rating, description,
          }) => (
            <RatingCard
              key={date}
              date={date}
              email={email}
              rating={rating}
              description={description}
            />
          ))
          : <h1 style={{ textAlign: 'center' }}>Nenhuma avaliação, por enquanto...</h1>}
      </div>
    </RatingsContainer>
  );
};

Ratings.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Ratings;
