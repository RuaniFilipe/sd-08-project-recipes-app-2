export const SEARCH_BY_INGREDIENT = 'SEARCH_BY_INGREDIENT';

export const ingredientResult = (ingredient) => ({
  type: SEARCH_BY_INGREDIENT,
  payload: {
    ingredient,
  },
});

export function fetchIngredient(url) {
  return async (dispatch) => {
    const result = await fetch(url).then((response) => response.json());
    try {
      dispatch(ingredientResult(result));
    } catch (e) {
      console.log(e);
    }
  };
}
