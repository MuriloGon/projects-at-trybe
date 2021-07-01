import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import loadReduxInitialState from './slices/loadReduxInitialState';
import MealsList from './Components/MealsList';
import DrinksList from './Components/DrinksList';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadReduxInitialState());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <MealsList />
      <DrinksList />
    </main>
  );

  // return (
  //   <div className="meals">
  //     <span className="logo">TRYBE</span>
  //     <object
  //       className="rocksGlass"
  //       type="image/svg+xml"
  //       data={ rockGlass }
  //     >
  //       Glass
  //     </object>
  //   </div>
  // );
}

export default App;
