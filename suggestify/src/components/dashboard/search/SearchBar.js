import React, { useState } from "react";
import axios from 'axios';

const initialSearch = {
	artist: "",
	song: "",
};

const SearchBar = (props) => {
	console.log(props)
	const [search, setSearch] = useState(initialSearch);

	const handleChange = e => {
		setSearch({
			...search,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		// use redux dispatches here
		e.preventDefault()
		axios.post(`https://spotify-3-ds.herokuapp.com/search/${search.artist}/${search.song}`)
			.then(res => {
				props.handleSearch(res.data)
			})
	};
	return (
		<div>
			<form className="form searchBar">
				<input
					type="text"
					name="artist"
					placeholder="Artist Name"
					value={search.artist}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="song"
					placeholder="Track Name"
					value={search.song}
					onChange={handleChange}
				/>
				<button onClick={handleSubmit}> SEARCH </button>
			</form>
		</div>
	);
};
export default SearchBar;