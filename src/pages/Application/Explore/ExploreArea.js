import React, { useEffect, useState } from 'react';
import MealsList from '../../../Components/MealsList';
import { fetchAreas, fetchItemsByArea,
  fetchMealsOrDrinks } from '../../../services/apisMaps';

const TWELVE_ITEMS = 12;

function ExploreArea() {
  const [data, setData] = useState({
    dropdownData: undefined,
    area: 'All',
  });
  const [listData, setListData] = useState();

  useEffect(() => {
    (async () => {
      const dropdownData = await fetchAreas('meals')();
      const AllOptData = await fetchMealsOrDrinks('meals')(TWELVE_ITEMS);
      setListData(AllOptData);
      setData((st) => ({ ...st, dropdownData }));
    })();
  }, []);

  useEffect(() => {
    if (data.area !== 'All') {
      fetchItemsByArea('meals')(TWELVE_ITEMS, data.area)
        .then(setListData);
    } else fetchMealsOrDrinks('meals')(TWELVE_ITEMS).then(setListData);
  }, [data]);

  const { dropdownData, area } = data;
  if (
    listData === undefined
    || dropdownData === undefined) return <h1>Loading...</h1>;

  return (
    <>
      <h1>{area}</h1>
      <select
        data-testid="explore-by-area-dropdown"
        value={ area }
        onChange={ ({ target: { value } }) => {
          setData((st) => ({ ...st, area: value }));
        } }
      >
        <option
          data-testid="All-option"
          value=""
        >
          All
        </option>
        {
          dropdownData.map((datum) => (
            <option
              key={ datum.strArea }
              data-testid={ `${datum.strArea}-option` }
              value={ datum.strArea }
            >
              {datum.strArea}
            </option>))
        }
      </select>
      <div>
        <MealsList data={ listData } />
      </div>
    </>
  );
}

export default ExploreArea;
