import { Divider, Input } from "antd";
import React, { useState } from "react";

function Search({ filter }) {
	const [searchFood, setSearchFood] = useState("");

	const searchForFood = (e) => {
		setSearchFood(e.target.value);
		filter(e.target.value);
	};

	return (
		<>
			<Divider>Search</Divider>

			<label>Search</label>
			<Input
				value={searchFood}
				text="text"
				placeholder={"Enter search query"}
				onChange={searchForFood}
			/>
		</>
	);
}

export default Search;
