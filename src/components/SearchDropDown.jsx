import React from 'react';

function SearchDropDown() {
  return (
    <div className="search-container">
      <input
        data-testid="search-input"
        className="form-control"
        style={ { width: 340, margin: 'auto', marginTop: 10 } }
      />
      <div className="radio-container">
        <label className="radio-button" htmlFor="ingredient-search-radio">
          <input
            name="radio"
            id="ingredient-search-radio"
            type="radio"
            data-testid="ingredient-search-radio"
          />
          <div className="my-radio-button" />
          Ingrediente
        </label>
        <label className="radio-button" htmlFor="name-search-radio">
          <input
            name="radio"
            id="name-search-radio"
            type="radio"
            data-testid="name-search-radio"
          />
          <div className="my-radio-button" />
          Nome
        </label>
        <label className="radio-button" htmlFor="first-letter-search-radio">
          <input
            name="radio"
            id="first-letter-search-radio"
            type="radio"
            data-testid="first-letter-search-radio"
          />
          <div className="my-radio-button" />
          Primeira letra
        </label>
      </div>
      <button
        data-testid="exec-search-btn"
        type="button"
        className="btn btn-primary"
      >
        BUSCAR
      </button>
    </div>
  );
}

export default SearchDropDown;
