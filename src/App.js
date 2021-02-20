import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import CharactersGrid from "./components/characters/CharactersGrid";
import SearchField from "./components/SearchField";

const App = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [query, setQuery] = useState("");

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(
				`https://www.breakingbadapi.com/api/characters?name=${query}`
			);
			console.log(result.data);

			setItems(result.data);
			setIsLoading(false);
		};

		fetchItems();
	}, [query]);
	return (
		<div className='container'>
			<Header />
			<SearchField getQuery={(q) => setQuery(q)} />
			<CharactersGrid isLoading={isLoading} items={items} />
		</div>
	);
};

export default App;
