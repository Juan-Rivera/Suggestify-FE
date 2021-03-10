import React from 'react';
import axios from 'axios';

const SavedList = (props) => {

    const deleteSong = (song) => {
        // axios call to delete function will look like this:
        //         const undeletedSongs = props.songs.filter(song => {
        //             if (song.id !== res.data) {
        //                 return song
        //             }
        //         })
        //     })
    }

    return (
        <div className="savedSongs container">
            <h2 className="title">SAVED SONGS</h2>
            <div className="legend">
                <p>TITLE</p>
                <p>ARTIST</p>
                <div className="space"></div>
            </div>
            {props.songs === [] || props.songs === undefined ?
                <h2>Save songs to listen again and again</h2> :
                props.songs.map((song, id) => {
                    return (
                        <div className='savedSong'>
                            <div>
                                <p>{song.title}</p>
                            </div>
                            <p className="artist">{song.artist}</p>
                            <button className="delete" onClick={(e) => {
                                e.stopPropagation();
                                deleteSong(song)
                            }}>X</button>
                        </div>
                    )
                })}
        </div>
    )
}
export default SavedList;