import React from 'react';
import SavedSong from './SavedSong';

const SavedList = (props) => {
    const { savedSongs } = props;
    console.log(props)
    return (
        <div className="savedSongs container">
            <h2 className="title">SAVED SONGS</h2>
            <div className="legend">
                <p>TITLE</p>
                <p>ARTIST</p>
                <div className="space"></div>
            </div>
            {savedSongs !== undefined ? savedSongs.map((song, id) => {
                    return (
                        <SavedSong key={id} song={song} removeSong={props.removeSong}/>
                    ) 
                    
                }) : <h3>Save songs to listen again and again</h3>}
        </div>
    )
}
export default SavedList;