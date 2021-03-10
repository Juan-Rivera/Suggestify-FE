import React, { useEffect } from 'react';
import axios from 'axios';

import SavedList from './SavedList'

import { connect } from 'react-redux';
import { setSaveList } from '../../../redux/actions/actions';

const SavedSongs = (props) => {
    useEffect(() => {
        //axios call to get users saved songs from backend, will then set saved songs 
        axios
            .get(`https://suggestify-backend.herokuapp.com/api/songs/save/${props.user.id}`)
            .then(res => {
                props.setSaveList(res.data)
            })
    })
    return(
        <div className='saved-songs'>
            <SavedList savedSongs={props.savedSongs}/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        savedSongs: state.savedSongs,
        user: state.user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setSaveList: (songs) => {
            dispatch(setSaveList(songs))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (SavedSongs);