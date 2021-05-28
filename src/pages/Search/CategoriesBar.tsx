import React, {
  FC, useEffect, useState,
} from 'react';
import { RadioGroup } from '@headlessui/react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { Category } from '../../helpers/mlInterfaces';
import { getAllCategories } from '../../services/api';
import { RootState } from '../../store';
import { isLoaded, isLoading, saveCategories } from '../../slices/categoriesSlice';
import { updateLastSelectedCategory } from '../../slices/searchParams';

const CheckIcon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" className="icon">
    <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
    <path
      d="M7 13l3 3 7-7"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
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
    <RadioGroup className="catContainer" value={selCategory} onChange={setSelCategory}>
      {loading ? <h1>Loading</h1>
        : (categories.map(({ id, name }) => (
          <RadioGroup.Option key={id} value={id}>
            {({ checked }) => (
              <div className={checked ? 'radio-btn radio-selected' : 'radio-btn'}>
                {name}
                {checked && <CheckIcon />}
              </div>
            )}
          </RadioGroup.Option>
        ))
        )}
    </RadioGroup>
  );
};

CategoriesBar.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default CategoriesBar;
