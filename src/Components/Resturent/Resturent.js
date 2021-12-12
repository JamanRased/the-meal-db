import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Resturent.css';

const Resturent = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, [searchText]);

    const handleSerachFeiled = e=> {
        const searchTexValue = e.target.value;
        setSearchText(searchTexValue);
    }
    return (
        <div>
            <h1>The Meal DB</h1>
            <input onChange={handleSerachFeiled} type='text' placeholder='Search Your Meals'/>
            <button>Search</button>

            <div className="meals-container">
                {
                    meals?.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }
            </div>
        </div>
    );
};

export default Resturent;