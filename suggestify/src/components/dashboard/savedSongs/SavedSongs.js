import React, { useEffect } from 'react';

import SavedList from './SavedList'

import { connect } from 'react-redux';
import { fetchSongs, removeSong } from '../../../store/actions/SSActions';


const SavedSongs = (props) => {
    useEffect(() => {
        //axios call to get users saved songs from backend, will then set saved songs 
        props.fetchSongs(localStorage.getItem('id'))
    }, [])
    return(
        <div className='saved-songs'>
            <SavedList savedSongs={props.savedSongs} removeSong={props.removeSong}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        savedSongs: state.SSreducer.savedSongs,
    }
}

export default connect(mapStateToProps, { fetchSongs, removeSong }) (SavedSongs);