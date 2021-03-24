import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import LariContext from './Context';
import { headerSearch } from '../services';

const Provider = ({ children }) => {
  const history = useHistory();
  const redirectPages = (path) => {
    history.push(path);
  };
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);
  const setMeals = async (array) => {
    if (array.meals.length === 1) {
      const { idMeal } = array.meals[0];
      redirectPages(`/comidas/${idMeal}`);
    } else {
      setFood(array ? array.meals : []);
    }
  };

  const setDrinks = async (array) => {
    if (array.drinks.length === 1) {
      const { idDrink } = array.drinks[0];
      redirectPages(`/bebidas/${idDrink}`);
    } else {
      setDrink(array ? array.drinks : []);
    }
  };
  const handleHeaderSearch = async (search, type, typeAPI) => {
    const isDrinkApi = typeAPI === 'Bebidas';
    const results = await headerSearch(search, type, isDrinkApi);
    if (isDrinkApi) {
      await setDrinks(results);
    } else {
      await setMeals(results);
    }
  };

  const context = { handleHeaderSearch, food, drink };
  return (
    <div>
      <LariContext.Provider value={ context }>
        {children}
      </LariContext.Provider>
    </div>
  );
};
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
