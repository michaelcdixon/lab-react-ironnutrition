import React, { useState } from "react";
import { Input } from "antd";

function AddFoodForm({ newFood }) {
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [calories, setCalories] = useState("");
	const [servings, setServings] = useState("");
	const [visible, setVisible] = useState(true);

	const handleNameInput = (e) => setName(e.target.value);
	const handleImageInput = (e) => setImage(e.target.value);
	const handleCaloriesInput = (e) => setCalories(e.target.value);
	const handleServingsInput = (e) => setServings(e.target.value);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const addingFood = {
			name,
			image,
			calories,
			servings,
		};
		newFood(addingFood);

		setName("");
		setImage("");
		setCalories("");
		setServings("");
		console.log("Submitting form", addingFood);
	};

	const toggleVisibleForm = () => {
		setVisible(!visible);
	};

	if (visible) {
		return (
			<>
				<h4>Add Food</h4>
				<form onSubmit={handleFormSubmit}>
					<label>Name</label>
					<Input
						value={name}
						type="text"
						onChange={handleNameInput}
					/>

					<label>Image</label>
					<Input
						value={image}
						type="text"
						onChange={handleImageInput}
						alt={image}
					/>

					<label>Calories</label>
					<Input
						value={calories}
						type="text"
						onChange={handleCaloriesInput}
					/>

					<label>Servings</label>
					<Input
						value={servings}
						type="text"
						onChange={handleServingsInput}
					/>

					<button onClick={toggleVisibleForm}>
						{visible ? "Hide Form" : "Show Form"}
					</button>
					<button type="submit">Add Food</button>
				</form>
			</>
		);
	}

	return (
		<>
			<button onClick={toggleVisibleForm}>
				{visible ? "Hide Form" : "Show Form"}
			</button>
		</>
	);
}

export default AddFoodForm;
