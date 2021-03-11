import React from 'react';


const SavedSong = (props) => {
    const { song } = props;
    console.log(song)
    return (
        <div className='savedSong'>
            <div>
                <p>{song.title}</p>
            </div>
            <p className="artist">{song.artist}</p>
            <button className="delete" onClick={(e) => {
                props.removeSong(localStorage.getItem('id'), song.song_id)
            }}>X</button>
            </div>
    )
}
export default SavedSong;