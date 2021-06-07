import React, { FC } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RatingStars from 'react-stars';
import { Comment } from '../../../helpers/Comments';

const RatingCardContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-flow: nowrap column;
  height: 200px;
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 0 0 6px 0 rgba(0 0 0 / 15%);
  background: hsl(0, 0%, 98%);
  margin-bottom: 1rem;
  border-radius: 8px;

  .footer-rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .text-rating {
    flex: 1;
    padding-block: 0.5rem;
  }

  .user-rating {
    padding-block: 0.5rem;
  }
`;

const RatingCard: FC<Comment> = ({
  date, email, rating, description,
}) => (
  <RatingCardContainer>
    <div className="footer-rating">
      <span>{new Date(date).toLocaleString('pt-BR')}</span>
      <RatingStars size={25} edit={false} value={rating} />
    </div>
    <div className="user-rating">
      <span>
        <b>Usuário:</b>
        {' '}
        {email}
      </span>
    </div>
    <div className="text-rating">
      <span>
        <b>Avaliação:</b>
        {' '}
        {description}
      </span>
    </div>
  </RatingCardContainer>
);

RatingCard.propTypes = {
  date: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string,
};

RatingCard.defaultProps = {
  description: '',
};

export default RatingCard;
