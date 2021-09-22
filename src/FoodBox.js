import { Card, Col, Divider, Button } from "antd";
import React from "react";

function FoodBox({ foods, deleteItemOfFood }) {
	return (
		<Col>
			<Card
				title={foods.name}
				style={{ width: 230, height: 300, margin: 10 }}
			>
				<img src={foods.image} height={60} alt={foods.name} />
				<p>Calories: {foods.calories}</p>
				<p>Servings: {foods.servings}</p>
				<p>
					<b>
						Total Calories: {foods.calories} * {foods.servings}{" "}
					</b>{" "}
					kcal
				</p>
				<Button
					type="primary"
					onClick={() => deleteItemOfFood(foods.name)}
				>
					{" "}
					Delete{" "}
				</Button>
			</Card>
		</Col>
	);
}

export default FoodBox;
