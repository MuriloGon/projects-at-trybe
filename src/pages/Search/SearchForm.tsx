/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import { Form } from './styles';
import { RootState } from '../../store';
import { updateLastQuery } from '../../slices/searchParams';

const selecQuery = ({ searchParams: { lastQuery } }: RootState) => lastQuery;

const SearchForm: FC<{ className: string | undefined }> = ({ className = '' }) => {
  const lastQuery = useSelector(selecQuery);
  const [search, setSearch] = useState(lastQuery !== '' ? lastQuery : '');
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const update = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    dispatch(updateLastQuery(search));
    if (location.pathname !== '/search') {
      history.push('/search');
    }
  };

  return (
    <Form className={className}>
      <input
        value={search}
        onChange={({ target: { value } }) => { setSearch(value); }}
        type="text"
        placeholder="Procure por um produto"
      />
      <button id="search-btn" type="submit" value="" onClick={update} />
    </Form>
  );
};

SearchForm.propTypes = {
  className: PropTypes.string,
};

SearchForm.defaultProps = {
  className: '',
};

export default SearchForm;
