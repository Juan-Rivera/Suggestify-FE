import React from "react";
import Song from "./Song";


const SongsList = (props) => {
	const { searchList } = props;
	console.log(props)
	return (
		<div>
			<div className="cardContainer">
				{searchList !== undefined ? searchList.map((song, id) => (
					<Song key={id} song={song} handleSave={props.handleSave} />
				)) : <h3> Search for Suggestions!</h3>}
			</div>
		</div>
	);
};

export default SongsList;