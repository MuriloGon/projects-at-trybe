import React, {
  FC, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { Category } from '../../helpers/mlInterfaces';
import { getAllCategories } from '../../services/api';
import { Categorylist, CategorylistItem } from './styles';
import { RootState } from '../../store';
import { isLoaded, isLoading, saveCategories } from '../../slices/categoriesSlice';
import { updateLastSelectedCategory } from '../../slices/searchParams';

interface Props {
  onSelect: (arg: string) => void;
}

const categoriesSelector = ({ categories: { categories: ct } }: RootState) => ct;
const loadingSelector = ({ categories: { isLoading: ld } }: RootState) => ld;
const lastSelCategory = ({ searchParams: { lastSelectedCategory: lsc } }: RootState) => lsc;

const CategoriesBar: FC<Props> = ({ onSelect }) => {
  const categories = useSelector<RootState>(categoriesSelector) as Array<Category>;
  const loading = useSelector<RootState>(loadingSelector) as boolean;
  const lastSelected = useSelector<RootState>(lastSelCategory) as string;

  const [selCategory, setSelCategory] = useState(lastSelected === '' ? '' : lastSelected);

  const dispatch = useDispatch();

  useEffect(() => {
    onSelect(selCategory);
    dispatch(updateLastSelectedCategory(selCategory));
  }, [selCategory, onSelect, dispatch]);

  useEffect(() => {
    dispatch(isLoading());
    getAllCategories()
      .then((data) => {
        dispatch(saveCategories(data));
        dispatch(isLoaded());
      })
      .catch(() => {});
  }, [dispatch]);

  return (
    <Categorylist>
      {loading ? <h1>Loading</h1> : categories.map(({ id, name }) => (
        <CategorylistItem key={id}>
          <input
            id={id}
            name="category"
            defaultChecked={id === selCategory}
            type="radio"
            onClick={() => { setSelCategory(id); }}
          />
          <label htmlFor={id}>{name}</label>
        </CategorylistItem>
      ))}
    </Categorylist>
  );
};

CategoriesBar.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default CategoriesBar;
