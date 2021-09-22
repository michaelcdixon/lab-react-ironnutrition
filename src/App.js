import logo from "./logo.svg";
import "./App.css";
import foodsJSON from "./foods.json";
import React, { useState } from "react";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";
import { Input } from "antd";

function App() {
	const [foods, setFoods] = useState(foodsJSON);
	const [filteredFoods, setFilteredFoods] = useState(foodsJSON);

	const AddFood = (newFood) => {
		setFoods([...foods, newFood]);
	};

	const deleteFood = (name) => {
		setFoods(foods.filter((food) => food.name !== name));
	};

	const filter = (keyword) => {
		setFilteredFoods(foods.filter((food) => food.name.includes(keyword)));
	};

	return (
		<div className="App">
			<div>
				<AddFoodForm newFood={AddFood} />
				<Search filter={filter} />
			</div>
			{filteredFoods.map((food) => {
				return (
					<div>
						<FoodBox foods={food} deleteItemOfFood={deleteFood} />
					</div>
				);
			})}
		</div>
	);
}

export default App;
