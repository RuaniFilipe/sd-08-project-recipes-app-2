import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { actionFilteredFoods, actionFilteredDrinks } from '../redux/actions';
import {
  requestsForSearchHeaderFoods,
  requestsForSearchHeaderDrinks,
} from '../common/requestsForSearchHeader';

function SearchHeader({ page }) {
  const [searchText, setSearchText] = useState('');
  const [filterRadio, setFilterRadio] = useState('');
  const dispatch = useDispatch();

  const handleChangeInput = ({ target: { value } }) => {
    setSearchText(value);
  };

  const handleChangeRadio = ({ currentTarget: { value } }) => {
    setFilterRadio(value);
  };

  /* eslint-disable */
  const onClick = async (page) => {
    if (page === "Comidas") {
      const foods = await requestsForSearchHeaderFoods(searchText, filterRadio);
      if(foods){
        dispatch(actionFilteredFoods(foods));
      }
    } else if (page === "Bebidas") {
      const drinks = await requestsForSearchHeaderDrinks(
        searchText,
        filterRadio
      );
      if(drinks){
        dispatch(actionFilteredDrinks(drinks));
      }
    } else {
      console.log("DEFINA UMA PÁGINA");
    }
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Buscar Receita"
        data-testid="search-input"
        onChange={handleChangeInput}
      />
      <label htmlFor="ingredient">
        Ingrediente
        <input
          type="radio"
          name="search"
          data-testid="ingredient-search-radio"
          value="ingredient"
          onChange={handleChangeRadio}
        />
      </label>
      <label htmlFor="name">
        Nome
        <input
          type="radio"
          name="search"
          data-testid="name-search-radio"
          value="name"
          onChange={handleChangeRadio}
        />
      </label>
      <label htmlFor="first-letter">
        Primeira letra
        <input
          type="radio"
          name="search"
          data-testid="first-letter-search-radio"
          value="first-letter"
          onChange={handleChangeRadio}
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={() => onClick(page)}
      >
        Buscar
      </button>
    </form>
  );
}

SearchHeader.propTypes = {
  page: PropTypes.string.isRequired,
}

export default SearchHeader;
