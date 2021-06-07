import React, { FC, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactStarts from 'react-stars';
import { useDispatch } from 'react-redux';
import { addComment } from '../../../slices/commentsSlice';

const RatingsContainer = styled.section`
  --font-size: 1.1rem;
  & > * {
    margin-bottom: 1rem;
  }

  .basic-info {
    display: flex;
    align-items: center;
    box-sizing: border-box;

    label {
      flex: 1;
      width: 100%
    }

    input {
      border-radius: 4px;
      border: none;
      padding: 0.5rem;
      box-sizing: border-box;
      font-size: var(--font-size);
      height: 40px;
      width: 100%;

      &:focus {
        outline: none;
      }
    }

    & > * {
      margin-right: 1rem;
    }
  }

  .description {
    width: 100%;
    resize: vertical;
    box-sizing: border-box;
    min-height: 200px;
    padding: 1rem;
    font-size: var(--font-size);
    border: none;
    border-radius: 6px;

    &:focus {
      outline: none;
    }
  }

  .post-btn {
    background: hsl(120deg, 40%, 50%);
    width: 200px;
    height: 35px;
    color: white;
    border-radius: 6px;
    font-weight: 600;
    font-size: 1.2rem;
    border: none;
    transition: background-color 150ms linear;
    cursor: pointer;

    &:hover {
      background-color: hsl(120deg, 40%, 40%);
    }

    &:active {
      background-color: hsl(120deg, 30%, 50%);
    }
  }
`;

const RatingForm: FC<{ id: string, className: string }> = ({ id, className }) => {
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const clearForm = () => {
    setRating(0);
    setEmail('');
    setDescription('');
  };

  return (
    <RatingsContainer className={className}>
      <div className="basic-info">
        <label htmlFor="email-input">
          <input
            placeholder="Email"
            id="email-input"
            type="text"
            value={email}
            onChange={({ target: { value } }) => { setEmail(value); }}
          />
        </label>
        <ReactStarts
          size={35}
          onChange={setRating}
          value={rating}
        />
        <span>
          (
          {rating.toFixed(1)}
          {' '}
          / 5)
        </span>
      </div>

      <textarea
        className="description"
        placeholder="Mensagem (Opcional)"
        value={description}
        onChange={({ target: { value } }) => { setDescription(value); }}
      />

      <button
        type="button"
        className="post-btn"
        onClick={() => {
          dispatch(addComment({
            id,
            comment: {
              date: new Date().getTime(),
              email,
              description,
              rating,
            },
          }));
          clearForm();
        }}
      >
        Avaliar
      </button>
    </RatingsContainer>
  );
};

RatingForm.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default RatingForm;
