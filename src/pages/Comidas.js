import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardComida from '../components/CardComida';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import { getCategoryFoods, getFoodCategory } from '../services/API';

export default function Comidas() {
  const { data, foodRandom } = useContext(RecipesContext);
  const [card, setCard] = useState(false);
  const [listFoodCategories, setListFoodCategories] = useState([]);
  const [arrayOfFoodCategories, setArrayOfFoodCategories] = useState([]);
  const [showBtn, setShowBtn] = useState(null);
  const LIMITER = 12;
  const FIVE = 5;

  useEffect(() => {
    const getListCategories = async () => {
      const listFoodCategory = await getCategoryFoods();
      listFoodCategory.length = FIVE;
      setListFoodCategories(listFoodCategory);
    };
    getListCategories();
  }, []);

  useEffect(() => {
    foodRandom();
    setCard(true);
  }, []);

  const handleCLickFood = async ({ target: { value } }) => {
    if (showBtn === null) {
      const foodCategories = await getFoodCategory(value);
      setArrayOfFoodCategories(foodCategories);
      setCard(true);
      setShowBtn(value);
    } else if (showBtn === value) {
      const newFoodCategories = await foodRandom();
      setArrayOfFoodCategories(newFoodCategories);
      setCard(true);
      setShowBtn(null);
    }
  };

  useEffect(() => {
    setArrayOfFoodCategories(data.food);
    setCard(true);
  }, [data]);

  return (
    <div>
      <Header pageTitle="Comidas" />
      <div>
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ data.food }
        >
          All
        </button>
        {
          card && listFoodCategories.map((item) => (
            <button
              type="button"
              key={ item.strCategory }
              data-testid={ `${item.strCategory}-category-filter` }
              value={ item.strCategory }
              onClick={ (e) => handleCLickFood(e) }
            >
              {item.strCategory}
            </button>))
        }
      </div>
      <section>
        { card && arrayOfFoodCategories.map((f, i) => {
          const { idMeal } = f;
          return (i < LIMITER) && (
            <Link to={ `/comidas/${idMeal}` }>
              <CardComida
                key={ idMeal }
                comida={ f }
                id={ i }
              />
            </Link>
          );
        }) }
      </section>
      <Footer />
    </div>
  );
}
