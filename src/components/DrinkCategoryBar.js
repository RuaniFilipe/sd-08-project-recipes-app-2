import React, { useContext } from 'react';
import DrinkContext from '../context/bebidaContext/DrinkContext';

function DrinkCategoryBar() {
  const {
    values: { drinksCategory },
    functions: { handleFilteredDrinks },
  } = useContext(DrinkContext);
  const maxCategories = 5;

  return (
    <div>
      <button type="button" key="All">
        All
      </button>
      {drinksCategory.map(({ strCategory }, index) => {
        if (index >= maxCategories) {
          return '';
        }
        return (
          <button
            type="button"
            key={ strCategory }
            data-testid={ `${strCategory}-category-filter` }
            onClick={ handleFilteredDrinks } // setar no estado global o filtro que está sendo selecionado e utilizar ele para expor os drinks
          >
            {strCategory}
          </button>
        );
      })}
    </div>
  );
}

export default DrinkCategoryBar;
