import React from "react";
import Song from "./song";

import "./songcards.css";

const SongsList = props => {
	return (
		<div>
			<div className="cardContainer">
				{props.songs.map((song, id) => (
					<Song key={id} song={song} />
				))}
			</div>
		</div>
	);
};
export default SongsList;