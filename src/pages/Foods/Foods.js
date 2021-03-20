import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from '../../component/Header';
import Context from '../../context/Context';
import getApi from '../../services/apiRequests';

export default function Foods() {
  const { searchParams } = useContext(Context);
  const [meals, setMeals] = useState([]);
  const history = useHistory();

  const { searchInput, selectedParameter } = searchParams;

  useEffect(() => {
    switch (selectedParameter) {
    case 'ingredient':
      getApi(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`, 'meals')
        .then((recipes) => setMeals(recipes));
      break;
    case 'name':
      getApi(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`, 'meals')
        .then((recipes) => setMeals(recipes));
      break;
    case 'first-letter':
      getApi(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`, 'meals')
        .then((recipes) => setMeals(recipes));
      break;
    default:
      break;
    }
  }, [searchInput, selectedParameter]);

  useEffect(() => {
    if (meals.length === 1) {
      history.push(`/comidas/${meals[0].idMeal}`);
    }
  }, [history, meals]);

  return (
    <Header pageTitle="Comidas" />
  );
}
